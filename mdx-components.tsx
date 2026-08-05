import { ArrowUpRight } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

const components: MDXComponents = {
    p: ({ children }) => (
        <p className="text-base leading-relaxed">
            {children}
        </p>
    ),
    a: ({ children, href }) => (
        <a
            href={href}
            className="hover:text-primary inline-flex items-center gap-1 decoration-dotted"
        >
            {children} <ArrowUpRight className="h-4 w-4" />
        </a>
    ),
    img: (props) => {
        return (
            <span className="group relative block overflow-hidden rounded-2xl inset-ring-2 inset-ring-black/10 dark:inset-ring-white/10">
                <Image
                    {...props as ImageProps}
                    width={1200}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="h-auto w-full object-cover object-center"
                    alt={props.alt ?? ""}
                />
                <span className="pointer-events-none absolute inset-0 inset-ring-2 inset-ring-black/10 dark:inset-ring-white/10 rounded-2xl"/>
            </span>
        )
    },
}

export function useMDXComponents(): MDXComponents {
    return components
}