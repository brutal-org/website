import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-white dark:bg-black text-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}