import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";

export default function addProgramPage({ params }) {
    // CRUD operation not done yet
    async function addNewProgram(formdata) {
        "use server"
        const { name,  description, dateStart, dateEnd, location, totalParticipants, committee, status } = Object.fromEntries(formdata);
    }

  const { clubId } = params;
  return (
    <div className="flex flex-col">
      <div className="">
        <SideBar clubId={clubId}></SideBar>
      </div>
      <div className="">
        <DashboardHeader title={"Program"}></DashboardHeader>
        <div className="mx-5 my-5">
          <h2 className="text-xl font-bold text-indigo-600">Add New Program</h2>
          <form action={ addNewProgram } >
            <table className="w-full">
              <tbody>
              <tr>
                <td>Program name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Program name"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>Program description</td>
                <td>
                  <input
                    type="text"
                    name="description"
                    placeholder="Program description"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>Start date</td>
                <td>
                  <input
                    type="text"
                    name="dateStart"
                    placeholder="Start date"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>End date</td>
                <td>
                  <input
                    type="text"
                    name="dateEnd"
                    placeholder="End date"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>Location</td>
                <td>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>Total participants</td>
                <td>
                  <input
                    type="text"
                    name="totalParticipants"
                    placeholder="Total participants"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                {/* need to revisit, I have concern with relationship between committee and program, migth also need to relearn data relationship */}
                <td>Committee involved</td>
                <td>
                  <input
                    type="text"
                    name="committee"
                    placeholder="Committee"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              <tr>
                <td>Status</td>
                <td>
                  <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    className="bg-slate-100 p-3 rounded-2xl"
                  />
                </td>
              </tr>
              </tbody>
            </table>
            <button className="p-3 rounded-3xl text-indigo-600 font-bold border-2 border-indigo-600 hover:text-white hover:bg-indigo-600 mt-5">Add new program</button>
          </form>
        </div>
      </div>
    </div>
  );
}
