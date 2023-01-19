import { Router } from "express"

const categoryRoutes = Router()

categoryRoutes.get("/", (req,res) => {
    res.send("GetAllCategories")
})

categoryRoutes.get("/:id", (req,res) => {
    res.send("GetCategoriesById")
})

categoryRoutes.post("/", (req,res) => {
    res.send("CreateCategory")
})

categoryRoutes.put("/", (req,res) => {
    res.send("UpdateCategories")
})

categoryRoutes.delete("/", (req,res) => {
    res.send("DeleteCategory")
})

export default categoryRoutes