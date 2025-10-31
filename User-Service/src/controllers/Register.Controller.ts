import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { Register } from "users/Services/Regiter.service";
import { Request, Response } from "express";
import { IUser } from "users/types/UserType";
import { validarUsuario } from "Middlewares/validations/user.validation";
import { FindByEmailMongo } from "users/mongoRepository/UserMongoRepo";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { RegisterMongo } from "users/mongoRepository/RegisterMongo.Repository";




const registerMongo: IRegisterRepoAdmin = new RegisterMongo()
const uniqueEmail: IFindByEmail = new FindByEmailMongo()

const registerService = new Register(registerMongo, uniqueEmail)


export const RegisterAmdmins = async (req: Request, res: Response) => {
    try {
        const user: IUser = req.body;
        const token = req.body.token;
        validarUsuario(user)
        const result = await registerService.createUser(user);
        if (!result) {
            res.status(304).json({ msg: 'the user not creadet' })
        }
        console.log(result)
        res.status(200).json({ msg: 'the user', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server error' })
    }

}
