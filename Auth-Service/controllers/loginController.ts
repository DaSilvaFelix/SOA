import { LoginService } from "auth/Services/Login.Service";
import { Request, Response } from "express";
import { FindByEmailMongo } from "users/mongoRepository/UserMongoRepo";
import { IFindByEmail } from "users/repositories/FindByEmail";
import { generarJWT } from "utils/helpers/generatJWTt";

declare module "express-session" {
  interface SessionData {
    token?: string;
    isLoggedIn?: boolean;
  }
}

const loginMongo: IFindByEmail = new FindByEmailMongo();
const loginService = new LoginService(loginMongo);

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const result = await loginService.login(email, password);
    if (!result) {
      res.status(400).json({ msg: "Credenciales incorrectas" });
    } else {
      const id = result._id;
      const token = (await generarJWT(id, result.rol)) as string;
      req.session.token = token;
      req.session.isLoggedIn = true;

      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600000,
      });

      res.status(200).json({
        msg: "Authentication successful",
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error", error });
  }
};
export const getMeCtrl = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_data = req.user
    res.status(200).json({ msg: 'data', user_data });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

//logout
export const logout = async (req: Request, res: Response) => {
  req.session.destroy((err) => {
    try {
      if (err) {
        return res.status(500).json({ message: "error closing session" });
      }
      res.clearCookie("connect.sid");
      res.clearCookie('token');

      return res.json({ message: "Session closed successfully" });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "internal server error", error });
    }


  });
}