const container = document.querySelector('#container');
const createPara = document.createElement('p');
const createHeader = document.createElement('h3');
const createDiv = document.createElement('div');

// Red <p> with a function
function redElem (element, target) {
    let createRed = element;
    createRed.textContent = "Hey I'm Red";
    createRed.style.color = 'red';

    target.appendChild(createRed);
}

redElem(createPara, container);


// Blue h3
function blueHeader () {
    let blueHeader = createHeader;
    blueHeader.style.color = 'blue';
    blueHeader.textContent = "I'm a blue h3!";
    container.appendChild(blueHeader);
}

blueHeader();

// Pink div 
function pinkDiv() {
    let pinkDiv = createDiv;
    pinkDiv.style.cssText = 'background: pink; border: 4px solid black'

    let divHeader = document.createElement('h1');
    divHeader.textContent = "I'm in a div";
    pinkDiv.appendChild(divHeader);

    let divPara = document.createElement('p');
    divPara.textContent = "ME TOO!";
    pinkDiv.appendChild(divPara);

    container.appendChild(pinkDiv);
}

pinkDiv();