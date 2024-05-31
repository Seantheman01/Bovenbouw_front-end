const dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

document.write("<h2>Alle dagen van de week zijn:</h2>");
for (let x in dagen) {
    document.getElementById("dagen").innerHTML += dagen[x] + "<br>";
}

document.write("<h2>De werkdagen zijn:</h2>");
for (let y of Array(5).keys()) {
    document.getElementById("dagen").innerHTML += dagen[y] + "<br>";
}