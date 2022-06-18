/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  }
}
const withTM = require('next-transpile-modules')(['@devlaunchers/ideas']); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
// module.exports = nextConfig

