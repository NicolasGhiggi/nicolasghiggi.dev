import type { MetadataRoute } from "next"

import PROJECTS from "@/data/projects"
import POSTS from "@/data/posts"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ||
        "https://nicolasghiggi-dev.vercel.app"

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },

        ...PROJECTS.map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: project.createdAt,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),

        ...POSTS.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.date,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ]
}