import { useEffect } from "react"

export default function ScrollBar({setView, locationRef}: {setView: Function, locationRef: {current: number}}){
    const screenSize = window.innerHeight
    const maxScroll = (screenSize * 6) - 1
    let direction = "down"

    useEffect(() => {
        window.addEventListener('wheel', (e) => {
            let location = locationRef.current
            
            if (e.deltaY !== 0) 
                direction = e.deltaY < 0 ? 'up' : 'down'
            if (direction === 'up')
                location = Math.max(location + e.deltaY, 0)
            if (direction === 'down')
                location = Math.min(maxScroll, location + e.deltaY)

            locationRef.current = location
            ScrollAnimation(setView, location, screenSize)
        })
    
        return () => window.removeEventListener('wheel', (e) => {
            let location = locationRef.current
            
            if (e.deltaY !== 0) 
                direction = e.deltaY < 0 ? 'up' : 'down'
            if (direction === 'up')
                location = Math.max(location + e.deltaY, 0)
            if (direction === 'down')
                location = Math.min(maxScroll, location + e.deltaY)

            locationRef.current = location
            ScrollAnimation(setView, location, screenSize)
        })
      }, [])

    return(
        <></>
    )
}


export function ScrollAnimation(setView: Function, location: number, screenSize: number){
    let mapping = ['Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', 'Skills']
    const idx = Math.floor(location / screenSize)
    const id = mapping[idx]
    setView(id)
}