'use client';
import {useState} from "react";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function NavbarWithSidebar({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <section className=''>
                <Navbar setSideBarOpen={setIsSidebarOpen} isSideBarOpen={isSidebarOpen}></Navbar>
                <SideBar clubId={1} isSidebarOpen={isSidebarOpen}></SideBar>
            </section>
        </>
    );
}