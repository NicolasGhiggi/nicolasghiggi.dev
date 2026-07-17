import { HeroSection } from "@/components/section/hero-section"
import { AboutSection } from "@/components/section/about-section"

const Page = () => {
    return (
        <main className="w-full pb-24 px-6">
            <HeroSection />
            <AboutSection />
        </main>
    )
}

export default Page