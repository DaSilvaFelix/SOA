import { IFindByEmail } from "../repositories/FindByEmail";
import { IUpadateUser } from "../repositories/updateUset";
import { IUser } from "../types/UserType";

export class UpdateUserService implements IUpadateUser {
  constructor(private readonly updateUserService: IUpadateUser, private readonly uniqueEmail: IFindByEmail) { }
  async updateUser(id: string, user: Partial<IUser>): Promise<IUser | null> {
    if (user.email) {
      const findEmail = await this.uniqueEmail.findByEmail(user.email);
      if (findEmail) {
        throw new Error("Email no disponible ");
      }
    }
    return await this.updateUserService.updateUser(id, user);
  }
}
