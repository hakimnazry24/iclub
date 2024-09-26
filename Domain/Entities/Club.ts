import {Member} from "./Member";

class Club {
    constructor(
        public id: number,
        public name: string,
        public Members: Member[] = []
    ) {
        this.Members = Members;
        this.id = id;
        this.name = name;
    }


    public static fromJSON(json: any): Club {
        return new Club(json.id, json.name);

    }


}