import { FC } from "react"
import { format } from "date-fns"

import { Post } from "@/types/post"
import { Image } from "@/components/ui/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface BlogCardProps {
    post: Post
}

const PostCard: FC<BlogCardProps> = ({ post }) => {
    return (
        <Card className="group overflow-hidden transition-colors hover:bg-muted/50">
            <CardHeader>
                <Image
                    src={post.image || "https://ui.shadcn.com/placeholder.svg"}
                    alt={post.title}
                    size="w-full"
                    aspect="aspect-2/1"
                    rounded="rounded-md"
                    fill
                    sizes="100%"
                    className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
                <h3 className="text-lg font-medium tracking-tight">
                    {post.title}
                </h3>

                <time
                    dateTime={new Date(post.date).toISOString()}
                    className="text-sm text-muted-foreground"
                >
                    {format(post.date, "dd MMMM, yyyy")}
                </time>
            </CardContent>
        </Card>
    )
}

export { PostCard }