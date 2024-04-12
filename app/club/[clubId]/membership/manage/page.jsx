'use client'
import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";
import {useMembershipService} from "@/app/Services/MembershipService";
import {Member} from "@/Domain/Entities/Member";
import {useState} from "react";


export default function Page({ params }) {
    const { clubId } = params;
    const [username, setUsername] = useState("");
    const membershipService = useMembershipService();
    const registerMember = async (e) => {
        e.preventDefault()
        try{
        const res = await fetch('/api/membership',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name: username})
         })
        }catch (e){
            console.log(e)
        }
/*
        const data = await res.json()
*/

    }


    return (
        <>
    <div className='flex flex-col'>

        <div className="">
            <DashboardHeader title={"Membership"}></DashboardHeader>
            <h2 className="font-bold m-5">Membership Management</h2>

        </div>
        <div>
            <div className=" bg-base-100 ">
            <div className="p-2">
                <form>
                    <table className="w-full">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Abdul John"
                                    className="bg-slate-100 p-3 rounded-2xl w-full"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Telephone Number</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="+60123456789"
                                    className="bg-slate-100 p-3 rounded-2xl w-full"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="user@email.com"
                                    className="bg-slate-100 p-3 rounded-2xl w-full"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Role:e.g. President, Secretary, Treasurer"
                                    className="bg-slate-100 p-3 rounded-2xl w-full"
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className='flex w-full justify-end'>
                        <button type='submit'
                                className="p-3 mx-2.5 my-5 rounded-3xl text-indigo-600 font-bold border-2 border-indigo-600 hover:text-white hover:bg-indigo-600 ">Register
                            Member
                        </button>
                    </div>


                </form>
            </div>
            </div>
        </div>
    </div>

        </>
    );
}