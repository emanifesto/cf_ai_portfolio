import GitHub from '../assets/svg/github.svg'
import Email from '../assets/svg/email.svg'
import Linkedin from '../assets/svg/linkedin.svg'
import { useTheme } from '../utils/ThemeContext.tsx'


export default function Links() {
    const { isDark } = useTheme()
    return (
        <div className='flex gap-4 fixed z-1 bottom-4 left-[50%] translate-x-[-50%]'>
            <Link url="mailto:babayeme@kean.edu" svg={Email} alt="a svg email icon" isDark={isDark} />
            <Link url="https://linkedin.com/in/babayeme" svg={Linkedin} alt="a svg Linkedin icon" isDark={isDark} />
            <Link url="https://github.com/emanifesto" svg={GitHub} alt="a svg Github icon" isDark={isDark} />
        </div>
    )
}

function Link({ url, svg, alt, isDark }: { url: string, svg: string, alt: string, isDark: boolean }) {
    return (
        <a href={url} target='/blank'>
            <img src={svg} alt={alt} className={`size-12 transition-all duration-300 ${isDark ? '' : 'invert'}`}></img>
        </a>
    )
}