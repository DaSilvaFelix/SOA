import mongoose, { Connection } from "mongoose";
import Env from "./env";
const connections = async (): Promise<Connection> => {
  if (!Env.MONGO_URL) {
    throw new Error("Database URL is not defined in the environment variables.");
  }

  try {
    await mongoose.connect(Env.MONGO_URL);
    console.log("database successfully connected");

    return mongoose.connection;
  } catch (error) {
    console.error("Error en la conexión de la base de datos");
    throw error;
  }
};

export default connections;
