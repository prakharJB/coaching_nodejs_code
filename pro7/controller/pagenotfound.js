const routes = require("express").Router();

routes.get("*", (req, res)=>{
    res.render("pagenotfound/index");
})

module.exports = routes