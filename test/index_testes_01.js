/*
    - Unit Tests with Mocha and Chai 
    - Basics tests just
    - Tests for simple functions.
*/


const chai = require('chai');
const expect = chai.expect;

//Create the function to tests
const somarnumeros  = (a,b) => {
    if (typeof a === "number" && typeof b === "number") return a + b 
    else return undefined; 
}


//Create function to make tests: function
describe('Somas', () => {

    it('Soma => 2 + 3', (done) => {
        const resultado = somarnumeros(2,3);
        expect(resultado).be.equal(5);
        done();
        console.log('1- resultado == ',resultado);
    })

    it('Soma => -2 + 3', (done)=>{
        const resultado = somarnumeros(-2,3)
        expect(resultado).be.equal(1)
        done();
        console.log('2- resultado == ',resultado);

    })

    it ('Soma => "teste" + 3 ', (done)=>{
        const resultado = somarnumeros('teste', 3);
        expect(resultado).be.equal(undefined);
        done();
        console.log('3- resultado == ',resultado);
    } )

});