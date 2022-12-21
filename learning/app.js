const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const employeeRoutes = require("./routes/EmployeeRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
//create server using express
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const PORT = 3000;

app.use('/user',userRouter)
app.use('/department',departmentRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
})
//3000 <-local system 127.0.0.1:3000 
//esablish db connection using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/mongogen",{
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


