export class Member {
    constructor(
        public id?: number,
        public name?: string,
        public email?: string,
        public telephone?: string,
        public clubId?: number,
        public roleId? : number,
        public membershipStatus?: string
    ) {
        this.id = id;
        this.name = name;
        this.clubId = clubId;
        this.roleId = roleId;
        this.membershipStatus = "Active";
        this.email = email;
        this.telephone = telephone;
}

    public static fromJSON(json: any): Member {
        return new Member(json.id, json.name, json.clubId, json.roleId, json.membershipStatus);
    }

    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            clubId: this.clubId,
            roleId: this.roleId,
            membershipStatus: this.membershipStatus,
            email: this.email,
            telephone: this.telephone
        };
    }
}