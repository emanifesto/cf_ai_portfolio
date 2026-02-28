import GitHub from '../assets/svg/github.svg'
import Email from '../assets/svg/email.svg'
import Linkedin from '../assets/svg/linkedin.svg'


export default function Links() {
    return (
        <div className='flex items-center gap-4 fixed z-1 bottom-4 left-[50%] translate-x-[-50%]'>
            <div className='dark:bg-gray-400 bg-gray-700 fixed -left-5 -translate-x-full h-0.5 w-5'></div>
            <div className='dark:bg-gray-400 bg-gray-700 fixed -right-5 translate-x-full h-0.5 w-5'></div>
            <Link url="mailto:babayeme@kean.edu" svg={Email} alt="a email svg icon" invert={true}/>
            <Link url="https://linkedin.com/in/babayeme" svg={Linkedin} alt="a Linkedin svg icon" invert={true}/>
            <Link url="https://github.com/emanifesto" svg={GitHub} alt="a Github svg icon" invert={true}/>
        </div>
    )
}

export function Link({url, svg, alt, invert = false}: { url: string, svg: string, alt: string, invert?:boolean}) {
    return (
        <a href={url} target='/blank' className='flex items-end animate-[pulse_4s_infinite]'>
            <img src={svg} alt={alt} className={`size-12 transition-all duration-300 ${invert && 'dark:invert'} inline`}></img>
        </a>
    )
}