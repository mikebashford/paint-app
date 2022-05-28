const canvas = document.querySelector(".canvas");

let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
});

canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
});

canvas.addEventListener("mouseleave", (e) => {
  isDrawing = false;
});

paintSpot(100, 100);

function paintSpot(x, y) {
  const spot = document.createElement("div");
  spot.className = "spot circleOption";
  spot.style.left = `${x}px`;
  spot.style.top = `${y}px`;
  spot.style.background = "lightblue";
  canvas.appendChild(spot);
}
