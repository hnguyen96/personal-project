"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const { userId } = useAuth();

    return (<div className="navbar">
        {/* Nav bar */}
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-accent mt-3 z-[1] p-2 shadow rounded-box w-52">
                    <li>
                        <a onClick={() => router.push("/about")}>
                            About me
                        </a>
                    </li>

                    <li>
                        <a>
                            Experiences
                        </a>
                    </li>
                </ul>
            </div>

            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal text-[#ce9c4b]">
                    <li>
                        <a onClick={() => router.push("/about")}>about</a>
                    </li>

                    <li>
                        <a onClick={() => router.push("/comments")}>comments</a>
                    </li>

                    <li>
                        <a>content</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="navbar-center ">
            <a className="hover:cursor-pointer" onClick={() => router.push("/")}>
                <Image
                    src="/icons/typography.png"
                    width={100}
                    height={58.4}
                    alt=""
                />
            </a>
        </div>
        <div className="navbar-end">
            {!userId && (
                <a onClick={() => router.push("/sign-in")} className="btn bg-transparent border-none hover:bg-transparent hover:underline">Login</a>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>);
}