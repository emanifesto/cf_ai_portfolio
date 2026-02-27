import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeContextType {
    isDark: boolean
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
    isDark: true,
    toggleTheme: () => { },
})

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDark, setIsDark] = useState(true)
    const toggleTheme = () => setIsDark(prev => !prev)

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
