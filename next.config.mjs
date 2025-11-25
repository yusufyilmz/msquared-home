/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "scontent-mad2-1.cdninstagram.com"
      },
      {
        protocol: "https",
        hostname: "scontent-mad1-1.cdninstagram.com"
      }
    ]
  }
};

export default nextConfig;
