import type { ComponentProps, FC, ReactNode } from "react"

import NextImage from "next/image"

import { cn } from "@/lib/utils"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface ImageProps extends ComponentProps<typeof NextImage> {
    src: string | StaticImport
    alt: string
    size: string
    aspect: string
    rounded?: string
    reflex?: boolean
    children?: ReactNode
}

const Image: FC<ImageProps> = ({
    src,
    alt,
    size,
    aspect,
    rounded = "rounded-2xl",
    reflex = false,
    children,
    className,
    ...props
}) => (
    <div className={cn("group relative", size, aspect)}>
        <div className={cn("relative h-full overflow-hidden", rounded)}>
            <NextImage
                src={src}
                alt={alt}
                className={cn(
                    "h-full w-full object-cover object-center",
                    className
                )}
                {...props}
            />
            {reflex && (
                <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            )}
        </div>
        <div
            className={cn(
                "pointer-events-none absolute inset-0 inset-ring-2 inset-ring-black/10 dark:inset-ring-white/10",
                rounded
            )}
        />
        {children}
    </div>
)

export { Image }