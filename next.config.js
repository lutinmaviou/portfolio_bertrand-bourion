/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

/* (module.exports = nextConfig),
  {
    images: {
      domains: ['res.cloudinary.com'],
    },
  }; */

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
};
