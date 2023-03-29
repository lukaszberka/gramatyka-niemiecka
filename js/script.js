console.log("Witaj na mojej stronie");

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let colorName = document.querySelector(".js-colorName");

button.addEventListener("click", () => {
    body.classList.toggle("body--greyBackground");

    colorName.innerText = body.classList.contains("greyBackground") ? "bialy" : "szary";
});