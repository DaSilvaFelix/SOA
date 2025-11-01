import { model, Schema } from "mongoose";
import { IUser } from "../types/UserType";

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Ganadero", "Agricultor", "Mixto", "admin"],
    default: "User",
  },
});

export const UserModel = model("Users", UserSchema);
