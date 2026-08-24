import { base } from "framer-motion/client"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Two root layouts — (main) and (demo) — so the 404 lives in
  // app/global-not-found.tsx, which renders its own <html>/<body>.
  experimental: {
    globalNotFound: true,
  },
  trailingSlash: true,
  // assetPrefix: './',
  basePath: '',
}

module.exports = nextConfig