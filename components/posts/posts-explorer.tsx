"use client"

import Link from "next/link"
import { SearchIcon } from "lucide-react"
import { FC, useMemo, useState } from "react"

import { PostCard } from "@/components/posts/post-card"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Post, Posts } from "@/types/post"

interface BlogExplorerProps {
    posts: Posts
}

const PostsExplorer: FC<BlogExplorerProps> = ({ posts }) => {
    const [query, setQuery] = useState("")

    const filteredPosts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase()

        if (!normalizedQuery) {
            return posts
        }

        return posts.filter((post) =>
            post.title.toLowerCase().includes(normalizedQuery)
        )
    }, [posts, query])

    return (
        <div className="w-full flex flex-col gap-6">
            <InputGroup>
                <InputGroupInput
                    type="search"
                    placeholder="Search posts"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <InputGroupAddon align="inline-start">
                    <SearchIcon />
                </InputGroupAddon>
            </InputGroup>

            {filteredPosts.length > 0 ? (
                <section
                    aria-label="Post list"
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {filteredPosts.map((post: Post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="h-full"
                        >
                            <PostCard post={post} />
                        </Link>
                    ))}
                </section>
            ) : (
                <p className="py-12 text-center text-sm text-muted-foreground">
                    No posts match your search.
                </p>
            )}
        </div>
    )
}

export { PostsExplorer }