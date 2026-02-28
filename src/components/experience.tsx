import { useState } from 'react'
import Bold, { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'


export function ExperienceL() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold">

            <Card title={<HighlightBlue size='text-3xl'>Software Engineer & Founder</HighlightBlue>}
                caption={<Bold>Dami SaaS</Bold>} date="Feb. 2025 – Apr. 2025" onClick={() => toggle(0)}
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Utilized cloud compute serverless workers hosted on Cloudflare to develop a RESTful API and process Stripe webhooks</li>
                    <li>Interacted with SQLite RDBMS to handle user authentication and access provisioning for premium features</li>
                    <li>Improved documentation comprehension to effectively utilize multiple external APIs (e.g. Chrome, Stripe, OpenAI)</li>
                    <li>Developed Chrome extension using JavaScript, HTML, and CSS to automate uploading stock photography to Adobe Stock</li>
                    <li>Improved upload workflow by over 300% measured by throughput, maintenance, and flexibility compared to similar tools</li>
                </ul>
            </Card>

            <Card title={<HighlightRed size='text-3xl'>Java Supplemental Instructor</HighlightRed>}
                caption={<Bold>Kean University CS/IT Department</Bold>} date="Jan. 2025 – May 2025"
                isOpen={expanded === 1} isHidden={expanded !== null && expanded !== 1}
                onClick={() => toggle(1)}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Provided academic support for 100+ students enrolled in the Fundamentals of Computer Science Course</li>
                    <li>Curated lesson plans and hosted daily in-person and online sessions to boost academic performance by 8%</li>
                </ul>
            </Card>

            <Card
                title={<HighlightBlue size='text-3xl'>AI/ML Researcher</HighlightBlue>}
                caption={<Bold>Kean University</Bold>} date="May 2024 – Present"
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
