const express = require('express');
const router=express.Router()
const{allProducts,setProduct,detailProduct}=require('../controllers/product')


router.get("/",allProducts)
router.get("/:id",detailProduct)
router.post("/",setProduct)






module.exports=router