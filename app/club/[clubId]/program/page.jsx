import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import {
    ProposalApproved,
    ProposalPending,
    ProposalRejected,
    ReportPending,
    ReportSubmitted,
} from "@/components/ProgramStatusMarker";
import {Link} from "next-view-transitions";
import {useProgramService} from "@/app/Services/ProgramService";

export default async function clubProgramPage({params}) {
    const programService = useProgramService();
    const programs = await programService.getPrograms();
    const {clubId} = params;
    console.log(params);
    return (
        <div className="mx-3 my-3 border  rounded ">
            <DashboardHeader title={"Program"} />
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
                        <td>Total Participants</td>
                        <td>Status</td>
                    </tr>
                    </thead>
                    <tbody>
                    {programs.map((program, index) => (
                        <tr key={program.id}>
                            <td>{index + 1}</td>
                            <td>
                                <Link className={'link [view-transition-name:demo-title]'} href={`/club/${clubId}/program/${program.id}`}>
                                    {program.name}
                                </Link>
                            </td>
                            <td>{program.pic}</td>
                            <td>{program.startDate.toDateString()}</td>
                            <td>{program.endDate.toDateString()}</td>
                            <td>{program.totalParticipants}</td>
                            <td>
                                {program.status === "proposal_pending" ? (
                                    <ProposalPending />
                                ) : program.status === "proposal_approved" ? (
                                    <ProposalApproved />
                                ) : program.status === "proposal_rejected" ? (
                                    <ProposalRejected />
                                ) : program.status === "report_pending" ? (
                                    <ReportPending />
                                ) : program.status === "report_submitted" ? (
                                    <ReportSubmitted />
                                ) : (
                                    "deepskyblue"
                                )}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}
