import GLAB from '../assets/kean/GLAB.webp'
import Hynes from '../assets/kean/Hynes.jpg'
import NAAB from '../assets/kean/NAAB.webp'
import MSC from '../assets/kean/MSC.jpg'
import STEM from '../assets/kean/STEM.jpg'
import { LoadingImage } from '../utils/loading.tsx'
import { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'

export function EducationL() {
    const rng = Math.floor(Math.random() * 5)
    const images = [GLAB, Hynes, NAAB, MSC, STEM]
    const image = images[rng]

    return (
        <LoadingImage />
    )
}

export function EducationR() {
    return (
        <div className="max-w-[90%] w-[60%] font-semibold pl-8 py-10">
            <ul className='list-disc list-'>
                <li>Junior at Kean University</li>
                <li>Artificial Intelligence Major</li>
                <li>GPA of 3.55</li>
                <li>Object-Oriented</li>
                <li>Data Structures & Algorithms</li>
                <li><HighlightBlue>Software Development</HighlightBlue></li>
                <li><HighlightRed>Deep Learning</HighlightRed></li>
            </ul>
        </div>
    )
}