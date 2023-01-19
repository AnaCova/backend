import express from "express"

export const productRoutes = express.Router()

productRoutes.get("/",(req,res) => {
    res.send("GetAllProducts")
})

productRoutes.get("/:id",(req,res) => {
    res.send("GetProductsById")
})

productRoutes.post("/",(req,res) => {
    res.send("CreateProduct")
})

productRoutes.put("/",(req,res) => {
    res.send("UpdateProduct")
})

productRoutes.delete("/",(req,res) => {
    res.send("DeleteProduct")
})