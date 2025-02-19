const express = require('express');
const userControl = require("../controller/userController")
const routes = express.Router();
routes.route('/signup').post(userControl.createUser);
routes.route('/login').post(userControl.loginUser);
module.exports = routes;

