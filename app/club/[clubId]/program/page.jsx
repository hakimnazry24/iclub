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
        <div className="mx-3 my-3 border  rounded ">
            <DashboardHeader title={"Program"}></DashboardHeader>
            <Link
                className="link-primary text-sm font-bold hover:underline mt-5 ml-5"
                href="./program/add-program">Add New Programme</Link>
            <Link
                className="link-primary text-sm font-bold hover:underline mt-5 ml-5"
                href="./program/add-event">Calendar View</Link>
            <Link
                className="link-primary text-sm font-bold hover:underline mt-5 ml-5"
                href="./program/add-event">Almanac </Link>
            <div className='px-3 py-2 my-2'>
                <table className=" border table table-zebra  overflow-hidden" id="program-table">
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
                        <td>
                            <Link href={'./program/1'} className="text-indigo-600 hover:text-indigo-600/80">
                                Web Development Workshop
                            </Link>
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
        </div>
    );
}
