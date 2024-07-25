import react from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-dvw bg-slate-300 h-1/3">
            <ul>
                <Link href="/HomePage"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
            </ul>
        </div>
    );
}