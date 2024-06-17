var tafels = [2,4,6,8];

function tafelSommen1(tafels) {
    for (let i = 1; i < 11; i++) {
        document.write(tafels[0] + " x " + i + " = " + tafels[0] * i + "<br>");
    }
}

document.write("<h2>Tafel van 2:</h2>")
tafelSommen1(tafels);


function tafelSommen2(tafels) {
    for (let i = 1; i < 11; i++) {
        document.write(tafels[1] + " x " + i + " = " + tafels[1] * i + "<br>");
    }
}

document.write("<h2>Tafel van 4:</h2>")
tafelSommen2(tafels);


function tafelSommen3(tafels) {
    for (let i = 1; i < 11; i++) {
        document.write(tafels[2] + " x " + i + " = " + tafels[2] * i + "<br>");
    }
}

document.write("<h2>Tafel van 6:</h2>")
tafelSommen3(tafels);


function tafelSommen4(tafels) {
    for (let i = 1; i < 11; i++) {
        document.write(tafels[3] + " x " + i + " = " + tafels[3] * i + "<br>");
    }
}

document.write("<h2>Tafel van 8:</h2>")
tafelSommen4(tafels);