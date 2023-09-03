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
    O método Map além de iterar todo o array ele é muito bom para editar o iterado (resumindo o array)
 */

pedido.map((element, index) => {
    if (element.id === 29) {
        return (element.alimento = 'Kibe');
    }
});

console.log(pedido);
