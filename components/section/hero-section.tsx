"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { FlipSentences } from "@/components/ui/flip-sentences"

import { USER } from "@/data/app"
import { getGreeting } from "@/lib/get-greeting"
import ProfileImage from "@/public/images/profile.png"
import { ArrowUpRight } from "lucide-react"

const HeroSection = () => {
    const [greeting, setGreeting] = useState("Hello")

    useEffect(() => {
        setGreeting(getGreeting())
    }, [])

    return (
        <section className="flex w-full max-w-3xl flex-col justify-center gap-10 pt-24">
            {/* 1. Identity block: avatar + greeting, name and role */}
            <header className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
                <Image
                    src={ProfileImage}
                    alt="Nicolas Ghiggi"
                    size="w-32 sm:w-50"
                    aspect="aspect-[2/3]"
                    rounded="rounded-3xl"
                    loading="eager"
                />

                <div className="flex flex-col gap-2">
                    <p className="font-mono text-sm text-muted-foreground">
                        {greeting}, I&#39;m
                    </p>

                    <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
                        {USER.name}
                    </h1>

                    <h2 className="text-lg font-medium text-muted-foreground sm:text-2xl">
                        {USER.qualification}
                    </h2>
                </div>
            </header>

            {/* 2. Pitch: description first, animated tagline as a highlight */}
            <div className="flex flex-col gap-5 text-center sm:text-left">
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    I build modern web applications with React, Next.js,
                    TypeScript and Laravel, focusing on clean architecture,
                    performance and user experience.
                </p>

                <FlipSentences className="h-6 justify-center font-mono text-sm text-foreground sm:justify-start">
                    {USER.sentences}
                </FlipSentences>
            </div>

            {/* 3. Actions: separated by a divider, primary first */}
            <div className="flex justify-center gap-3 border-t pt-8 sm:justify-start">
                <Link href="/contact">
                    <Button size="lg">
                        Get in touch
                        <ArrowUpRight />
                    </Button>
                </Link>

                <Link href="/projects">
                    <Button variant="outline" size="lg">
                        View projects
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export { HeroSection }