'use strict';

const menu = document.querySelector('#menu');

menu?.addEventListener('click', (event) => {
    const { target } = event;

    switch (target.getAttribute('class')) {
        case 'home':
            console.log(target.innerText);
            break;

        case 'sobre':
            console.log(target.innerText);
            break;

        case 'contato':
            console.log(target.innerText);
            break;

        default:
            break;
    }
});
