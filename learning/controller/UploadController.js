const multer = require('multer');
const path = require('path');
const uploadSchema = require('../model/UploadSchema');
const readFromExcell = require('../util/ReadDataFromExcel');

//storage
const storage = multer.diskStorage({
    destination:'../uploads',
    //callback function
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})
//save
//upload
const upload = multer({
    storage:storage,
    limits:{fileSize:90000000},
   
}).single('file')

exports.myData=[];
exports.uploadFile = (req,res)=>{

    upload(req,res,(err)=>{
        if(err){
            console.log("inside if.....",err.message);
            res.status(400).json({message:err.message})
        }
        else{
            if(req.file==undefined){
                res.status(400).json({
                    message:'No file selected'
                })
            }
            else{
                
                var data = readFromExcell.readData(req.file.path);
                this.myData = data;
                console.log("data",data);
                let abspath = path.resolve('../uploads',req.file.originalname);
                console.log("abspath",abspath);
                const upload1 = new uploadSchema({

                    name:req.file.originalname,
                    path:abspath,
                    size:req.file.size,
                    type:req.file.mimetype

                })
                upload1.save((err,data)=>{
                    if(err){
                        res.status(400).json({
                            message:'Error in saving file',
                        })
                    }
                    else{
                        res.status(200).json({
                            message:'File uploaded successfully',
                            file:`uploads/${req.file.originalname}`
                        })
                    }

                })

                // res.status(200).json({
                //     message:'File uploaded successfully',
                //     file:`uploads/${req.file.originalname}`
                // })
            }
        }
    })

}