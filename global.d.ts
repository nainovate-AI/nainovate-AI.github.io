export {};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
      getResponse: (id?: string) => string | undefined;
      remove: (id?: string) => void;
    };
  }
}