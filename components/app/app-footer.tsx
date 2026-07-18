import { Copyright, Heart } from "lucide-react"
import { USER } from "@/data/app"

const AppFooter = () => {
    return (
        <footer className="w-full p-2 mt-auto">
            <nav className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 rounded-xl border bg-background p-4 shadow-md md:flex-row">
                <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-start">
                    <span>Developed with</span>

                    <span className="relative flex size-5 items-center justify-center">
                        <Heart className="absolute size-5 animate-radar-pulse fill-red-500 text-red-500" />
                        <Heart className="relative z-10 size-5 fill-red-500 text-red-500" />
                    </span>

                    <span>by {USER.name}</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-end">
                    <Copyright className="size-5 shrink-0" />
                    <span>
                        {new Date().getFullYear()} {USER.name}. All rights reserved.
                    </span>
                </div>
            </nav>
        </footer>
    )
}

export { AppFooter }