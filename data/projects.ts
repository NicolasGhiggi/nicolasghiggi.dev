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
        name: "Cleanlife GmbH Websites",
        slug: "cleanlife-gmbh-websites",
        description: "Redesigned and developed two websites for Cleanlife GmbH: a public-facing company website and a dedicated customer portal.",
        image: "/images/projects/cleanlife-gmbh-websites/cover.png",
        technologies: [
            "Laravel",
            "Livewire",
            "MySQL",
            "JavaScript",
        ],
        createdAt: new Date("2026-08-08"),
        link: "https://cleanlife.ch/",
        featured: true, 
    }
]

export default PROJECTS