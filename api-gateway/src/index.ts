import cors from "cors"
import morgan from "morgan"
import express from "express"
import Env from "./config/env"
import usersRouter from "./routers/users/users.route"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/api", usersRouter)



app.listen(Env.PORT, () => {

     console.log(` 
          
=======================================
🚀 API Gateway iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          
          `);

})