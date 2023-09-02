let arr = [
    { nome: 'Geison 1', tel: '(99) 99999-9999' },
    { nome: 'Geison 2', tel: '(99) 99999-9999' },
    { nome: 'Geison 3', tel: '(99) 99999-9999' },
    { nome: 'Geison 4', tel: '(99) 99999-9999' },
    { nome: 'Geison 5', tel: '(99) 99999-9999' },
];

const newArray = arr.slice(0, 3);
console.table(newArray);
console.table(arr);

const newArray2 = arr.splice(0, 3);
console.table(newArray2);
console.table(arr);
