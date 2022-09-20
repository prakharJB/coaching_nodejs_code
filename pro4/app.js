const express = require("express");
const app = express();

app.listen(3000,()=>{
    console.log("server run");

})

app.use(express.static(__dirname+"/assets"));

app.get("/",(req , res)=>{
    var info = [
        {city : "indore",
         name : "rahul",
         age : 23 },

         {city : "bhopal",
         name : "aman",
         age : 21 },

         {city : "mumbai",
         name : "rishi",
         age : 22 },
        ]


               
      var obj = {data : info};




    res.render("home", obj);
});

app.set("view engine", "ejs");