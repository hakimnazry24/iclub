'use client';
import {useEffect, useState} from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/navigation";
export default function NavbarWithSidebar({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dynamicRoute = useRouter()
    // useEffect(() => setIsSidebarOpen(false), [dynamicRoute]);
    return (
        <>
            <section className=''>
                <Navbar setSideBarOpen={setIsSidebarOpen} isSideBarOpen={isSidebarOpen}></Navbar>
                <SideBar clubId={1} isSidebarOpen={isSidebarOpen}></SideBar>
            </section>
        </>
    );
}