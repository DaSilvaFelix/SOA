import dotenv from "dotenv";

dotenv.config();

export class Env {
  static PORT = process.env.PORT || 3000;
  static MONGO_URL = process.env.MONGO_URL;
  static JWT_SECRET = process.env.JWT_SECRET;
}

export default Env;
