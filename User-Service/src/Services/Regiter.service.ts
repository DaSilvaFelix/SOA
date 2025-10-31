import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { IUser } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";
import { IFindByEmail } from "users/repositories/FindByEmail";


export class Register implements IRegisterRepoAdmin {
    constructor(
        private readonly registAdminRepo: IRegisterRepoAdmin,
        private readonly uniqueEmail: IFindByEmail
    ) { }

    async createUser(user: IUser): Promise<IUser> {

        const findEmail = await this.uniqueEmail.findByEmail(user.email);
        if (findEmail) {
            throw new Error("Email no disponible ");

        }
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return this.registAdminRepo.createUser({
            ...user,
            rol: "admin",
            password: hashedPassword,
        });
    }
}
