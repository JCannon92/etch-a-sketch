function createGrid(size) {
    //create grid with the supplied pixel size
    for (let i = 0; i < size; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }
}

let container = document.querySelector('div.container');
let buttonCreateGrid = document.querySelector('button#create-grid')
let gridSquares = document.querySelectorAll('div.grid-square');

gridSquares.forEach(square => square.addEventListener('mouseenter', (event) => {
    event.target.classList.add('background-black');
}))