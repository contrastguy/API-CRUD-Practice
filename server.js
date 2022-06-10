//importei o express do app.js
const app = require("./src/app.js");
const porta = 1313;


app.listen(porta , () => {
    console.log("Servidor rodando na porta: " + porta)
})
