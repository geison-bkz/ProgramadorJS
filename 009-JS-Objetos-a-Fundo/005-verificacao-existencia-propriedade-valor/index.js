const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: 'Nike' }, { nome: 'Adidas' }, { nome: 'Mizuno' }],
};

console.log(Tenis.hasOwnProperty('tamanho'));
console.log('tamanho' in Tenis);
