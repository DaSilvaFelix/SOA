import cors from "cors"
import morgan from "morgan"
import express from "express"
import Env from "./configs/env"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// app.use("/users", userRouter)

app.listen(Env.PORT, () => {


    console.log(` 

=======================================
🚀 USER-SERVICE iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          `);

})