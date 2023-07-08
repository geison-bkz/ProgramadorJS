/*
    IMC é uma sigla para Índice de Massa Corpórea,
    parâmetro adotado pela Organização Mundial da Saúde
    para calcular o peso ideal de cada pessoa.

    Como calcular o IMC?
    O IMC é calculado dividindo o peso (em Kg) pela 
    altura ao quadrado (em m), de acordo com a seguinte
    fórmula: IMC = peso / (altura x altura).

    Em nosso caclulo devemos retornar os seguintes valores para o usuário:

    Resultado do Calc   | Resultado para o usuário
    Abaixo de 17        | Muito abaixo do peso
    Entre 17 e 18,49    | Abaixo do peso
    Entre 18,5 e 24,99  | Peso normal
    Entre 25 e 29,99    | Acima do peso
    Entre 30 e 34,99    | Obesidade I
    Entre 35 e 39,99    | Obesidade II
*/

let peso = 62;
let altura = 1.7;

const imc = peso / (altura * altura);

if (imc < 17) console.log(`IMC = ${imc}\nMuito abaixo do peso`);
else if (imc >= 17 && imc < 18.5) console.log(`IMC = ${imc}\nAbaixo do peso`);
else if (imc >= 18.5 && imc < 25) console.log(`IMC = ${imc}\nPeso normal`);
else if (imc >= 25 && imc < 30) console.log(`IMC = ${imc}\nAcima do peso`);
else if (imc >= 30 && imc < 35) console.log(`IMC = ${imc}\nObesidade I`);
else if (imc >= 35 && imc < 40) console.log(`IMC = ${imc}\nObesidade II`);
else console.log('Risco TOTAL!');
