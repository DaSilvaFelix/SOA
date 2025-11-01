import dotenv from "dotenv";

dotenv.config();

export class Env {
  static PORT = process.env.PORT || 4000;
  static USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3000";
  static JWT_SECRET = process.env.JWT_SECRET;
}

export default Env;
