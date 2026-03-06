import { type ReactNode, useState } from "react"

export default function Navigation({ children, view }: { view: string, children: ReactNode }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            {/* Desktop nav — hidden on mobile */}
            <div className={`hidden sm:flex gap-7 items-center rounded-full drop-shadow-xs px-5 pb-3 pt-2 fixed z-10 top-4 left-[50%] 
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

            {/* Mobile hamburger — visible on small screens only */}
            <div className="sm:hidden fixed z-10 top-4 right-4 flex items-center gap-2">
                {children}
                <button
                    onClick={() => setOpen(prev => !prev)}
                    aria-label="Toggle navigation"
                    className="size-11 flex items-center justify-center rounded-full border-3
                        transition-colors duration-500 cursor-pointer
                        dark:bg-black/50 dark:border-dark-blue bg-gray-400/30 border-gray-400"
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {open && (
                <div className="sm:hidden fixed z-9 top-18 right-4 flex flex-col gap-3 rounded-2xl px-5 py-4
                    border-3 transition-colors duration-500
                    dark:bg-black/70 dark:border-dark-blue bg-white/80 border-gray-400
                    backdrop-blur-xl shadow-lg"
                >
                    {['Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', 'Skills'].map(title => (
                        <a key={title} href={`/#${title}`} onClick={() => {
                            setOpen(false)
                            setTimeout(() => window.dispatchEvent(new WheelEvent('wheel', { 'deltaY': 1 })), 0)
                        }}
                            className={`text-lg transition-all duration-150
                            ${view === title
                                    ? 'dark:text-gray-200 text-gray-900 font-bold'
                                    : 'dark:text-gray-500 text-gray-500 dark:hover:text-gray-200 hover:text-gray-900'
                                }`}
                        >
                            {title}
                        </a>
                    ))}
                </div>
            )}
        </>
    )
}

function Section({ title, view }: { title: string, view: string }) {
    const textColor = view == title ? "dark:text-gray-200 text-gray-900 scale-120 mx-2 font-bold" : 'dark:text-gray-500 text-gray-500'
    return (
        <a href={`/#${title}`} onClick={async () => {
            setTimeout(() => window.dispatchEvent(new WheelEvent('wheel', { 'deltaY': 1 })), 0)
        }}
            className={`text-2xl ${textColor} dark:hover:text-gray-200 hover:text-gray-900 transition-all duration-150`}>
            <p>{title}</p>
        </a>
    )
}