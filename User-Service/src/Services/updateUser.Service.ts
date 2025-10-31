import { ID } from "@config/id.type";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { IUpadateUser } from "users/repositories/updateUset";
import { IUser } from "users/types/UserType";





export class UpdateUserService implements IUpadateUser {
    constructor(
        private readonly updateUserService: IUpadateUser,
        private readonly uniqueEmail: IFindByEmail

    ) { }
    async updateUser(id: any, user: Partial<IUser>): Promise<IUser | null> {
        if (user.email) {
            const findEmail = await this.uniqueEmail.findByEmail(user.email);
            if (findEmail) {
                throw new Error("Email no disponible ");

            }
        }
        return await this.updateUserService.updateUser(id, user)
    }
}