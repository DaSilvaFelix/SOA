import { Request, Response } from "express";
import { CreateUserMongoRepo, FindByEmailMongo } from "../mongoRepository/UserMongoRepo";
import { IcreateUser } from "../repositories/createUser";
import { CreateUserService } from "../Services/createUser.service";
import { validarUsuario } from "../validations/user.validation";
import { IUser } from "../types/UserType";

const createUserMongo: IcreateUser = new CreateUserMongoRepo()
const uniqueEmail: FindByEmailMongo = new FindByEmailMongo()
const createUserService = new CreateUserService(createUserMongo, uniqueEmail)


export const createUser = async (req: Request, res: Response) => {
    try {
        const user: IUser = req.body;
        validarUsuario(user)
        const result = await createUserService.createUser(user)
        if (!result) {
            res.status(304).json({ msg: 'User no created' })
        }
        res.status(201).json({ msg: 'User created', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server erro' })
    }
}