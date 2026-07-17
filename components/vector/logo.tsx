import { type ComponentProps, type FC } from "react"
import LogoImage from "@/public/vectors/logo.svg"

type LogoProps = ComponentProps<typeof LogoImage>

const Logo: FC<LogoProps> = (props) => {
    return <LogoImage {...props} />
}

export { Logo }