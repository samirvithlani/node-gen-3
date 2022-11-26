const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
//create server using express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;

app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
})
//3000 <-local system 127.0.0.1:3000 
//esablish db connection using mongoose
mongoose.connect("mongodb://localhost:27017/mongogen",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    keepAlive:true,
    socketTimeoutMS:30000,


},(err)=>{
    if(err){
        console.log("Error in db connection",err);
    }
    else{
        console.log("Db connected successfully");
    }
})


