import { useTheme } from '../utils/ThemeContext.tsx'

export default function Navigation() {
    const { isDark } = useTheme()
    const selected = "Home"
    return (
        <div className={`flex gap-7 rounded-full backdrop-blur-3xl drop-shadow-xs px-5 pb-3 pt-2 fixed z-1 top-4 left-[50%] translate-x-[-50%] border-t-2 border-l-2 transition-colors duration-500 ${isDark
                ? 'bg-black/20 border-black'
                : 'bg-white/60 border-gray-200'
            }`}>
            <Section title="Home" selected={selected} isDark={isDark} />
            <Section title="Education" selected={selected} isDark={isDark} />
            <Section title="Experience" selected={selected} isDark={isDark} />
            <Section title="Projects" selected={selected} isDark={isDark} />
            <Section title="Extracurricular" selected={selected} isDark={isDark} />
            <Section title="Skills" selected={selected} isDark={isDark} />
        </div>
    )
}

function Section({ title, selected, isDark }: { title: string, selected: string, isDark: boolean }) {
    const activeColor = isDark ? 'text-gray-200' : 'text-gray-900'
    const inactiveColor = isDark ? 'text-gray-500' : 'text-gray-400'
    const hoverColor = isDark ? 'hover:text-gray-200' : 'hover:text-gray-900'
    const textColor = selected == title ? activeColor : inactiveColor
    return (
        <a className={`text-2xl ${textColor} ${hoverColor}`}>
            <p>{title}</p>
        </a>
    )
}