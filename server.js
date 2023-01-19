import express, {Router} from "express"
import routers from "./routes/index.js"


const app = express()

const userRouters = Router()
const productRouters = Router()


//middleware incorporado o integración
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", routers)

app.listen(8080, () => {
    console.log("Servidor OK")
} )
