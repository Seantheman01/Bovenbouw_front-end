aantal_buttons = parseInt(prompt("Hoeveel knoppen wil je?"));

for (let i = 0; i < aantal_buttons; i++) {
    button = document.createElement("button");
    container.appendChild(button);
}