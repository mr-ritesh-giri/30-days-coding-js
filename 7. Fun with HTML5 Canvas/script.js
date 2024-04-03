const canvas = document.querySelector("#myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  console.log("mousedown is pressed");
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  console.log("mouseup is pressed");
});
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
  console.log("Oh! mouse is out of box.");
});

// Color Picker
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
  ctx.strokeStyle = currentColor;
});
