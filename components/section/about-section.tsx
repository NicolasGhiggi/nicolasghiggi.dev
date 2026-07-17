import { Suspense } from "react"
import { LuGithub } from "react-icons/lu"
import { Code2, GraduationCap, ShieldCheck } from "lucide-react"

import { AboutCard } from "@/components/card/about-card"
import { ProfileCard } from "@/components/card/profile-card"
import { CardContent , Card, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubContributions, GitHubContributionsFallback } from "@/components/ui/github-contributions"

import { getCachedContributions } from "@/lib/get-cached-contributions"

const AboutSection = () => {
    const contributions = getCachedContributions(process.env.GITHUB_USERNAME || "")

    return (
        <section id="about" className="flex flex-col items-center gap-4 p-2">
            <ProfileCard />

            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="font-heading flex items-center gap-2">
                        <LuGithub className="size-5" />
                        GitHub Activity
                    </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                    <Suspense fallback={<GitHubContributionsFallback />}>
                        <GitHubContributions
                            contributions={contributions}
                            githubProfileUrl={process.env.GITHUB_PROFILE_URL || ""}
                        />
                    </Suspense>
                </CardContent>
            </Card>


            <Card className="w-full max-w-3xl">
                <CardHeader>
                    <CardTitle className="font-heading">
                        About me
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 text-muted-foreground">
                    <p>
                        I&apos;m Nicolas Ghiggi, a Computer Engineering student and
                        Full Stack Developer passionate about creating modern,
                        reliable, and user-focused digital solutions.
                    </p>

                    <p>
                        My journey in technology started with curiosity about how
                        software systems work. Over the years, I have developed
                        experience across frontend and backend development, working
                        with technologies such as React, Next.js, TypeScript, and
                        Laravel.
                    </p>

                    <p>
                        Alongside my academic and professional path, I completed
                        military service as a sergeant in the Swiss Armed Forces.
                        This experience strengthened my leadership, responsibility,
                        discipline, and teamwork skills.
                    </p>

                    <p>
                        I enjoy transforming ideas into well-designed software,
                        focusing on clean architecture, attention to detail, and
                        continuous improvement.
                    </p>


                    <div className="grid gap-4 pt-4 sm:grid-cols-3">
                        <AboutCard
                            icon={Code2}
                            title="Development"
                            description="Full Stack"
                        />

                        <AboutCard
                            icon={GraduationCap}
                            title="Education"
                            description="Computer Engineering"
                        />

                        <AboutCard
                            icon={ShieldCheck}
                            title="Military"
                            description="Swiss Army Sergeant"
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export { AboutSection }