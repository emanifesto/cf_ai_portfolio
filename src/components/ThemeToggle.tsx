import { useTheme } from '../utils/ThemeContext.tsx'

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="fixed z-10 bottom-4 left-4 p-3 rounded-full backdrop-blur-md cursor-pointer
                       transition-all duration-300 hover:scale-110"
            style={{
                backgroundColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
            }}
            aria-label="Toggle dark mode"
        >
            <span className="text-2xl select-none">
                {isDark ? '☀️' : '🌙'}
            </span>
        </button>
    )
}
