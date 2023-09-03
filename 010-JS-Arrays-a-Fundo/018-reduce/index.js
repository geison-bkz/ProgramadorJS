const pedido = [
    {
        id: 420,
        nome: 'Geison',
        alimento: 'Sanduiche de Bacon',
        bebida: 'Suco de Limão',
        preco: 100,
    },
    {
        id: 152,
        nome: 'Marcia',
        alimento: 'Sanduiche de Queijo',
        bebida: 'Suco de Laranja',
        preco: 59,
    },
    {
        id: 29,
        nome: 'Bernardo',
        alimento: 'Coxinha',
        bebida: 'Suco de Uva',
        preco: 33,
    },
    {
        id: 33,
        nome: 'Kalel',
        alimento: 'Sanduiche de Picanha',
        bebida: 'Refrigerante',
        preco: 79,
    },
    {
        id: 55,
        nome: 'Zoe',
        alimento: 'Pizza',
        bebida: 'Refrigerante',
        preco: 47,
    },
];

/*
    A ideia dele é pegar todos os valores de um array e condensá-lo em um só.
*/

const balancete = pedido.reduce((total, element) => {
    return total + element.preco;
}, 0);

console.log(balancete);
