import type { ElementType, FC } from "react"
import { cn } from "@/lib/utils"

type IconContainerProps = {
    icon: ElementType
    iconClassName?: string
    className?: string
}

const IconContainer: FC<IconContainerProps> = ({ icon: Icon, iconClassName, className, }) => {
    return (
        <div
            className={cn(
                "flex size-9 items-center justify-center rounded-lg",
                "border border-muted-foreground/15",
                "ring-1 ring-muted ring-offset-1 ring-offset-background",
                "bg-muted text-muted-foreground",
                className
            )}
        >
            <Icon className={cn("size-5", iconClassName)} />
        </div>
    )
}

export { IconContainer }