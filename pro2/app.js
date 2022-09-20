const express = require("express");
const app = express();

app.listen(3000, ()=>{
    console.log("server run");
});

app.use(express.static(__dirname+"/assests"));




app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/about.html");
})