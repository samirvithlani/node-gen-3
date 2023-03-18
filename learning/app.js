const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); 
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
app.use(cors());

const userRouter = require("./routes/UserRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const employeeRoutes = require("./routes/EmployeeRoutes");
const productRoutes = require("./routes/ProductRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const studentRoutes = require("./routes/StudentRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const signupRoutes = require("./routes/SignupRoutes");

require('dotenv').config()
//create server using express
app.use(express.json())
const PORT = process.env.PORT || 3001;


app.use('/user',userRouter)
app.use('/department',departmentRoutes)
app.use('/employee',employeeRoutes)
app.use('/product',productRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)
app.use('/student',studentRoutes)
app.use('/role',roleRoutes)
app.use('/signup',signupRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on port ",PORT);
})

const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"User API",
            version:"1.0.0",
            description:"User API Information",
            contact:{
                name:"Sachin",
                email:"sachin@gmail.com",
                url:"http://localhost:3000"
            },
            servers:[
                {
                    url:"http://localhost:3000"
                }
            ]
        },
        
    },
    apis:["./routes/*.js"]
}
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerJsDoc(options)))
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


