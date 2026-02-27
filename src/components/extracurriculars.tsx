import { useState, type ReactNode } from 'react'
import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'
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
                    {date && <p className={`text-sm ${subText}`}>{date}</p>}
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

export function ExtracurricularsL() {
    const { isDark } = useTheme()
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pr-8 py-10 pl-8">
            <h2 className="text-3xl font-extrabold mb-4">Extracurriculars & Leadership</h2>

            <Card
                title={<>Student Scholar |<HighlightRed>IUSE Scholar Academy Research Program</HighlightRed></>}
                date="May 2025 – July 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Selected as 1 of 15 students for an eight-week intensive program for enhancing technical and professional skills</li>
                    <li>Developed effective communication and presentation skills with mentors, focusing on deliverables through student journals, a research plan, and research poster development</li>
                </ul>
            </Card>

            <Card
                title={<>Undergraduate Researcher |<HighlightBlue>Freshman Research Initiative</HighlightBlue></>}
                date="May 2024 – July 2024"
                isOpen={expanded === 1} isHidden={expanded !== null && expanded !== 1}
                onClick={() => toggle(1)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Introduced to Python scripting, machine learning fundamentals, and project management through mentor supervision</li>
                </ul>
            </Card>

            <Card
                title={<><HighlightRed>Presentations</HighlightRed></>}
                date=""
                isOpen={expanded === 2} isHidden={expanded !== null && expanded !== 2}
                onClick={() => toggle(2)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>COVID-19 Sentiment Analysis research presented at the 37th Annual GMiS Conference, San Diego, CA (Oct. 2025)</li>
                    <li>Kean Research Days 2025, Union, NJ (Apr. 2025)</li>
                    <li>National Conference on Undergraduate Research (NCUR) 2025, Pittsburgh, PA (Apr. 2025)</li>
                </ul>
            </Card>
        </div>
    )
}

export function ExtracurricularsR() {
    return (
        <></>
    )
}
