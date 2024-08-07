let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function() {
    let h2 = document.querySelector("h2");
    let randomColor = getRandomColor();
    h2.innerText = getRandomColor();

    div.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let getColor = `rgb(${red}, ${green}, ${blue})`;
    return getColor;
}