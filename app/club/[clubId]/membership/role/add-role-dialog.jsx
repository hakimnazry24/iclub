import {useRoleService} from "@/app/Services/RoleService";
import {Role} from "@/Domain/Entities/Role";

export default  function AddRoleDialog({id}) {

    const submitRole= async (role) => {
        const response =await fetch('/api/roles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(role)

        })
        return response;
    }
    const addRole = async (e) => {

        e.preventDefault();
        try{
            const roleName = e.target[0].value;
            const role = new Role(null, roleName,"");
            const response = await submitRole(role);
            if(response.status === 200){
                alert("Role Added Successfully");
                document.getElementById(id).close();
            }

        }catch (e) {
            console.error(e);
            alert("Error Adding Role");
        }
    }

    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Add New Role</h3>
                <p className="py-4">Press ESC key to close</p>
                <div >
                    <form  onSubmit={addRole} className="form-control">
                        {/* if there is a button in form, it will close the modal */}
                        <label className="label">
                            <span className="label-text">Role Name</span>
                            <input type="text" placeholder="Role Name" className="input input-bordered" />
                        </label>
                        <button className="btn">Create Role</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}