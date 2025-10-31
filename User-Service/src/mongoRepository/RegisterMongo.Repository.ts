import { UserModel } from "users/models/User.Models";
import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { IUser } from "users/types/UserType";

export class RegisterMongo implements IRegisterRepoAdmin {
    async createUser(user: IUser): Promise<IUser> {
        const admin = new UserModel({
            ...user,
            role: "admin",
        });

        return await admin.save();
    }

}

