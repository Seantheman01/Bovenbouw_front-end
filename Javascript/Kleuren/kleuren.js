let aantal_buttons = 30;

let kleur1 = prompt("Welke kleur word de eerste knop? (in Engels)");
let kleur2 = prompt("Welke kleur word de tweede knop? (in Engels)");
let kleur3 = prompt("Welke kleur word de derde knop? (in Engels)");

for (let i = 0; i < aantal_buttons; i++) {
    let button = document.createElement("button");
    button.innerText = i + 1;
    container.appendChild(button);
    button.style.backgroundColor = "green";

    let clickCount = 0;

    button.addEventListener("click", function() {
        clickCount++;

        if (clickCount === 1) {
            button.style.backgroundColor = kleur1;
        } else if (clickCount === 2) {
            button.style.backgroundColor = kleur2;
        } else if (clickCount === 3) {
            button.style.backgroundColor = kleur3;
        } else if (clickCount === 4) {
            button.style.backgroundColor = "black";
        } else if (clickCount === 5) {
            button.remove();
        }
    });
}