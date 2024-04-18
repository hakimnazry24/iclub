'use client'
import SubmissionMessage from "@/app/club/[clubId]/membership/manage/SubmissionMessage";
import DashboardHeader from "@/components/DashboardHeader";
import AddRoleDialog from "@/app/club/[clubId]/membership/role/add-role-dialog";
import {useEffect, useState} from "react";
import BackButton from "@/components/BackButton";
// font awesome
import { FaEdit,FaTrash } from "react-icons/fa"


export default function RolePage(){
    const [roles,setRoles] = useState([]);

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
    } ,[]);


    return (
        <>
            <div className='flex flex-col border mx-2 my-3 rounded'>
                {/*<SubmissionMessage showPopup={showPopup} Message={message} Type={messageType}/>*/}
                <div className="">
                    <div className="flex items-center mx-5">
                    <BackButton/>
                    <DashboardHeader title={"Membership"} />
                    </div>
                    <h2 className="font-bold m-5">Role Management</h2>
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="mx-4 btn btn-sm ">Add Role</button>
                </div>

                <AddRoleDialog id='my_modal_1'/>
                <table className="table table-zebra w-full">
                    <thead>
                    <tr>
                        <th>Role Name</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {roles.map((role) => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td className='p-2'>
                                <button className="btn btn-ghost rounded-3xl ">
                                    {/*    edit svg*/}
                                    <FaEdit/>

                                </button>
                                <button className="btn btn-ghost rounded-3xl">
                                {/*    outline trash can*/}
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </>

    )
}