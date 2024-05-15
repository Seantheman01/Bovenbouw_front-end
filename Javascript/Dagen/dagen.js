const dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];

for (let x in dagen) {
    document.getElementById("dagen").innerHTML = dagen[x];
}