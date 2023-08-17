// Object: Build a program that converts temperatures between Fahrenheit and Celsius.

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

const temperatureInFahrenheit = 100;

const temperatureInCelsius = convertFahrenheitToCelsius(temperatureInFahrenheit);
console.log(`${temperatureInFahrenheit}°F is ${temperatureInCelsius.toFixed(2)}°C`);

const temperatureInCelsius2 = 37.5;

const temperatureInFahrenheit2 = convertCelsiusToFahrenheit(temperatureInCelsius2);
console.log(`${temperatureInCelsius2}°C is ${temperatureInFahrenheit2.toFixed(2)}°F`);