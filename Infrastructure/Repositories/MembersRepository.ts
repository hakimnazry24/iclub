
//a simple prisma repository for members
import {Membership, PrismaClient} from '@prisma/client';
import { Member } from '../../Domain/Entities/Member';
import {IGenericRepository} from "../../Domain/Repository/IGenericRepository";

export class MembersRepository implements IGenericRepository<Membership> {


    create(entity: Membership): Promise<Membership> {
        return Promise.resolve(undefined);
    }

    delete(id: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(): Promise<Membership[]> {
        return Promise.resolve([]);
    }

    getById(id: number): Promise<Membership> {
        return Promise.resolve(undefined);
    }

    update(entity: Membership): Promise<Membership> {
        return Promise.resolve(undefined);
    }

}