require("dotenv").config();
const connectDB=require("./db/connect")
const Product=require("./models/product")
const ProductJson=require("./products.json")

const start = async () =>{
    try{
       await connectDB(process.env.url);
       await Product.create(ProductJson);
       console.log("sucessful")
    }catch(err){
        console.log(err);
    }
}

start();