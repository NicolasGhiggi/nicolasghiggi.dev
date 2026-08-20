import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

import POSTS from "@/data/posts"

type Props = {
    params: Promise<{ slug: string }>
}

export async function GET(_: Request, { params }: Props) {
    const { slug } = await params

    const post = POSTS.find((post) => post.slug === slug)

    if (!post) {
        return new NextResponse("Post not found", {
            status: 404,
        })
    }

    const filePath = path.join(
        process.cwd(),
        "content",
        "posts",
        `${slug}.mdx`
    )

    try {
        const content = await readFile(filePath, "utf8")

        return new NextResponse(content, {
            headers: {
                "Content-Type": "text/markdown; charset=utf-8",
                "Cache-Control": "public, max-age=3600",
            },
        })
    } catch {
        return new NextResponse("Markdown file not found", {
            status: 404,
        })
    }
}