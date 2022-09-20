const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html"); 
})

app.get("/about",(req, res)=>{
    res.sendFile(__dirname+"/about.html")
})


app.listen(3001, ()=>{
    console.log("server running");
})