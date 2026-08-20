import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { H2 } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { PostCard } from "@/components/posts/post-card"

import POSTS from "@/data/posts"

const LastPostsSection = () => {
    const posts = POSTS
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 6)

    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-4">
            <H2 className="sr-only">Last posts</H2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="h-full"
                    >
                        <PostCard post={post} />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link href="/projects">
                    <Button size="lg" variant="secondary">
                        All posts <ArrowRightIcon />
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export { LastPostsSection }