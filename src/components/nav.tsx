import { useState, type ReactNode } from "react"

export default function Navigation({children}: {children: ReactNode}) {
    const [view, setView] = useState<string>('Home')

    return (
        <div className={`flex gap-7 items-center rounded-full drop-shadow-xs px-5 pb-3 pt-2 fixed z-1 top-4 left-[50%] 
            translate-x-[-50%] border-3 transition-colors duration-500 dark:bg-black/50 dark:border-dark-blue
            bg-gray-400/30 border-gray-400`}>

            <Section title="Home" view={view} setView={setView}/>
            <Section title="Education" view={view} setView={setView} />
            <Section title="Experience" view={view} setView={setView} />
            <Section title="Projects" view={view} setView={setView} />
            <Section title="Extracurricular" view={view} setView={setView} />
            <Section title="Skills" view={view} setView={setView} />
            {children}
        </div>
    )
}

function Section({ title, view, setView}: { title: string, view: string, setView: Function}) {
    const textColor = view == title ? "dark:text-gray-200 text-gray-900 scale-120 mx-2 font-bold" : 'dark:text-gray-500 text-gray-500'

    return (
        <a href={`/#${title}`} onClick={() => setView(title)}
        className={`text-2xl ${textColor} dark:hover:text-gray-200 hover:text-gray-900 transition-all duration-150`}>
            <p>{title}</p>
        </a>
    )
}