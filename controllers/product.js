const {Product}=require('../models/product')

// fetch products by query
const allProducts=async(req,res)=>{
    try {
    let query=Product.find({})//get all products from database

    //for sort products data
  if(req.query._sort&&req.query._order){
    query=query.sort({[req.query._sort]:req.query._order})
  }
// for brands filters 
if(req.query.brand){
    query=query.find({brand:req.query.brand})
}
// for brands category 
if(req.query.category){
    query=query.find({category:req.query.category})
}

    const result=await query.exec()
res.json(result)
} catch (error) {
    res.status(400).json(error)
}

}

const detailProduct=async(req,res)=>{
const id= req.params.id

try {
    const response=await Product.findById(id)
res.json(response)
} catch (error) {
    res.status(400).json(error)
}
}

// create a new product
const setProduct=async(req,res)=>{
const body=req.body
try {
    const result=await Product.create(body)
res.json(result)
} catch (error) {
    res.status(400).json(error)
  
}

}



module.exports={allProducts,setProduct,detailProduct}