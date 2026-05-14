/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nordgruen.com" }],
        destination: "https://nordgruen.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
