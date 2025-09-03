// importando a função que será testada

const { SomarDoisValores } = require('../src/calculadora');
const { expect } = require('chai');


describe('Teste da Funcão Somar', () => {
    it('A funcão deve ser capaz de somar dois numeros positivos', () => {
        // coletar resultado da função
        const resultadoDaSOma = SomarDoisValores(5, 5);

        //compare o resultado com o valor esperado

        expect(resultadoDaSOma).to.equal(10);
        
    });


    it('A funcão deve ser capaz de somar dois numeros positivos e negativos', () => {
        const resultadoDaSOma = SomarDoisValores(5, -5);

        expect(resultadoDaSOma).to.equal(0); 


    });
});
