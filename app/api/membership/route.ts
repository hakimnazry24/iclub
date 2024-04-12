import {NextResponse,NextRequest} from "next/server";
import {useMembershipService} from "@/app/Services/MembershipService";
import {Member} from "@/Domain/Entities/Member";

export async function POST(req: NextRequest) {
    console.log("POST")
    const membershipService = useMembershipService();
    const memberJson = await req.json();
    const member = new Member(
        undefined,
          memberJson.name,
          memberJson.email,
          memberJson.telephone,
          undefined,
          undefined,
          "Active"
     );

    const response = await membershipService.addMember(member)
    return NextResponse.json(member);
}