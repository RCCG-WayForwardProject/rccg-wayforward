/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "drive.google.com",
    //     port: "",
    //     pathname: "/file/**",
    //   },
    // ],
  },
};

module.exports = nextConfig;
