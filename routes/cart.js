const express = require('express');
const router=express.Router()
const {getCart,setCart,deleteFromCart,updateCart}= require("../controllers/cart")



router.get("/",getCart)
.post("/",setCart)
.delete('/:id', deleteFromCart)
.patch('/:id', updateCart)





module.exports=router