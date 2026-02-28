import { useState } from 'react'
import Bold, { HighlightRed, HighlightBlue } from '../utils/highlight.tsx'
import Card from '../utils/card.tsx'
import { Link } from './links.tsx'
import Github from '../assets/svg/github2.svg'
import Chrome from '../assets/svg/chrome.svg'
import Website from '../assets/svg/website.svg'

export function ProjectsL() {
    return (
        <></>
    )
}

export function ProjectsR() {
    const [expanded, setExpanded] = useState<number | null>(null)
    const toggle = (i: number) => setExpanded(prev => prev === i ? null : i)

    return (
        <div className="max-w-[90%] w-[75%] font-semibold">
            <Card
                title={<HighlightRed size="text-3xl">Adobe Stock Metadata Automation</HighlightRed>}
                caption={<Bold>Published Chrome Extension</Bold>}
                date="Feb. 2025 – Apr. 2025"
                isOpen={expanded === 0} isHidden={expanded !== null && expanded !== 0}
                onClick={() => toggle(0)}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Automated upload workflow using HTML injection and the OpenAI API to assist Adobe Stock photo contributors</li>
                    <li>Stats: 30+ installs, 100+ impressions</li>
                    <div className='flex justify-around mt-5'>
                        <Link url="https://github.com/emanifesto/Adobe-Extension" svg={Github} alt="a GitHub svg icon"/>
                        <Link url="https://chromewebstore.google.com/detail/adobe-stock-metadata-auto/fajbmjncoeajgpjbaeaibkeceecdfapj" svg={Chrome} alt="a Chrome svg icon" />
                        <Link url="https://damisaas.com/asma" svg={Website} alt="a link svg icon" invert={true}/>
                    </div>
                </ul>
            </Card>

            <Card
                title={<HighlightBlue size="text-3xl">Hangman</HighlightBlue>}
                caption={<Bold>Work in progress!!!</Bold>}
                date="Jan. 2026 – Present"
                isOpen={expanded === 1} isHidden={expanded !== null && expanded !== 1}
                onClick={() => toggle(1)}
            >
                <ul className="list-disc pl-5 mt-1 text-base">
                    <li>Creating a hangman game with competitive aspect of global leaderboard</li>
                    <li>Using Google OAuth to separate user accounts and manage sessions</li>
                    <li>Leaderboard daily and weekly resets managed with backend cron jobs</li>
                    <div className='flex justify-around mt-5'>
                        <Link url="https://github.com/emanifesto/hangman" svg={Github} alt="a GitHub svg icon"/>
                        <Link url="https://hangman.emmanuelbabayemi37.workers.dev/" svg={Website} alt="a link svg icon" invert={true}/>
                    </div>
                </ul>
            </Card>
        </div>
    )
}
