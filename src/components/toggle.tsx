import type { MouseEventHandler } from "react"
export default function ThemeToggle( {dark, toggle}: {dark: boolean, toggle: MouseEventHandler}) {

    return (
        <button onClick={toggle} aria-label="Toggle dark mode"
            className="fixed z-10 bottom-4 left-4 p-3 rounded-full backdrop-blur-md cursor-pointer
                       transition-all duration-300 hover:scale-110">
            <span className="text-2xl select-none">
                {dark ? '☀️' : '🌙'}
            </span>
        </button>
    )
}
