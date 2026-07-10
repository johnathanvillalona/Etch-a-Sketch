function newGrid(length, width) {
    let area = length*width;
    let container = document.querySelector(".container");
    for (let i=0; i<area; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.toggle("gridSquares");
        container.appendChild(newDiv);
    }
}

newGrid(16, 16);


let sections = document.querySelectorAll(".gridSquares");
sections.forEach((section) => {
    section.addEventListener("mouseenter", (e) => {
        e.target.classList.add("gridSquaresHover");
    });
});

