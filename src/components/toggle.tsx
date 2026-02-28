import type { MouseEventHandler } from "react"
import On from '../assets/svg/on.svg'
import Off from '../assets/svg/off.svg'

export default function ThemeToggle( {dark, toggle}: {dark: boolean, toggle: MouseEventHandler}) {

    return (
        <button onClick={toggle} aria-label="Toggle dark mode" className="cursor-pointer w-max bg-black/20 dark:bg-blue-600/40 rounded-full">
                {dark ? <img src={On} className="aspect-square size-10" alt="a svg sun icon" />
                : <img src={Off} className="aspect-square size-10" alt="a svg crescent moon icon" />
                }
        </button>
    )
}
