const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyNhq4W7yQo7TinavOG9KlIkd1-j-zjf310CdErCRTsw_pinsfIQNrIy4Wuy0JXV46k/exec';

export type DemoLead = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: 'Public Sector' | 'Enterprise' | '';
  message?: string;
};

export async function submitDemoLead(lead: DemoLead): Promise<{ ok: boolean }> {
  try {
    const form = new FormData();
    form.append('formGoogleSheetName', 'Sheet1');
    form.append('formGoogleSendEmail', 'info@nainovate.ai');
    form.append('name', `${lead.firstName} ${lead.lastName}`.trim());
    form.append('email', lead.email);
    form.append('company', lead.company);
    form.append('interest', lead.interest || 'demo');
    form.append(
      'message',
      lead.message
        ? `[DEMO-GATE] ${lead.message}`
        : `[DEMO-GATE] User accessed interactive demo`,
    );
    form.append(
      'formDataNameOrder',
      JSON.stringify(['name', 'email', 'company', 'interest', 'message']),
    );

    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: form,
    });

    return { ok: true };
  } catch (err) {
    console.error('submitDemoLead failed', err);
    return { ok: false };
  }
}
