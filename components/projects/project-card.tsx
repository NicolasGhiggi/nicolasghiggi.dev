"use client"

import { FC } from "react"
import { H5 } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Image } from "@/components/ui/image"
import { Card , CardHeader, CardContent} from "@/components/ui/card"

import { Project } from "@/types/project"

interface ProjectCardProps {
    project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
    <Card className="group h-full hover:bg-muted transition-colors">
        <CardHeader>
            <Image
                src={project.image}
                alt={project.name}
                size="w-full"
                aspect="aspect-2/1"
                rounded="rounded-lg"
                fill
                sizes="100%"
                loading="eager"
            />
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
            <H5 className="line-clamp-1">
                {project.name}
            </H5>
            <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((badge, idx) => (
                    <Badge
                        key={`${badge}-${idx}`}
                        variant="outline"
                        className="text-xs"
                    >
                        {badge}
                    </Badge>
                ))}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {project.description}
            </p>
        </CardContent>
    </Card>
)

export { ProjectCard }