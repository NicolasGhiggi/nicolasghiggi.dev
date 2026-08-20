"use client"

import Link from "next/link"
import {
    ArrowLeft,
    ArrowRight,
    ChevronDown,
    Check,
    Copy,
    Ellipsis,
    LinkIcon,
    Share,
} from "lucide-react"
import {
    FaGithub,
    FaLinkedin,
    FaMarkdown,
    FaXTwitter,
} from "react-icons/fa6"
import {
    RiClaudeFill,
    RiCursorAiFill,
    RiGrokAiFill,
    RiOpenaiFill,
} from "react-icons/ri"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

type ProjectHeaderProps = {
    slug: string
    previous?: {
        slug: string
        title: string
    }
    next?: {
        slug: string
        title: string
    }
}

const PostHeader = ({
    slug,
    previous,
    next,
}: ProjectHeaderProps) => {
    const [copied, setCopied] = useState(false)
    const [pageUrl, setPageUrl] = useState("")

    useEffect(() => {
        const handlePageUrl = () => {
            setPageUrl(window.location.href)
        }
        handlePageUrl()
    }, [])

    const markdownUrl = `/blog/${slug}/markdown`
    const githubUrl = `https://github.com/NicolasGhiggi/nicolasghiggi-dev/blob/main/content/posts/${slug}.mdx`

    const aiPrompt = pageUrl
        ? `Read and analyze this project page: ${pageUrl}`
        : `Read and analyze the project page for ${slug}.`

    const aiLinks = {
        chatgpt: `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`,
        claude: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
        cursor: `https://cursor.com/?q=${encodeURIComponent(aiPrompt)}`,
        grok: `https://grok.com/?q=${encodeURIComponent(aiPrompt)}`,
    }

    const copyMarkdown = async () => {
        try {
            const response = await fetch(markdownUrl)

            if (!response.ok) {
                throw new Error("Failed to fetch markdown")
            }

            const markdown = await response.text()

            await navigator.clipboard.writeText(markdown)

            setCopied(true)

            setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch (error) {
            console.error("Failed to copy markdown:", error)
        }
    }

    const copyLink = async () => {
        await navigator.clipboard.writeText(window.location.href)
    }

    const shareOnX = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
        )}`

        window.open(url, "_blank", "noopener,noreferrer")
    }

    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            window.location.href
        )}`

        window.open(url, "_blank", "noopener,noreferrer")
    }

    const shareWithSystem = async () => {
        if (!navigator.share) {
            await copyLink()
            return
        }

        await navigator.share({
            title: document.title,
            url: window.location.href,
        })
    }

    return (
        <header className="flex items-center justify-between gap-2 rounded-full border bg-background/80 p-2">
            {/* Back */}
            <Link href="/blog">
                <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full px-3"
                >
                    <ArrowLeft />
                    <span className="hidden sm:inline">Blog</span>
                </Button>
            </Link>

            <div className="flex items-center gap-1">
                {/* Content actions */}
                <ButtonGroup>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full"
                        onClick={copyMarkdown}
                    >
                        {copied ? <Check /> : <Copy />}
                        <span className="hidden sm:inline">
                            {copied ? "Copied" : "Copy page"}
                        </span>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger
                            render={
                                <Button
                                    variant="secondary"
                                    size="icon-sm"
                                    className="rounded-full"
                                />
                            }
                        >
                            <ChevronDown />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    render={
                                        <Link href={markdownUrl} target="_blank" />
                                    }
                                >
                                    <FaMarkdown />
                                    View as Markdown
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    render={
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <FaGithub />
                                    Open in GitHub
                                </DropdownMenuItem>
                            </DropdownMenuGroup>

                            <DropdownMenuSeparator />

                            <DropdownMenuGroup>
                                <DropdownMenuItem
                                    render={
                                        <a
                                            href={aiLinks.chatgpt}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <RiOpenaiFill />
                                    Open in ChatGPT
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    render={
                                        <a
                                            href={aiLinks.claude}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <RiClaudeFill />
                                    Open in Claude
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    render={
                                        <a
                                            href={aiLinks.cursor}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <RiCursorAiFill />
                                    Open in Cursor
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    render={
                                        <a
                                            href={aiLinks.grok}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    }
                                >
                                    <RiGrokAiFill />
                                    Open in Grok
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </ButtonGroup>

                {/* Share */}
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button
                                variant="secondary"
                                size="icon-sm"
                                className="rounded-full"
                            />
                        }
                    >
                        <Share />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-52">
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={copyLink}>
                                <LinkIcon />
                                Copy link
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={shareOnX}>
                                <FaXTwitter />
                                Share on X
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={shareOnLinkedIn}>
                                <FaLinkedin />
                                Share on LinkedIn
                            </DropdownMenuItem>

                            <DropdownMenuItem onClick={shareWithSystem}>
                                <Ellipsis />
                                Other apps
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Previous / Next */}
                {(previous || next) && (
                    <ButtonGroup>
                        {previous && (
                            <Link
                                href={`/blog/${previous.slug}`}
                                aria-label={`Previous post: ${previous.title}`}
                            >
                                <Button
                                    variant="secondary"
                                    size="icon-sm"
                                    className="rounded-full"
                                >
                                    <ArrowLeft />
                                </Button>
                            </Link>
                        )}

                        {next && (
                            <Link href={`/blog/${next.slug}`} aria-label={`Next post: ${next.title}`}>
                                <Button
                                    variant="secondary"
                                    size="icon-sm"
                                    className="rounded-full"
                                >
                                    <ArrowRight />
                                </Button>
                            </Link>
                        )}
                    </ButtonGroup>
                )}
            </div>
        </header>
    )
}

export { PostHeader }