const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("server run");
});

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.get("/", (req , res)=>{
    var obj = {name : "Rohit" , age : 23 , city : "indore"};
    res.render("home",obj);

});
