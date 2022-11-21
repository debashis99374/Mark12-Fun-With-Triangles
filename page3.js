const sides=document.querySelectorAll(".side-input");
const bttnHandler=document.querySelector("#bttn3");
const Output3=document.querySelector("#output-3");

function calculateSumOfangels(a,b){
  const sumOfangels= a*a+b*b;
  return sumOfangels
}

function hypotenuseCalculate(){

  const sumOfangels=calculateSumOfangels(Number(sides[0].value),Number(sides[1].value));
  const finalAnswer= Math.sqrt(sumOfangels);
  Output3.innerHTML= "length of side C is= "+ finalAnswer +" cm.";
  
}


bttnHandler.addEventListener("click",hypotenuseCalculate);