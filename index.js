// Import the animateRoll function from the animateRoll.js module
import animateRoll from "./animateRoll.js";

function main() {

  const dotsElement = document.getElementById("dots");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dotsElement.innerHTML = "";
  animateRoll(dotsElement, randomNumber);
}

export default main;
