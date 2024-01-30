const express=require('express')
const router=express.Router();
const {getAllproducts,getAllproductsTesting} = require("../controllers/products")

router.route("/").get(getAllproducts)
router.route('/testing').get(getAllproductsTesting)

module.exports=router;