function createGrid(number) {
    //create grid with the supplied number of pixels on each side
    for (let i = 0; i < (number * number); i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');

        //calculate height and width
        gridSquare.style.height = container.clientHeight / number + 'px';
        gridSquare.style.width = container.clientWidth / number + 'px';
        container.appendChild(gridSquare);
    }
}

let container = document.querySelector('div.container');
let buttonCreateGrid = document.querySelector('button#create-grid');

//add event listener to create grid button that generates the grid based
//on the value in the input
buttonCreateGrid.addEventListener('click', () => {
    let inputCreateGrid = document.querySelector('input#create-grid');
    //create grid
    createGrid(inputCreateGrid.value);
    //add event listener for each square that changes to black on mouse enter
    let gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => square.addEventListener('mouseenter', (event) => {
        event.target.classList.add('background-black');
    }))    
    //reset input value
    inputCreateGrid.value = '';
    //set grid border
    container.classList.add('border-black');

    inputCreateGrid.focus();
})

