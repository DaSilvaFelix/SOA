import { getMeCtrl, login, logout } from "auth/controllers/loginController";
import { Router } from "express";
import { validateJWT } from "utils/helpers/validateJWT";

export const authRoutes = Router()


authRoutes.post('/login', login)
authRoutes.get("/getUser", validateJWT, getMeCtrl)
authRoutes.post('/logout', logout)