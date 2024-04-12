'use client';

import Logo from "@/components/Logo";

export default function Navbar({setSideBarOpen, isSideBarOpen}) {
    return (
        <nav className='navbar bg-base-200'>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost" onClick={()=> {
                    setSideBarOpen(!isSideBarOpen)
                    console.log(isSideBarOpen)
                } }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-5 h-5 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

            </div>
            <div className="flex-1 px-3">
                <Logo></Logo>
            </div>
        </nav>
    )
}