'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Script from 'next/script';
import { X, Loader2, Shield } from 'lucide-react';
import { submitDemoLead } from '@/lib/submitDemoLead';
import { useDemoAccess } from '@/hooks/useDemoAccess';
import { TURNSTILE_SITE_KEY } from '@/lib/turnstile';

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: 'Public Sector' | 'Enterprise' | '';
  message: string;
};

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  interest: '',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DemoGateModal({ open, onClose, onSuccess }: Props) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { grantAccess } = useDemoAccess();

  // Cloudflare Turnstile — bot check. Same protection as the contact form,
  // required because this modal posts to the same Apps Script endpoint.
  const honeypotRef = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');

  // Render the widget when the modal opens; remove it when it closes so a
  // fresh challenge appears on the next open. (The modal unmounts on close.)
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    const render = () => {
      if (cancelled || !turnstileRef.current || !window.turnstile || turnstileWidgetId.current !== null) return;
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        callback: (token: string) => setTurnstileToken(token),
        'error-callback': () => setTurnstileToken(''),
        'expired-callback': () => setTurnstileToken(''),
      });
    };
    let poll: ReturnType<typeof setInterval> | null = null;
    if (window.turnstile) render();
    else poll = setInterval(() => { if (window.turnstile) { if (poll) clearInterval(poll); render(); } }, 200);
    return () => {
      cancelled = true;
      if (poll) clearInterval(poll);
      if (window.turnstile && turnstileWidgetId.current !== null) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
      turnstileWidgetId.current = null;
      setTurnstileToken('');
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const validate = useCallback(() => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = 'Required';
    if (!form.lastName.trim()) next.lastName = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!EMAIL_RE.test(form.email)) next.email = 'Invalid email';
    if (!form.company.trim()) next.company = 'Required';
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot — hidden field only bots fill. Silently ignore.
    if (honeypotRef.current?.value) return;

    // Require a Turnstile token; the Apps Script verifies it server-side.
    if (!turnstileToken) {
      setStatus('error');
      return;
    }

    setSubmitting(true);
    setStatus('idle');
    const result = await submitDemoLead({
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      company: form.company.trim(),
      interest: form.interest,
      message: form.message.trim() || undefined,
      turnstileToken,
      honeypot: honeypotRef.current?.value || '',
    });
    setSubmitting(false);
    if (result.ok) {
      grantAccess({
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        interest: form.interest || 'demo',
      });
      setStatus('success');
      setTimeout(() => {
        onSuccess();
        setForm(INITIAL);
      }, 800);
    } else {
      setStatus('error');
    }
  };

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-gate-title"
    >
      {/* Turnstile script travels with the modal so the widget works in any
          layout — including the /demo route group, which has its own layout
          that doesn't load site-wide scripts. next/script dedupes by src. */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
      />
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
      />

      {/* Modal card */}
      <div className="relative w-full max-w-[min(32rem,calc(100vw-2rem))] max-h-[calc(100vh-2rem)] overflow-y-auto bg-bg border border-border-strong rounded-lg shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-fg-muted hover:text-fg-strong transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6">
          <h2
            id="demo-gate-title"
            className="text-xl sm:text-2xl font-bold tracking-tight mb-1.5"
          >
            Access the Demo
          </h2>
          <p className="text-sm text-fg-muted mb-4">
            Share a few details and we&apos;ll tailor the experience.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field
                label="First name"
                required
                value={form.firstName}
                onChange={(v) => set('firstName', v)}
                error={errors.firstName}
              />
              <Field
                label="Last name"
                required
                value={form.lastName}
                onChange={(v) => set('lastName', v)}
                error={errors.lastName}
              />
            </div>

            <Field
              label="Work email"
              required
              type="email"
              value={form.email}
              onChange={(v) => set('email', v)}
              error={errors.email}
            />

            <Field
              label="Company"
              required
              value={form.company}
              onChange={(v) => set('company', v)}
              error={errors.company}
            />

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-fg-muted mb-2">
                Interest
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Public Sector', 'Enterprise'] as const).map((option) => {
                  const active = form.interest === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => set('interest', option)}
                      className={`px-4 py-2.5 text-sm font-medium border-2 transition-all ${
                        active
                          ? 'border-fg-strong bg-fg-strong text-fg-invert'
                          : 'border-border text-fg hover:border-border-strong'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-wide uppercase text-fg-muted mb-2">
                Message <span className="normal-case text-fg-faint">(optional)</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set('message', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 bg-transparent border border-border rounded-none text-sm text-fg placeholder-fg-faint focus:outline-none focus:border-border-active resize-none"
                placeholder="What are you hoping to see?"
              />
            </div>

            {/* Honeypot — invisible to humans, off-screen. Bots fill it. */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden">
              <label>
                Website
                <input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
              </label>
            </div>

            {/* Cloudflare Turnstile bot-check widget */}
            <div ref={turnstileRef} className="min-h-[65px]" />

            {status === 'error' && (
              <p className="text-sm text-danger">
                {turnstileToken
                  ? 'Something went wrong. Try again or contact info@nainovate.ai'
                  : 'Please complete the verification above, then try again.'}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || status === 'success'}
              className="w-full mt-2 px-6 py-3.5 text-sm font-semibold tracking-wide border-2 border-fg-strong text-fg hover:bg-fg-strong hover:text-fg-invert transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting…
                </>
              ) : status === 'success' ? (
                'Access granted — loading demo…'
              ) : (
                'SUBMIT & CONTINUE'
              )}
            </button>

            <p className="text-[11px] text-fg-muted flex items-center gap-1.5 justify-center">
              <Shield className="w-3 h-3" />
              Your details help us tailor the demo experience.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium tracking-wide uppercase text-fg-muted mb-2">
        {label} {required && <span className="text-fg-strong">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-3 py-2 bg-transparent border rounded-none text-sm text-fg placeholder-fg-faint focus:outline-none focus:border-border-active transition-colors ${
          error ? 'border-danger' : 'border-border'
        }`}
      />
      {error && <p className="text-[11px] text-danger mt-1">{error}</p>}
    </div>
  );
}
