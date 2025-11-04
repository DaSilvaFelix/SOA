import { IUser } from "../types/UserType";

export interface ICreateUser {
    createUser(user: IUser): Promise<IUser>
}