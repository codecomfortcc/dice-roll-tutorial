const dotsElement = document.getElementById('dots');
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dotsElement.innerHTML = '';
  animateRoll(randomNumber);
}
function getDots(count) {
  let dotHtml = ''
  const dotPositions = [
    [], 
    [5], 
    [1, 9],
    [1, 5, 9], 
    [1, 3, 7, 9], 
    [1, 3, 5, 7, 9], 
    [1, 3, 4, 6, 7, 9] 
  ];

  const positions = dotPositions[count];

  for (let i = 1; i <= 9; i++) {
    dotHtml += `<div class="dynamic-dot ${positions.includes(i) ? 'active-dot' : ''}"></div>`;
  }

  return dotHtml;
}
function animateRoll(randomNumber){
  let currentIndex = 0;
  const animationInterval = setInterval(() => {
    const currentNumber = currentIndex % 6 + 1;
    dotsElement.innerHTML = getDots(currentNumber);
    currentIndex++;

    if (currentIndex === 30) {
      clearInterval(animationInterval);
      dotsElement.innerHTML = getDots(randomNumber);
    }
  }, 100);
}