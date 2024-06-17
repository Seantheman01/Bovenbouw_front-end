var tafels = [2,4,6,8];

function tafelSommen(tafels) {
    for (let i = 1; i < 11; i++) {
        console.log(tafels[0] + " x " + i + " = " + tafels[0] * i);
    }
}

tafelSommen(tafels);