const container = document.querySelector('#container');
const createPara = document.createElement('p');

function redElem (element, target) {
    let createRed = element;
    createRed.textContent = "Hey I'm Red";
    createRed.style.color = 'red';

    target.appendChild(createRed);
}

redElem(createPara, container);
