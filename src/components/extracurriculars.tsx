import { useState } from 'react'
import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'

export function ExtracurricularsL() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pr-8 py-10 pl-8">
            <h2 className="text-3xl font-extrabold mb-4">Extracurriculars & Leadership</h2>

            <Card
                title={<>Student Scholar |<HighlightRed>IUSE Scholar Academy Research Program</HighlightRed></>}
                date="May 2025 – July 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)}
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
                onClick={() => toggle(1)}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Introduced to Python scripting, machine learning fundamentals, and project management through mentor supervision</li>
                </ul>
            </Card>

            <Card
                title={<><HighlightRed>Presentations</HighlightRed></>}
                date=""
                isOpen={expanded === 2} isHidden={expanded !== null && expanded !== 2}
                onClick={() => toggle(2)}
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
