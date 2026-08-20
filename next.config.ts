// next.config.ts
import type { NextConfig } from "next"
// import createNextIntlPlugin from "next-intl/plugin"
import createMDX from '@next/mdx'

// const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [
            "remark-frontmatter",
            "remark-mdx-frontmatter",
        ],
    },
})

const nextConfig: NextConfig = {
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "opengraph.githubassets.com",
            },
            {
                protocol: "https",
                hostname: "cleanlife.ch",
            },
            {
                protocol: "https",
                hostname: "cdn.simpleicons.org",
            },
            {
                protocol: "https",
                hostname: "shadcnexamples.com",
            },
        ],
    },
    pageExtensions: ["ts", "tsx", "mdx"],
}

export default withMDX(nextConfig);