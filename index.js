// importing
const express = require('express')
require("./connection")
var empmodel = require("./model/employee")

// initialize 
 var app = express();


 //midd
 app.use(express.json());

// api creation 
//add
 app.post("/add",async(req,res)=>{
    try{
        console.log(req.body)
        await empmodel(req.body).save()
        res.send("data added");
    }catch (error){
        console.log(error);
    }
 })
 //view
 app.get("/view",async(req,res)=>{
    try{
       var data= await empmodel.find()
        res.send(data);
    } catch (error){
        console.log(error);
    }
    })
    //delete
    app.delete("/remove/:id",async(req,res)=>{
        try{
             await empmodel.findByIdAndDelete(req.params.id)
            res.send("data Deleted");
        } catch (error){
            console.log(error);
        }
        })

        //update

        app.put("/update/:id",async(req,res)=>{
            try{
                 await empmodel.findByIdAndUpdate(req.params.id,req.body)
                res.send("data updated");
            } catch (error){
                console.log(error);
            }
            })
// port setting
app.listen(3004, ()=>{
     console.log("port is Running");
});