'use strict';

const container = document.querySelector('.container');
const paragrafo = container.querySelector('.paragrafo');

const newH2 = document.createElement('h2');
newH2.innerText = 'Novo h2';

container.insertBefore(newH2, paragrafo);
