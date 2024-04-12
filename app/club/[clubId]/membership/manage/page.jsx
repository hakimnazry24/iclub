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
        </div>
      <div>
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Membership Management</h2>
                <p>Register Member</p>
                <form onSubmit={async (e)=> registerMember(e)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text
                            ">Name</span>
                        </label>
                        <input type="text" onChange={(e)=> setUsername(e.target.value)} placeholder="Name" class="input input-bordered" />
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>

        </>
  );
}