var tafels = [2, 4, 6, 8];

function tafelSommen(tafels) {
    for (let i = 0; i < tafels.length; i++) {
        document.write("<h2>Tafel van " + tafels[i] + ":</h2>");
        for (let x = 1; x < 11; x++) {
            document.write(tafels[i] + " x " + x + " = " + tafels[i] * x + "<br>");
        }
    }
}

tafelSommen(tafels);