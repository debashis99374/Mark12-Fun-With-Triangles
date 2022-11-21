const baseInput=document.querySelector("#base");
const hightInput=document.querySelector("#hight");
const bttnHandler=document.querySelector("#bttn4");
const Output=document.querySelector("#output");
function multipication(a,b){
  var multply=(a*b)/2;
  return multply;
}
function areaCalculater(){
  var multply=multipication(Number(baseInput.value),Number(hightInput.value));

  Output.innerHTML="Area of this triangle is= "+ multply;
  
}

bttnHandler.addEventListener("click",areaCalculater)