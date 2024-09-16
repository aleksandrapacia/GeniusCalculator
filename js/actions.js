const buttonOne = document.querySelector(".button1");
const result = document.querySelector(".p-to-copy");

buttonOne.addEventListener("click", function () {
    alert("1");
    console.log('Hello Button 1')
    result.innerText = "1"
});

