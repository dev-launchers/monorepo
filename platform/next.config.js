/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['ideas']); // pass the modules you would like to see transpiled

module.exports = withTM(nextConfig);
// module.exports = nextConfig

