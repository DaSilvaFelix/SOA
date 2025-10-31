import { Request, Response } from "express";
import { FindByEmailMongo, UpdateUSerMongo } from "../mongoRepository/UserMongoRepo";
import { IFindByEmail } from "../repositories/FindByEmail";
import { IUpadateUser } from "../repositories/updateUset";
import { UpdateUserService } from "../Services/updateUser.Service";
import { IUser } from "../types/UserType";

const updateMongoUser: IUpadateUser = new UpdateUSerMongo();
const uniqueEmail: IFindByEmail = new FindByEmailMongo();
const updateUSerService = new UpdateUserService(updateMongoUser, uniqueEmail);

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const id = req.params.id;
    const result = await updateUSerService.updateUser(id, user);
    if (!result) {
      res.status(304).json({ msg: "the user not update" });
    }
    res.status(200).json({ msg: "the user update succesfull", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server error" });
  }
};
