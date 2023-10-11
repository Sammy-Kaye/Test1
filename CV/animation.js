// Define an array of colors to use in the gradient
const colors = [
  "#ff0000", // red
  "#ffa500", // orange
  "#ffff00", // yellow
  "#008000", // green
  "#0000ff", // blue
  "#4b0082", // indigo
  "#ee82ee"  // violet
];

document.addEventListener("DOMContentLoaded", () => {
// Get the gradient background element
const gradientBg = document.getElementById("gradient-bg");

// Set an interval to change the background every 5 seconds
setInterval(() => {
  // Get a random start and end color from the array
  const startColor = colors[Math.floor(Math.random() * colors.length)];
  const endColor = colors[Math.floor(Math.random() * colors.length)];

  // Set the gradient background
  gradientBg.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
}, 5000);

// Add a mousemove event listener to update the background position
document.addEventListener("mousemove", (event) => {
  const x = event.pageX / window.innerWidth;
  const y = event.pageY / window.innerHeight;
  gradientBg.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

// get the trail element
const trail = document.getElementById("trail");

// listen for mouse movement on the document
document.addEventListener("mousemove", (event) => {
  // set the trail element's position to follow the mouse
  trail.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}); 
});
