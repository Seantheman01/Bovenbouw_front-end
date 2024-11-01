let aantal_buttons = 30;

for (let i = 0; i < aantal_buttons; i++) {
    let button = document.createElement("button");
    button.innerText = i + 1;
    container.appendChild(button);
    button.style.backgroundColor = "green";

    let clickCount = 0;

    button.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 1) {
            button.style.backgroundColor = "red";
        } else if (clickCount === 2) {
            button.style.backgroundColor = "purple";
        } else if (clickCount === 3) {
            button.style.backgroundColor = "blue";
        } else if (clickCount === 4) {
            button.style.backgroundColor = "black";
        } else if (clickCount === 5) {
            button.remove();
        }
    });
}