import { getMeCtrl, login, logout } from "../../controllers/auth.Controller";
import { Router } from "express";
import { validateJWT } from "../../Middlewares/validateJWT";

const authRoutes = Router()

authRoutes.post('/login', login)
authRoutes.get("/getUser", validateJWT, getMeCtrl)
authRoutes.post('/logout', logout)

export default authRoutes