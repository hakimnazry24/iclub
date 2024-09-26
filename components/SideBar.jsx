// Desc: Sidebar component for the dashboard
'use client'
import SideBarButton from "./SideBarButton";
import Logo from "./Logo";
import Image from "next/image";
import clsx from "clsx";

export default function SideBar({clubId, isSidebarOpen}) {

    return (
        <>
            <section
                className={` z-50 absolute  ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full '} w-fit  transition-transform duration-300 ease-in-out`}
                // className={clsx(' bg-orange-400 transition-transform duration-300 ease-in-out', {
                //     'translate-x-0': isSidebarOpen,
                //     '-translate-x-full ': !isSidebarOpen,
                // })}
            >
                <div>
                    <div
                        className=" z-50 bg-white   p-5 flex flex-col gap-6 shadow-sm border  rounded-r-2xl text-nowrap h-screen w-64 ">
                        {/*<div className="pl-3">*/}
                        {/*    <Logo></Logo>*/}
                        {/*</div>*/}
                        <div className="pl-3">
                            <p className="text-gray-400 text-sm">Current club</p>
                            <a href={`../${clubId}`}>
                                <div className="flex gap-2 items-center">
                                    <Image src="/images/motionu.png" width={30} height={30}></Image>
                                    <p className="text-lg font-bold text-gray-700">Motion-U</p>
                                </div>
                            </a>
                        </div>
                        <SideBarButton text={"Dashboard"} link={`/club/${clubId}/dashboard`}></SideBarButton>
                        <SideBarButton text={"General"} link={`/club/${clubId}/general`}></SideBarButton>
                        <SideBarButton text={"Membership"} link={`/club/${clubId}/membership`}></SideBarButton>
                        <SideBarButton text={"Club programmes"} link={`/club/${clubId}/program`}></SideBarButton>
                        <SideBarButton text={"Financial"} link={`/club/${clubId}/financial`}></SideBarButton>
                    </div>
                </div>
            </section>
        </>

    );
}