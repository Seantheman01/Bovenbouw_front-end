let getallen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

document.write("Array: " + getallen + "<br>");

for (let i = 0; i < getallen.length; i++){
    for (let x = 0; x <= i; x++){
        document.write(x);
    }
    document.write(getallen.slice(0,0) + "<br>");
}