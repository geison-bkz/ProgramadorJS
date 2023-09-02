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

for (const item of myArrayObj) {
    if (item.nome === 'Geison') {
        console.log(item.nome);
        continue;
    }

    if (item.nome === 'Bernardo') {
        console.log(item.nome);
        break;
    }

    console.log(item);
}
