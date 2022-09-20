const express = require("express");
const routes = express.Router();


routes.use ("/", require("../controller/homecontroller"));
routes.use ("/about", require("../controller/aboutcontroller"));
routes.use ("/contact", require("../controller/contactcontroller"));
routes.use ("/employee",require("../controller/employeecontroller"));




routes.use ("*", require("../controller/pagenotfound"));



module.exports = routes;
