import cors from "cors";
import morgan from "morgan";
import express from "express";
import Env from "./configs/env";
import session from "express-session";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(
  session({
    secret: Env.JWT_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // poner true solo si usas HTTPS
      maxAge: 3600000,
    },
  })
);
app.use(userRoutes);

app.listen(Env.PORT, () => {
  console.log(` 

=======================================
🚀 USER-SERVICE iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          `);
});
