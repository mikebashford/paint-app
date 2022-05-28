const canvas = document.querySelector(".canvas");
const clearButton = document.querySelector(".clear");
const shapes = document.querySelector(".shapes");
const colorInput = document.querySelector(".color");

let isDrawing = false;
let shape = "circleOption";
let color = "black";

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
  spot.style.background = color;
  canvas.appendChild(spot);
}

shapes.addEventListener("click", (e) => {
  if (e.target.className != "shapes") shape = e.target.className;
});

clearButton.addEventListener("click", () => {
  canvas.innerHTML = "";
});

colorInput.addEventListener("change", (e) => {
  color = e.target.value;
  for (let i = 0; i < shapes.children.length; i++) {
    shapes.children[i].style.background = color;
  }
});
