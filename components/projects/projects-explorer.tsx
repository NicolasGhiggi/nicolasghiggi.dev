"use client"

import Link from "next/link"
import { SearchIcon } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/projects/project-card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

import { cn } from "@/lib/utils"
import type { Projects } from "@/types/project"

interface ProjectsExplorerProps {
    projects: Projects
}

const ProjectsExplorer = ({ projects }: ProjectsExplorerProps) => {
    const [query, setQuery] = useState("")
    const [selectedTechs, setSelectedTechs] = useState<string[]>([])

    const technologies = useMemo(() => {
        const set = new Set<string>()
        projects.forEach((project) => {
            project.technologies.forEach((tech) => set.add(tech))
        })
        return Array.from(set).sort((a, b) => a.localeCompare(b))
    }, [projects])

    const toggleTech = (tech: string) => {
        setSelectedTechs((prev) =>
            prev.includes(tech)
                ? prev.filter((t) => t !== tech)
                : [...prev, tech]
        )
    }

    const clearFilters = () => {
        setQuery("")
        setSelectedTechs([])
    }

    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()

        return projects.filter((project) => {
            const matchesQuery =
                normalizedQuery.length === 0 ||
                project.name.toLowerCase().includes(normalizedQuery) ||
                project.description.toLowerCase().includes(normalizedQuery)

            const matchesTechs =
                selectedTechs.length === 0 ||
                project.technologies.some((tech) => selectedTechs.includes(tech))

            return matchesQuery && matchesTechs
        })
    }, [projects, query, selectedTechs])

    const hasActiveFilters = query.length > 0 || selectedTechs.length > 0

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col gap-4">
                <InputGroup>
                    <InputGroupInput
                        type="search"
                        placeholder="Search projects"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <InputGroupAddon align="inline-start">
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>

                <div
                    role="group"
                    aria-label="Filter by technology"
                    className="flex flex-wrap items-center gap-2"
                >
                    {technologies.map((tech) => {
                        const isActive = selectedTechs.includes(tech)
                        return (
                            <button
                                key={tech}
                                type="button"
                                onClick={() => toggleTech(tech)}
                                aria-pressed={isActive}
                                className={cn(
                                    "rounded-full border px-3 py-1 text-xs font-mono transition-colors",
                                    isActive
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                                )}
                            >
                                {tech}
                            </button>
                        )
                    })}

                    {hasActiveFilters && (
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={clearFilters}
                            className="text-xs text-muted-foreground"
                        >
                            Clear filters
                        </Button>
                    )}
                </div>
            </div>

            {filteredProjects.length > 0 ? (
                <section
                    aria-label="Project list"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {filteredProjects.map((project) => (
                        <Link
                            href={`/projects/${project.slug}`}
                            key={project.slug}
                            className="h-full"
                        >
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </section>
            ) : (
                <p className="text-sm text-muted-foreground py-12 text-center">
                    No projects match your search.
                </p>
            )}
        </div>
    )
}

export { ProjectsExplorer }