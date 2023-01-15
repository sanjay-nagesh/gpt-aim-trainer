// Select the canvas element from the HTML
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Variables to track the target position
let targetX = 100;
let targetY = 100;

// Variables to track the crosshair position
let crosshairX = canvas.width / 2;
let crosshairY = canvas.height / 2;

// Variables to track the score
let hits = 0;
let misses = 0;

// Draw the target on the canvas
function drawTarget() {
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(targetX, targetY, 50, 0, 2 * Math.PI);
  ctx.fill();
}

// Draw the crosshair on the canvas
function drawCrosshair() {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(crosshairX - 10, crosshairY);
  ctx.lineTo(crosshairX + 10, crosshairY);
  ctx.moveTo(crosshairX, crosshairY - 10);
  ctx.lineTo(crosshairX, crosshairY + 10);
  ctx.stroke();
}

// Update the target position
function updateTarget() {
  targetX = Math.random() * canvas.width;
  targetY = Math.random() * canvas.height;
}

// Handle the mouse movement
document.onmousemove = function(event) {
  crosshairX = event.clientX;
  crosshairY = event.clientY;
}

// Handle the click event
document.onclick = function(event) {
  // Calculate the distance between the target and crosshair
  let distance = Math.sqrt(Math.pow(crosshairX - targetX, 2) + Math.pow(crosshairY - targetY, 2));
  
  if (distance < 50) {
    // The crosshair is inside the target, increase the hit count
    hits++;
  } else {
    // The crosshair is outside the target, increase the miss count
    misses++;
  }
  
  // Update the target position
  updateTarget();
}

// Main game loop
function gameLoop() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the target and crosshair
  drawTarget();
  drawCrosshair();
  
  // Display the score
  ctx.fillStyle = "black";
  ctx.font = "24px Arial";
  ctx.fillText("Hits: " + hits, 20, 40
