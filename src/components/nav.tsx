export default function Navigation() {
    const selected = "Home"
    return (
        <div className={`flex gap-7 rounded-full backdrop-blur-3xl drop-shadow-xs px-5 pb-3 pt-2 fixed z-1 top-4 left-[50%] 
            translate-x-[-50%] border-t-2 border-l-2 transition-colors duration-500 dark:bg-black/20 dark:border-black
            bg-white/60 border-gray-200}`}>
                
            <Section title="Home" selected={selected} />
            <Section title="Education" selected={selected} />
            <Section title="Experience" selected={selected} />
            <Section title="Projects" selected={selected} />
            <Section title="Extracurricular" selected={selected} />
            <Section title="Skills" selected={selected} />
        </div>
    )
}

function Section({ title, selected}: { title: string, selected: string}) {
    const textColor = selected == title ? "dark:text-gray-200 text-gray-900 " : 'dark:text-gray-500 text-gray-400'

    return (
        <a className={`text-2xl ${textColor} dark:hover:text-gray-200 hover:text-gray-900`}>
            <p>{title}</p>
        </a>
    )
}