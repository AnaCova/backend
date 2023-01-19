import express, {Router} from "express"
import morgan from "morgan"
import routers from "./routes/index.js"


const app = express()

//middleware incorporado o integración
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//middleware de terceros
app.use(morgan('tiny'))

app.use("/api", routers)

app.listen(8080, () => {
    console.log("Servidor OK")
} )
