import type { NextConfig } from "next";

const securityHeaders = [
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  { key: "Permissions-Policy", value: "camera=(), geolocation=(), microphone=()" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
];

// Base path for project-page hosting (e.g. GitHub Pages at /<repo>/).
// Set NEXT_PUBLIC_BASE_PATH at build time; leave empty for root/custom-domain hosting.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compiler: process.env.NODE_ENV === 'production'
    ? { removeConsole: { exclude: ['error', 'warn'] } }
    : undefined,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
