function SomarDoisValores(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;

}

function calcularMediaDeDoisValores(valor1, valor2) {
    //soma todos os valores
    const resultado = (valor1 + valor2);
    // divide pela quantidade de numeros passados
    const SomarDoisValores = resultado / 2;
    // retorna o resultado
    return resultado;
}

module.exports = { SomarDoisValores };
