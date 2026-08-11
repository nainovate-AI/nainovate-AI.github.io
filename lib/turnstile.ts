// Cloudflare Turnstile site key — public by design, safe in the client bundle.
// The matching SECRET key lives ONLY in the Google Apps Script (server side),
// never in this repo. See docs/contact-form-apps-script.md.
//
// Used by both lead forms that post to the shared Apps Script endpoint:
// the contact form (ContactPageClient) and the demo gate (DemoGateModal).
export const TURNSTILE_SITE_KEY = '0x4AAAAAAELQc4DLnTTbKr4a';
