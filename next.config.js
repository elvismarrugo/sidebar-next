/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   env: {
//     customKey: 'customValue',
//   },
//   basePath: '/dist',
//   compress: true,
//   async redirects() {
//     return [
//       {
//         source: '/hola',
//         destination: 'https://elvix.dev',
//         permanent: true,
//       }
//     ]
//   }
// }

// module.exports = nextConfig
