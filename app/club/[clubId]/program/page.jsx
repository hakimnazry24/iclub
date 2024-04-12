import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import {
    ProposalApproved,
    ProposalPending,
    ProposalRejected,
    ReportPending,
    ReportSubmitted,
} from "@/components/ProgramStatusMarker";
import Link from "next/link";

export default function clubProgramPage({params}) {
    const {clubId} = params;
    console.log(params);
    return (
        <div className="">
            <DashboardHeader title={"Program"}></DashboardHeader>
            <Link
                className="mx-3.5 my-10 p-3 rounded-3xl text-indigo-600 font-bold border-2 border-indigo-600 hover:text-white hover:bg-indigo-600 "
                href="./program/add-program">Add New Programme</Link>
            <table className="mt-5 table w-full text-left overflow-hidden" id="program-table">
                <thead>
                <tr>
                    <td>No</td>
                    <td>Programmes/Events/Activities</td>
                    <td>Name of PIC</td>
                    <td>Date start</td>
                    <td>Date end</td>
                    <td>Duration</td>
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Motion-U Commune: Induction Day
                    </td>
                    <td>Nisa</td>
                    <td>16-03-2024</td>
                    <td>16-03-2024</td>
                    <td>1</td>
                    <td>
                        <ProposalPending></ProposalPending>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Web Application Development Workshop
                    </td>
                    <td>Fadzwan</td>
                    <td>27-04-2024</td>
                    <td>16-03-2024</td>
                    <td>2</td>
                    <td>
                        <ProposalPending></ProposalPending>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Mobile Application Workshop
                    </td>
                    <td>Hakim</td>
                    <td>11-05-2024</td>
                    <td>16-03-2024</td>
                    <td>3</td>
                    <td>
                        <ReportSubmitted></ReportSubmitted>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Mobile Application Workshop
                    </td>
                    <td>Hakim</td>
                    <td>11-05-2024</td>
                    <td>16-03-2024</td>
                    <td>3</td>
                    <td>
                        <ReportSubmitted></ReportSubmitted>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Mobile Application Workshop
                    </td>
                    <td>Hakim</td>
                    <td>11-05-2024</td>
                    <td>16-03-2024</td>
                    <td>3</td>
                    <td>
                        <ReportSubmitted></ReportSubmitted>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Mobile Application Workshop
                    </td>
                    <td>Hakim</td>
                    <td>11-05-2024</td>
                    <td>16-03-2024</td>
                    <td>3</td>
                    <td>
                        <ReportSubmitted></ReportSubmitted>
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td className="text-indigo-600 hover:text-indigo-600/80">
                        Mobile Application Workshop
                    </td>
                    <td>Hakim</td>
                    <td>11-05-2024</td>
                    <td>16-03-2024</td>
                    <td>8</td>
                    <td>
                        <ReportPending></ReportPending>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
