import { client } from '@/prisma';
import {Prisma} from '@prisma/client';
import { Program as ProgramDomain } from '@/Domain/Entities/Program';
import {number} from "prop-types";

class ProgramService{

    private prisma: typeof client;

    constructor() {
        this.prisma = client;
    }

    async getPrograms() : Promise<ProgramDomain[]> {
        const programs = await this.prisma.program.findMany();
        const res = programs.map((program) => {
            return new ProgramDomain(program.id, program.name, program.description, program.location, Number(program.budget), program.dateStart, program.dateEnd, program.status, program.totalParticipants);
        });

        return res;
    }

    async getProgramById(id: string) {
        // fetch data from api
        const res = await this.prisma.program.findUnique({
            where: {
                id: id
            }
        });
        return new ProgramDomain(res.id, res.name, res.description, res.location, Number(res.budget), res.dateStart, res.dateEnd, res.status, res.totalParticipants);
        }


    async createProgram(program: ProgramDomain) {
        // fetch data from api
        await this.prisma.program.create({
            data: {
                name: program.name,
                description: program.description,
                location: program.location,
                budget: program.budget,
                dateStart: program.startDate,
                dateEnd: program.endDate,
                status: program.status,
                totalParticipants: program.totalParticipants,
            }
        });
    }


    async updateProgram(id: number, program: any) {
        // fetch data from api
    }

    async deleteProgram(id: number) {
        // fetch data from api
    }
}

export function useProgramService() {
    return new ProgramService();
}