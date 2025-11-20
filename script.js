let container = document.querySelector('div.container');

//create 16 grid squares
for (let i = 0; i < 16; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    container.appendChild(gridSquare);
}

let gridSquares = document.querySelectorAll('div.grid-square');

gridSquares.forEach(square => square.addEventListener('mouseenter', (event) => {
    event.target.classList.add('black');
}))