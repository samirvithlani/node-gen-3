const userSchema = require("../model/UsersSchema");
const generateToken = require("../util/generateToken");

exports.createUser = (req, res) => {
  //req.body > save
  const user = new userSchema(req.body);
  //insert --> save
  user.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in saving data",
      });
    } else {
      res.status(201).json({
        data: data,
        message: "Data saved successfully",
      });
    }
  });
};

exports.getAllUsers = (req, res) => {
  userSchema.find((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching data",
      });
    } else {
      res.status(200).json({
        data: data,
        message: "Data fetched successfully",
      });
    }
  });
};
exports.deleteUser = (req, res) => {
  //req.params.id
  const id = req.params.id;

  userSchema.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in deleting data",
      });
    } else {
      if (data != null || data != undefined) {
        res.status(200).json({
          data: data,
          message: "Data deleted successfully",
        });
      } else {
        res.status(404).json({
          message: "Data not found",
        });
      }
    }
  });
};

exports.updateUser = (req, res) => {
  //id record....
  //id from url
  console.log(req.body.name);
  if (
    req.body.name == undefined ||
    req.body.email == undefined ||
    req.body.password == undefined ||
    req.body.age == undefined ||
    req.body.isMarried == undefined
  ) {
    console.log("Bad request");
    res.status(400).json({
      message: "Bad request",
    });
  } else {
    //if
    var user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      isMarried: req.body.isMarried,
    };

    const id = req.params.id;
    userSchema.findByIdAndUpdate(id, req.body, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Error in updating data",
        });
      } else {
        if(data!=null || data!=undefined){
            res.status(200).json({
                data: data,
                message: "Data updated successfully",
            });
        }
        else{
            res.status(404).json({
                message: "Data not found",
            });
        }
      }
    });
  }
};


exports.login  = (req,res)=>{

  //email --> found --> password --> match --> token
  userSchema.findOne({email:req.body.email},(err,user)=>{

      if(err){

        res.status(500).json({
            message:"Error in fetching data",

        })
      }
      else{

          if(user){
              if(user.password === req.body.password){

                //token
                var token = generateToken.generateToken(user)

                res.status(200).json({
                    message:"Login successfully",
                    token:token
                })
              }
              else{
                res.status(401).json({
                    message:"Invalid credentials",
                })
              }

          }
      }

  })

}


exports.getuserById = (req,res)=>{

        //its not a rule ... id
        const id = req.params.id
        userSchema.findById(id,(err,data)=>{
            if(err){
                res.status(500).json({
                    message:"Error in fetching data",
                })
            }
            else{

                if(data!=null|| data!=undefined){
                    res.status(200).json({
                        message:"Data fetched successfully",
                        //data:data
                        user:data
                    })
                }
                else{
                    res.status(404).json({
                        message:"Data not found",
                    })
                }
            }
        })


}
