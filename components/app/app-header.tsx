import Link from "next/link"
import { SearchIcon } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"
import { H5 } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/vector/logo"
import { Separator } from "@/components/ui/separator"
import { GitHubStars } from "@/components/ui/github-stars"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import { SOURCE_CODE_GITHUB_REPO, USER } from "@/data/app"
import { getStargazerCount } from "@/lib/github"

const ROUTES = [
    { path: "/#about",   label: "About",    },
    { path: "/projects", label: "Projects", },
    { path: "/skills",   label: "Skills",   },
    { path: "/experiences",   label: "Experiences", },
    { path: "/contact",  label: "Contact",  },
]

const AppHeader = async () => {
    const stargazersCount = await getStargazerCount()

    return (
        <header className="fixed z-40 top-0 w-full p-2 flex items-center justify-center"        >
            <nav className="grid place-items-center w-full max-w-5xl p-4 rounded-xl bg-background border shadow-md">
                <div className="w-full flex items-center justify-between">
                    <section className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <Logo width={30} height={30} className="inline md:hidden text-primary" />
                            <H5 className="hidden md:inline">
                                {USER.name}
                            </H5>
                        </Link>
                    </section>
                    <section className="flex items-center justify-end gap-2">
                        <div className="flex items-center">
                            {ROUTES.map((item, idx) => (
                                <Link key={idx} href={item.path} replace>
                                    <Button variant="ghost">{item.label}</Button>
                                </Link>
                            ))}
                        </div>
                        <Separator orientation="vertical" />
                        <Button variant="outline">
                            <SearchIcon />
                            <Kbd>Ctrl</Kbd>
                            <Kbd>K</Kbd>
                        </Button>
                        <Separator orientation="vertical" />
                        <GitHubStars
                            repo={SOURCE_CODE_GITHUB_REPO}
                            stargazersCount={stargazersCount}
                        />
                        <Separator orientation="vertical" />
                        <ThemeToggle />
                    </section>
                </div>
            </nav>
        </header>
    )
}

export { AppHeader }