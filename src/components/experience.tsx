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

export function ExperienceL() {
    const { isDark } = useTheme()
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pr-8 py-10 pl-8">
            <h2 className="text-3xl font-extrabold mb-4">Experience</h2>

            <Card
                title={<>Software Engineer & Founder |<HighlightBlue>Dami SaaS</HighlightBlue></>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Utilized cloud compute serverless workers hosted on Cloudflare to develop a RESTful API and process Stripe webhooks</li>
                    <li>Interacted with SQLite RDBMS to handle user authentication and access provisioning for premium features</li>
                    <li>Improved documentation comprehension to effectively utilize multiple external APIs (e.g. Chrome, Stripe, OpenAI)</li>
                    <li>Developed Chrome extension using JavaScript, HTML, and CSS to automate uploading stock photography to Adobe Stock</li>
                    <li>Improved upload workflow by over 300% measured by throughput, maintenance, and flexibility compared to similar tools</li>
                </ul>
            </Card>

            <Card
                title={<>Java Supplemental Instructor |<HighlightRed>Kean University CS/IT Department</HighlightRed></>}
                date="Jan. 2025 – May 2025"
                isOpen={expanded === 1} isHidden={expanded !== null && expanded !== 1}
                onClick={() => toggle(1)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Provided academic support for 100+ students enrolled in the Fundamentals of Computer Science Course</li>
                    <li>Curated lesson plans and hosted daily in-person and online sessions to boost academic performance by 8%</li>
                </ul>
            </Card>

            <Card
                title={<>AI/ML Researcher |<HighlightBlue>Kean University</HighlightBlue></>}
                date="May 2024 – Present"
                isOpen={expanded === 2} isHidden={expanded !== null && expanded !== 2}
                onClick={() => toggle(2)} isDark={isDark}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Processed and stored over 220 million tweets in a MySQL database with a Docker containerized web scraping program</li>
                    <li>Manually labelled over 2,000 entries utilizing Microsoft Excel to prepare data for further analysis</li>
                    <li>Scripted multiple pipelines with Python, Pandas, VS Code, and Google Colab to evaluate pre-trained Hugging Face BERT-based transformers</li>
                    <li>Won 2nd place in the GMiS National Research Competition (Computing)</li>
                </ul>
            </Card>
        </div>
    )
}

export function ExperienceR() {
    return (
        <></>
    )
}
