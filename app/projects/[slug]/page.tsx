import type { Metadata } from "next"
import { notFound } from "next/navigation"

import PROJECTS from "@/data/projects"
import { ProjectHeader } from "@/components/projects/project-header"

type Props = {
    params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
    params,
}: Props): Promise<Metadata> => {
    const { slug } = await params
    const project = PROJECTS.find((project) => project.slug === slug)

    if (!project) {
        return {
            title: "Project not found",
        }
    }

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: project.name,
            description: project.description,
            images: [{ url: project.image }],
        },
    }
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }))
}

export const dynamicParams = false

const Page = async ({ params }: Props) => {
    const { slug } = await params

    const projectIndex = PROJECTS.findIndex(
        (project) => project.slug === slug
    )

    if (projectIndex === -1) {
        notFound()
    }

    const project = PROJECTS[projectIndex]

    const previous =
        projectIndex > 0
            ? PROJECTS[projectIndex - 1]
            : undefined

    const next =
        projectIndex < PROJECTS.length - 1
            ? PROJECTS[projectIndex + 1]
            : undefined

    const { default: Project } = await import(
        `@/content/projects/${project.slug}.mdx`
    )

    return (
        <main className="mx-auto flex w-full max-w-3xl flex-col px-4 py-24 typeset typeset-project">
            <ProjectHeader
                slug={project.slug}
                previous={
                    previous
                        ? {
                              slug: previous.slug,
                              name: previous.name,
                          }
                        : undefined
                }
                next={
                    next
                        ? {
                              slug: next.slug,
                              name: next.name,
                          }
                        : undefined
                }
            />

            <Project />
        </main>
    )
}

export default Page