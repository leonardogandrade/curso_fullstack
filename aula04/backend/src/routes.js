const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user',userController.persistData);
routes.get('/user',userController.listUsers);
routes.get('/userUm/:id',userController.listaUm);
routes.get('/user/:sex',userController.listBySex);
routes.get('/userAge/:age',userController.listByAge);
routes.get('/fields/:f',userController.listManyFields);

module.exports = routes;