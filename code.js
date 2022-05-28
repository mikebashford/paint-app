const canvas = document.querySelector(".canvas");
const clearButton = document.querySelector(".clear");
const shapes = document.querySelector(".shapes");

let isDrawing = false;
let shape = "circleOption";

canvas.addEventListener("mousedown", (e) => {
  paintSpot(e.pageX, e.pageY);
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", () => {
  isDrawing = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    paintSpot(e.pageX, e.pageY);
  }
});

function paintSpot(x, y) {
  const spot = document.createElement("div");
  spot.className = `spot ${shape}`;
  spot.style.left = `${x - 15}px`;
  spot.style.top = `${y - 15}px`;
  spot.style.background = "lightblue";
  canvas.appendChild(spot);
}

shapes.addEventListener("click", (e) => {
  if (e.target.className != "shapes") shape = e.target.className;
});

clearButton.addEventListener("click", () => {
  canvas.innerHTML = "";
});
