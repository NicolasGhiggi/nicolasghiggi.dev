import type { ComponentProps, FC } from "react"
import { cn } from "@/lib/utils"

type H1Props = ComponentProps<"h1">

const H1: FC<H1Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h1 className={cn(className)} {...props}>
                {children}
            </h1>
        </div>
    )
}

type H2Props = ComponentProps<"h2">

const H2: FC<H2Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h2 className={cn(className)} {...props}>
                {children}
            </h2>
        </div>
    )
}

type H3Props = ComponentProps<"h3">

const H3: FC<H3Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h3 className={cn(className)} {...props}>
                {children}
            </h3>
        </div>
    )
}

type H4Props = ComponentProps<"h4">

const H4: FC<H4Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h4 className={cn(className)} {...props}>
                {children}
            </h4>
        </div>
    )
}

type H5Props = ComponentProps<"h5">

const H5: FC<H5Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h5 className={cn(className)} {...props}>
                {children}
            </h5>
        </div>
    )
}

type H6Props = ComponentProps<"h6">

const H6: FC<H6Props> = ({ children, className, ...props }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-1 self-stretch rounded-full bg-primary" />
            <h6 className={cn(className)} {...props}>
                {children}
            </h6>
        </div>
    )
}


export { H1, H2, H3, H4, H5, H6 }