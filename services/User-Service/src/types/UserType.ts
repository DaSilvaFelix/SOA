import { Types } from "mongoose";
export interface IUser {
  _id: Types.ObjectId;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role?: string;
}
