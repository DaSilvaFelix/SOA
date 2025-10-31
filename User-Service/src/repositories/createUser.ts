import { IUser } from "../types/UserType";

export interface IcreateUser {
    createUser(user: IUser): Promise<IUser>
}