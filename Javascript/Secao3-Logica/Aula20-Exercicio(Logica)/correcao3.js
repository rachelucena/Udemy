function fizzBuzz(n) {
    if (typeof n !== 'number') return n;
    else if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    else if (n % 5 === 0) return 'Buzz';
    else return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}