const express = require("express");
const app = express();

const routes = require("./config/routes")




app.use(express.static(__dirname+"/assets"));

app.use(routes);

app.set("view engine","ejs");


 




const port = process.env.PORT ||3000;
app.listen(port,()=>{
    console.log("server run")
});