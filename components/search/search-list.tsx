"use client"

import { FaGithub } from "react-icons/fa6"
import { FolderKanbanIcon, HomeIcon, MailIcon, MonitorIcon, MoonIcon, NotebookTextIcon, SunIcon } from "lucide-react"

import { Source } from "@/types/source"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"

import { USER } from "@/data/app"
import { slugify } from "@/lib/utils"

interface SourceSection {
    slug: string
    label: string
    commands: Source[]
}

const SearchList = () => {
    const { setTheme } = useTheme()
    const router = useRouter()


    const sections: SourceSection[] = [
        {
            slug: "menu",
            label: "Menu",
            commands: [
                {
                    slug: "home",
                    label: "Home",
                    secondaryLabel: "GH",
                    icon: HomeIcon,
                    action: () => router.push("/"),
                },
                {
                    slug: "projects",
                    label: "Projects",
                    secondaryLabel: "GP",
                    icon: FolderKanbanIcon,
                    action: () => router.push("/projects"),
                },
                {
                    slug: "blog",
                    label: "Blog",
                    secondaryLabel: "GB",
                    icon: NotebookTextIcon,
                    action: () => router.push("/blog"),
                },
                {
                    slug: "contact",
                    label: "Contact",
                    secondaryLabel: "GC",
                    icon: MailIcon,
                    action: () => router.push("/contact"),
                },
            ],
        },
        {
            slug: "theme",
            label: "Theme",
            commands: [
                {
                    slug: "light",
                    label: "Light",
                    icon: SunIcon,
                    action: () => setTheme('light'),
                },
                {
                    slug: "dark",
                    label: "Dark",
                    icon: MoonIcon,
                    action: () => setTheme('dark'),
                },
                {
                    slug: "system",
                    label: "System",
                    icon: MonitorIcon,
                    action: () => setTheme('system'),
                },
            ],
        },
        {
            slug: "other",
            label: "Other",
            commands: [
                ...USER.socials.map(social => ({
                    slug: slugify(social.label.split("(")[0].trim()),
                    label: social.label,
                    icon: social.icon,
                    action: () => window.location.href = social.path,
                }))
            ],
        },
    ]

    return sections
}

export { SearchList }
