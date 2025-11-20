function createGrid(number) {
    //create grid with the supplied number of pixels
    for (let i = 0; i < number; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);
    }
}

let container = document.querySelector('div.container');
let buttonCreateGrid = document.querySelector('button#create-grid');
let inputCreateGrid = document.querySelector('input#create-grid');
let gridSquares = document.querySelectorAll('div.grid-square');

//add event listener to create grid button that generates the grid based
//on the value in the input
buttonCreateGrid.addEventListener('click', () => {
    //create grid
    createGrid(inputCreateGrid.value);
    //reset input value
    inputCreateGrid.value = '';
    //set grid border
    container.classList.add('border-black');
})

//add event listener for each square that changes to black on mouse enter
gridSquares.forEach(square => square.addEventListener('mouseenter', (event) => {
    event.target.classList.add('background-black');
}))