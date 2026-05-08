import type { CreateClientConfig } from './client/client.gen';

const PRODUCTION_BACKEND_URL = 'https://app.cyfrosec.com';

const trimTrailingSlash = (url: string): string => (url.endsWith('/') ? url.slice(0, -1) : url);

const isLocalhostUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ['localhost', '127.0.0.1', '0.0.0.0'].includes(parsed.hostname);
  } catch {
    return false;
  }
};

const isLocalPage = (): boolean => {
  if (typeof window === 'undefined') return false;
  return ['localhost', '127.0.0.1', '0.0.0.0'].includes(window.location.hostname);
};

const resolveBackendUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  if (envUrl) {
    const normalizedUrl = trimTrailingSlash(envUrl);
    if (!isLocalhostUrl(normalizedUrl) || isLocalPage()) return normalizedUrl;
  }

  if (isLocalPage()) return window.location.origin;
  return PRODUCTION_BACKEND_URL;
};

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: resolveBackendUrl(),
});
