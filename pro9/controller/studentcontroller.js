const routes = require("express").Router();
const mongodb = require("mongodb");
const Employee = require("../modal/student2");


routes.get("/student",(req,res)=>{
    res.render("student/index")
});

routes.post("/save", (req,res)=>{
    req.body.fee = parseInt(req.body.fee)
    student2.insert(req.body,(err)=>{
        res.render("student/index")
    })
})



module.exports = routes