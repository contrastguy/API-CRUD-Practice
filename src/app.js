//importa o express , traduzir ele pra JSON e exporta
const express = require("express");
const app = express()
const mongoose = require("mongoose");

app.use(express.json());

//importar as rotas do routes.js
const usuario = require("./routes/routes")

//definir a rota padrão com express
app.use("/usuario" ,  usuario) // o /usuario é o a rota que você escreve depois do número da porta quando for chamar a API no Postman

module.exports= app,mongoose;
//OBS: endereço para chamar a API no Postman -> http://localhost:~número porta~/~nome da rota padrão~/