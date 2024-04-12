import { ProgramCommittee } from "./ProgramComittee";

export class Program {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public duration: number,
        public price: number,
        public startDate: Date,
        public endDate: Date,
        public status: boolean,
        public programCommittee: ProgramCommittee[] = []
    ) {}

    public static fromJSON(json: any): Program {
        const programCommittee = json.programCommittee.map((pc: any) => ProgramCommittee.fromJSON(pc));
        return new Program(json.id, json.name, json.description, json.duration, json.price, new Date(json.startDate), new Date(json.endDate), json.status, programCommittee);
    }

    public toJSON(): any {
        const programCommittee = this.programCommittee.map((pc: ProgramCommittee) => pc.toJSON());
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            duration: this.duration,
            price: this.price,
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