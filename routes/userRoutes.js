import express from "express"

const userRouters = express.Router()

userRouters.get("",(req,res,) =>{
    res.send("GetAllUsers")
})

userRouters.get("/:id",(req,res,) =>{
    res.send("GetUserById")
})

userRouters.post("/",(req,res) =>{
    res.send("PostUser")
})

userRouters.put("/",(req,res) =>{
    res.send("UpdateUser")
})


userRouters.delete("/",(req,res) =>{
    res.send("DeleteUser")
})

export default userRouters