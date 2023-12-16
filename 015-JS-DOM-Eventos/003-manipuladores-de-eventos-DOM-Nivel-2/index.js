'use strict';

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log(1);
});

btn.addEventListener('click', () => {
    console.log(2);
});

btn.addEventListener('mouseover', () => {
    console.log(3);
});
