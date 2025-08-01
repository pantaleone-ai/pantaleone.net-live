import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  // Force dark mode
  darkMode: 'class',
  defaultTheme: 'dark',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pantaleone-net.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
  },
  
  // Add redirects here
  async redirects() {
    return [
      {
        source: '/p/:path*',           // The path you want to redirect from
        destination: '/',      // The path you want to redirect to
        permanent: true,              // true for 301 (permanent), false for 307 (temporary)
      },
      {
        source: '/tag/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      {
        source: '/shot-on/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      {
        source: '/digital-asset-nft-tag/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      {
        source: '/grid/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/:path*',        // Using path parameters
        destination: 'https://www.pantaleone.net/rss.xml',
        permanent: true,
      },
      {
        source: '/sets/:path*',        // Using path parameters
        destination: '/',
        permanent: true,
      },
      // Add more redirect rules as needed
    ]
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },  
})
 
export default withMDX(nextConfig)