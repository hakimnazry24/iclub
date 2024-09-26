
//a simple prisma repository for members
import {Member, PrismaClient} from '@prisma/client';
import {IGenericRepository} from "../../Domain/Repository/IGenericRepository";

export class MembersRepository implements IGenericRepository<Member> {


    create(entity: Member): Promise<Member> {
        return Promise.resolve(undefined);
    }

    delete(id: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(): Promise<Member[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<Member> {
        return Promise.resolve(undefined);
    }

    update(entity: Member): Promise<Member> {
        return Promise.resolve(undefined);
    }

}