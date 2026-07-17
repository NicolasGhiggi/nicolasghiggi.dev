"use client"

import { ComponentProps, type FC, useRef } from "react"
import { useInView, usePageInView } from "motion/react"

import { TextFlip } from "@/components/ui/text-flip"

type FlipSentencesProps =  Omit<ComponentProps<"div">, "children" | "ref"> & { children: string[] }

const FlipSentences: FC<FlipSentencesProps> = ({ children, ...props }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isPageInView = usePageInView()
    const isInView = useInView(ref)

    return (
        <div ref={ref} {...props}>
            <TextFlip
                className="shimmer font-mono text-sm text-balance text-muted-foreground shimmer-duration-1500 shimmer-once not-dark:shimmer-color-foreground"
                interval={3}
                play={isPageInView && isInView}
            >
                {children}
            </TextFlip>
        </div>
    )
}

export { FlipSentences }