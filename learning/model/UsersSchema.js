const mongoose = require("mongoose");
//create an object of schema
const schema = mongoose.Schema;

//created an obhect of userSchame
const userSchema = schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    age:{
        type:Number,
    },
    isMarried:{
        type:Boolean,
    }
})
module.exports = mongoose.model("users",userSchema);