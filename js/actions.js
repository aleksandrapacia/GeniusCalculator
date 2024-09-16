const buttonOne = document.querySelector(".button1");
const buttonTwo = document.querySelector(".button2");
const buttonThree = document.querySelector(".button3");
const buttonFour = document.querySelector(".button4");
const buttonFive = document.querySelector(".button5");
const buttonSix = document.querySelector(".button6");
const buttonSeven = document.querySelector(".button7");
const buttonEight = document.querySelector(".button8");
const buttonNine = document.querySelector(".button9");
const buttonZero = document.querySelector(".zero");

const clean = document.querySelector(".C-button");
const result = document.querySelector(".p-to-copy");

buttonOne.addEventListener("click", function () {
    result.innerText=1;
});
clean.addEventListener("click", function() {
    result.innerText=0;
    alert("CLEAN!");
});
