import cors from "cors"
import morgan from "morgan"
import express from "express"
import Env from "./configs/env"
import { parcelaRoutes } from "./Routes/parcela.Routes"
import connections from "./configs/db"

const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use("/parcelas", parcelaRoutes)

app.listen(Env.PORT, async () => {


    console.log(` 

=======================================
🚀 PARCELA-SERVICE iniciado correctamente
📡 URL:   http://localhost:${Env.PORT}
🔌 Puerto: ${Env.PORT}
=======================================

          `);
    await connections()

})