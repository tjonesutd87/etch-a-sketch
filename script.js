
const pageWidth = 800;
const pageHeight = 600;

function createGrid (num) {
   const grid = num * num;
   let canvas = document.getElementById("canvas");
   for (i= 0; i <= grid; i++){
      let cell = document.createElement("div");
      cell.addAttribute("class", "cell");
      canvas.appendChild(cell);
   }
}

createGrid(16);

function drawCell(cell) {
   if (cell.style.opacity < 100) { 
      cell.style.opacity += 10;
   }
}

let cells = document.querySelectorAll("div", "cell");
cells.forEach ((cell) => {
   cell.addEventListener("mouseEnter", drawCell(cell));
});

let createButton = document.getElementById("createButton");

let resetButton = document.getElementById("resetButton");

createButton.addEventListener("click", () => {
   let num = prompt("Please enter a grid size between 1 and 100.");
   if (num < 1 || num > 100) {
      alert("Number outside of bounds!");
      createGrid(16);
   }
   else {
      createGrid(num);
   }
});

resetButton.addEventListener("click", () =>  {
   cells.forEach ((cell) => {
      cell.style.opacity = 0;
   });
});
