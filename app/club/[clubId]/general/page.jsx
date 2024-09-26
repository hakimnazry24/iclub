import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";


export default function clubGeneralPage({ params }) {
  const { clubId } = params;

  return (

      <div className="">
        <DashboardHeader title={"General"}></DashboardHeader>
      </div>
  );
}
