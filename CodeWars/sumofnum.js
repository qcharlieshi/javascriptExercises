function f(n) {
    if(!(typeof n === 'number' && (n % 1) === 0 && n > 0)) { return false; }

    //if(n == 1) { return 1; }
    return n * (n + 1) / 2;
}

console.log(f(100));