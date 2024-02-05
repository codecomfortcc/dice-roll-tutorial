import animateRoll from "./animateRoll.js";

const dice = document.getElementById("dice");

dice.addEventListener("click", () => {
  const dotsElement = document.getElementById("dots");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dotsElement.innerHTML = "";
  animateRoll(dotsElement, randomNumber);
});
