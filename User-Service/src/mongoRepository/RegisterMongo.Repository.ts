import { UserModel } from "../models/User.Models";
import { IRegisterRepoAdmin } from "../repositories/register.repositoty";
import { IUser } from "../types/UserType";

export class RegisterMongo implements IRegisterRepoAdmin {
  async createUser(user: IUser): Promise<IUser> {
    const admin = new UserModel({ ...user, role: "admin" });

    return await admin.save();
  }
}
