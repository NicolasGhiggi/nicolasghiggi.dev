"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ROUTES } from "@/data/app"
import { SearchDialog } from "../search-dialog"
import { SearchIcon } from "lucide-react"

const AppTabBar = () => {
    const pathname = usePathname()

    return (
        <div className="sticky lg:hidden z-40 bottom-0 left-0 w-full p-3 flex justify-center">
            <nav className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md border shadow-lg p-2">
                {ROUTES.map((route) => {
                    const active = pathname === route.path
                    const Icon = route.icon

                    return (
                        <Link key={route.path} href={route.path}>
                            <Button
                                size="icon"
                                variant={active ? "default" : "ghost"}
                                className={`size-11 rounded-full transition-all ${active ? "scale-105" : ""}`}
                            >
                                <Icon
                                    className={`size-5 ${active ? "stroke-[2.5]" : ""}`}
                                />
                            </Button>
                        </Link>
                    )
                })}
                <SearchDialog render={
                    <Button size="icon" variant={"ghost"} className={`size-11 rounded-full`}>
                        <SearchIcon className="size-5" />
                    </Button>
                } />
            </nav>
        </div>
    )
}

export { AppTabBar }