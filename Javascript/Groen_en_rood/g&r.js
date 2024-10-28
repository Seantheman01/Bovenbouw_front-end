aantal_buttons = 30;

for (let i = 0; i < aantal_buttons; i++) {
    button = document.createElement("button");
    container.appendChild(button);

    button.addEventListener("click", function() {
        button.style.backgroundColor = "red";
    });
}