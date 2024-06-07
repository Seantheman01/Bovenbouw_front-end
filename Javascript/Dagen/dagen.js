const dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

for (let x in dagen) {
    document.getElementById("alleDagen").innerHTML += dagen[x] + "<br>";
}

for (let y of Array(5).keys()) {
    document.getElementById("werkDagen").innerHTML += dagen[y] + "<br>";
}

const weekend = dagen.slice(-2);
for (let z of weekend) {
    document.getElementById("weekendDagen").innerHTML += z + "<br>";
}

const andersom = dagen.reverse();
for (let a in andersom) {
    document.getElementById("alleDagenAndersom").innerHTML += dagen[a] + "<br>";
}

const werkAndersom = andersom.slice(-5);
for (let b in werkAndersom) {
    document.getElementById("werkDagenAndersom").innerHTML += werkAndersom[b] + "<br>";
}

const weekendAndersom = dagen.slice(-2);
for (let c in weekendAndersom) {
    document.getElementById("weekendDagenAndersom").innerHTML += dagen[c] + "<br>";
}