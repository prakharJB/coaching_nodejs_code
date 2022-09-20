const routes = require("express").Router();

routes.get("/", (req, res)=>{

    res.render("about/index");
})

routes.get("/review", (req, res)=>{

    res.render("about/review");
})

routes.get("/blog", (req, res)=>{
    res.render("about/blog");
})

routes.get("/product" , (req , res)=>{
    res.render("about/product");
})


module.exports = routes;