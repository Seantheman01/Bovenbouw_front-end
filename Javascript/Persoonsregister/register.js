// import data from './opdracht1_bijlage.json' assert { type: 'json' };
// console.log(data);

fetch('opdracht1_bijlage.json')
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y);