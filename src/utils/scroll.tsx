import { useEffect } from "react"

export default function ScrollBar({setView}: {setView: Function}){

    useEffect(() => {
        window.addEventListener('wheel', (e) => ScrollAnimation(e, setView))
    
        return () => window.removeEventListener('wheel', (e) => ScrollAnimation(e, setView))
      }, [])

    return(
        <></>
    )
}


export function ScrollAnimation(event: {deltaY: number}, setView: Function, id?: string, oldView?: string){

    const container = document.getElementById('outer-container')
    const scrollDistance = container?.getBoundingClientRect().top
    console.log(scrollDistance)
    const direction = event.deltaY < 0 ? 'up' : 'down'
    const screen = window.innerHeight
    let mapping = ['Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', 'Skills']

    id = "Home"
    if (scrollDistance !== undefined){
        const location = Math.floor(scrollDistance * -1 / screen)
        id = mapping[location]
    }

    if (direction === 'up')
        mapping = ['Skills', 'Extracurriculars', 'Projects', 'Experience', 'Education', 'Home']

    for (const element of mapping){
        if (element !== id){
            const current = document.getElementById(element)
            current?.classList.replace('opacity-100', 'opacity-0')
            current?.classList.add('invisible')
            current?.classList.remove('sticky')
            continue
        }

        const current = document.getElementById(element)
        current?.classList.add('sticky')
        current?.classList.remove('invisible')
        current?.classList.replace('opacity-0', 'opacity-100')
        break
    }
    setView(id)
}