const { Cart } = require("../models/cart")
const{getUser}=require("../service/auth")

exports.getCart = async (req, res) => {
    const token=req.headers["authorization"]?.split("bearer ")[1]
   
    const userId=await getUser(token)._id
    if(userId){
        try {
           
            const response = await Cart.find({ user: userId }).populate('product')
            res.status(200).json(response)
        } catch (error) {
            res.status(400).json({ error: "notfound" })
        }
    }
    else{
        res.status(400).json({ error: "plz login with right info" })
    }
   



}

exports.setCart = async (req, res) => {
    const token=req.headers["authorization"]?.split("bearer ")[1]
    const userId=await getUser(token)._id
    if(userId){
    try {
        
        const {quantity,product} = req.body

        const result = await Cart.create({product,quantity,user:userId})
        const response = await result.populate('product')
        res.status(200).json(response)
    }
    catch (error) {
        
        res.status(400).json(error)
    }
}else{

    res.status(400).json({ error: "plz login with right info" })
}
}


exports.deleteFromCart = async (req, res) => {
    try {
        const  Id=req.params.id 

       
        const response = await Cart.findByIdAndDelete(Id)
        res.status(200).json({"message":"deleted success",response})
    }
    catch (error) {
       
        res.status(400).json(error)
    }
}
exports.updateCart = async (req, res) => {
    try {
        const  Id=req.params.id 

       
        const response = await Cart.findByIdAndUpdate(req.body)
        res.status(200).json({"message":"update success",response})
    }
    catch (error) {
      
        res.status(400).json(error)
    }
}



