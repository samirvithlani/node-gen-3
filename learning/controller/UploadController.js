const multer = require('multer');
const path = require('path');

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
                console.log(req.file.mimetype);
                console.log(req.file.size/1000);

                res.status(200).json({
                    message:'File uploaded successfully',
                    file:`uploads/${req.file.originalname}`
                })
            }
        }
    })




}