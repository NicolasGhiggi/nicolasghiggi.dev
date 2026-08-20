import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { H2 } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/projects/project-card"

import PROJECTS from "@/data/projects"

const FeaturedProjectsSection = () => {
    const projects = PROJECTS.filter(p => p.featured)

    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-4">
            <H2 className="sr-only">Featured projects</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.slug}
                        className="h-full"
                    >
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link href="/projects">
                    <Button size="lg" variant="secondary">
                        View all projects <ArrowRightIcon />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export { FeaturedProjectsSection }