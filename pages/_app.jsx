import '../styles/globals.css'
import { Navbar } from '../components/scafold/Navbar'
import { Footer } from "../components/scafold/Footer"
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <div className="flex flex-col min-h-screen ">
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS Feed for brutal"
            href="/rss/feed.xml"
          />
          <link
            rel="alternate"
            type="application/rss+json"
            title="RSS Feed for brutal"
            href="/rss/feed.json"
          />
        </Head>
        <Navbar />
        <div className="flex grow">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App
