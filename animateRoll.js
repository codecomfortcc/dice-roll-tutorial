import getDots from './getDots.js';

function animateRoll(dotsElement,randomNumber){
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
  export default animateRoll;