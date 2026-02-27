import { useState } from 'react'
import { HighlightBlue } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'

export function ProjectsL() {
    return (
        <></>
    )
}

export function ProjectsR() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pl-8 py-10 pr-8">
            <h2 className="text-3xl font-extrabold mb-4">Projects</h2>

            <Card
                title={<>Published Chrome Extension |<HighlightBlue>Adobe Stock Metadata Automation</HighlightBlue></>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Automated upload workflow using HTML injection and the OpenAI API to assist Adobe Stock photo contributors</li>
                    <li>Stats: 30+ installs, 100+ impressions</li>
                    <li><a href="https://github.com/emanifesto/Adobe-Extension" className={`underline dark:text-blue-300 dark:hover:text-blue-100 text-blue-600 hover:text-blue-800`}>github.com/emanifesto/Adobe-Extension</a></li>
                </ul>
            </Card>
        </div>
    )
}
