
import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";

import {type} from "node:os";
import {Member} from "@/Domain/Entities/Member";
import {useMembershipService} from "@/app/Services/MembershipService";
import Link from "next/link";
import {useRouter} from 'next/navigation'

export default async function ClubMembershipPage({params}) {
    const {clubId} = params;
// eslint-disable-next-line react-hooks/rules-of-hooks
/*
    const router = useRouter()
*/
    const membershipService = useMembershipService();
    // jsdoc
    /**
     * @type {Member[]}
     */
    const members = await membershipService.getMembers(clubId);

    return (
        <div className=" mx-2 my-3 border  rounded ">
            <DashboardHeader title={"Membership"} />
            <div className="mx-1.5">
                <Link href='./membership/manage' className="btn btn-link">Manage Members
                </Link>
                <Link href='./membership/overview' className="btn btn-link">Overview
                </Link>
                <Link href='./membership/role' className="btn btn-link">Role Management
                </Link>
            </div>
            {/*Filter Section Start*/}
            <section className={"filter flex mx-5 my-3 gap-2 "}>
                <input type="text" placeholder="Search for a member"
                       className=" mr-auto input input-bordered" />
                <div className="flex gap-2 items-center">
                    <p className="text-gray-400">Filter by:</p>
                    <select className="select border border-gray-700">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="text-gray-400">Sort by:</p>
                    <select className="select border border-gray-700">
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="name">Name Ascending</option>
                        <option value="name">Name Descending</option>
                    </select>
                </div>


            </section>
            {/*Filter Section End*/}
            {/*Table Start*/}
            <div className="overflow-x-auto ">
            <table className="w-full my-2 mx-3 table  table-zebra">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="p-2">Name</th>
                        <th className="p-2">Email</th>
                        <th className="p-2">Phone</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {members.map((item, index) => (
                        <tr key={index}>
                            <td className="p-2">{item.name}</td>
                            <td className="p-2">
                                <a href="mailto:">{item.email}</a>
                            </td>
                            <td className="p-2">{item.telephone}</td>
                            <td className="p-2">
                                <span className="p-2 px-4 bg-green-400 text-white rounded-3xl ">Active</span>
                            </td>
                            <td className="p-2">
                                <button type='button' className="btn btn-active mx-1 ">Activate</button>
                                <button type='button' className="btn btn-error mx-1 ">Deactivate</button>
                            </td>
                        </tr>

                    ))}

                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="5" className="p-2">
                            <div className="flex justify-between">
                                <button type='button' className="btn ">Previous</button>
                                <button type='button' className="btn ">Next</button>
                            </div>
                        </td>
                    </tr>
                    </tfoot>
                </table>
                {/*Table End*/}
            </div>
        </div>
    );
}
