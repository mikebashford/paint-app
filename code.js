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
