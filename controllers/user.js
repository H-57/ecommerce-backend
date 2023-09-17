
const user=require('../models/userSingup')

const{ setUser }=require('../service/auth')


// handel signup and create user


const handelUserSignup=async (req,res)=>{
    const{name,email,password}= req.body
    if(!email||!password||!name){

        return  res.status(404).json({message:"plz fill  fields",status:"error"})
  
      }
    const userExist=await user.find({email,})
    if(userExist.length > 0) return res.status(400).json({message:"this email is used already",status:"error"})
    try {
        const userData= await user.create({name,email,password})
        
        const tocken= setUser(userData)
           
           
        res.json({message:"account created success",status:"success",token:tocken,name,email})
      
    } catch (error) {
        res.status(400).send(error.message)
    }
      

}

// handle login and analysis
const handelUserLogin=async (req,res)=>{
    const{email,password}= req.body


    if(!email||!password){

      return  res.json({message:"plz fill  fields",status:"error"})

    }
    

    try {
        const User=await user.findOne({email})
      

        if(!User){
            return res.status(404).json({message:"plz enter right email info",status:"error"})
            }

          
        if(User.password!=password){
          return  res.status(404).json({message:"plz enter right password info",status:"error"})
            }
       
           
           const tocken= setUser(User)
           
           
            res.json({message:"login success",status:"success",token:tocken})
            
           
           
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
      

}




module.exports={handelUserSignup,handelUserLogin}