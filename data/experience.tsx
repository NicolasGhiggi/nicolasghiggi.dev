import { CodeXmlIcon } from "lucide-react"
import type { ExperienceItemType } from "@/components/ui/work-experience"

const EXPERIENCE: ExperienceItemType[] = [
    {
        id: "all-projects-end-developments",
        companyName: "All Projects & Developments",
        companyWebsite: "https://www.apd.ie/",
        positions: [
            {
                id: "1",
                title: "IT technician",
                employmentPeriod: {
                    start: "06.2024",
                    end: "07.2024"
                },
                employmentType: "Full-time",
                icon: <CodeXmlIcon />,
                description: "" +
                    "- Remake login page style.\n" +
                    "- Fixed payment issues. \n" +
                    "- Fixed some bugs in the system. \n" +
                    "- Developed a [Python script](/projects/sitemap-generator) for automatically generating XML sitemaps for websites. \n" +
                    "- Fixed style problem for website for [CK Architecture](http://www.ckarchitecture.ie/)",
                skills: [
                    "ASP.NET Core",
                    "MSSQL",
                    "C#",
                    "JavaScript",
                ],
                isExpanded: true,
            },
        ],
        isCurrentEmployer: false,
    }
]

export default EXPERIENCE