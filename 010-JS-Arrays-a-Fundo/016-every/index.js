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
    É bacana entender que, se você tem uma condição, ela vai tratar toda sua Array,
    assim podemos verificar se eles estão ok.
*/

const temRefri = pedido.every((element) => {
    return element.bebida === 'Refrigerante';
});

console.log(temRefri);
