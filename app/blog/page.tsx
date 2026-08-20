import { Metadata } from "next"

import { USER } from "@/data/app"
import { H1 } from "@/components/ui/heading"
import { PostsExplorer } from "@/components/posts/posts-explorer"
import POSTS from "@/data/posts"

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Read my latest articles, insights, and tutorials about software development, programming, web technologies, and the projects I build.",
    keywords: [
        "Nicolas Ghiggi blog",
        "software development blog",
        "web development",
        "programming",
        "software engineering",
        "technology",
        "programming tutorials",
        "developer blog",
    ],
    openGraph: {
        title: `Blog - ${USER.name}`,
        description:
            "Articles, insights, and tutorials about software development, programming, and modern web technologies.",
        type: "website",
    },
}

const Page = () => {
    return (
        <main className="w-full max-w-3xl mx-auto px-4 py-24 flex flex-col gap-6">
            <header className="w-full flex flex-col gap-3">
                <p className="font-mono text-sm text-muted-foreground">
                    Blog
                </p>

                <H1>
                    Writing & Notes
                </H1>

                <p className="mt-1 text-muted-foreground">
                    Thoughts, tutorials, and notes on web development, software engineering, and the tools I use along the way.
                </p>
            </header>
            <PostsExplorer posts={POSTS} />
        </main>
    )
}

export default Page