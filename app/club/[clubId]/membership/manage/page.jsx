'use client'
import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";
import {useMembershipService} from "@/app/Services/MembershipService";
import {Member} from "@/Domain/Entities/Member";
import {useEffect, useState} from "react";
import SubmissionMessage from "@/app/club/[clubId]/membership/manage/SubmissionMessage";
import BackButton from "@/components/BackButton";


const MessageTypes={
    SUCCESS:"success",
    ERROR:"error",
    WARNING:"warning"

}

export default function Page({ params }) {
    const { clubId } = params;
    const [username, setUsername] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [messageType, setMessageType] = useState("success");
    const [roles, setRoles] = useState([]);

    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("Member Registered Successfully");

    useEffect(() => {
        //call api to get roles
        fetch('/api/roles', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                setRoles(data);
            })



        if (showPopup) {
            const timer = setTimeout(() => {
                setShowPopup(false);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [showPopup]);

    const validate = () => {
        if (username === "" || telephone === "" || email === "" || role === "") {
            setMessage("Please fill in all the fields")
            setMessageType(MessageTypes.ERROR)
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
            setMessageType(MessageTypes.SUCCESS)
            await setShowPopup(true);
            setUsername("");
            setTelephone("");
            setEmail("");
            setRole("");

        }
        else {
            setMessage("Error Registering Member")
            setMessageType(MessageTypes.ERROR)
            setShowPopup(true);
        }

        }catch (e){
            setMessage("Error Registering Member" + e.message)
            setMessageType(MessageTypes.ERROR)
            setShowPopup(true);
        }
/*
        const data = await res.json()
*/

    }


    return (
        <>
            <div className='flex flex-col border mx-2 my-3 rounded'>
                <SubmissionMessage showPopup={showPopup} Message={message} Type={messageType}/>

                <div className="">

                    <div className="flex items-center mx-5">
                        <BackButton/>
                        <DashboardHeader title={"Membership"}/>
                    </div>
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
                                            <select
                                                onChange={(e) => setRole(e.target.value)}
                                                name="name"
                                                value={role}
                                                className="bg-slate-100 p-3 rounded-2xl w-full">
                                                {roles.map((role, index) => (
                                                    <option key={index} value={role.name}>{role.name}</option>
                                                ))}
                                            </select>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className='flex w-full justify-end'>
                                    <button type='submit'
                                            className="mx-2.5 my-5 rounded-3xl btn btn-outline border-indigo-600 border-2 text-indigo-600 hover:border-indigo-600 hover:bg-indigo-600">Register
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