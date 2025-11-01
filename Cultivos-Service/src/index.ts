import cors from "cors";
import morgan from "morgan";
import express from "express";
import Env from "./configs/env";
import connections from "./configs/db";
import cultivosRouter from "./routers/cultivos.route";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/cultivos", cultivosRouter)

app.listen(Env.PORT, async () => {
     console.log(` 
          
=======================================
🚀 CULTIVO SERVICE iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          
          `);
     await connections()
});
