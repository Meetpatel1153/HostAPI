const Product=require("../models/product")
const getAllproducts =async (req,res) =>{

    const {company,name,features,sort,select} = req.query;
    const queryObj={};
    if(company){
        queryObj.company=company;
    }
    if(name){
        queryObj.name={$regex:name,$options:"i"};
    }
    if(features){
        queryObj.features=features;
    }
    let apidata= Product.find(queryObj);
    if(sort){
        let sortfix=sort.split(",").join(" ")
        apidata=apidata.sort(sortfix)
    }
    if(select){
        let selectfix=select.split(",").join(" ")
        apidata=apidata.select(selectfix)
    }

    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 3;
    let skip=(page-1)*limit;

    apidata = apidata.skip(skip).limit(limit)

    const data=await apidata;
    console.log(req.body)
    res.status(200).json({data,nbHits:data.length})
}

const getAllproductsTesting =async (req,res) =>{
    const data=await Product.find(req.query).sort("name -price")
    res.status(200).json({data})
}

module.exports={getAllproducts,getAllproductsTesting}