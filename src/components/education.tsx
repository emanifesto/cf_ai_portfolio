import GLAB from '../assets/kean/GLAB.webp'
import Hynes from '../assets/kean/Hynes.jpg'
import NAAB from '../assets/kean/NAAB.webp'
import MSC from '../assets/kean/MSC.jpg'
import STEM from '../assets/kean/STEM.jpg'
import { MediaContainer } from '../utils/media.tsx'
import Bold, { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'

export function EducationL() {
    const images = [GLAB, Hynes, NAAB, MSC, STEM]
    const idx = Math.floor(Math.random() * images.length)
    const image = images[idx]

    return (
        <MediaContainer image={image} text="Generating image..."/>
    )
}

export function EducationR() {
    return (
        <div className="max-w-[90%] font-semibold py-10">
            <HighlightBlue size='text-4xl lg:text-6xl'>AI</HighlightBlue><Bold size="text-2xl lg:text-4xl"> at Kean U'</Bold>
            <ul className='list-disc mt-10 pl-8 text-lg lg:text-xl'>
                <li>3.55 GPA (4.0 Scale)</li>
                <li><Bold>Cybersecurity</Bold> and <Bold>Music</Bold> minors</li>
                <li>Object-Oriented Programming</li>
                <li>Data Structures & Algorithms</li>
                <li><HighlightRed size='text-lg lg:text-xl'>Software Development</HighlightRed></li>
                <li><HighlightRed size='text-lg lg:text-xl'>Deep Learning</HighlightRed></li>
            </ul>
        </div>
    )
}