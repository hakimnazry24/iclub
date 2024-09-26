//import prisma
import { PrismaClient } from '@prisma/client';
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
                    email: member.email,
                    telephone: member.telephone,
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



  async getMembers() {
    try {
        const members = await this.prismaClient.member.findMany();
        return members.map((member) => {
            return new MemberDomain(member.id.toString(), member.name, member.email, member.telephone, null,null, member.membershipStatus);
        })
    }
    catch (error) {
      throw new Error(error);
    }
    finally {
      await this.prismaClient.$disconnect();
    }
  }

  async countMembers() {
    try {
      return await this.prismaClient.member.count();
    }
    catch (error) {
      throw new Error(error);
    }
    finally {
      await this.prismaClient.$disconnect();
    }

  }


}

export function useMembershipService(){
    return new MembershipService();
}