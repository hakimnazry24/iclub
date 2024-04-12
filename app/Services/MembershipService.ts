//import prisma
import { Member,PrismaClient } from '@prisma/client';
//@ts-ignore
import { Member as MemberDomain} from "@/Domain/Entities/Member" ;
class MembershipService {
    private prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = new PrismaClient();
    }
    async addMember(member: MemberDomain) {
        try {
            return this.prismaClient.member.create({
                data: {
                    name: member.name,
                }
            });
        }
        catch (error) {
            throw new Error(error);
        }
        finally {
            await this.prismaClient.$disconnect();
        }
    }



  getMembers() {
    return this.prismaClient.member.findMany();
  }


}

export function useMembershipService(){
    return new MembershipService();
}