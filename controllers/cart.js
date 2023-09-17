 const {Cart}=require("../models/cart")
 
 
 exports.getCart =async(req,res)=>{
    try {
        const userId=req.params.id
        const response=await Cart.findById({userId})
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:"notfound"})
    }
  


 }

 exports.setCart=async(req,res)=>{
    try {
        const data=req.body
        console.log(data)
        const response=await Cart.create({data})
        res.status(200).json(response)
    }
     catch (error) {
        console.log(req.user)
        res.status(400).json(error)
    }
  



 }
 