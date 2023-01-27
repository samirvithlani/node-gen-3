const tokenUtil = require('../util/generateToken');

const tokenMiddleware =(req, res, next) => {

    const token = req.headers.authorization;
    if(token){

        try{

            var tokenData = tokenUtil.validateToken(token);
            if(tokenData.user.age>20){
            if(tokenData!=null || tokenData!=undefined){
                return next();
            }
            else{
                return res.status(401).json({
                    message: "You are not authorized",
                  });
            }
        }else{
            return res.status(401).json({
                message: "You are not authorized",
              });
        }

        }catch(err){

            return res.status(401).json({
                message: "You are not authorized",
              });
        }

    }
    else{
        return res.status(401).json({
            message: "You are not authorized",
          });
    }

}
module.exports = { tokenMiddleware };