
const canvasWidth = 800;
const canvasHeight = 800;

let canvas = document.getElementById("canvas");
canvas.style.width = `${canvasWidth}px`
canvas.style.height = `${canvasHeight}px`
function createGrid (num) {
   const grid = num * num;
   const cellWidth = canvasWidth / num;
   const cellHeight = canvasHeight / num;
   for (i= 1; i <= grid; i++){
      let cell = document.createElement("div");
      cell.setAttribute("class", "cell");
      cell.style.width = `${cellWidth}px`;
      cell.style.height = `${cellHeight}px`;
      cell.style.opacity = "10%";
      canvas.appendChild(cell);
   }
}

createGrid(16);



function drawCell() {
    cells = Array.from(cells)
    cells.forEach ((cell) => {
        cell.addEventListener("mouseenter", () => {
        cell.style.opacity = "100%"
        console.log("hi");
        });
    });
}

let cells = document.getElementsByClassName("cell");
drawCell();

let createButton = document.getElementById("createButton");

let resetButton = document.getElementById("resetButton");

createButton.addEventListener("click", () => {
   let num = prompt("Please enter a grid size between 1 and 100.");
   num = parseInt(num);
   if (num < 1 || num > 100) {
      alert("Number outside of bounds!");
   } else if (typeof num !== "number" || isNaN(num)) {
    alert("Not a valid number!");
   }
   else {
    console.log(num);
    cells.forEach((cell) => {
        cell.remove();
    });
    createGrid(num);
    cells = document.getElementsByClassName("cell");
    drawCell();
   }
});



resetButton.addEventListener("click", () =>  {
   cells.forEach ((cell) => {
      cell.style.opacity = "10%";
   });
});
