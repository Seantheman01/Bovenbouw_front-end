var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
    for (let i= 0; i < arrayEen.length; i++) {
        let som = arrayEen[i] + arrayTwee[i];
        document.write(arrayEen[i] + " + " + arrayTwee[i] + " = " + som + "<br>");
    }
}
document.write("<h2>Optellen van de twee arrays zijn:</h2>");
optellen(arrayEen, arrayTwee);


function aftrekken(arrayTwee, arrayEen) {
    for (let i = 0; i < arrayEen.length; i++) {
        let som = arrayTwee[i] - arrayEen[i];
        document.write(arrayTwee[i] + " - " + arrayEen[i] + " = " + som + "<br>");
    }
}
document.write("<h2>Aftrekken van de twee arrays zijn:</h2>");
aftrekken(arrayTwee, arrayEen);


function vermenigvuldigen(arrayEen, arrayTwee) {
    for (let i = 0; i < arrayEen.length; i++) {
        let som = arrayEen[i] * arrayTwee[i];
        document.write(arrayEen[i] + " x " + arrayTwee[i] + " = " + som + "<br>");
    }
}
document.write("<h2>Aftrekken van de twee arrays zijn:</h2>");
vermenigvuldigen(arrayTwee, arrayEen);


function delen(arrayTwee, arrayEen) {
    for (let i = 0; i < arrayEen.length; i++) {
        let som = arrayTwee[i] / arrayEen[i];
        document.write(arrayTwee[i] + " : " + arrayEen[i] + " = " + som + "<br>");
    }
}
document.write("<h2>Aftrekken van de twee arrays zijn:</h2>");
delen(arrayTwee, arrayEen);