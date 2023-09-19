//  imports
 const express = require('express')
 const app = express()
 const cors = require("cors");
app.use(cors());
app.options('*',cors());




// routes
const dbConnection=require('./db/dbconn')
const productRoutes=require("./routes/product")
const userRoutes=require("./routes/user")
const cartRoutes=require("./routes/cart")

// middleares
require('dotenv').config()
app.use(express.json())


// server

dbConnection()
const port = process.env.PORT||3000

const {getUser}=require('./service/auth')
app.get('/check/:token', async(req, res) => {
    const id= await getUser(req.params.token)._id
    res.json({"status":"working",id})})


app.use("/products",productRoutes)
app.use("/auth",userRoutes)
app.use("/cart",cartRoutes)


app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))
