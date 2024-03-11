const body = document.body;
const main = document.createElement("main");
main.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; gap: 1rem"
);
body.append(main);

const containerGrid = document.createElement("div");
containerGrid.classList.add("container-grid");
containerGrid.setAttribute(
  "style",
  "display: flex; flex-wrap: wrap; width: 80vh; height: 80vh; border: 1px solid"
);

main.append(containerGrid);

function getGrid(size = 16) {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.style.width = "calc(100% / " + size + ")";
      gridSquare.style.height = "calc(100% / " + size + ")";

      gridSquare.addEventListener("mouseenter", function () {
        gridSquare.style.backgroundColor = "blue";
      });
      containerGrid.append(gridSquare);
    }
  }
}

function getSize() {
  size = prompt("Input Size grid square? ");
  containerGrid.innerHTML = "";

  while (size > 100 || size === "" || size === null) {
    size = prompt("Please input number or less 100 ");
  }

  return getGrid(size);
}

function erase() {
  containerGrid.innerHTML = "";
  getGrid();
}

getGrid();
