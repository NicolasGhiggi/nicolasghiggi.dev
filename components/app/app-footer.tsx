import { Copyright, Heart } from "lucide-react"
import { USER } from "@/data/app"

const AppFooter = () => {
    return (
        <footer className="w-full p-2 flex items-center justify-center mt-auto cursor-default">
            <nav className="flex items-center justify-between gap-6 w-full max-w-5xl p-4 rounded-xl bg-background border  shadow-md">
                <div className="flex items-center justify-start gap-2">
                    Developed with
                    <span className="relative flex size-5 items-center justify-center">
                        <Heart
                            className="absolute size-5 animate-radar-pulse fill-red-500 text-red-500"
                        />
                        <Heart
                            className="relative z-10 size-5 fill-red-500 text-red-500"
                        />
                    </span>
                    by {USER.name}
                </div>
                <div className="flex items-center justify-end gap-2">
                    <Copyright className="size-5" /> {(new Date()).getFullYear()} {USER.name}. All rights reserved.
                </div>
            </nav>
        </footer>
    )
}

export { AppFooter }