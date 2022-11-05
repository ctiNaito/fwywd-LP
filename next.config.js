/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

/*module.exports = nextConfig*/
module.exports = {
  basePath: process.env.GITHUB_ACTIONS && "/fwywd-LP",
  trailingSlash: true,
};