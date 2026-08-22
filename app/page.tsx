import { Metadata } from "next"
import { HeroSection } from "@/components/section/hero-section"
import { AboutSection } from "@/components/section/about-section"
import { StackSection } from "@/components/section/stack-section"
import { ExperiencesSection } from "@/components/section/experience-section"
import { FeaturedProjectsSection } from "@/components/section/featured-projects-section"
import { LastPostsSection } from "@/components/section/last-posts-section"
import { CertificationsSection } from "@/components/section/certifications-section"
import { InsightsSection } from "@/components/section/insights-section"
import { CtaSection } from "@/components/section/cta-section"
import { Divider } from "@/components/ui/divider"

import { USER } from "@/data/app"


export const metadata: Metadata = {
    description: `Portfolio of ${USER.name}, ${USER.qualification}.`
}

const Page = () => {
    return (
        <main className="w-full max-w-5xl py-24 px-4 flex flex-col items-center gap-10">
            <HeroSection />

            <Divider number="01" label="About" className="mt-10" />
            <AboutSection />

            <Divider number="02" label="Projects" className="mt-10" />
            <FeaturedProjectsSection />

            <Divider number="03" label="Blog" className="mt-10" />
            <LastPostsSection />

            <Divider number="04" label="Stack" className="mt-10" />
            <StackSection />

            <Divider number="05" label="Experience" className="mt-10" />
            <ExperiencesSection />

            <Divider number="06" label="Certifications" className="mt-10" />
            <CertificationsSection />

            <Divider number="07" label="Insights" className="mt-10" />
            <InsightsSection />

            <Divider className="my-10" />
            <CtaSection />
        </main>
    )
}

export default Page