import cors from "cors"
import morgan from "morgan"
import express from "express"
import Env from "./configs/env"
import { ganadoRoutes } from "./Routes/ganado.Routes"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


app.use("/ganado", ganadoRoutes)

app.listen(Env.PORT, () => {


    console.log(` 

    =======================================
    🚀 GANADO-SERVICE iniciado correctamente
    📡 URL:   http://localhost:${Env.PORT}
    🔌 Puerto: ${Env.PORT}
    =======================================

          `);

})