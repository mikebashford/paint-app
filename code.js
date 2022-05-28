const canvas = document.querySelector(".canvas");
const clearButton = document.querySelector(".clear");

let isDrawing = false;

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
  spot.className = "spot circleOption";
  spot.style.left = `${x - 15}px`;
  spot.style.top = `${y - 15}px`;
  spot.style.background = "lightblue";
  canvas.appendChild(spot);
}

clearButton.addEventListener("click", () => {
  canvas.innerHTML = "";
});
