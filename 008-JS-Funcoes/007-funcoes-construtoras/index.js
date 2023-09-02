/* 
function Name(nome, sobrenome) {
  this.nome = nome;

  this.nomeCompleto = () => {
    const nomeCompleto = `${this.nome} ${sobrenome}`;
    return nomeCompleto;
  };
}

const meuNome = new Name('Geison', 'dos Santos');
console.log(meuNome.nomeCompleto()); 
*/

function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    };

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    };
}

const calculadora = new Calculadora();

console.log(calculadora.soma(1, 2));
console.log(calculadora.subtracao(1, 2));
