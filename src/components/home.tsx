import Bold, {HighlightRed, HighlightBlue} from "../utils/highlight.tsx"
import Headshot from '../assets/photo/headshot.jpg'

export function HomeL(){
    return(
        <div className="text-center max-w-[90%] font-semibold px-4 py-10 rounded-xl bg-linear-to-tr from-white/30 to-white/10">
            <p>
                Hello, I'm <Bold>Emmanuel Babayemi.</Bold> A Sofware Developer with a specialization in 
                <HighlightBlue>TypeScript</HighlightBlue> and <HighlightBlue>React</HighlightBlue> development. 
                I am well-versed in deep learning and leveraging LLMs through API endpoints. Currently, I major 
                in <HighlightRed>Artificial Intelligence</HighlightRed> at Kean University where I'm committed 
                to continuous growth in software development.
            </p>
        </div>
    )
}

export function HomeR(){
    return(
        <img src={Headshot} className="rounded-full max-h-[60%] w-max aspect-square relative drop-shadow-lg drop-shadow-black "/>
    )
}