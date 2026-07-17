"use client"

import { FC, PropsWithChildren } from "react"
import { AnimatePresence, motion } from "motion/react"
import type { AnimatePresenceProps, HTMLMotionProps } from "motion/react"

export function IconSwap(props: PropsWithChildren<AnimatePresenceProps>) {
    return <AnimatePresence mode="popLayout" initial={false} {...props} />
}

type MotionElement = typeof motion.div | typeof motion.span

type IconSwapItemProps = HTMLMotionProps<"div"> & { as?: MotionElement }

const IconSwapItem: FC<IconSwapItemProps> = ({ as: Component = motion.div, ...props }) => {
    return (
        <Component
            initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
            transition={{
                type: "spring",
                duration: 0.3,
                bounce: 0,
            }}
            {...props}
        />
    )
}

export  { IconSwapItem }
