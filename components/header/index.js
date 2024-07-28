import react from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-dvw flex flex-row bg-slate-300 px-6 h-1/3 m-28 font-bold justify-between">
            <Link href="/HomePage"><p className="mx-5 ml-4">Home</p></Link>
            <Link href="/about"><p className="mr-4">About</p></Link>
            <Link href="/profile"><p className="mr-4">Wiecej</p></Link>
        </div>
    );
}