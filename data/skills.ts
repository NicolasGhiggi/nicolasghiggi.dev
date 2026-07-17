import {
    Blocks,
    Code2,
    Database,
    Hash,
    Rocket,
    Server,
    ShieldCheck,
    Sparkles,
    Wrench
} from "lucide-react"
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiPhp,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiRadixui,
    SiLaravel,
    SiNodedotjs,
    SiMysql,
    SiMongodb,
    SiGit,
    SiGithub,
    SiDocker,
    SiVercel,
    SiCursor,
    SiSqlite,
    SiGooglegemini,
    SiClaude,
    SiShadcnui,
    SiBaseui, SiFlask,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { BsOpenai } from "react-icons/bs"

const categories = [
    {
        title: "Frontend",
        description: "Building modern and responsive interfaces.",
        icon: Code2,
        skills: [
            { name: "React", level: "Advanced" },
            { name: "Next.js", level: "Advanced" },
            { name: "TypeScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "shadcn/ui", level: "Advanced" },
        ],
    },
    {
        title: "Backend",
        description: "Developing scalable and secure applications.",
        icon: Server,
        skills: [
            { name: "Laravel", level: "Advanced" },
            { name: "PHP", level: "Advanced" },
            { name: "REST API", level: "Advanced" },
            { name: "Node.js", level: "Intermediate" },
            { name: "WebSockets", level: "Intermediate" },
        ],
    },
    {
        title: "Database",
        description: "Managing data and application structures.",
        icon: Database,
        skills: [
            { name: "MySQL", level: "Advanced" },
            { name: "SQLite", level: "Advanced" },
            { name: "PostgreSQL", level: "Intermediate" },
            { name: "Prisma", level: "Learning" },
        ],
    },
    {
        title: "Tools",
        description: "Tools I use during development.",
        icon: Wrench,
        skills: [
            { name: "Git", level: "Advanced" },
            { name: "GitHub", level: "Advanced" },
            { name: "Linux", level: "Intermediate" },
            { name: "Docker", level: "Learning" },
            { name: "Vercel", level: "Learning" },
        ],
    },
]

const principles = [
    {
        title: "Reusable Components",
        description:
            "Creating modular components that are easy to maintain and scale.",
        icon: Blocks,
    },
    {
        title: "Performance First",
        description:
            "Optimizing applications for speed, efficiency and smooth experiences.",
        icon: Rocket,
    },
    {
        title: "Clean Architecture",
        description:
            "Writing structured and readable code with long-term maintainability.",
        icon: ShieldCheck,
    },
    {
        title: "User Experience",
        description:
            "Designing interfaces that are intuitive, accessible and responsive.",
        icon: Sparkles,
    },
]

const learning = [
    "Docker",
    "Cloud Infrastructure",
    "System Design",
    "DevOps",
    "Prisma",
]

const stacks = [
    {
        name: "Languages",
        items: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Python", icon: SiPython },
            { name: "PHP", icon: SiPhp },
            { name: "Java", icon: FaJava },
            { name: "C#", icon: Hash },
        ],
    },
    {
        name: "Frontend",
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "shadcn/ui", icon: SiShadcnui },
            { name: "Radix UI", icon: SiRadixui },
            { name: "Base UI", icon: SiBaseui },
        ],
    },
    {
        name: "Backend & Database",
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Laravel", icon: SiLaravel },
            { name: "Flask", icon: SiFlask },
            { name: "MySQL", icon: SiMysql },
            { name: "SQLite", icon: SiSqlite },
            { name: "MongoDB", icon: SiMongodb },
        ],
    },
    {
        name: "Developer Tools",
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Docker", icon: SiDocker },
            { name: "Vercel", icon: SiVercel },
            { name: "Cursor", icon: SiCursor },
        ],
    },
    {
        name: "AI Tools",
        items: [
            { name: "Claude", icon: SiClaude },
            { name: "Gemini", icon: SiGooglegemini },
            { name: "ChatGPT", icon: BsOpenai },
        ],
    },
]

const SKILLS = {
    categories: categories,
    principles: principles,
    learning: learning,
    stacks: stacks,
}

export default SKILLS
export { categories, principles, learning, stacks }