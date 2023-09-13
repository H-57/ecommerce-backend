//  imports
 const express = require('express')
 const app = express()
const dbConnection=require('./db/dbconn')
const productRoutes=require("./routes/product")

// middleares
require('dotenv').config()
app.use(express.json())


// server

dbConnection()
const port = process.env.PORT||3000


app.get('/', (req, res) => res.json({"hai":"dd"}))


app.use("/products",productRoutes)




app.listen(port, () => console.log(`Example app listening on port http://127.0.0.1:${port}`))
