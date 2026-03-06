import { type ReactNode } from "react"

export default function Navigation({children, view}: {view: string, children: ReactNode}) {

    return (
        <div className={`flex gap-7 items-center rounded-full drop-shadow-xs px-5 pb-3 pt-2 fixed z-1 top-4 left-[50%] 
            translate-x-[-50%] border-3 transition-colors duration-500 dark:bg-black/50 dark:border-dark-blue
            bg-gray-400/30 border-gray-400`}>

            <Section title="Home" view={view} />
            <Section title="Education" view={view} />
            <Section title="Experience" view={view} />
            <Section title="Projects" view={view} />
            <Section title="Extracurriculars" view={view} />
            <Section title="Skills" view={view} />
            {children}
        </div>
    )
}

function Section({ title, view}: {title: string, view: string}) {
    const textColor = view == title ? "dark:text-gray-200 text-gray-900 scale-120 mx-2 font-bold" : 'dark:text-gray-500 text-gray-500'
    return (
        <a href={`/#${title}`} onClick={async () => {
            setTimeout(() => window.dispatchEvent(new WheelEvent('wheel', {'deltaY': 1})), 0)
        }}
        className={`text-2xl ${textColor} dark:hover:text-gray-200 hover:text-gray-900 transition-all duration-150`}>
            <p>{title}</p>
        </a>
    )
}