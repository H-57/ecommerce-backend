const mongoose = require("mongoose");


const connect=()=>{
  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI not found');
    return;
  }

return mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB",err);
  });
}
  module.exports=connect;
