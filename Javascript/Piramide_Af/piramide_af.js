let getallen = parseInt(prompt("Voer een getal in: "));

document.write("Array: " + getallen + "<br>");

for (let i = 0; i < getallen.length; i++){
    for (let x = 0; x <= i; x++){
        document.write(x);
    }
    document.write(getallen.slice(0,-1) + "<br>");
}