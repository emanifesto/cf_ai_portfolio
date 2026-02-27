import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'

export function SkillsL() {
    return (
        <></>
    )
}

export function SkillsR() {
    return (
        <div className="max-w-[90%] w-[75%] font-semibold">
            <div className="mb-4">
                <p className="font-extrabold"><HighlightBlue>Technical</HighlightBlue></p>
                <p className="text-base mt-1">TypeScript/JavaScript, React, Tailwind, HTML, CSS, Python, PyTorch, Java</p>
            </div>

            <div className="mb-4">
                <p className="font-extrabold"><HighlightRed>Tools</HighlightRed></p>
                <p className="text-base mt-1">Visual Studio, Git, Cloudflare Developer Platform, OAuth, MySQL Suite, Google Colab, Microsoft Suite, Docker</p>
            </div>

            <div>
                <p className="font-extrabold"><HighlightBlue>Concepts</HighlightBlue></p>
                <p className="text-base mt-1">Full-Stack Development, APIs, Project Management, Machine Learning, Natural Language Processing</p>
            </div>
        </div>
    )
}
