import { ID } from "@config/id.type";
import { IFindUsers } from "users/repositories/findUsers";
import { IUser } from "users/types/UserType";


export class FindUserService implements IFindUsers {
    constructor(
        private readonly findUserService: IFindUsers
    ) { }
    async findUsers(): Promise<IUser[]> {
        return await this.findUserService.findUsers()
    }
    async findUserById(id: any): Promise<IUser | null> {
        return await this.findUserService.findUserById(id)
    }
}