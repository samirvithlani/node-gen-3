const jwt = require('jsonwebtoken');
const secret = "secret123";
const generateToken = (user) => {

        return jwt.sign({user},secret,{expiresIn:'1h'})

}
module.exports = {generateToken}

///generateToken({name:"sachin",age:23})