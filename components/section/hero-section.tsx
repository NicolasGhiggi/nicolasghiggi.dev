"use client"

import { useEffect, useState } from "react"

import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { FlipSentences } from "@/components/ui/flip-sentences"

import { USER } from "@/data/app"
import { getGreeting } from "@/lib/get-greeting"
import ProfileImage from "@/public/images/profile.png"

const HeroSection = () => {
    const [greeting, setGreeting] = useState("Hello")

    useEffect(() => {
        const fetchGreeting = () => setGreeting(getGreeting())
        fetchGreeting()
    }, [])

    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center gap-12 py-20 md:flex-row md:justify-between md:gap-16">
            <div className="flex max-w-2xl flex-col gap-6 text-center md:text-left">
                <div>
                    <p className="mb-3 font-mono text-sm text-muted-foreground">
                        {greeting}, I&#39;m
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        {USER.name}
                    </h1>

                    <h2 className="mt-3 text-xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl">
                        {USER.qualification}
                    </h2>
                </div>

                <FlipSentences className="h-6 justify-center md:justify-start">
                    {USER.sentences}
                </FlipSentences>

                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                    I build modern web applications with React, Next.js,
                    TypeScript and Laravel, focusing on clean architecture,
                    performance and user experience.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                    <Button>
                        View projects
                    </Button>

                    <Button variant="outline">
                        Contact me
                    </Button>
                </div>
            </div>

            <Image
                src={ProfileImage}
                alt="Nicolas Ghiggi"
                size="w-56 sm:w-72 md:w-80"
                aspect="aspect-[2/3]"
                rounded="rounded-3xl"
                loading="eager"
                reflex
            />
        </section>
    )
}

export { HeroSection }