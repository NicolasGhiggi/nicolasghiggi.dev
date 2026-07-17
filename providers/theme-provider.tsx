"use client"

import { type ComponentProps, type FC, useCallback } from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

import { useHotKeys } from "@/hooks/use-hot-keys"

const ThemeProvider: FC<ComponentProps<typeof NextThemesProvider>> = ({
  children,
  ...props
}) => {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            <ThemeHotkey />
            {children}
        </NextThemesProvider>
    )
}

const ThemeHotkey = () => {
    const { resolvedTheme, setTheme } = useTheme()

    const handleThemeChange = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }, [resolvedTheme, setTheme])

    useHotKeys([{
        keys: ["d"],
        callback: handleThemeChange,
    }])

    return null
}

export { ThemeProvider }
