import { Router } from "express";
import { RegisterAmdmins } from "../controllers/Register.Controller";
import { createUser } from "../controllers/createUser.controllers";
import { updateUserController } from "../controllers/updateUser.Controller";
import { deleteUserControllers } from "../controllers/DeleteUser.Controller";
import { getAllUser, getUserByID } from "../controllers/FindUser.Controller";






export const userRoutes = Router()


userRoutes.post("/register", RegisterAmdmins)
userRoutes.post("/createUSer", createUser);
userRoutes.put("/updateUSer/:id", updateUserController)
userRoutes.delete("/deleteUser/:id", deleteUserControllers)
userRoutes.get("/allUSer", getAllUser)
userRoutes.get("/:id", getUserByID) 
