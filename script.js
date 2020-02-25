function buttonClick() {
    alert("THE BUTTON HAS BEEN TOUCHED!");
    button.removeEventListener("click", buttonClick);
}
let button = document.querySelector("button");
button.addEventListener("click", buttonClick);

let link = document.querySelector("a");
link.addEventListener ("click", event => {
    event.preventDefault();
    alert("No fun for you!");
});
