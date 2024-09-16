const inputValue = document.getElementById("outcome-nav");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN") {
            inputValue.innerTexr = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = ""
        }
        inputValue.innerTexr += e.target.trim();
    });
});

const calculate = document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        console.log(e.target.innerHTML);
    });
});