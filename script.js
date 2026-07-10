function newGrid(length, width) {
    let area = length*width;
    let container = document.querySelector(".container");
    for (let i=0; i<area; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.toggle("gridSquares");
        container.appendChild(newDiv);
    }
}

function clearGrid() {
    //remove container
    let container = document.querySelector(".container");
    let body = document.querySelector("body");
    body.removeChild(container);

    //add new container
    let newContainer = document.createElement("div");
    newContainer.classList.add("container");
    body.appendChild(newContainer);
}

function addButtonEvent() {
    let sections = document.querySelectorAll(".gridSquares");
    sections.forEach((section) => {
        section.addEventListener("mouseenter", (e) => {
            e.target.classList.add("gridSquaresHover");
        });
    });
}

let button = document.querySelector("button");
button.addEventListener("click", (e) => {
    let gridWidth = prompt("Enter grid width: (Integer)");
    let gridHeight = prompt("Enter grid height: (Integer)");
    clearGrid();
    let container = document.querySelector(".container");
    container.style.width = `${gridWidth*20}px`;
    newGrid(gridHeight, gridWidth)
    addButtonEvent();
});
