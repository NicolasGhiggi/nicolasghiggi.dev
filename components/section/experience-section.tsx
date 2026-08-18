import { H2 } from "@/components/ui/heading"
import { WorkExperience } from "@/components/ui/work-experience"

import EXPERIENCE from "@/data/experience"

const ExperiencesSection = () => {
    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-4">
            <H2 className="sr-only">Experience</H2>
            <WorkExperience
                className="bg-card *:screen-line-bottom border border-muted-foreground/15 ring-1 ring-muted ring-offset-1 ring-offset-background rounded-2xl"
                experiences={EXPERIENCE}
            />
        </section>
    )
}

export { ExperiencesSection }