/**
 * Report Download API Integration
 * Handles form submissions to Google Apps Script backend
 */

// Types
export interface ReportFormData {
  name: string;
  email: string;
  company: string;
  role?: string;
  region?: string;
  report_type: 'implementation-index' | 'readiness-report';
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

export interface DownloadResponse {
  result: 'success' | 'error';
  download_url?: string;
  error?: string;
  message?: string;
}

// Configuration
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxBjgNg00cOizYr-C8FqtVB_AE8ErPxlrdOkh-X3NYXZps2z1Tl6ScBLdK_byJo6Fj0/exec';

/**
 * Submit report download request
 */
export async function submitReportDownload(
  formData: ReportFormData
): Promise<DownloadResponse> {
  try {
    // Add UTM parameters and referrer if available
    const enrichedData = {
      ...formData,
      utm_source: getUTMParam('utm_source') || 'direct',
      utm_medium: getUTMParam('utm_medium') || 'website',
      utm_campaign: getUTMParam('utm_campaign') || 'report_download',
      referrer: typeof window !== 'undefined' ? document.referrer : '',
    };

    // Convert to URL-encoded form data
    const formBody = Object.entries(enrichedData)
      .filter(([, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');

    // Submit to Google Apps Script
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
      mode: 'no-cors', // Apps Script requires no-cors mode
    });

    // Note: With no-cors mode, we can't read the response body
    // We assume success if no error is thrown
    
    return {
      result: 'success',
      message: 'Report request submitted successfully. Check your email for the download link.',
    };

  } catch (error) {
    console.error('Report download error:', error);
    return {
      result: 'error',
      error: error instanceof Error ? error.message : 'Failed to submit request',
      message: 'Something went wrong. Please try again or contact support.',
    };
  }
}

/**
 * Track download event in Google Analytics
 */
export function trackDownloadEvent(reportType: string) {
  if (typeof window === 'undefined') return;

  type GtagFn = (command: string, eventName: string, params?: Record<string, unknown>) => void;
  const win = window as unknown as { gtag?: GtagFn };

  if (typeof win.gtag === 'function') {
    win.gtag('event', 'report_download', {
      event_category: 'Downloads',
      event_label: reportType,
      value: 1,
    });
  }
}

/**
 * Helper: Get UTM parameter from URL
 */
function getUTMParam(param: string): string | null {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate form data
 */
export function validateFormData(
  data: Partial<ReportFormData>,
  reportType: 'implementation-index' | 'readiness-report'
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields for all reports
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email address is required');
  }

  if (!data.company || data.company.trim().length === 0) {
    errors.push('Company name is required');
  }

  // Additional required fields for Readiness Report
  if (reportType === 'readiness-report') {
    if (!data.role || data.role === '') {
      errors.push('Role selection is required');
    }

    if (!data.region || data.region === '') {
      errors.push('Region selection is required');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}