import dotenv from "dotenv";

dotenv.config();

export class Env {
  static PORT = process.env.PORT || 4000;
  static USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3000";
  static CULTIVOS_SERVICE_URL = process.env.CULTIVOS_SERVICE_URL || "http://localhost:3001";
  static PARCELA_SERVICE_URL = process.env.PARCELA_SERVICE_URL || "http://localhost:3002";
  static GANADO_SERVICE_URL = process.env.GANADO_SERVICE_URL || "http://localhost:3003";
  static JWT_SECRET = process.env.JWT_SECRET;
  static MONGO_URL = process.env.MONGO_URL;

}

export default Env;
