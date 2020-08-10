function fizzbuzz(a) {
    let result;
    if ((a % 3 === 0) && (a % 5 === 0)) {
        result = 'FizzBuzz';
    } else if (a % 3 === 0) {
        result = 'Fizz';
    } else if (a % 5 === 0) {
        result = 'Buzz';
    } else {
        result = a;
    }
    return result;
}
console.log(fizzbuzz(18));

