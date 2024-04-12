'use client'
import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";
import {useMembershipService} from "@/app/Services/MembershipService";
import {Member} from "@/Domain/Entities/Member";
import {useEffect, useState} from "react";


export default function Page({ params }) {
    const { clubId } = params;
    const [username, setUsername] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [showPopup, setShowPopup] = useState(false);
    const [Message, setMessage] = useState("Member Registered Successfully");
    useEffect(() => {
        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    const validate = () => {
        if (username === "" || telephone === "" || email === "" || role === "") {
            setMessage("Please fill in all the fields")
            setShowPopup(true);
            return false;
        }
        return true;
    }
    const registerMember = async (e) => {
        e.preventDefault()
        try{
            if (!validate()) {
                return;
            }
        const res = await fetch('/api/membership',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: username,
                telephone: telephone,
                email: email,
                role: role

              })
         })
        if (res.status === 200) {
            setMessage("Member Registered Successfully");
            await setShowPopup(true);
            setUsername("");
            setTelephone("");
            setEmail("");
            setRole("");

        }
        else {
            setMessage("Error Registering Member")
            setShowPopup(true);
        }

        }catch (e){
            setMessage("Error Registering Member" + e.message)
            setShowPopup(true);
        }
/*
        const data = await res.json()
*/

    }


    return (
        <>
            <div className='flex flex-col'>
                { (<div role="alert" className={` ${showPopup ? "alert show" : "alert"} m-5 w-fit z-50 absolute transition-opacity duration-200 ease-in-out `}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="stroke-info shrink-0 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{Message}</span>
                </div>)}
                <div className="">
                    <DashboardHeader title={"Membership"}></DashboardHeader>
                    <h2 className="font-bold m-5">Membership Management</h2>

                </div>
                <div>
                    <div className=" bg-base-100 ">
                        <div className="p-2">
                            <form onSubmit={registerMember}>
                                <table className="w-full">
                                    <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>
                                            <input
                                                onChange={(e) => setUsername(e.target.value)}
                                                type="text"
                                                name="name"
                                                value={username}
                                                placeholder="Abdul John"
                                                className="bg-slate-100 p-3 rounded-2xl w-full"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Telephone Number</td>
                                        <td>
                                            <input
                                                onChange={(e) => setTelephone(e.target.value)}
                                                type="text"
                                                name="name"
                                                value={telephone}
                                                placeholder="+60123456789"
                                                className="bg-slate-100 p-3 rounded-2xl w-full"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                            <input
                                                onChange={(e) => setEmail(e.target.value)}
                                                type="text"
                                                name="name"
                                                value={email}
                                                placeholder="user@email.com"
                                                className="bg-slate-100 p-3 rounded-2xl w-full"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Role</td>
                                        <td>
                                            <input
                                                onChange={(e) => setRole(e.target.value)}
                                                type="text"
                                                name="name"
                                                value={role}
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