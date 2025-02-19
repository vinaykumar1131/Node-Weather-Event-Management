const express = require('express');
const authMiddleWare = require("../middleware/authMiddleWare")
const eventController = require("../controller/eventController")
const routes = express.Router({ mergeParams: true });
routes.use(authMiddleWare.protect)
routes.route('')
    .post(eventController.createEvent);
routes.route('/').get(eventController.getAll)
routes.route('/:id')
    .get(eventController.getById)
    .put(eventController.updateById)
    .delete(eventController.deleteById);
module.exports = routes;