import { IRegisterRepoAdmin } from "../repositories/register.repositoty";
import { Register } from "../Services/Regiter.service";
import { Request, Response } from "express";
import { IUser } from "../types/UserType";
import { FindByEmailMongo } from "../mongoRepository/UserMongoRepo";
import { IFindByEmail } from "../repositories/FindByEmail";
import { RegisterMongo } from "../mongoRepository/RegisterMongo.Repository";

const registerMongo: IRegisterRepoAdmin = new RegisterMongo();
const uniqueEmail: IFindByEmail = new FindByEmailMongo();

const registerService = new Register(registerMongo, uniqueEmail);

export const RegisterAmdmins = async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;

    const result = await registerService.createUser(user);
    if (!result) {
      res.status(304).json({ msg: "the user not creadet" });
    }
    console.log(result);
    res.status(200).json({ msg: "the user", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "the internal server error" });
  }
};
