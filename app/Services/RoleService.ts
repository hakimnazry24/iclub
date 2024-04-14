
import {Role as RoleDomain}from '@/Domain/Entities/Role';
import {PrismaClient} from "@prisma/client";
class RoleService {
    private prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async add(role: RoleDomain) {
        try {
            return this.prismaClient.role.create({
                data: {
                    name: role.name,
                    description: role.description
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

    async get() {
        try {
           const result  = await this.prismaClient.role.findMany();
              return result.map((role) => {
                return new RoleDomain(role.id, role.name, role.description);
              });
        }
        catch (error) {
            throw new Error(error);
        }
        finally {
            await this.prismaClient.$disconnect();
        }
    }
}

export function useRoleService() {
    return new RoleService();
}

