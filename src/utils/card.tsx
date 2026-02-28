import type { ReactNode } from "react"

function ExpandIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`opacity-40 shrink-0 transition-transform duration-300 ${isOpen && 'rotate-90'}`}
        >
            {isOpen ? (
                <>
                    <line x1="4" y1="20" x2="10" y2="14" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="20" y1="4" x2="14" y2="10" />
                    <polyline points="4 14 10 14 10 20" />
                </>
            ) : (
                <>
                    <line x1="14" y1="10" x2="20" y2="4" />
                    <polyline points="14 4 20 4 20 10" />
                    <line x1="10" y1="14" x2="4" y2="20" />
                    <polyline points="10 20 4 20 4 14" />
                </>
            )}
        </svg>
    )
}

export default function Card({ title, caption, date, children, isOpen, isHidden, onClick }: {
    title: ReactNode, caption: ReactNode, date?: string, children: ReactNode,
    isOpen: boolean, isHidden: boolean, onClick: () => void
}) {

    if (isHidden) return null

    return (
        <div className={`border-3 dark:border-white/20 border-black/20 rounded-lg mb-3 transition-all duration-300`}>
            <button onClick={onClick}
                className={`w-full text-left px-5 py-2 cursor-pointer flex items-center justify-between gap-4 dark:hover:bg-white/5 hover:bg-black/5 transition-colors duration-200`}>
                <div>
                    <p>{title}</p>
                    <p>{caption}</p>
                    {date && <p className={`text-sm dark:text-gray-300 text-gray-500}`}>{date}</p>}
                </div>
                <ExpandIcon isOpen={isOpen} />
            </button>
            { isOpen && 
                <div className="px-5 py-3 bg-black/10 ">
                    {children}
               </div>
            } 
        </div>
    )
}