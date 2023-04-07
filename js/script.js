{
    const welcome = () => {
        console.log("Witaj na mojej stronie");
    };


    const toggleBackground = () => {
        const body = document.querySelector(".body");
   
        const colorName = document.querySelector(".js-colorName");
        body.classList.toggle("body--greyBackground");
        colorName.innerText = body.classList.contains("greyBackground") ? "bialy" : "szary";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
        welcome();
    }

    init();
}
