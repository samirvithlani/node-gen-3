const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    secret:{
        type:String,
        required:true,
    },
    exposedKey:{
        type:String,
        required:true,
        unique:true,
    }
},
{
    timestamps:true,
})
module.exports = mongoose.model('authToken', AuthTokenSchema);
