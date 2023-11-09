"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    const { userId } = useAuth();

    return (<div className="navbar bg-neutral shadow-2xl">
        {/* Mobile nav bar */}
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-accent mt-3 z-[1] p-2 shadow rounded-box w-52">
                    <li>
                        <a>
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

            <a>
                <Image
                    src="/icons/typography.png"
                    width={100}
                    height={58.4}
                    alt=""
                />
            </a>
        </div>

        {/* Computer nav bar */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-5">
                <li>
                    <div className="tooltip tooltip-bottom tooltip-accent" data-tip="About me">
                        <a>
                            <Image
                                src="/icons/about.svg"
                                width={23}
                                height={23}
                                alt="Person icon"
                            />
                        </a>
                    </div>
                </li>

                <li>
                    <div className="tooltip tooltip-bottom tooltip-accent" data-tip="Experiences">
                        <a>
                            <Image
                                src="/icons/experiences.svg"
                                width={23}
                                height={23}
                                alt="Computer icon"
                            />
                        </a>
                    </div>
                </li>

                <li>
                    <div className="tooltip tooltip-bottom tooltip-accent" data-tip="Comment">
                        <a>
                            <Image
                                src="/icons/comment.svg"
                                width={23}
                                height={23}
                                alt="Messsage icon"
                            />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            {!userId && (
                <a onClick={() => router.push("/sign-in")} className="btn bg-transparent border-none hover:bg-transparent hover:underline">Login</a>
            )}
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>);
}