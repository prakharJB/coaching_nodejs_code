const routes = require("express").Router();

routes.use("/",require("../controller/homecontroller"));





module.exports = routes;