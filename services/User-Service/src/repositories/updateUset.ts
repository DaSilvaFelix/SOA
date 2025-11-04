import { IUser } from "../types/UserType";


export interface IUpadateUser {
    updateUser(id: any, user: Partial<IUser>): Promise<IUser | null>
}