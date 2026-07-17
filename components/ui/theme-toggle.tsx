"use client"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Kbd } from "@/components/ui/kbd"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const onClick = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <Tooltip>
            <TooltipTrigger render={
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={onClick}
                    aria-label="theme-toggle"
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </Button>
            } />
            <TooltipContent>
                <p>Toggle mode <Kbd>D</Kbd></p>
            </TooltipContent>
        </Tooltip>
    )
}

export { ThemeToggle }