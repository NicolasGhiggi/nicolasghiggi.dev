import { Metadata } from "next"
import { type ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { JetBrains_Mono, Outfit, Pixelify_Sans, Space_Grotesk } from "next/font/google"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { AppLayout } from "@/layout/app-layout"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider, ThemeHotkey } from "@/providers/theme-provider"

import { USER } from "@/data/app"
import { OpenPanelComponent } from "@openpanel/nextjs"

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-heading'
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-sans'
})

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

const pixel = Pixelify_Sans({
    subsets: ["latin"],
    variable: "--font-pixel",
})

export const metadata: Metadata = {
    title: {
        template: `%s – ${USER.name}`,
        default: `${USER.name} - ${USER.qualification}`,
    },
    description: `Portfolio of ${USER.name}, ${USER.qualification}.`,
    icons: {
        icon: [
            {
                url: "/favicon/favicon.ico",
            },
            {
                url: "/favicon/icon1.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                url: "/favicon/icon0.svg",
                type: "image/svg+xml",
            },
        ],
        apple: [
            {
                url: "/favicon/apple-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },
    manifest: "/favicon/manifest.json",
}

const RootLayout = async ({ children }: { children: ReactNode }) => {
    return (
        <html
            suppressHydrationWarning
            className={cn(jetBrainsMono.variable, outfit.variable, spaceGrotesk.variable, pixel.variable)}
            data-scroll-behavior="smooth"
        >
            <body>
                <ThemeProvider
                    storageKey="nghiggi-portfolio-theme"
                    nonce="theme-script"
                >
                    <ThemeHotkey />
                    <TooltipProvider>
                        <AppLayout>
                            {children}
                        </AppLayout>
                        <Toaster />
                        <Analytics />
                        <SpeedInsights />
                        <OpenPanelComponent
                            clientId={process.env.NEXT_PUBLIC_CLIENT_ID || ""}
                            trackScreenViews={true}
                        />
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout