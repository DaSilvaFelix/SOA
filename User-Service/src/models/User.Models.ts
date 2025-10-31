import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ["Ganadero", "Agricultor", "Mixto", "admin"],
    default: "User",
  },
});

export const UserModel = mongoose.model("Users", UserSchema);
