import DashboardHeader from "@/components/DashboardHeader";
import SideBar from "@/components/SideBar";
import DashboardGeneralOverview from "@/components/DashboardGeneralOverview";
import DashboardFinancialOverview from "@/components/DashboardFinancialOverview";
import DashboardMembershipOverview from "@/components/DashboardMembershipOverview";
import DashboardProgramOverview from "@/components/DashboardProgramOverview";

export default function clubDashboardPage({ params }) {
  const { clubId } = params;
  console.log(params);
  return (

      <div className="col-span-10 border mx-2 my-3 rounded">
        <DashboardHeader title={"Dashboard"}></DashboardHeader>
        <div className="grid grid-cols-2 gap-10 p-8">
          <a href="general">
              <DashboardGeneralOverview></DashboardGeneralOverview>
          </a>
          <a href="membership">
              <DashboardMembershipOverview></DashboardMembershipOverview>
          </a>
          <a href="financial">
              <DashboardFinancialOverview></DashboardFinancialOverview>
          </a>
          <a href="program">
              <DashboardProgramOverview></DashboardProgramOverview>
          </a>
        </div>
      </div>
  );
}
