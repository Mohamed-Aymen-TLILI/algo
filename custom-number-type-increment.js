const digit = n => [...`${n}`].map(i => parseInt(i));
console.log(digit(123));