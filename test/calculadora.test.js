// importando a função que será testada

const { SomarDoisValores } = require('../src/calculadora');
const { expect } = require('chai');


describe('Teste da Funcão Somar', () => {
    it('A funcão deve ser capaz de somar dois numeros positivos', () => {
        // coletar resultado da função
        const resultadoDaSoma = SomarDoisValores(5, 5);

        //compare o resultado com o valor esperado

        expect(resultadoDaSoma).to.equal(10);
        
    });


    it('A funcão deve ser capaz de somar dois numeros positivos e negativos', () => {
        const resultadoDaSoma = SomarDoisValores(5, -5);

        expect(resultadoDaSoma).to.equal(0); 


    });

    it('Somar dois números zerados', () => {

        const resultadoDaSoma = SomarDoisValores(0, 0);

        expect(resultadoDaSoma).to.equal(0);
    });

    it('Somar dois números negativos', () => {

        const resultadoDaSoma = SomarDoisValores(-15, -20);
        expect(resultadoDaSoma).to.equal(-35); 
    });
});
