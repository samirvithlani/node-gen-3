const roleSchema = require("../model/RoleSchema");
const auth = () => async (req, res, next) => {
  try {
    //console.log("....",req.body)
    //get data from req header
    if (!req.headers.role) {
      throw new Error("Role is missing");
    } else {
      console.log("....", req.headers.role);
      const role = req.headers.role;
      roleSchema.findOne({role:role}, (err, data) => {
        if (err) {
          
            return res.status(401).json({
                message: "You are not authorized",
              });
        } else {
          if (data) {
            return next();
          } else {
            console.log("inside if....");
            return res.status(401).json({
              message: "You are not authorized",
            });
          }
        }
      });

      //   if (role === "ADMIN" || role === "admin" || role === "user") {
      //     return next();
      //   } else {
      //     throw new Error("You are not authorized");
      //   }
    }
  } catch (err) {
    return res.status(401).json({
      message: err.message,
    });
  }
};
module.exports = { auth };
