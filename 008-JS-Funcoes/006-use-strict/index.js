/*
    O Strict mode elimina alguns erros selenciosos
    que passariam batido do JavaScript e os faz emitir erros.

    Além disso, essa forma corrige alguns erros que tornam o JavaScript
    difícil de ser otimizado, então algumas vezes os códigos no modo estrito
    rodam mais otimizados e velozes do que os códigos no 'modo normal'.

    link: https://www.geekforgeeks.org/strict-mode-javascript/
*/
'use strict';
//var arguments;

(() => {
    teste = 'Teste';
})();

console.log(teste);
