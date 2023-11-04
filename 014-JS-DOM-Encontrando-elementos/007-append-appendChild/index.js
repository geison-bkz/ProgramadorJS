'use strict';

const container = document.querySelector('.container');
//container.append('<p>Olá Geison</p>');

const newDiv = document.createElement('div');
newDiv.innerText = 'Olá Geison';
container.appendChild(newDiv);
