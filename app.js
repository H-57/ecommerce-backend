//  imports
 const express = require('express')
 const app = express()
 const cors = require("cors");
app.use(cors());
app.options('*',cors());

var allowCrossDomain = function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();  
}


// routes
const dbConnection=require('./db/dbconn')
const productRoutes=require("./routes/product")
const userRoutes=require("./routes/user")

// middleares
require('dotenv').config()
app.use(express.json())
app.use(allowCrossDomain);

// server

dbConnection()
const port = process.env.PORT||3000


app.get('/', (req, res) => res.json({"hai":"dd"}))


app.use("/products",productRoutes)
app.use("/auth",userRoutes)



app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))
