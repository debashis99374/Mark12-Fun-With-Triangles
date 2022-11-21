const input = document.querySelectorAll(".input-angle");
const bttnHandler = document.querySelector("#bttn1");
const output = document.querySelector("#output-txt");

function sumOf3Angels(angle1, angle2, angle3) {
  var sumofAngels = angle1 + angle2 + angle3;
  return sumofAngels
}
function isTriangleChecker() {
  var sumofAngels = sumOf3Angels(Number(input[0].value), Number(input[1].value), Number(input[2].value));
  if (sumofAngels === 180) {
    output.innerHTML = "Yuppy it's a triangle!!";
  } else {
    output.innerHTML = "Sorry it's not a triangle!!!";
  }

}

bttnHandler.addEventListener("click", isTriangleChecker)