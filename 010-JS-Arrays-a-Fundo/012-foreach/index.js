const myArrayObj = [
    {
        nome: 'Geison',
        sobrenome: 'dos Santos',
    },
    {
        nome: 'Bernardo',
        sobrenome: 'dos Santos',
    },
    {
        nome: 'Kalel',
        sobrenome: 'dos Santos',
    },
];

myArrayObj.forEach((item, index) => {
    console.log(index, item.nome);
});
