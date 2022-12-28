const employeeSchema = require('../model/EmployeeSchema');
var myData = require('../controller/UploadController');


exports.createEmployee = ((req,res)=>{

    const employee = new employeeSchema(req.body);
    employee.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while creating the employee"
            })
        }
        else{
            res.status(201).json({
                message:"Employee created successfully",
                data:data
            })
        }
    })

})

exports.getAllEmployee = ((req,res)=>{

    // role
    //rid
    employeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while fetching the employee"
            })
        }
        else{
            res.status(200).json({
                message:"Employee fetched successfully",
                data:data
            })
        }
    })




    // employeeSchema.find((err,data)=>{
    //     if(err){
    //         res.status(500).json({
    //             message:err.message || "Some error occured while fetching the employee"
    //         })
    //     }
    //     else{
    //         res.status(200).json({
    //             message:"Employee fetched successfully",
    //             data:data
    //         })
    //     }
    // })

})

exports.insertBulkEmployee = ((req,res)=>{
    employeeSchema.insertMany(myData,(err,data)=>{
        if(err){
            res.status(500).json({
                message:err.message || "Some error occured while creating the employee"
            })
        }
        else{
            res.status(201).json({
                message:"Employee created successfully",
                data:data
            })
        }

    })
})