import { cn } from "@/lib/utils"

interface DividerProps {
    number?: number | string
    label?: string
    className?: string
}

const Divider = ({ number, label, className }: DividerProps) => {
    const hasContent = number !== undefined || label !== undefined

    return (
        <div
            className={cn(
                "mx-auto flex max-w-3xl items-center gap-4 text-sm text-muted-foreground",
                className,
            )}
        >
            {hasContent ? (
                <>
                    {number !== undefined && (
                        <span className="shrink-0 font-mono">{number}</span>
                    )}

                    {label && (
                        <span className="shrink-0 uppercase tracking-widest">
                            {label}
                        </span>
                    )}

                    <div className="h-px w-screen flex-1 bg-border" />
                </>
            ) : (
                <>
                    <div className="h-px w-screen flex-1 bg-border" />
                    <div className="size-1.5 shrink-0 rounded-full bg-border" />
                    <div className="h-px w-screen flex-1 bg-border" />
                </>
            )}
        </div>
    )
}

export { Divider }
