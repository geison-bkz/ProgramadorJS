const pedido = [
    {
        id: 420,
        nome: 'Geison',
        alimento: 'Sanduiche de Bacon',
        bebida: 'Suco de Limão',
    },
    {
        id: 152,
        nome: 'Marcia',
        alimento: 'Sanduiche de Queijo',
        bebida: 'Suco de Laranja',
    },
    {
        id: 29,
        nome: 'Bernardo',
        alimento: 'Coxinha',
        bebida: 'Suco de Uva',
    },
    {
        id: 33,
        nome: 'Kalel',
        alimento: 'Sanduiche de Picanha',
        bebida: 'Refrigerante',
    },
    {
        id: 55,
        nome: 'Zoe',
        alimento: 'Pizza',
        bebida: 'Refrigerante',
    },
];

/*
    Nome bem subjetivo também, mas ele procura e te retorna apenas o primeiro valor encontrado do array.
*/

const findId = pedido.find((element, index) => {
    return element.id === 29;
});

console.log(findId);
