"use client"

import Link from "next/link"
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CodeBlock, CodeBlockContent, CodeBlockLine } from "@/components/ui/code-block"
import { useHighlightedCode } from "@/hooks/use-highlighted-code"

const terminal = `git commit -m "Let's build something"`

const CtaSection = () => {
    const lines = useHighlightedCode(terminal, "bash")

    return (
        <section className="w-full max-w-3xl mx-auto">
            <Card>
                <CardContent className="relative py-8 px-8">
                    <div className="relative z-10">
                        <h2 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight md:text-6xl">
                            Still scrolling?
                            <br />
                            <span className="text-muted-foreground">
                                Let&apos;s build something.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                            You made it this far — might as well turn an idea
                            into something real.
                        </p>

                        <p className="mt-2 max-w-xl text-base leading-7 text-muted-foreground">
                            Whether it&apos;s a project, a collaboration, or just
                            a good conversation about code, I&apos;m always open to it.
                        </p>
                        <CodeBlock className="mt-8">
                            <CodeBlockContent>
                                <CodeBlockLine>{lines}</CodeBlockLine> 
                            </CodeBlockContent>
                        </CodeBlock>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/contact"
                            >
                                <Button size="lg">
                                    Get in touch
                                    <ArrowUpRight />
                                </Button>
                            </Link>

                            <Link
                                href="/projects"
                            >
                                <Button variant="outline" size="lg">
                                    View projects
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export { CtaSection }