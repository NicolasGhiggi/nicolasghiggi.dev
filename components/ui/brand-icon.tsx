import { ComponentProps } from "react"

interface BrandIconProps extends Omit<ComponentProps<"img">, "src" | "alt"> {
    brand: string
    color?: string
}

const BrandIcon = ({ brand, color, ...props }: BrandIconProps) => {
    const iconUrl = `https://cdn.simpleicons.org/${encodeURIComponent(brand)}${
        color ? `/${encodeURIComponent(color)}` : ""
    }`

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={iconUrl}
            alt={`${brand} logo`}
            {...props}
        />
    )
}

export { BrandIcon }