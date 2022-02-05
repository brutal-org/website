import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (<button onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }}>
        {theme === 'light' ? '🌙' : '☀️'}
    </button>)
}