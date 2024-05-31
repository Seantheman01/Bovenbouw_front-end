const dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

for (let x in dagen) {
    document.getElementById("alleDagen").innerHTML += dagen[x] + "<br>";
}

for (let y of Array(5).keys()) {
    document.getElementById("werkDagen").innerHTML += dagen[y] + "<br>";
}

for (let z of Array().keys()) {
    document.getElementById("weekendDagen").innerHTML += dagen[z] + "<br>";
}