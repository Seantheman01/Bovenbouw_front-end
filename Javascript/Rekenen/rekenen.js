var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
    for (let x = 0; x < arrayEen.length; x++) {
        let som1 = arrayEen[x] + arrayTwee[x];
        document.write(arrayEen[x] + " + " + arrayTwee[x] + " = " + som1 + "<br>");
    }
}
document.write("<h2>Optellen van de twee arrays zijn:</h2>");
optellen(arrayEen, arrayTwee);