import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'
import { MediaContainer } from '../utils/media.tsx'
import Skills from '../assets/svg/skills.svg'

export function SkillsL() {
    return (
        <MediaContainer image={Skills} />
    )
}

export function SkillsR() {
    return (
        <div className="max-w-[90%] w-[90%] sm:w-[75%] font-semibold">
            <div className="mb-5">
                <p className="font-extrabold"><HighlightBlue size='text-2xl lg:text-3xl'>Technical</HighlightBlue></p>
                <p className="text-sm sm:text-base">TypeScript/JavaScript, React, Tailwind, HTML, CSS, Python, PyTorch, Java</p>
            </div>

            <div className="mb-4">
                <p className="font-extrabold"><HighlightRed size='text-2xl lg:text-3xl'>Tools</HighlightRed></p>
                <p className="text-sm sm:text-base">Visual Studio, Git, Cloudflare Developer Platform, OAuth, MySQL Suite, Google Colab, Microsoft Suite, Docker</p>
            </div>

            <div>
                <p className="font-extrabold"><HighlightBlue size='text-2xl lg:text-3xl'>Concepts</HighlightBlue></p>
                <p className="text-sm sm:text-base">Full-Stack Development, APIs, Project Management, Machine Learning, Natural Language Processing</p>
            </div>
        </div>
    )
}
