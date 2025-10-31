import { IUser } from "../types/UserType";




export interface IFindByEmail {
    findByEmail(email: string): Promise<IUser | null>
}