import { Metadata } from "next"
import { type FC, type ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import { JetBrains_Mono, Outfit, Space_Grotesk } from "next/font/google"

import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import { AppLayout } from "@/layout/app-layout"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

import { ThemeProvider } from "@/providers/theme-provider"

import { USER } from "@/data/app"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontHeading = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-heading',
});

const fontSans = Outfit({
    subsets: ['latin'],
    variable: '--font-sans',
})

const fontMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
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

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                fontSans.variable,
                fontHeading.variable,
                fontMono.variable
            )}
            data-scroll-behavior="smooth"
        >
            <body>
                  <ThemeProvider
                      defaultTheme="dark"
                      storageKey="nghiggi-portfolio-theme"
                  >
                      <TooltipProvider>
                          <AppLayout>
                              {children}
                          </AppLayout>
                          <Toaster />
                          <Analytics />
                          <SpeedInsights />
                      </TooltipProvider>
                  </ThemeProvider>
                  <script
                    defer
                    src="https://cloud.umami.is/script.js"
                    data-website-id={process.env.UMAMI_WEBSITE_ID}
                  ></script>
            </body>
        </html>
    )
}

export default RootLayout