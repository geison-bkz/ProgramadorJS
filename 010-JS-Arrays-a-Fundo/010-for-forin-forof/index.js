const myArray = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

const myArrayObj = [
    {
        nome: 'Geison',
        sobrenome: 'dos Santos',
    },
    {
        nome: 'Zoe',
        sobrenome: 'dos Santos',
    },
    {
        nome: 'Kalel',
        sobrenome: 'dos Santos',
    },
    {
        nome: 'Bernardo',
        sobrenome: 'dos Santos',
    },
];

for (const item of myArrayObj) {
    console.log(item.nome);
}

const obj = { nome: 'Geison', sobrenome: 'dos Santos' };

for (const item in obj) {
    if (Object.hasOwnProperty.call(obj, item)) {
        console.log(obj[item]);
    }
}
