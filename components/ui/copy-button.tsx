"use client"

import { motion } from "motion/react"
import type { ComponentProps, FC, ReactNode } from "react"
import { CopyIcon, CheckIcon, CircleXIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { IconSwap, IconSwapItem } from "@/components/ui/icon-swap"

import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import { cn } from "@/lib/utils"

export type CopyStateIconProps = {
    state: CopyState
    idleIcon?: ReactNode
    doneIcon?: ReactNode
    errorIcon?: ReactNode
}

const CopyStateIcon: FC<CopyStateIconProps> = ({ state, idleIcon, doneIcon, errorIcon }) => {
    return (
        <IconSwap>
            <IconSwapItem key={state} as={motion.span}>
                {state === "idle" &&
                    (idleIcon ?? (
                        <CopyIcon data-slot="idle-icon" />
                    ))}

                {state === "done" &&
                    (doneIcon ?? (
                        <CheckIcon data-slot="done-icon" />
                    ))}

                {state === "error" &&
                    (errorIcon ?? (
                        <CircleXIcon data-slot="error-icon" />
                    ))}
            </IconSwapItem>
        </IconSwap>
    )
}

export type CopyButtonProps = ComponentProps<typeof Button> & {
    text: string | (() => string)
    onCopySuccess?: (text: string) => void
    onCopyError?: (error: Error) => void
} & Omit<CopyStateIconProps, "state">

const CopyButton: FC<CopyButtonProps> = ({ className, size = "icon", children, text, idleIcon, doneIcon, errorIcon, onClick, onCopySuccess, onCopyError, ...props }) => {
    const { state, copy } = useCopyToClipboard({
        onCopySuccess,
        onCopyError,
    })

    return (
        <Button
            className={cn("will-change-transform", className)}
            size={size}
            onClick={(e) => {
                copy(text)
                onClick?.(e)
            }}
            aria-label="Copy"
            {...props}
        >
            <CopyStateIcon
                state={state}
                idleIcon={idleIcon}
                doneIcon={doneIcon}
                errorIcon={errorIcon}
            />
            {children}
        </Button>
    )
}

export { CopyButton, IconSwapItem }