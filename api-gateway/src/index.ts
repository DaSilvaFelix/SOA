import cors from "cors";
import morgan from "morgan";
import express from "express";
import Env from "./config/env";
import usersRouter from "./routers/users/users.route";
import authRoutes from "./routers/auth/auth.route";
import connections from "./config/db";
import session from "express-session";
import cultivosRouter from "./routers/cultivos/cultivos.router";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(session({
  secret: Env.JWT_SECRET || 'clave_predeterminada',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 3600000,
  }
}));



app.use("/api", usersRouter);
app.use("/api", authRoutes)
app.use("/api", cultivosRouter)

app.listen(Env.PORT, async () => {
  console.log(` 
          
=======================================
🚀 API Gateway iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          
          `);
  await connections()
});
