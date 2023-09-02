/*
    1 - Nome da função
    2 - Retorno
    3 - Não tem Hoisting
    4 - Arguments
*/
function nomeFunc() {
    return 'Geison dos Santos';
}

console.log(nomeFunc());

const newFuncArrow = () => {
    return 'Geison com arrow';
};

console.log(newFuncArrow());
/*
    5 - Não pode ser invocada com New
*/

/*
    6 - Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada.

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como o contexto global, que no caso dos navegadores é window.
*/

/*
    7 - Constructor
    Arrow functions não podem ser constructors, então não é possível usar o operador
    new com a mesma.
*/
