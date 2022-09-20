const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const database = require("../config/database");



routes.get("/", (req, res)=>{

    res.render("student/index");
})

routes.post("/save",(req, res)=>{
    req.body.age = parseInt(req.body.age);
    req.body.contact = parseInt(req.body.contact);
    //console.log(req.body);

    MongoClient.connect(database.dbUrl, (err,con)=>{
        if(err){
            console.log(err);
            return;
        }

        var db = con.db(database.dbName);
        db.collection("student").insertOne(req.body,(err)=>{
            if(err){
                console.log(err);
                return;
            }

            //console.log("****data******");
            res.redirect("list");

        })

    })    
})

routes.post("/update/:a",(req, res)=>{
    //console.log(req.params.a);
    //return;
    var id= req.params.a;   
    var objid = mongodb.ObjectId(id);
    
    
    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
            db.collection("student").updateMany({_id : objid},{$set : req.body} , (err)=>{
                res.redirect("/student/list");
            })
    })
})




routes.get("/list",(req,res)=>{

    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);

        db.collection("student").find().toArray((err,result)=>{
            //console.log(result);
            var obj = {result : result};
            res.render("student/list",obj);
        })
    })

})
   
routes.get("/detail/:a",(req,res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find({_id: objid}).toArray((err,result)=>{
         //   console.log(result);
         //   return;
         var obj = {info : result[0]};
            res.render("student/detail" , obj);
        })
    })
})       

routes.get("/delete/:a" , (req,res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
        db.collection("student").deleteMany({_id : objid}, (err)=>{
            res.redirect("/student/list");

        })
    })
})

routes.get("/edit/:a", (req,res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);

    MongoClient.connect(database.dbUrl,(err,con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find({_id : objid}).toArray((err,result)=>{
               // console.log(result);
               // return;
            var obj = {info : result[0]};
            res.render("student/edit", obj);
        })
    })
})





module.exports = routes;

