import { useTheme } from "next-themes";
import { useEffect, useState, Fragment } from "react";

export default function Logo(props) {
    const [mounted, setMounted] = useState(false)
    const { theme } = useTheme()

    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return <Fragment>
        <img
            className={"hidden dark:block " + props.className}
            src="/scafold/logo-dark.svg" />
        <img
            className={"block dark:hidden " + props.className}
            src="/scafold/logo-light.svg" />
    </Fragment>
}