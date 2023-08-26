// Object:  Implement a program that generates a random number between a given range.


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const minNumber = 1;
const maxNumber = 100;

const randomNumber = getRandomNumber(minNumber, maxNumber);
console.log(`The number between ${minNumber} and ${maxNumber} is ${randomNumber}`);