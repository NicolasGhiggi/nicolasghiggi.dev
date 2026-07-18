import Link from "next/link"
import { SearchIcon } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"
import { H5 } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/vector/logo"
import { Separator } from "@/components/ui/separator"
import { GitHubStars } from "@/components/ui/github-stars"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { SearchDialog } from "@/components/search-dialog"
import { NavigationMenu , NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { SOURCE_CODE_GITHUB_REPO, USER, ROUTES } from "@/data/app"
import { getStargazerCount } from "@/lib/github"

const AppHeader = async () => {
    const stargazersCount = await getStargazerCount()

    return (
        <header className="fixed z-40 top-0 w-full p-2 flex items-center justify-center">
            <nav className="grid place-items-center w-full max-w-5xl p-4 rounded-xl bg-background/80 backdrop-blur-md border shadow-md">
                <div className="w-full flex items-center justify-between">
                    <section className="flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2">
                            <H5 className="text-md! lg:text-lg!">
                                {USER.name}
                            </H5>
                        </Link>
                    </section>
                    <section className="flex items-center justify-end gap-2">
                        <div className="flex items-center">
                            <NavigationMenu className="hidden lg:flex">
                                <NavigationMenuList>
                                    {ROUTES.map((item, idx) => (
                                        <NavigationMenuItem key={idx}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()} render={
                                                <Link href={item.path}>
                                                    {item.label}
                                                </Link>
                                            } />
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <Separator orientation="vertical" className="hidden lg:flex" />
                        <SearchDialog  render={
                            <Button variant="outline" className="hidden lg:inline-flex">
                                <SearchIcon />
                                <Kbd className="hidden lg:inline-flex">Ctrl</Kbd>
                                <Kbd className="hidden lg:inline-flex">K</Kbd>
                            </Button>
                        } />
                        <Separator orientation="vertical" className="hidden lg:flex" />
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