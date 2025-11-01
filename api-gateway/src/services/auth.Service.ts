import { IUser } from "../types/UserType";
import * as bcrypt from "bcrypt";
import { UserModel } from "../models/User.Models";



export class LoginService {
     async login(email: string, password: string): Promise<IUser | null> {

          const user: IUser | null = await UserModel.findOne({ email })

          if (!user) {
               return null
          }
          const correctPassword = await bcrypt.compare(password, user.password);
          if (!correctPassword) return null;
          return user
     }
}