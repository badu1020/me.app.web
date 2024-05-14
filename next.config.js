/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/me.app.web",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
