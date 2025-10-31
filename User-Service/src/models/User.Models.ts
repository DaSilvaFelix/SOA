import mongoose, { Schema } from "mongoose";
import { IUser } from "users/types/UserType";



const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true,
        enum: ["Ganadero", "Agricultor", "Mixto", "admin"],
        default: "User"
    }
})

export const UserModel = mongoose.model<IUser>("Users", UserSchema)