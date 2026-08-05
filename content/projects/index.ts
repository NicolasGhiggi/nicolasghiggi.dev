import type { ComponentType } from "react"

const projectContent: Record<string, () => Promise<{ default: ComponentType }>> = {
    "sitemap-generator": () => import("@/content/projects/sitemap-generator.mdx"),
}

export default projectContent