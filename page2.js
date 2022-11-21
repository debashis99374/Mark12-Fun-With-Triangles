const formContent = document.querySelector(".form-container");
const bttnHandler = document.querySelector("#bttn2");
const Output = document.querySelector("#output");

const correctAnswers = ["90", "right angled","one right angle","12, 16, 20","Equilateral triangle","100°","30°","a + b + c","no","45°",];


function scoreCalculator() {
  var score = 0;
  var index = 0;
  const formScan = new FormData(formContent);
  for (let value of formScan.values()) {
    if (value === correctAnswers[index]) {
      score += 1;

    }
    index += 1;
  }
  Output.innerHTML = "Your score is=" + score;
}



bttnHandler.addEventListener("click", scoreCalculator);