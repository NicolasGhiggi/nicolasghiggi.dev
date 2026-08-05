import { Projects } from "@/types/project"

const PROJECTS: Projects = [
    {
        name: "Sitemap Generator",
        slug: "sitemap-generator",
        description: "Python script that crawls a website and automatically generates XML sitemaps.",
        image: "https://opengraph.githubassets.com/a12d5d/NicolasGhiggi/sitemap-generator",
        technologies: [
            "Python",
            "Requests",
            "BeautifulSoup4",
            "XML",
        ],
        createdAt: new Date("2026-07-06"),
        github: "https://github.com/NicolasGhiggi/sitemap-generator",
        featured: true,
    },
    {
        name: "Personal Portfolio",
        slug: "personal-portfolio",
        description: "My personal portfolio, now you are in that portfolio.",
        image: "https://opengraph.githubassets.com/a12d5d/NicolasGhiggi/nicolasghiggi.dev",
        technologies: ["NextJS", "Typescript"],
        createdAt: new Date("2026-08-04"),
    }
]

export default PROJECTS