import { IFindByEmail } from "users/repositories/FindByEmail";
import { IUser } from "users/types/UserType";
import * as bcrypt from "bcrypt-ts";



export class LoginService {
    constructor(
        private readonly loginRepo: IFindByEmail
    ) { }
    async login(email: string, password: string): Promise<IUser | null> {
        const user = await this.loginRepo.findByEmail(email)

        if (!user) {
            return null
        }
        const correctPassword = await bcrypt.compare(password, user.password);
        if (!correctPassword) return null;
        return user
    }
}