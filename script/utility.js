function hideElementById(elementId){
const element = document.getElementById(elementId);
element.classList.add('hidden');
}
function showElementById(elementId){
const element = document.getElementById(elementId); 
element.classList.remove('hidden');                  
}

function setBagroundColorById(elementId){
const element = document.getElementById(elementId)
element.classList.add('bg-orange-400')  
}
function removeBagroundColorById(elementId){
  const element = document.getElementById(elementId)
  element.classList.remove('bg-orange-400')  
} 

 function getARendomElphavet(){                
const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
const  alphabets = alphabetString.split('');

const randomNumber = Math.random() * 25;
const index = Math.round(randomNumber)
const alphabet = alphabets[index]
return alphabet;
 }




// function getARendomElphavet(){
//   //get an created Alphavet Array;                   
//  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//  const  alphabets = alphabetString.split('');
// //  console.log(alphabets);    
 
// //  // Get a rendom index between 0 -25;
//  const randomNumber = Math.random() * 25;
//  const index = Math.round(randomNumber)
//  const alphabet = alphabets[index]
// //  console.log(index, alphabet);
//  return alphabet;
// }