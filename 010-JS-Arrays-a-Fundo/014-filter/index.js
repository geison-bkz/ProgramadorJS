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
    Como o nome já diz, esse método deve ser utilizado quando temos a necessidade de filtrar nosso array.
 */

const filterRefri = pedido.filter((element, index) => {
    return element.bebida === 'Refrigerante';
});

console.log(1, pedido);
console.log(2, filterRefri);
