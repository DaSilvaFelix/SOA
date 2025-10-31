import { ID } from "@config/id.type";
import { Request, Response } from "express";
import { DeleteUserMongo } from "users/mongoRepository/UserMongoRepo";
import { IDeleteUser } from "users/repositories/deleteUser";
import { DeleteUserService } from "users/Services/deleteUser.service";




const deleteUserMongo: IDeleteUser = new DeleteUserMongo()
const DeleteUserServices = new DeleteUserService(deleteUserMongo)


export const deleteUserControllers = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        const result = await DeleteUserServices.DeleteUser(id)
        res.status(200).json({ msg: "the user delete succesfull", result })
    } catch (error) {
        res.status(500).json({ msg: 'the internal server error' })

    }
}