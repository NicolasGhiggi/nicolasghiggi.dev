import path from "path"
import { readFile } from "fs/promises"
import { notFound } from "next/navigation"

import PROJECTS from "@/data/projects"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function MarkdownPage({ params }: Props) {
    const { slug } = await params

    const project = PROJECTS.find((project) => project.slug === slug)

    if (!project) {
        notFound()
    }

    const filePath = path.join(
        process.cwd(),
        "content",
        "projects",
        `${slug}.mdx`
    )

    let content: string

    try {
        content = await readFile(filePath, "utf8")
    } catch {
        notFound()
    }

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-24">
            <div className="mb-8">
                <p className="text-sm text-muted-foreground">
                    Markdown source
                </p>

                <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                    {project.name}
                </h1>
            </div>

            <pre className="overflow-x-auto rounded-xl border bg-muted/30 p-6 text-sm leading-relaxed">
                <code>{content}</code>
            </pre>
        </main>
    )
}