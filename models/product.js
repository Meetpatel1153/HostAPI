const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    price :{
        type:Number,
        required:true
    },
    features:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","MI","dell"],
            message:`{VALUE} is not supported`
        }
    }
})

module.exports= mongoose.model('Products',productSchema)