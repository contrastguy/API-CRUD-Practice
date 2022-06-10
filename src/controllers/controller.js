const { json } = require("express/lib/response");
const usuario = require("../models/usuario.json");//importei o JSON
const mongoose= require("mongoose");

//mensagem de teste
 const home = (req,res) => {
     res.status(200).send({
        "Message":"Olá , seja bem vindo"
 })
 }
   
//adicionar um objeto
const update = (req,res) => {
    //pega os dados da sua requisição
    const reqemail = req.body.email //key1
    const reqnome = req.body.nome//key2
    const reqsobrenome = req.body.sobrenome//key3
    
    if(reqemail && reqnome && reqsobrenome){
        //cria um objeto e add ele no json
        let novoUsuario = {
            
            "email":reqemail,
            "nome":reqnome,
            "sobrenome":reqsobrenome
        };

       usuario.push(novoUsuario)

        res.status(201).send({
            "message":"usuário criado com sucesso",
            novoUsuario
        })

    
    } //validar se tem essas chaves no objeto
    else{
        res.status(400).send({
            "mensagem":"Deu ruim"
        })
    }

  
}

const any= (req,res) => {
    res.status(200).send(usuario)
}

const userId =(req,res) => {
    //a função antes de fazer o envio da resposta , vai ler e pegar os dados que o cliente pediu
     let reqId = req.params.id;
     let reqNome = req.body.nome

     //agora ela vai procurar no JSON , o elemento que tem o mesmo id 
     let findId = usuario.find(usuario => usuario.id == reqId);
     
     //pegar a propriedade nome do JSON e igualar com a propriedade nome da var ,a qual busca propriedades no JSON
     let findNome = usuario.find(usuario => usuario.nome == reqNome)

    res.status(200).send({
        "mensagem":"Achei o elemento!",
        findId,
        findNome
    })
}


const objArray = (req,res) => {
    let dadosArray = req.body
    let dadosArrayModificados = Object.keys(dadosArray).map(m => JSON.parse(usuario[m]) )
    

    res.status(200).send({
        "message": "Todos os usuários em forma de Array" ,
        dadosArrayModificados
    })


}


const editar = (req,res) => {
    let reqId =req.params.id;

    let findId = usuario.find(usuario => usuario.id == reqId)

    let email = req.body.email;
    let nome = req.body.nome;
    let sobrenome = req.body.sobrenome;

    if(email && nome && sobrenome){
       let reqId = req.params.id;
       let findId = usuario.map(usuario => usuario.id == reqId);
        

        res.status(200).send({
            "mensagem" :"Alterado!",
            
        })
    }else{
        res.status(400).send({
            "mensagem":"Deu ruim!"
        })
    }

}

module.exports = {
    home,
    update,
    any,
    userId,
    objArray,
    editar,
    mongoose
};