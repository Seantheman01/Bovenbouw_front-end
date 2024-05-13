function fibonacci(n) {
    let n1 = 0, n2 = 1, n3;
    console.log(n1);
    console.log(n2);

    for (let i = 2; i < n; i++) {
        n3 = n1 + n2;
        console.log(n3);
        n1 = n2;
        n2 = n3;
    }
}

document.getElementById("printFibonacci").innerHTML = fibonacci(20);