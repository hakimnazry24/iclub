import {Member} from "./Member";

export class ProgramCommittee {
    constructor(
        public member: Member,
        public role: string,
    ) {
        this.member = member;
        this.role = role;

    }

    public static fromJSON(json: any): ProgramCommittee {
        return new ProgramCommittee(json.member, json.role);
    }

    public toJSON(): any {
        return {
            member: this.member.toJSON(),
            role: this.role
        };
    }


}