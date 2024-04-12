import {NextResponse,NextRequest} from "next/server";
import {useMembershipService} from "@/app/Services/MembershipService";
import {Member} from "@/Domain/Entities/Member";

export async function POST(req: NextRequest) {
    console.log("POST")
    const membershipService = useMembershipService();
    const { name } = await req.json();
    console.log(name);
    const member = new Member(null,name,null,null,"Active");
    const response = await membershipService.addMember(member)
    return NextResponse.json(member);
}