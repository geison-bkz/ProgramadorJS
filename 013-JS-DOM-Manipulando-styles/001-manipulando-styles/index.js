'use strict';

const h1 = document.querySelector('h1');

h1.style.fontFamily = 'arial';
h1.style.color = 'red';

const p = document.querySelectorAll('p');

p.forEach((element) => {
    element.style.fontFamily = 'arial';
    element.style.fontSize = '12px';
});
