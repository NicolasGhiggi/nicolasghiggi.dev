import Link from "next/link"
import { FC, ReactNode } from "react"

import {
    Code2,
    MapPin,
    Clock,
    Mail,
    ShieldCheck,
    GraduationCap,
    LucideIcon,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardFooter, CardHeader,
 CardTitle, CardDescription, CardAction
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Image } from "@/components/ui/image"
import { Button } from "@/components/ui/button"
import { CopyButton } from "@/components/ui/copy-button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { USER } from "@/data/app"
import { getTimezoneInfo } from "@/lib/timezone"

import ProfileImage from "@/public/images/profile-square.png"


const ProfileCard = () => {
    const timezone = getTimezoneInfo(USER.timezone)

    return (
        <Card className="w-full max-w-3xl overflow-hidden">
            <CardHeader>
                <CardTitle className="font-heading">
                    Overview
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className="text-sm h-7 p-1 pr-2">
                    <span className="relative flex size-5 items-center justify-center">
                        <span className="absolute z-10 top-1/2 left-1/2 size-3 rounded-full bg-emerald-500 animate-radar-pulse transform -translate-1/2"/>
                        <span className="relative z-10 size-2 rounded-full bg-emerald-500"/>
                    </span>
                    Available for new projects
                </Badge>
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                    Building modern and reliable digital experiences with
                    React, Next.js, TypeScript and Laravel.
                    Passionate about clean code, problem solving and
                    continuous learning.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">
                        <Code2 className="mr-1 size-4"/>
                        Full Stack Developer
                    </Badge>
                    <Badge variant="secondary">
                        <GraduationCap className="mr-1 size-4"/>
                        Computer Engineering
                    </Badge>
                    <Badge variant="secondary">
                        <ShieldCheck className="mr-1 size-4"/>
                        Swiss Army Sergeant
                    </Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <InfoItem
                        icon={MapPin}
                        text={USER.location.label}
                        path={USER.location.path}
                    />
                    <InfoItem
                        icon={Clock}
                        text={
                            <>
                                {timezone.time}

                                <span className="text-muted-foreground">
                                    {" // "}
                                    {timezone.relative}
                                </span>
                            </>
                        }
                    />
                    <InfoItem
                        icon={Mail}
                        text={USER.email}
                        path={`mailto:${USER.email}`}
                        copy
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
                {USER.socials.map((social) => (
                    <Tooltip key={social.label}>
                        <TooltipTrigger render={
                            <Link href={social.path} target="_blank">
                                <Button
                                    size="icon-lg"
                                    variant="outline"
                                    aria-label={social.label}
                                >
                                    <social.icon />
                                </Button>
                            </Link>
                        }/>
                        <TooltipContent>
                            {social.label}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </CardFooter>
        </Card>
    )
}



interface InfoItemProps {
    icon: LucideIcon
    text: string | ReactNode
    path?: string
    copy?: boolean
}

const InfoItem: FC<InfoItemProps> = ({ icon: Icon, text, path, copy = false }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg border bg-muted text-muted-foreground">
                <Icon className="size-5"/>
            </div>
            <div className="group flex items-center gap-1 min-w-0">
                {path ? (
                    <Link
                        href={path}
                        className="truncate font-mono text-sm hover:underline"
                    >
                        {text}
                    </Link>

                ) : (
                    <span className="truncate font-mono text-sm">
                        {text}
                    </span>
                )}
                {copy && path && (
                    <CopyButton
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                        variant="ghost"
                        size="icon-sm"
                        text={path}
                    />
                )}
            </div>
        </div>
    )
}


export { ProfileCard }