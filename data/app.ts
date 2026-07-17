import { SiDailydotdev } from "react-icons/si"
import { LuGithub, LuLinkedin } from "react-icons/lu"

export const SOURCE_CODE_GITHUB_REPO = "NicolasGhiggi/nicolasghiggi.dev"

export const USER = {
    name: process.env.NEXT_PUBLIC_PERSONAL_NAME,
    email: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    website: {
        label: 'nicolasghiggi.dev',
        path: 'https://nicolasghiggi.dev',
    },
    location: {
        label: "Losone, Svizzera",
        path: "https://maps.app.goo.gl/ujNqouWVXDUKFaJq8",
    },
    qualification: process.env.NEXT_PUBLIC_PERSONAL_QUALIFICATION,
    timezone: 'Europe/Zurich',
    pronouns: 'he/him',
    sentences: [
        "Creating with code. Small details matter.",
        "Open source contributor.",
        "Computer engineering student.",
        "Full Stack Developer.",
    ],
    socials: [
        {
            icon: LuGithub,
            label: "GitHub (NicolasGhiggi)",
            path: "https://github.com/NicolasGhiggi",
        },
        {
            icon: LuLinkedin,
            label: "Linkedin (Nicolas Ghiggi)",
            path: "https://linkedin.com/in/nicolasghiggi",
        },
        {
            icon: SiDailydotdev,
            label: "daily.dev (@nicolasghiggi)",
            path: "https://daily.dev/nicolasghiggi",
        },
    ]
}