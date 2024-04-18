'use client'
import DashboardHeader from "@/components/DashboardHeader";
import Link from "next/link";
import {useState} from "react";

export default function ProgramPage({ params }) {

    const [currentTab, setCurrentTab] = useState('')

    const { programId } = params;
    return (
        <div className="mx-3 my-3 border  rounded">
            <DashboardHeader title={"Program"}></DashboardHeader>
            <div className="mx-5 my-5">
                <h2 className="text-xl font-bold text-indigo-600">Web Development Workshop</h2>
                <div className={"flex flex-row -mx-3.5"}>
                    <Link className={'btn btn-link'} href={`./${programId}/proposal`} >Proposal</Link>
                    <Link className={'btn btn-link'} href={"./"} >Master Plan</Link>
                    <Link className={'btn btn-link'} href={"./"} >Committees</Link>
                    <Link className={'btn btn-link'} href={"./"} >IIUM Documents</Link>
                </div>
            </div>
        </div>
    )
}