import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link";
import Logo from "../components/common/Logo";


export default function Home() {
  return (
    <div className="max-w-prose m-auto flex flex-col gap-8 grow">
      <Head>
        <title>BRUTAL</title>
      </Head>
      <Logo className="w-32" />
      <h1 className="text-4xl">The Brutal Operating System</h1>
      <p>
        Striking modernist shapes and bold use of modern C are the hallmarks of BRUTAL. Inspired by brutalist design BRUTAL combines the ideals of UNIX from the 1970s with modern technology and engineering.
      </p>
      <div className="flex gap-4">
        <Link href="https://github.com/brutal-org/brutal">
          <div className="uppercase rounded p-4 bg-black text-white dark:bg-white dark:text-black self-start">
            contribute on GitHub
          </div>
        </Link>
        <Link href="https://github.com/brutal-org/brutal">
          <div className="uppercase rounded p-4 bg-black text-white dark:bg-white dark:text-black self-start">
            download the latest release
          </div>
        </Link>
      </div>
    </div>
  )
}

