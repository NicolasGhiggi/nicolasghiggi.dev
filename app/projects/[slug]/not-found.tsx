import { Metadata } from "next/types"

export const metadata: Metadata = {
    title: "Project not found",
}

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center">
            <h1>404 - Project not found</h1>
        </main>
    )
}

export default NotFound