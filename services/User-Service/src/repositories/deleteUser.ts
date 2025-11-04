import { Types } from "mongoose"
export interface IDeleteUser {
    DeleteUser(id: Types.ObjectId): Promise<void>
}