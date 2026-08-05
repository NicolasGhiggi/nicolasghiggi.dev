import type { Metadata } from 'next';
import Link from "next/link"
import { H1 } from "@/components/ui/heading"
import { ProjectCard } from "@/components/card/project-card"

import PROJECTS from "@/data/projects"
import { USER } from "@/data/app"

export const metadata: Metadata = {
    title: "Projects",
    description: "Explore my software development projects, including web applications, scripts, and open-source projects built with modern technologies.",
    keywords: [
        "Nicolas Ghiggi projects",
        "software development",
        "web development",
        "open source",
        "portfolio",
        "programming projects",
    ],
    openGraph: {
        title: `Projects - ${USER.name}`,
        description: "A collection of my software development projects and technical experiments.",
        type: "website",
    },
}

const Page = () => {
    return (
        <main className="w-full max-w-6xl mx-auto py-24 px-6">
            <div className="max-w-6xl flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                    Projects
                </p>
        
                <H1>
                    My Development Projects
                </H1>
        
                <p className="mt-1 text-muted-foreground">
                    Explore my software development projects, including web applications, scripts, and open-source projects built with modern technologies.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-6">
                {PROJECTS.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.slug}
                        className="h-full"
                    >
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Page