import Logo from "./Logo"
import Profile from "./Profile"

export default function DashboardHeader({ title }) {
  return (
      <section className="m-5">
          <div className=" flex justify-between items-center">
              <h1 className="text-3xl text-indigo-600 font-bold">{ title }</h1>
              <Profile></Profile>
          </div>

      </section>


  )
}
