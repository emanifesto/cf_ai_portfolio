import GitHub from '../assets/svg/github.svg'
import Email from '../assets/svg/email.svg'
import Linkedin from '../assets/svg/linkedin.svg'


export default function Links(){
    return(
        <div className='flex gap-4 fixed z-1 bottom-4 left-[50%] translate-x-[-50%]'>
            <Link url="mailto:babayeme@kean.edu" svg={Email} />
            <Link url="https://linkedin.com/in/babayeme" svg={Linkedin} />
            <Link url="https://github.com/emanifesto" svg={GitHub} />
        </div>
    )
}

function Link({ url, svg }: {url:string, svg:string}){
    return(
        <a href={url} target='/blank'>
            <img src={svg} className='size-12'></img>
        </a>
    )
}