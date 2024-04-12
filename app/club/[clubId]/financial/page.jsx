import SideBar from "@/components/SideBar";
import DashboardHeader from "@/components/DashboardHeader";

export default function clubFinancialPage({ params }) {
  const { clubId } = params;
  return (

      <div className="">
        <DashboardHeader title={"Financial"}></DashboardHeader>
      </div>
  );
}
