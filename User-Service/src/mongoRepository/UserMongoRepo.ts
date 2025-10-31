import { ID } from "@config/id.type";
import { UserModel } from "users/models/User.Models";
import { IcreateUser } from "users/repositories/createUser";
import { IDeleteUser } from "users/repositories/deleteUser";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { IFindUsers } from "users/repositories/findUsers";
import { IUpadateUser } from "users/repositories/updateUset";
import { IUser } from "users/types/UserType";

export class FindByEmailMongo implements IFindByEmail {
    async findByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email: email })
    }
}

export class CreateUserMongoRepo implements IcreateUser {
    async createUser(user: IUser): Promise<IUser> {
        const newUser = new UserModel(user)
        return await newUser.save()
    }
}
export class FindUserMongo implements IFindUsers {
    async findUsers(): Promise<IUser[]> {
        return await UserModel.find()
    }
    async findUserById(id: ID): Promise<IUser | null> {
        return await UserModel.findById(id)
    }
}

export class UpdateUSerMongo implements IUpadateUser {
    async updateUser(id: ID, user: Partial<IUser>): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(id, user, { new: true })
    }
}
export class DeleteUserMongo implements IDeleteUser {
    async DeleteUser(id: ID): Promise<void> {
        await UserModel.findByIdAndDelete(id)
    }
} 