function Fibb(n) {
    let n1 = 1,
        n2 = 1,
        n3 = 0;
    if (n <= 2) return 1;
    for (let i = 2; i < n; i++) {

        n3 = n1 + n2;
        n2 = n1;
        n1 = n3;
    }
    return n3;
}
console.log(Fibb(3));