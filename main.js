// pen color logic
let penColor = 'black';
const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("change", (e) => {
    penColor = e.target.value;
})

// create and mount 16x16 grid
const container = document.querySelector("#container");
createGrid(16, container);

// grid-changing logic
const newGridBtn = document.querySelector("#new-grid");
newGridBtn.onclick = () => {
    let input = prompt("Side length of new grid: ");
    const newGridSize = parseInt(input);

    // valid input checks
    if (!Number.isInteger(newGridSize)) {
        alert("Please enter an integer (e.g. 50)");
    } else if (newGridSize > 100 || newGridSize < 1) {
        alert("Please enter an integer in the range 1-100.")
    }

    // deconstruct current grid and rebuild new one
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(newGridSize, container);
}


function createGrid(size, parent) {
    for (let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.className = 'row';
        parent.appendChild(row);
        for (let j = 1; j <= size; j++) {
            let cell = document.createElement("div");
            cell.className = 'cell';
            row.appendChild(cell);
        }
    }

    // add color-changing hover effect on cells
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = penColor;
        });

        // cells will fill the window perfectly
        cell.style.minWidth = `calc(100vw / ${size})`;
        cell.style.minHeight = `calc(100vw / ${size})`;
    });
}

