import { Metadata } from "next"
import { BookOpen } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { H1, H2 } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import SKILLS from "@/data/skills"

export const metadata: Metadata = {
    title: "Skills",
}

const Page = () => {
    return (
        <main className="container mx-auto max-w-6xl py-24 px-6">
            <div className="max-w-2xl flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                    Skills
                </p>

                <H1>
                    Technologies I work with
                </H1>

                <p className="mt-1 text-muted-foreground">
                    A collection of technologies, tools and principles I use
                    to build modern and scalable applications.
                </p>
            </div>


            {/* Skills */}
            <section className="mt-12 grid gap-6 md:grid-cols-2">
                {SKILLS.categories.map((category) => {
                    const Icon = category.icon

                    return (
                        <Card
                            key={category.title}
                        >
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-lg border">
                                        <Icon className="size-5" />
                                    </div>

                                    <div>
                                        <CardTitle>
                                            {category.title}
                                        </CardTitle>

                                        <CardDescription>
                                            {category.description}
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-muted"
                                    >
                                        <span className="font-medium">
                                          {skill.name}
                                        </span>

                                        <Badge
                                            variant={
                                                skill.level === "Advanced"
                                                    ? "default"
                                                    : skill.level === "Intermediate"
                                                        ? "secondary"
                                                        : "outline"
                                            }
                                        >
                                            {skill.level}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    )
                })}
            </section>


            <Separator className="my-20" />

            <section>
                <div className="flex flex-col gap-3">
                    <p className="font-mono text-sm text-muted-foreground">
                        Stack
                    </p>

                    <H2>
                        Technologies I use
                    </H2>

                    <p className="mt-3 text-muted-foreground">
                        Tools and technologies I use regularly for building applications.
                    </p>
                </div>


                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {SKILLS.stacks.map((group, idx) => (
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-base">
                                    <span className="font-mono text-sm text-muted-foreground">
                                        {String(idx + 1).padStart(2, "0")}
                                    </span>
                                    {group.name}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-wrap gap-2">
                                {group.items.map((item, idx) => (
                                    <Badge
                                        key={idx}
                                        variant="outline"
                                        className="h-7 p-2 text-sm"
                                    >
                                        <item.icon /> {item.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <Separator className="my-20" />

            <section>
                <div className="flex flex-col gap-3">
                    <p className="font-mono text-sm text-muted-foreground">
                        Philosophy
                    </p>

                    <H2>
                        How I build software
                    </H2>
                </div>


                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {SKILLS.principles.map((item) => {
                        const Icon = item.icon

                        return (
                            <Card key={item.title}>
                                <CardHeader>
                                    <div className="flex size-11 items-center justify-center rounded-xl border">
                                        <Icon className="size-5" />
                                    </div>

                                    <CardTitle className="mt-4">
                                        {item.title}
                                    </CardTitle>

                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    })}
                </div>
            </section>


            <Separator className="my-20" />

            <section>
                <H2 className="text-2xl font-bold flex items-center gap-3">
                    <BookOpen className="size-5" />
                    Currently learning
                </H2>


                <div className="mt-6 flex flex-wrap gap-3">
                    {SKILLS.learning.map((item) => (
                        <Badge
                            key={item}
                            variant="outline"
                            className="h-6 text-sm"
                        >
                            {item}
                        </Badge>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Page