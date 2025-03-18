import { FileText } from "lucide-react";
import Link from "next/link";
import NavLink from "./nav-link";

export default function Header() {
    const isLoggedIn = false;
    return (
        <nav className="container flex justify-between items-center py-4 lg:px-8 px-2">
            <div className="flex justify-between items-center">
                <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
                    <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transition-all duration-300" />
                    <span className="text-gray-900 text-xl font-bold">Snapmarry</span>
                </NavLink>
            </div>
            <div className="flex lg:justify-center items-center gap-4 lg:gap-12 lg:items-center">
                <NavLink href="/#pricing" className="">Pricing</NavLink>
               {isLoggedIn? <NavLink href="/dashboard" className="">Your Summaries</NavLink> : ""}
            </div>
            <div className="flex lg:justify-end">
                {isLoggedIn ? (
                    <div className="flex gap-2 items-center">
                        <NavLink href="/upload" className="">Upload a PDF</NavLink>
                        <div>Pro</div>
                        <button>User</button>
                    </div>
                ) : (
                    <div>
                        <NavLink href="/sign-up" className="">Sign Up</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
}
