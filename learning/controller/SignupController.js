const SignupSchema = require('../model/SignupSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {

        bcrypt.hash(password, saltRounds, function(err, hash) {
            // Store hash in your password DB.
            
            return hash;
        });

}
var hashedPassword;
exports.signup = (req, res) => {
    
    const {name,password} = req.body;
    console.log(name,password);
      hashPassword=bcrypt.hashSync(password, saltRounds);
    
    const signup = new SignupSchema({
        name:name,
        password:hashedPassword
    })

    signup.save((err,doc)=>{
        if(err){
            
            res.status(500).json({
                message:"Error in saving data",
            })
        }
        else{
            res.status(200).json({
                message:"Data saved successfully",
                data:doc
            })
        }
    })
    
}
exports.validate = (req, res) => {
    const {name,password} = req.body;

    //find --> db find --> password compare --> true or false
    bcrypt.compare(password,"$2b$10$TdsdVzfQeeZPc3p0.e/Pneq/cdUC5usE9KBTq/g8oVkfoaczvQhUS").then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })

    res.status(200).json({
        message:"Data saved successfully",
    })
    
}