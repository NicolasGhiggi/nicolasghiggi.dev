import { LucideIcon } from "lucide-react"
import { IconType } from "react-icons"

export type Source = {
    slug: string
    label: string
    secondaryLabel?: string
    icon: LucideIcon|IconType
    action: () => void
}