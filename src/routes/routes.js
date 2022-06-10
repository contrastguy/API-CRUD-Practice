const express = require("express");
const Router = express.Router(); //adiciona essa rota na instância principal do express
const controller = require("../controllers/controller")

//mensagem de apresentação
Router.get("/" , controller.home)

//adicionar um usuário 
Router.post("/create" , controller.update)    //  /create ,/all , /  são o que você vai colocar lá no endererço do postman , depois do nome do objeto

//pegar tudo do objeto
Router.get("/all" ,controller.any)

//consultar um usuário por id
Router.get("/all/:id" , controller.userId)


//consultar todos os usuários em forma de array
Router.get("/array" , controller.objArray)


//editar um usuário por id
Router.put("/update/:id" , controller.editar)

module.exports = Router