import type { CreateClientConfig } from './client/client.gen';

const resolveBackendUrl = (): string => {
  const envUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  if (envUrl) return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
  if (typeof window !== 'undefined') return window.location.origin;
  return 'https://api.cyfrosec.com';
};

export const createClientConfig: CreateClientConfig = (config) => ({
  ...config,
  baseUrl: resolveBackendUrl(),
});
