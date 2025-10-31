import { IcreateUser } from "users/repositories/createUser";
import { IUser } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";
import { IFindByEmail } from "users/repositories/FindByEmail";



export class CreateUserService implements IcreateUser {
    constructor(
        private readonly userRepo: IcreateUser,
        private readonly uniqueEmail: IFindByEmail

    ) { }
    async createUser(user: IUser): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const findEmail = await this.uniqueEmail.findByEmail(user.email);
        if (findEmail) {
            throw new Error("Email no disponible ");

        }
        return this.userRepo.createUser({
            ...user,
            password: hashedPassword,
        });

    }
}