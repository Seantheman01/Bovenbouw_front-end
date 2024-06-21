let getallen = parseInt(prompt("Voer een getal in: "));
let array = [];

for (let i = 0; i <= getallen; i++) {
    array.push(i);
}
document.write("Array: " + array.join(",") + "<br>");

for (let i = getallen; i >= 0; i--) {
    for (let x = 0; x <= i; x++) {
        document.write(x);
    }
    document.write("<br>");
}