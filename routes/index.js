import  {Router}  from "express";
import userRouters from "./userRoutes.js";

const routers = Router()

routers.use("/user",userRouters)

export default routers