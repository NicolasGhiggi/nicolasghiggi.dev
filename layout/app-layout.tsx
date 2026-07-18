import { type FC, type ReactNode } from "react"
import { AppHeader } from "@/components/app/app-header"
import { AppFooter } from "@/components/app/app-footer"
import { AppTabBar } from "@/components/app/app-tab-bar"

interface AppLayoutProps {
    children: ReactNode
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
    <main className="relative h-screen w-full max-w-5xl flex flex-col items-center mx-auto">
        <AppHeader />
        {children}
        <AppFooter />
        <AppTabBar />
    </main>
)

export { AppLayout }