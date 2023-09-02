/*
    O que é uma função?
    É um conjunto de instruções que executa uma tarefa ou calcula um valor.
*/

// 1 - Function declaration
function isValidDeclaration() {
    const soma = 1 + 2;

    if (soma === 3) {
        return true;
    }

    return false;
}

// 2 - Function expression
const isValidExpression = function () {
    return false;
};

// 3 - Arrow Function
const isValidArrow = () => 2 * 2;
