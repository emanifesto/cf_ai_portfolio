export default function Navigation(){
    const selected = "Home"
    return(
        <div className="flex gap-7 rounded-full bg-black/20 backdrop-blur-3xl drop-shadow-xs drop-shadow-whie px-5 pb-3 pt-2 fixed z-1 top-4 left-[50%] translate-x-[-50%] border-black border-t-2 border-l-2">
            <Section title="Home" selected={selected}/>
            <Section title="Education" selected={selected}/>
            <Section title="Experience" selected={selected}/>
            <Section title="Projects" selected={selected}/>
            <Section title="Extracurricular" selected={selected}/>
            <Section title="Skills" selected={selected}/>
        </div>
    )
}

function Section({ title, selected }: {title: string, selected: string}){
    const textColor = selected == title ? 'text-gray-200' : 'text-gray-500'
    return (
        <a className={`text-2xl ${textColor} hover:text-gray-200`}>
            <p>{title}</p>
        </a>
    )
}