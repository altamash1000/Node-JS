// Object: Write a program to calculate the factorial of a number using recursion.


function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calculateFactorial(n - 1);
    }
}

const number = 5;
const factorial = calculateFactorial(number);

console.log(`Factorial of ${number} is ${factorial}`);