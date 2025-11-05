import cors from "cors";
import morgan from "morgan";
import express from "express";
import Env from "./configs/env";
import session from "express-session";
import userRoutes from "./routes/user.routes";
import connections from "./configs/db";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(
  session({
    secret: Env.JWT_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 3600000 },
  })
);
app.use("/users", userRoutes);

app.listen(Env.PORT, async () => {
  console.log(` 
    
=======================================
🚀 USER-SERVICE iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================
  
  `);
  await connections();
});
