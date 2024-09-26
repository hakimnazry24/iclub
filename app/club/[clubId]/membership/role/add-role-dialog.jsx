import {Role} from "@/Domain/Entities/Role";
import {useMutation} from "@tanstack/react-query";

export default  function AddRoleDialog({id,setHasSubmitted}) {


    const roleMut= useMutation({
        mutationKey: ['roles'],
        mutationFn: async (role) => {
            const response = await fetch('/api/roles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(role)

            });
            return await response.json();
        },
        onSuccess: (data) => {
            // setRoles(data);

            alert("Role Added Successfully");
            document.getElementById(id).close();
            setHasSubmitted(true);
        },
        onError: (error) => {
            console.error(error);
            alert("Error Adding Role");
        }
    })

    const submitRole= async (role) => {

        const res = await roleMut.mutateAsync(role);
        return res;
    }
    const addRole = async (e) => {

        e.preventDefault();
        try{
            const roleName = e.target[0].value;
            const role = new Role(null, roleName,"");
            // const response = await submitRole(role);
            // if(response.status === 200){
            //     alert("Role Added Successfully");
            //     document.getElementById(id).close();
            // }
            await submitRole(role);

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