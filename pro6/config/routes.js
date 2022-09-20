const express = require("express");
const routes = express.Router();


routes.use ("/", require("../controller/homecontroller"));
routes.use ("/about", require("../controller/aboutcontroller"));
routes.use ("/contact", require("../controller/contactcontroller"));
routes.use ("/student", require("../controller/studentcontroller"));





routes.use ("*", require("../controller/pagenotfound"));



module.exports = routes;
