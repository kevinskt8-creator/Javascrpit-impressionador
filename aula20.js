function calculateFibonacciTerm(termNumber) {
    let lastTerm = 1;
    let secondToLast = 0;

    if (termNumber === 0) {
        return 0;
    }
    if (termNumber === 1) {
        return 1;
    }
    for ( let currentIteration = 1; currentIteration < termNumber;) {
        let auxvar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxvar;
        currentIteration++;
    }
    return lastTerm;
}

console.log(`O valor do termo número 6 da sequencia de fibonacci é ${calculateFibonacciTerm(6)}`);

