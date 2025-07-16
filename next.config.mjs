/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.gravatar.com",
      },
      {
        protocol: "https",
        hostname: "**.discordapp.com",
      },
      {
        protocol: "https",
        hostname: "**.twitter.com",
      },
      {
        protocol: "https",
        hostname: "**.youtube.com",
      },
      {
        protocol: "https",
        hostname: "**.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "**.spotifycdn.com",
      },
      {
        protocol: "https",
        hostname: "**.medium.com",
      },
      {
        protocol: "https",
        hostname: "**.dev.to",
      },
      {
        protocol: "https",
        hostname: "**.hashnode.dev",
      },
      {
        protocol: "https",
        hostname: "**.res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "**.sanity.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "**.prismic.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.prismic.io",
      },
      {
        protocol: "https",
        hostname: "**.datocms-assets.com",
      },
      {
        protocol: "https",
        hostname: "**.storyblok.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.storyblok.com",
      },
      {
        protocol: "https",
        hostname: "**.contentful.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.contentful.com",
      },
      {
        protocol: "https",
        hostname: "**.strapi.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.strapi.io",
      },
      {
        protocol: "https",
        hostname: "**.directus.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.directus.io",
      },
      {
        protocol: "https",
        hostname: "**.supabase.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.supabase.io",
      },
      {
        protocol: "https",
        hostname: "**.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.appwrite.io",
      },
      {
        protocol: "https",
        hostname: "**.firebaseapp.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.firebaseapp.com",
      },
      {
        protocol: "https",
        hostname: "**.imgix.net",
      },
      {
        protocol: "https",
        hostname: "**.shopify.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "**.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.bigcommerce.com",
      },
      {
        protocol: "https",
        hostname: "**.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.wixstatic.com",
      },
      {
        protocol: "https",
        hostname: "**.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "**.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.wordpress.com",
      },
      {
        protocol: "https",
        hostname: "**.ghost.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.ghost.io",
      },
      {
        protocol: "https",
        hostname: "**.webflow.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.webflow.io",
      },
      {
        protocol: "https",
        hostname: "**.framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.cdn.framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "**.builder.io",
      },
      {
        protocol: "https",
        hostname: "**.cdn.builder.io",
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
