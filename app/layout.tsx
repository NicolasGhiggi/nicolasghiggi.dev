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
            { url: "/favicon/favicon.ico" },
            {
                url: "/favicon/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "/favicon/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
        apple: [
            {
                url: "/favicon/apple-touch-icon.png",
                sizes: "180x180",
            },
        ],
    },
    manifest: "/favicon/site.webmanifest",
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
            </body>
        </html>
    )
}

export default RootLayout