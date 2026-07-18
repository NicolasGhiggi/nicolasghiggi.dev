import { LucideIcon } from "lucide-react"

export type Source = {
    slug: string
    label: string
    section: string
    secondaryLabel?: string
    icon: LucideIcon
    action: () => void
}