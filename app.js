
require("dotenv").config();
const express = require('express');
const app=express();
const products_routes= require("./routes/products")
const connectDB=require("./db/connect")
const ProductJson=require("./products.json")
const Product=require("./models/product")

const PORT=process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("hi i am live")
})

app.use("/api/products",products_routes)
const start=async () =>{
        try{
            await connectDB(process.env.url);
            await Product.deleteMany()
            await Product.create(ProductJson);
                app.listen(PORT,()=>{
                   console.log( `successfuly run on port ${PORT}`)
                })
        }catch(error){
            console.log(error)
        }
}
start();