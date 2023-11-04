'use strict';

const container = document.querySelector('.container');

const newP = document.createElement('p');
newP.innerHTML = 'Olá Geison';
container.after(newP);
//container.before(newP);
