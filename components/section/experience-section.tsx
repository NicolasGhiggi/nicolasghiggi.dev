import { H2 } from "@/components/ui/heading"
import { WorkExperience } from "@/components/work-experience"

import EXPERIENCE from "@/data/experience"

const ExperiencesSection = () => {
    return (
        <section className="w-full max-w-3xl mx-auto flex flex-col gap-4">
            <H2 className="sr-only">Experience</H2>
            <WorkExperience
                className="bg-transparent *:screen-line-bottom ring-1 ring-foreground/5 dark:ring-foreground/10 rounded-2xl"
                experiences={EXPERIENCE}
            />
        </section>
    )
}

export { ExperiencesSection }