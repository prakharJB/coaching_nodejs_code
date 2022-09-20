const routes = require("express").Router();

routes.use("/", require("../controller/homecontroller"));
routes.use("/", require("../controller/studentcontroller"));







module.exports = routes;