import { Metadata } from "next"
import { HeroSection } from "@/components/section/hero-section"
import { AboutSection } from "@/components/section/about-section"

import { USER } from "@/data/app"

export const metadata: Metadata = {
    description: `Portfolio of ${USER.name}, ${USER.qualification}.`
}

const Page = () => {
    return (
        <main className="w-full pb-24 px-6">
            <HeroSection />
            <AboutSection />
        </main>
    )
}

export default Page