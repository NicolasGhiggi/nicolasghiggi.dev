import type { Metadata } from 'next'
import { H1 } from "@/components/ui/heading"
import { ProjectsExplorer } from "@/components/projects/projects-explorer"

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
        <main className="w-full max-w-3xl mx-auto px-4 py-24 flex flex-col gap-6">
            <header className="w-full flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                    Projects
                </p>
        
                <H1>
                    My Development Projects
                </H1>
        
                <p className="mt-1 text-muted-foreground">
                    Explore my software development projects, including web applications, scripts, and open-source projects built with modern technologies.
                </p>
            </header>
            <ProjectsExplorer projects={PROJECTS} />
        </main>
    )
}

export default Page