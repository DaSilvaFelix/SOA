import { Router } from "express";
import type { Request, Response } from "express";
import { RegisterAmdmins } from "../controllers/Register.Controller";
import { createUser } from "../controllers/CreateUser.Controller";
import { updateUserController } from "../controllers/updateUser.Controller";
import { deleteUserControllers } from "../controllers/DeleteUser.Controller";
import { getAllUser } from "../controllers/FindUser.Controller";
import { getUserByID } from "../controllers/FindUser.Controller";

const userRoutes = Router();

userRoutes.post("/register", RegisterAmdmins);
userRoutes.post("/createUser", createUser);
userRoutes.put("/updateUser/:id", updateUserController)
userRoutes.delete("/deleteUser/:id", deleteUserControllers)
userRoutes.get("/allUser", getAllUser)
userRoutes.get("/:id", getUserByID)

export default userRoutes;
