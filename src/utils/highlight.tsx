import type { ReactNode } from "react"

interface Props {
    children: string | ReactNode,
    size?: string
}

export default function Bold({children, size}: Props){
    return(
        <span className={`${size ? size : 'text-2xl'} font-extrabold`}>
            {children}
        </span>
    )
}

export function HighlightBlue({children, size}: Props){
    return(
        <span className={`${size ? size : 'text-2xl'} font-extrabold text-transparent bg-clip-text bg-linear-to-l from-[#3b71ff] to-[#1da5ff]`}>
            {' ' + children + ' '}
        </span>
    )
}

export function HighlightRed({children, size}: Props){
    return(
        <span className={`${size ? size : 'text-2xl'} font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#ff3b71] to-[#ff1da5]`}>
            {' ' + children + ' '}
        </span>
    )
}