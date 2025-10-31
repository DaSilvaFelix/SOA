import dotenv from "dotenv"

dotenv.config()

export class Env {
     static PORT = process.env.PORT || 4000
     static USER_SERVICE_URL = process.env.USER_SERVICE_URL || "http://localhost:3000"
}

export default Env