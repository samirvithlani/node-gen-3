app.get("/user",(req,res)=>{

    //res.send("hello user")
    //res.status(200).send("Hello user")
    res.json({
        name:"abc",
        age:20
    })
})

app.post("/user",(req,res)=>{

    console.log(req.body.name)
    res.json({
        message:"data added..",
        object:req.body
    })
})

app.delete("/user/:id",(req,res)=>{

    try{
    let id = req.params.id;
    if(id==0){
        throw new Error("id is not valid")
    }
    else{
        res.json({
            message:"data deleted..",
            id:id
        })
    }
    
    }catch(err){

        res.status(402).send(err.message)
    }
    
})
app.put("/user/:name",(req,res)=>{


        let name = req.params.name;
        if(name==="amit"){

            res.json({
                message:"data updated..",
                object:req.body
            })
        }
        else{
            res.status(402).send("name is not valid")
        }


})

app.get("/user/:id",(req,res)=>{

    res.send("hello"+req.params.id)

})