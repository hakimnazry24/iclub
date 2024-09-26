import { ProgramCommittee } from "./ProgramComittee";
import { Prisma } from '@prisma/client'
export class Program {
    constructor(
        public id?: string,
        public name?: string,
        public description?: string,
        // public duration: number,
        public location?: string,
        public budget?: number,
        public startDate?: Date,
        public endDate?: Date,
        public status?: string,
        public totalParticipants?: number,
        public programCommittee: ProgramCommittee[] = []
    ) {}

    public static fromJSON(json: any): Program {
        const programCommittee = json.programCommittee.map((pc: any) => ProgramCommittee.fromJSON(pc));
        return new Program(json.id, json.name, json.description, json.location, json.budget, new Date(json.startDate), new Date(json.endDate), json.status,json.totalParticipants, programCommittee);
    }

    public toJSON(): any {
        const programCommittee = this.programCommittee.map((pc: ProgramCommittee) => pc.toJSON());
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            location: this.location,
            budget: this.budget,
            startDate: this.startDate,
            endDate: this.endDate,
            status: this.status,
            programCommittee: programCommittee
        };
    }

    public addProgramComittee(programComittee: ProgramCommittee): void {
        if (programComittee) {
            this.programCommittee.push(programComittee);
        }
    }
}