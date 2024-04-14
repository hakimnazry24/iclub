import {NextRequest, NextResponse} from "next/server";
import {useRoleService} from "@/app/Services/RoleService";
import {Role} from "@/Domain/Entities/Role";

export async function POST(req: NextRequest) {
    console.log("POST")
   const roleService = useRoleService();
    const roleJson = await req.json();
    const role = new Role(
        undefined,
          roleJson.name,
          roleJson.description
     );
    await roleService.add(role);
    return NextResponse.json(role);
}

export async function GET() {
    console.log("GET")
    const roleService = useRoleService();
    const roles = await roleService.get();
    console.log(roles);
    return NextResponse.json(roles);
}