
export  class Role {
    id: string;
    name: string;
    description: string;

    constructor(id: string, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    toDto() {
        return {
            name: this.name,
            description: this.description
        }
    }



}