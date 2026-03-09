import { useState, useEffect } from "react"

export default function ScrollBar({setView}: {setView: Function}){
    const [wheelDetails, updateWheelDetails] = useState<{location: Number, direction: string}>({location: 0, direction: "down"})

    useEffect(() => {
        window.addEventListener('wheel', (e) => ScrollAnimation(e, setView))
    
        return () => window.removeEventListener('wheel', (e) => ScrollAnimation(e, setView))
      }, [])

    return(
        <></>
    )
}


export function ScrollAnimation(event: {deltaY: number}, setView: Function){

    const container = document.getElementById('outer-container')
    const scrollDistance = container?.getBoundingClientRect().top
    const direction = event.deltaY < 0 ? 'up' : 'down'
    const screen = window.innerHeight
    let mapping = ['Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', 'Skills']

    let id = "Home"
    if (scrollDistance !== undefined){
        const location = Math.floor(scrollDistance * -1 / screen)
        id = mapping[location]
    }
    setView(id)
}