import { ID } from "@config/id.type";
import { Request, Response } from "express";
import { FindByEmailMongo, UpdateUSerMongo } from "users/mongoRepository/UserMongoRepo";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { IUpadateUser } from "users/repositories/updateUset";
import { UpdateUserService } from "users/Services/updateUser.Service";
import { IUser } from "users/types/UserType";



const updateMongoUser: IUpadateUser = new UpdateUSerMongo();
const uniqueEmail: IFindByEmail = new FindByEmailMongo()
const updateUSerService = new UpdateUserService(updateMongoUser, uniqueEmail)

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const user: IUser = req.body;
        const id = req.params.id;
        const result = await updateUSerService.updateUser(id, user
        )
        if (!result) {
            res.status(304).json({ msg: 'the user not update' })
        }
        res.status(200).json({ msg: 'the user update succesfull', result })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server error' })
    }

}