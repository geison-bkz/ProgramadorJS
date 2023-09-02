const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [{ nome: 'Nike' }, { nome: 'Adidas' }, { nome: 'Mizuno' }],
};

const { tamanho, estoque: temEstoque, marcas } = Tenis;

console.log(tamanho, temEstoque, marcas);
