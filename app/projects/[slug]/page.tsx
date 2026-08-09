import { FC } from "react"
import type { Metadata } from 'next'
import { notFound } from "next/navigation"

import PROJECTS from "@/data/projects"

type Props = {
    params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)

    if (!project) {
        return { title: "Project not found" }
    }

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [{ url: project.image }]
        }
    }
}

export function generateStaticParams() {
    return PROJECTS.map(project => ({ slug: project.slug }))
}

export const dynamicParams = false

const Page: FC<Props> = async ({ params }) => {
    const { slug } = await params
    const project = PROJECTS.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    const { default: Project } = await import(`@/content/projects/${project.slug}.mdx`)

    return (
        <main className="w-full max-w-3xl mx-auto py-24 typeset typeset-project">
            <Project />
        </main>
    )
}

export default Page