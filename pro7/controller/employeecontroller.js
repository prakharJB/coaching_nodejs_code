const routes = require("express").Router();
const mongodb = require("mongodb");
const Employee = require("../models/Employee");
const City = require("../models/city");



routes.get("/",(req,res)=>{
    City.find({}, (err,result)=>{
        var obj = {city : result};
    res.render("employee/index", obj)
    })
    
})

routes.get("/delete/:a",(req,res)=>{
    
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    Employee.delete({_id : objid},(err)=>{
        res.redirect("/employee/list");

    })
    
})

routes.get("/list",(req,res)=>{
    Employee.find({}, (err, result)=>{
        var obj = {result : result};
        res.render("Employee/list", obj);
    })
})

routes.get("/detail/:a",(req, res)=>{

    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    

    Employee.find({_id : objid}, (err,result)=>{
        var obj = {info : result[0]};
        res.render("employee/detail",obj);
    })
})



routes.get("/edit/:a",(req,res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    Employee.find({_id : objid}, (err,result1)=>{

        City.find({}, (err,result2)=>{
       

        var obj = {info : result1[0], city : result2};
        res.render("employee/edit", obj);
        })
    })
})

routes.post("/save", (req, res)=>{
    req.body.salary = parseInt(req.body.salary);
    req.body.contact = parseInt(req.body.contact);
    
    Employee.insert(req.body,(err)=>{
        res.redirect("list");
    })

})

routes.post("/update/:a", (req,res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    Employee.update({_id : objid} , req.body,(err)=>{
        res.redirect("/employee/list");
    })

})


module.exports = routes