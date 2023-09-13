const express = require('express');
const router=express.Router()
const{allProducts,setProduct}=require('../controllers/product')


router.get("/",allProducts)
router.post("/",setProduct)






module.exports=router