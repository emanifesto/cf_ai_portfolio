import { useState } from 'react'
import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'


export function ExperienceL() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold pr-8 py-10 pl-8">
            <h2 className="text-3xl font-extrabold mb-4">Experience</h2>

            <Card
                title={<>Software Engineer & Founder |<HighlightBlue>Dami SaaS</HighlightBlue></>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)}
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
                onClick={() => toggle(1)}
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
                onClick={() => toggle(2)}
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
