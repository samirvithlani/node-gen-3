const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    //did
    // department:{
    //     type:Schema.Types.ObjectId,
    //     ref:'Department'
    // }
    department:[
        {
            type:Schema.Types.ObjectId,
            ref:'Department'
        }
    ]
})
module.exports = mongoose.model('Employee', employeeSchema);