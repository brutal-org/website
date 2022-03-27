import { useTheme } from "next-themes"
import { useEffect, useState, Fragment } from "react"

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Fragment>
            <button className="block dark:hidden" onClick={() => setTheme('dark')}>
                🌙
            </button>
            <button className="hidden dark:block" onClick={() => setTheme('light')}>
                ☀️
            </button>
        </Fragment>
    )
}