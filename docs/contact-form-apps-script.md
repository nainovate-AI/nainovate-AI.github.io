# Lead-form bot protection — Google Apps Script side

**Two** forms post to this same Apps Script endpoint / Sheet1: the **contact
form** and the **demo-gate modal** (shown on "Watch Demo" / demo CTAs). Both
now send two extra fields — `turnstileToken` and `honeypot` — and the single
`doPost` gate below protects both at once.

The script is the Martin Hawksey "form → sheet + email" script
(`html contact form sendEmail`). These changes **preserve all of it** — they
only add a bot gate at the top of `doPost`, add one helper function, and keep
the token out of the sheet columns. Everything else is byte-for-byte the same.

## The three changes

1. **New** `verifyTurnstile()` function.
2. **`doPost`** — two checks at the very top of the `try`, *before*
   `record_data(e)` and the email, so bots are never recorded or emailed.
3. **`getDataColumns`** — add `turnstileToken` to the excluded columns (so the
   long token isn't written into the sheet).

## Step 1 — store the secret (never in code)

1. Apps Script editor → **Project Settings** (gear) → **Script Properties** →
   **Add script property**.
2. Name: `TURNSTILE_SECRET`  ·  Value: *(paste the Turnstile secret key)*  ·
   **Save**.

> The secret was shared over chat during setup — consider rotating it in the
> Cloudflare dashboard afterward and updating this property.

## Step 2 — add the verification helper

Paste anywhere in `script.gs`:

```javascript
// Verify a Cloudflare Turnstile token server-side. Secret lives in Script
// Properties (TURNSTILE_SECRET), never in this file.
function verifyTurnstile(token) {
  if (!token) return false;
  var secret = PropertiesService.getScriptProperties().getProperty('TURNSTILE_SECRET');
  if (!secret) throw new Error('TURNSTILE_SECRET is not set in Script Properties');
  var res = UrlFetchApp.fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    { method: 'post', payload: { secret: secret, response: token }, muteHttpExceptions: true }
  );
  return JSON.parse(res.getContentText()).success === true;
}
```

## Step 3 — add the two checks at the top of `doPost`

Insert these **first**, right after `try {` and before `Logger.log(e);` /
`record_data(e)`.

**Important:** the checks are scoped to `formGoogleSheetName === 'Sheet1'` —
i.e. only the **contact form and demo popup**. The report-download forms
(Implementation Index / Readiness Report) write to other tabs and don't send a
Turnstile token, so they must be **skipped** or they'd be blocked.

```javascript
function doPost(e) {
  try {
    // --- BOT CHECKS (added) — only for the contact + demo forms (Sheet1).
    //     Report-download forms use other tabs and send no token, so we skip
    //     them here to avoid blocking them. Everything below is unchanged. ---
    if (e.parameter.formGoogleSheetName === 'Sheet1') {
      // Honeypot: hidden field only bots fill. Drop silently ("success" so the
      // bot gets no signal), without recording or emailing.
      if (e.parameter.honeypot) {
        return ContentService
          .createTextOutput(JSON.stringify({ result: 'success', note: 'ignored' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
      // Turnstile: server-side human check. Reject if it fails.
      if (!verifyTurnstile(e.parameter.turnstileToken)) {
        return ContentService
          .createTextOutput(JSON.stringify({ result: 'error', error: 'failed_verification' }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    // --- end bot checks ---

    Logger.log(e); // the Google Script version of console.log
    record_data(e);
    // ... rest of doPost unchanged ...
```

Leave the entire rest of `doPost` exactly as it is. Both the contact form and
the demo popup send `formGoogleSheetName = 'Sheet1'`, so both are covered; the
report forms (different tabs) pass straight through.

## Step 4 — keep the token out of the sheet

In `getDataColumns`, add `turnstileToken` to the excluded list (next to the
`honeypot` that's already there):

```javascript
function getDataColumns(data) {
  return Object.keys(data).filter(function(column) {
    return !(column === 'formDataNameOrder'
      || column === 'formGoogleSheetName'
      || column === 'formGoogleSendEmail'
      || column === 'honeypot'
      || column === 'turnstileToken');
  });
}
```

## Step 5 — re-deploy (KEEP the same URL)

Apps Script changes don't take effect on the `/exec` URL until you deploy a
new version. Deploy so the URL **stays the same**:

1. **Deploy → Manage deployments**
2. Click the **pencil (edit)** on the existing Web app deployment — do **not**
   create a new one (that changes the URL).
3. **Version → New version → Deploy.**

## Step 6 — verify

- **Real submission:** submit the contact form and the demo gate on the site —
  both should still land in Sheet1 and email, exactly as before.
- **Bot simulation:** POST to `/exec` with no `turnstileToken` → returns
  `failed_verification`, nothing saved.

## Field-name contract (must match the website — don't rename)

| Field | Meaning | Checked in |
|-------|---------|-----------|
| `turnstileToken` | Cloudflare Turnstile token | `verifyTurnstile` |
| `honeypot` | hidden trap field | `doPost` top |

Website side: `lib/turnstile.ts` (site key), `components/pages/ContactPageClient.tsx`
and `components/ui/DemoGateModal.tsx` (widgets), `lib/submitDemoLead.ts` (demo POST).
