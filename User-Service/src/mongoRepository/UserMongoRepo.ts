import { UserModel } from "../models/User.Models";
import { ICreateUser } from "../repositories/createUser";
import { IDeleteUser } from "../repositories/deleteUser";
import { IFindByEmail } from "../repositories/FindByEmail";
import { IFindUsers } from "../repositories/findUsers";
import { IUpadateUser } from "../repositories/updateUset";
import { IUser } from "../types/UserType";

export class FindByEmailMongo implements IFindByEmail {
  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email: email });
  }
}

export class CreateUserMongoRepo implements ICreateUser {
  async createUser(user: IUser): Promise<IUser> {
    const newUser = new UserModel(user);
    return await newUser.save();
  }
}
export class FindUserMongo implements IFindUsers {
  async findUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }
  async findUserById(id: any): Promise<IUser | null> {
    return await UserModel.findById(id);
  }
}

export class UpdateUSerMongo implements IUpadateUser {
  async updateUser(id: any, user: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, user, { new: true });
  }
}
export class DeleteUserMongo implements IDeleteUser {
  async DeleteUser(id: any): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
