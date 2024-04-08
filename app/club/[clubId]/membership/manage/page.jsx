import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";


export default function Page({ params }) {
    const { clubId } = params;

    return (
    <div>
      <div className="flex flex-col">
        <div className="">
          <SideBar clubId={clubId}></SideBar>
        </div>
        <div className="">
          <DashboardHeader title={"Membership"}></DashboardHeader>
        </div>
      </div>
      <div>
        <div class="card  bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Membership Management</h2>
                <p>Manage your club's membership</p>

            </div>
        </div>
      </div>
    </div>
  );
}