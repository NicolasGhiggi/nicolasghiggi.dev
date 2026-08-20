import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PostHeader } from "@/components/posts/post-header"
import POSTS from "@/data/posts"

type Props = {
    params: Promise<{ slug: string }>
}

export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
    const { slug } = await params
    const project = POSTS.find((post) => post.slug === slug)

    if (!project) {
        return {
            title: "Project not found",
        }
    }

    return {
        title: project.title,
        description: project.title,
        openGraph: {
            title: project.title,
            description: project.title,
            images: [{ url: project.image || "https://ui.shadcn.com/placeholder.svg" }],
        },
    }
}


export function generateStaticParams() {
    return POSTS.map((post) => ({
        slug: post.slug,
    }))
}

export const dynamicParams = false

const Page = async ({ params }: Props) => {
    const { slug } = await params

    const projectIndex = POSTS.findIndex(
        (post) => post.slug === slug
    )

    if (projectIndex === -1) {
        notFound()
    }

    const post = POSTS[projectIndex]

    const previous =
        projectIndex > 0
            ? POSTS[projectIndex - 1]
            : undefined

    const next =
        projectIndex < POSTS.length - 1
            ? POSTS[projectIndex + 1]
            : undefined

    const { default: Post } = await import(`@/content/posts/${post.slug}.mdx`)

    return (
        <main className="mx-auto flex w-full max-w-3xl flex-col px-4 py-24 typeset typeset-project">
            <PostHeader
                slug={post.slug}
                previous={
                    previous
                        ? {
                            slug: previous.slug,
                            title: previous.title,
                        }
                        : undefined
                }
                next={
                    next
                        ? {
                            slug: next.slug,
                            title: next.title,
                        }
                        : undefined
                }
            />

            <Post />
        </main>
    )
}

export default Page