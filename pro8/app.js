const express = require("express");
const app = express();

const routes = require("./config/routes");

app.use(express.static(__dirname+"/assets"));

app.use(express.json());
app.use(express.urlencoded());

app.use(routes);



app.set("view engine" , "ejs")



const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log("server running")
});
