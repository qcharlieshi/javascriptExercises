function isPrime(num) {
    if (num < 2) { return false; }

    let prime = true;

    let index = 2
    while (prime && index < num) {
        if (num % index === 0) { prime = false; } else {
            index++;
        }
    }

    return prime;
}

function sortNumber(a, b) {
    return a - b;
}

function getPrimeFactors(number) {
    let primes = [];

    let index = 2;
    while (index <= (Math.round(number/2))) {
        if (isPrime(index) && (number % index === 0)) {
            primes.push(index);
            index++;
        } else {
            index++;
        }
    }
    return primes;
}

function returnUnique(numAry) {
    let seen = {};

    return numAry.filter(function(num) {
        return seen.hasOwnProperty(num) ? false : (seen[num] = true);
    });
}

function sumOfDivided(lst) {
    let primesAry = [];
    let primeObj = {};

    for (let i = 0; i < lst.length; i++) {
        let tempPrimesAry = getPrimeFactors(lst[i]);

        primesAry = primesAry.concat(tempPrimesAry);
        primeObj[lst[i]] = tempPrimesAry;
    }
    
    let uniquePrimes = returnUnique(primesAry).sort(sortNumber);
    let returnAry = [];

    for (let i = 0; i < uniquePrimes.length; i++) {
        let sum = 0;
        for (num in primeObj) {
            if (primeObj[num].includes(uniquePrimes[i])) {
                console.log(num);
                sum += +num;
            }
        }
        returnAry.push([uniquePrimes[i], sum]);
    }

    return returnAry;
}



let testAry = [12, 15];
let testAry2 = [12, 30, -45];
console.log(sumOfDivided(testAry2));
//console.log(getPrimeFactors(12));
//console.log(getPrimeFactors(15));
//console.log(isPrime(7));

//console.log(returnUnique(testAry2));


