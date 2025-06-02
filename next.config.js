// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org'],
  },
};

module.exports = {
  env: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
};