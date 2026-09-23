const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env;

function linkedInUrl(value = '') {
  if (!value.trim()) return '';
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'https:' || url.username || url.password || !/^(www\.)?linkedin\.com$/.test(url.hostname)) return '';
    return url.href;
  } catch { return ''; }
}

export const publicContact = {
  linkedinUrl: linkedInUrl(env['VITE_LINKEDIN_URL']),
  email: /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(env['VITE_CONTACT_EMAIL'] ?? '') ? env['VITE_CONTACT_EMAIL']! : '',
};

