import Link from "next/link";
import { useTheme } from 'next-themes'
import ThemeToggle from "../common/ThemeToggle";
import Logo from "../common/Logo";

function NavLink(props) {
  return <Link href={props.href}><div className="uppercase cursor-pointer">{props.text}</div></Link>
}

export function Navbar() {
  return <header className="backdrop-blur bg-white/80 dark:bg-black/80  top-0 sticky p-4 mb-8  sep-bottom">
    <div className="flex gap-4 items-center max-w-prose m-auto">
      <Link href="/"><Logo className="w-8" /></Link>
      <NavLink text="about" href="/" />
      <NavLink text="blog" href="/articles" />
      <NavLink text="github" href="/articles" />
      <div className="grow" />
      <ThemeToggle />
    </div>
  </header>;
}

