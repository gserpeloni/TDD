/*
    02- Integrated Tests - Mocha and Chai
    - Test to verify the routes and others things
    - ref.: https://medium.com/@matheusalves_45120/testes-unit%C3%A1rios-em-node-js-usando-chai-e-mocha-c415c9f84764
*/


const chai = require('chai');
const http = require('chai-http'); //Extensao da lib chai p/ simular requisicoes http;
const subSet = require('chai-subset'); //Extensao para verificar objetos

const index = require('../index'); //Arquivo a ser testado

chai.use(http);
chai.use(subSet);

const alunoSchema = {
    nome: nome => nome,
    sala: sala => sala
};


// - Testes unitarios :: 
describe('Teste das Unitario', () => {

    it('addAluno', ()=>{
        const aluno = index.addAluno('Gustavo', 'Sala 1');
        chai.expect(aluno).to.containSubset(alunoSchema);
    });

    it('getAluno', ()=>{

        index.addAluno('Osmar', 'Sala 1');
        index.addAluno('Mariana', 'Sala 2');
        const alunos = index.getAlunos();

        chai.expect(alunos.length).to.be.equals(3);
        chai.expect(alunos).to.containSubset([alunoSchema]);
    });
})


// 2- Testes de Integracao utilizando chai-hhtp para enviar e recever requisicoes

describe('Teste de integracao', () => {

    it('/aluno - POST', () => {
        chai.request(index.app) //instanciando express
            .post('/aluno') //chamando a rota
            .send({
                nome: 'Ivete',
                sala: 'Sala2'
            })
            .end((err, res) => {
                chai.expect(err).to.be.null; //No errors
                chai.expect(res).to.have.status(201) // StatusCode
                chai.expect(res.body).to.containSubset(alunoSchema); //Validando o tipo do body
            })

    });


    it('/aluno - GET', () => {

        chai.request(index.app)
            .get('/aluno')
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res).to.have.status(200);
                chai.expect(res.body.length).to.be.equal(4);
                chai.expect(res.body).to.be.containSubset([alunoSchema])
            })


    })





});
