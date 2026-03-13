import { useState } from 'react'
import Bold, { HighlightRed, HighlightBlue } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'
import { Link } from './links.tsx'
import { MediaContainer } from '../utils/media.tsx'
import Github from '../assets/svg/github2.svg'
import Chrome from '../assets/svg/chrome.svg'
import Website from '../assets/svg/website.svg'
import ASMADemo from '../assets/projects/ASMA demo.mp4'
import HangmanDemo from '../assets/projects/Hangman Demo.mp4'

export function ProjectsL({expandedProject}: {expandedProject: number | null}) {
    return (
        <>
            {expandedProject === null && <MediaContainer  text="Click on a project"/>}
            {expandedProject === 0 && <MediaContainer video={ASMADemo} autoplay={true}/>}
            {expandedProject === 1 && <MediaContainer video={HangmanDemo} autoplay={true}/>}
        </>
    )
}

export function ProjectsR({expandedProject, setExpandedProject}: {expandedProject: number | null, setExpandedProject: React.Dispatch<React.SetStateAction<number | null>>}) {
    const toggle = (i: number) => {
        setExpandedProject(prev => prev === i ? null : i)
    }

    return (
        <div className="max-w-[90%] w-[90%] lg:w-[75%] {-mb-18} font-semibold">
            <Card
                title={<HighlightRed size="text-xl sm:text-3xl">Adobe Stock Metadata Automation</HighlightRed>}
                caption={<Bold>Published Chrome Extension</Bold>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expandedProject === 0} isHidden={expandedProject !== null && expandedProject !== 0}
                onClick={() => toggle(0)}
            >
                <li>Automated upload workflow using HTML injection and the OpenAI API to assist Adobe Stock photo contributors</li>
                <li>Stats: 30+ installs, 100+ impressions</li>
                <div className='flex justify-around mt-5'>
                    <Link url="https://github.com/emanifesto/Adobe-Extension" svg={Github} alt="a GitHub svg icon" />
                    <Link url="https://chromewebstore.google.com/detail/adobe-stock-metadata-auto/fajbmjncoeajgpjbaeaibkeceecdfapj" svg={Chrome} alt="a Chrome svg icon" />
                    <Link url="https://damisaas.com/asma" svg={Website} alt="a link svg icon" invert={true} />
                </div>
            </Card>

            <Card
                title={<HighlightBlue size="text-xl sm:text-3xl">Hangman</HighlightBlue>}
                caption={<Bold>Work in progress!!!</Bold>}
                date="Jan. 2026 – Present"
                isOpen={expandedProject === 1} isHidden={expandedProject !== null && expandedProject !== 1}
                onClick={() => toggle(1)}
            >
                <li>Creating a hangman game with competitive aspect of global leaderboard</li>
                <li>Using Google OAuth to separate user accounts and manage sessions</li>
                <li>Leaderboard daily and weekly resets managed with backend cron jobs</li>
                <div className='flex justify-around mt-5'>
                    <Link url="https://github.com/emanifesto/hangman" svg={Github} alt="a GitHub svg icon" />
                    <Link url="https://hangman.emmanuelbabayemi37.workers.dev/" svg={Website} alt="a link svg icon" invert={true} />
                </div>
            </Card>
        </div>
    )
}
