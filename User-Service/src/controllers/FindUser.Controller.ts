
import { ID } from "@config/id.type";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { FindUserMongo } from "users/mongoRepository/UserMongoRepo";
import { IFindUsers } from "users/repositories/findUsers";
import { FindUserService } from "users/Services/findUser.service";



const findUsersMongo: IFindUsers = new FindUserMongo();
const findUsersService = new FindUserService(findUsersMongo)

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await findUsersService.findUsers()
        res.status(200).json({ msg: 'the users', result })
    } catch (error) {
        res.status(500).json({ msg: 'the internal server error' })
    }
}

export const getUserByID = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        // Validar ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ msg: 'Invalid user ID format' });
        }
        const result = await findUsersService.findUserById(userId);

        if (!result) {
            return res.status(404).json({ msg: 'User not found' });
        }

        res.status(200).json({ msg: 'User found', result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
}