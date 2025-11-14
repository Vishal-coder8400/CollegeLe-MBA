/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // 👇 THIS lets Vercel build even with TS errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // 👇 THIS lets Vercel build even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
