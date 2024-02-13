function play(){
// hide the home screen 
const homeSection = document.getElementById('home-screen');
homeSection.classList.add('hidden')
// console.log(homeSection.classList);

// show the playground
const playgroundSection = document.getElementById('play-ground')
playgroundSection.classList.remove('hidden')
// console.log(playgroundSection.classList);
}

                   

function continueGame(){
//  // genarate rendom alphavet;
 const alphabet = getARendomElphavet();                   
console.log('your rendom elphavet', alphabet)
}

function play(){
//  hideElementById('home-screen');
//  showElementById('play-ground');
 continueGame()              
}