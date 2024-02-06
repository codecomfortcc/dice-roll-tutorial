
let count=0;
const title=document.getElementById('title')
const gameMaker = (randomNumber) => {
count=count+randomNumber;
if(count%10==0){
title.textContent='you Lose';
}
}

export default gameMaker