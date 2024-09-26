import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    await prisma.role.create({
        data: {
            name: "Admin",
            description: "Admin"
        }
    });
   }

    await main()