let getallen = parseInt(prompt("Voer een getal in: "));
let array = getallen.toString();

for (let i = getallen; i >= 0; i--) {
    for (let x = 0; x <= i; x++) {
        document.write(x);
    }
    document.write("<br>");
}