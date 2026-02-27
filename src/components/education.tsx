import GLAB from '../assets/kean/GLAB.webp'
import Hynes from '../assets/kean/Hynes.jpg'
import NAAB from '../assets/kean/NAAB.webp'
import MSC from '../assets/kean/MSC.jpg'
import STEM from '../assets/kean/STEM.jpg'
import { LoadingImage } from '../utils/loading.tsx'
import Bold, { HighlightBlue, HighlightRed } from '../utils/highlight.tsx'

export function EducationL(){
    const rng = Math.floor(Math.random() * 5)
    const images= [GLAB, Hynes, NAAB, MSC, STEM]
    const image = images[rng]
    
    return(
        <LoadingImage />
    )
}

export function EducationR(){
    return(
        <div className="text-white max-w-[90%] w-[70%] font-semibold px-4 py-10 rounded-xl bg-linear-to-tr from-black/30 to-black/10">
            <ul className='list-disc list-inside'>
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