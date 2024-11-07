// create and mount 16x16 grid
const container = document.querySelector("#container");
for (let i = 1; i <= 16; i++) {
    let row = document.createElement("div");
    row.className = 'row';
    container.appendChild(row);
    for (let j = 1; j <= 16; j++) {
        let cell = document.createElement("div");
        cell.className = 'cell';
        row.appendChild(cell);
    }
}

const allCells = document.querySelectorAll(".cell");
allCells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "red";
    })
})

