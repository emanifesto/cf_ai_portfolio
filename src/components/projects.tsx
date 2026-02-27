import { useState, type ReactNode } from 'react'
import { HighlightBlue } from '../utils/highlight.tsx'
import { useTheme } from '../utils/ThemeContext.tsx'

function ExpandIcon({ isOpen }: { isOpen: boolean }) {
    return (
        <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`opacity-40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        >
            {isOpen ? (
                <>
                    <line x1="4" y1="20" x2="10" y2="14" />
                    <polyline points="4 14 4 20 10 20" />
                    <line x1="20" y1="4" x2="14" y2="10" />
                    <polyline points="20 10 20 4 14 4" />
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

function Card({ title, date, children, isOpen, isHidden, onClick, isDark }: {
    title: ReactNode, date: string, children: ReactNode,
    isOpen: boolean, isHidden: boolean, onClick: () => void, isDark: boolean
}) {
    const subText = isDark ? 'text-gray-300' : 'text-gray-500'
    const border = isDark ? 'border-white/10' : 'border-black/10'
    const hoverBg = isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'

    if (isHidden) return null

    return (
        <div className={`border ${border} rounded-lg mb-3 overflow-hidden transition-all duration-300`}>
            <button
                onClick={onClick}
                className={`w-full text-left px-5 py-4 cursor-pointer flex items-center justify-between gap-4 ${hoverBg} transition-colors duration-200`}
            >
                <div>
                    <p className="font-extrabold">{title}</p>
                    <p className={`text-sm ${subText}`}>{date}</p>
                </div>
                <ExpandIcon isOpen={isOpen} />
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="px-5 pb-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function ProjectsL() {
    return (
        <></>
    )
}

export function ProjectsR() {
    const { isDark } = useTheme()
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)
    const linkColor = isDark ? 'text-blue-300 hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pl-8 py-10 pr-8">
            <h2 className="text-3xl font-extrabold mb-4">Projects</h2>

            <Card
                title={<>Published Chrome Extension |<HighlightBlue>Adobe Stock Metadata Automation</HighlightBlue></>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Automated upload workflow using HTML injection and the OpenAI API to assist Adobe Stock photo contributors</li>
                    <li>Stats: 30+ installs, 100+ impressions</li>
                    <li><a href="https://github.com/emanifesto/Adobe-Extension" className={`underline ${linkColor}`}>github.com/emanifesto/Adobe-Extension</a></li>
                </ul>
            </Card>
        </div>
    )
}
