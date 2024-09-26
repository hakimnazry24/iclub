import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";
import {useProgramService} from "@/app/Services/ProgramService";
import {Program} from "@/Domain/Entities/Program";

export default function addProgramPage({ params }) {
    // CRUD operation not done yet
  async function addNewProgram(formdata) {
    'use server'
    const programService = useProgramService();
    const { name,  description, dateStart, dateEnd, location } = Object.fromEntries(formdata);

    const program  = {
      name,
      description,
       startDate: new Date(dateStart),
      endDate : new Date(dateEnd),
      location,
      totalParticipants: 0,
    }
    console.log(program)
    await programService.createProgram(program);
    console.log("SUCCESS")

  }


  const { clubId } = params;
  return (

      <div className="mx-3 my-3 border  rounded">
        <DashboardHeader title={"Program"} />
        <div className="mx-5 my-5">
          <h2 className="text-xl font-bold text-indigo-600">Add New Program</h2>
          <form action={addNewProgram} >
            <table className="w-full ">
              <tbody>
              <tr>
                <td>Program name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Program name"
                    className="bg-slate-100 p-3 rounded-2xl w-full"
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
                    className="bg-slate-100 p-3 rounded-2xl w-full"
                  />
                </td>
              </tr>
              <tr>
                <td>Start date</td>
                <td>
                  <input
                    type="date"
                    name="dateStart"
                    placeholder="Start date"
                    className="bg-slate-100 p-3 rounded-2xl w-full"
                  />
                </td>
              </tr>
              <tr>
                <td>End date</td>
                <td>
                  <input
                    type="date"
                    name="dateEnd"
                    placeholder="End date"
                    className="bg-slate-100 p-3 rounded-2xl w-full"
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
                    className="bg-slate-100 p-3 rounded-2xl w-full"
                  />
                </td>
              </tr>
              </tbody>
            </table>
            <button type="submit" className="p-3 rounded-3xl text-indigo-600 font-bold border-2 border-indigo-600 hover:text-white hover:bg-indigo-600 mt-5">Add new program</button>
          </form>
        </div>
      </div>
  );
}
