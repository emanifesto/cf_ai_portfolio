import { useEffect } from "react"

export default function ScrollBar({setView, locationRef}: {setView: Function, locationRef: {current: number}}){
    const screenSize = window.innerHeight
    const maxScroll = (screenSize * 6) - 1
    let direction = "down"

    useEffect(() => {
        window.addEventListener('wheel', (e: any) => {
            if (e.target.id === 'chat' || e.target.parentNode.id === 'chat' || e.target.parentNode.parentNode.id === 'chat'){
                return
            }

            let location = locationRef.current
            
            if (e.deltaY !== 0) 
                direction = e.deltaY < 0 ? 'up' : 'down'
            if (direction === 'up')
                location = Math.max(location + e.deltaY, 0)
            if (direction === 'down')
                location = Math.min(maxScroll, location + e.deltaY)

            locationRef.current = location
            ScrollAnimation(setView, location, screenSize)
        }, {passive:false})
    
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

      useEffect(() => {
        window.addEventListener('wheel', () => {
            const bar = document.getElementById('scrollbar')
            if (bar)
                bar.style.height = ((locationRef.current % screenSize) / screenSize) * 100 + '%'
        })
      }, [])

    return(
        <div className="rounded-sm fixed -rotate-90 top-5 right-[50%] lg:rotate-0 lg:right-5 border-4 dark:border-gray-100 lg:top-[50%] -translate-y-[50%] h-[20%] sm:h-[60%]">
            <div id="scrollbar" className="w-2 bg-blue-500 transition-all ease-out duration-500">
            </div>
            <div className="bg-blue-500 h-full w-2 absolute top-0 -z-1 ease-in-out blur-xl delay-1000 animate-[ping_3s_infinite]">
            </div>
            <div className="absolute w-2 h-full top-0 bg-gray-500/60 -z-1"></div>
        </div>
    )
}


export function ScrollAnimation(setView: Function, location: number, screenSize: number){
    let mapping = ['Home', 'Education', 'Experience', 'Projects', 'Extracurriculars', 'Skills']
    const idx = Math.floor(location / screenSize)
    const id = mapping[idx]
    setView(id)
}