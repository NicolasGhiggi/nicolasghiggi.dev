import { LucideIcon } from "lucide-react"
import { FC } from "react"

interface AboutCardProps {
    icon: LucideIcon
    title: string
    description: string
}

const AboutCard: FC<AboutCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="flex items-center gap-3 rounded-lg border p-4">
            <Icon className="size-5 text-muted-foreground" />

            <div>
                <p className="font-medium text-foreground">
                    {title}
                </p>

                <p className="text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}

export { AboutCard }