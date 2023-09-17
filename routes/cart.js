const express = require('express');
const router=express.Router()
const {getCart,setCart}= require("../controllers/cart")



router.get("/:id",getCart)
router.post("/",setCart)
// router.patch("/:id")
// router.delete("/:id")




module.exports=router