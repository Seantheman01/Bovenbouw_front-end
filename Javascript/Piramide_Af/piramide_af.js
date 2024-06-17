let getallen = parseInt(prompt("Voer een nummer in: "));

document.write("Array: " + getallen + "<br>");

for (let i = 0; i < getallen.length; i++){
    for (let x = 0; x <= i; x++){
        document.write(x);
    }
    document.write(getallen.slice(0,0) + "<br>");
}