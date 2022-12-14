const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    qty: Number,
    total:{
        type: Number,
        default: 0
    }
})
module.exports = mongoose.model('Cart', cartSchema);