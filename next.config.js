/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // 외부 이미지 삽입을 위한 설정
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/deleted_forever',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/products/deleted_temp',
        destination: '/products',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/items/:slug',
        destination: '/products/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
