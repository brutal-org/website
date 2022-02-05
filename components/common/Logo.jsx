import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Logo(props) {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return <img
        className={props.className}
        src={theme === 'dark' ? "/scafold/logo-dark.svg" : "/scafold/logo-light.svg"} />
}