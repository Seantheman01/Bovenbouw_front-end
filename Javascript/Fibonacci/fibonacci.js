function fibonacci(n) {
    let n1 = 0, n2 = 1, n3;
    document.write(n1 + " ");
    document.write(n2 + " ");

    for (let i = 2; i < n; i++) {
        n3 = n1 + n2;
        document.write(n3 + " ");
        n1 = n2;
        n2 = n3;
    }

    return n3;
}

fibonacci(20);