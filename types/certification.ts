import { LucideIcon } from "lucide-react"

export type Certification = {
    icon: LucideIcon
    name: string
    issuer: string
    date: Date
    link: string
}

export type Certifications = Certification[]