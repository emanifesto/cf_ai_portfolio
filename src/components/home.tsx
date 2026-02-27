import { HighlightRed, HighlightBlue } from "../utils/highlight.tsx"
import Headshot from '../assets/photo/headshot.jpg'

export function HomeL() {
    return (
        <div className="tracking-wide text-center max-w-[90%] font-semibold px-4 py-10">
            <p>Hello, I'm </p>
            <h1><HighlightRed size="text-6xl">Emmanuel Babayemi</HighlightRed></h1>
            <p className="dark:text-gray-400 text-gray-700 text- mt-10 w-[90%] mx-auto">
                A Software Developer with a specialization in
                <HighlightBlue>TypeScript</HighlightBlue> and <HighlightBlue>React</HighlightBlue> development.
                I am well-versed in deep learning and leveraging LLMs through API endpoints. Currently, I major
                in <HighlightBlue>Artificial Intelligence</HighlightBlue> at Kean University where I'm committed
                to continuous growth in software development.
            </p>
        </div>
    )
}

export function HomeR() {
    return (
        <img src={Headshot} className="rounded-full max-h-[60%] w-max aspect-square relative drop-shadow-lg drop-shadow-black " />
    )
}