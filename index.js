/**
 * @description: amb. de teste para iniciar estudos sobre testes unitarios.
 * API Rest simples com duas rotas, sendo umas para adicionar alunos em um Array
 * e outra func. para retornar todos os objetos de um array;
 */

 const app = require('express')();
 const bodyParser = require('body-parser');


 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());

 const alunos = [];

 /**
  *  - Functions to add and get objects  
  */

 const addAluno = function(nome, sala){
     
    alunos.push({
         nome: nome,
         sala: sala
     });
 
    return {
        nome: nome,
        sala: sala
    };
 
}



const getAlunos = function(){
    return alunos;
}


/**
 * Routes to post and get alunos
 */

app.get('/aluno', function(req, res){
    res.status(200)
        .json(getAlunos());
})


app.post('/aluno', function(req, res){
    res.status(201)
        .json(addAluno(req.body.nome, req.body.sala));
})


/**
 * Connection with the server:
 */

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3k ...');
})

module.exports = { app, addAluno, getAlunos}