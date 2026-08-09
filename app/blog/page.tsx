import { H1 } from "@/components/ui/heading"

const Page = () => {
    return (
        <main className="w-full max-w-3xl mx-auto py-24">
            <header className="w-full flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                    Blog
                </p>

                <H1>
                    Writing & Notes
                </H1>

                <p className="text-muted-foreground">
                    Thoughts, tutorials, and notes on web development, software engineering, and the tools I use along the way.
                </p>
            </header>

            <section
                aria-label="Blog post list"
                className="grid grid-cols-1 gap-6 py-6"
            >
                {/* blog post cards go here */}
            </section>
        </main>
    )
}

export default Page