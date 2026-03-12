import type { ReactNode } from "react"

interface Props {
    children: string | ReactNode,
    size?: string
}

export default function Bold({ children, size }: Props) {
    return (
        <span className={`${size ? size : 'text-base/4 sm:text-lg/5 lg:text-xl'} font-extrabold`}>
            {children}
        </span>
    )
}

export function HighlightBlue({ children, size }: Props) {
    return (
        <span className={`${size ? size : 'text-base/4 sm:text-lg/5 lg:text-xl'} font-extrabold text-transparent bg-clip-text bg-linear-to-l from-[#3b71ff] to-[#1da5ff]`}>
            {' ' + children + ' '}
        </span>
    )
}

export function HighlightRed({ children, size }: Props) {
    return (
        <span className={`${size ? size : 'text-base/4 sm:text-lg/5 lg:text-xl'} font-extrabold text-transparent bg-clip-text bg-linear-to-l from-[#ff1da5] to-[#ff3b71]`}>
            {' ' + children + ' '}
        </span>
    )
}