import Link from "next/link";

export default function Button(props) {
    return (
        <Link href={props.href} className={props.className}>
            <div className="cursor-pointer uppercase rounded p-4 bg-black text-white dark:bg-white dark:text-black self-start">
                {props.children}
            </div>
        </Link>
    );
}
