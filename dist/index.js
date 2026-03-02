#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
program
    .command("greet <name>")
    .action((name) => {
    console.log(`Hello ${name}`);
});
program
    .command("add <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
});
program
    .command("subtract <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);
});
program
    .command("multiply <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
});
program
    .command("divide <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    if (num2 === 0) {
        console.error("Cannot divide by zero.");
        process.exit(1);
    }
    console.log(`The quotient of ${num1} and ${num2} is ${num1 / num2}`);
});
// 1. Modulo
program
    .command("modulo <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    if (num2 === 0) {
        console.error("Cannot modulo by zero.");
        process.exit(1);
    }
    console.log(`The remainder of ${num1} % ${num2} is ${num1 % num2}`);
});
// 2. Power
program
    .command("power <base> <exponent>")
    .action((base, exponent) => {
    const b = parseFloat(base);
    const e = parseFloat(exponent);
    if (isNaN(b) || isNaN(e)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`${b} raised to the power of ${e} is ${Math.pow(b, e)}`);
});
// 3. Square Root
program
    .command("sqrt <n>")
    .action((n) => {
    const num = parseFloat(n);
    if (isNaN(num)) {
        console.error("Argument must be a number.");
        process.exit(1);
    }
    if (num < 0) {
        console.error("Cannot compute square root of a negative number.");
        process.exit(1);
    }
    console.log(`The square root of ${num} is ${Math.sqrt(num)}`);
});
// 4. Absolute Value
program
    .command("abs <n>")
    .action((n) => {
    const num = parseFloat(n);
    if (isNaN(num)) {
        console.error("Argument must be a number.");
        process.exit(1);
    }
    console.log(`The absolute value of ${num} is ${Math.abs(num)}`);
});
// 5. Max of two numbers
program
    .command("max <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The maximum of ${num1} and ${num2} is ${Math.max(num1, num2)}`);
});
// 6. Min of two numbers
program
    .command("min <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The minimum of ${num1} and ${num2} is ${Math.min(num1, num2)}`);
});
// 7. Average of two numbers
program
    .command("average <n1> <n2>")
    .action((n1, n2) => {
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Both arguments must be numbers.");
        process.exit(1);
    }
    console.log(`The average of ${num1} and ${num2} is ${(num1 + num2) / 2}`);
});
// 8. Factorial
program
    .command("factorial <n>")
    .action((n) => {
    const num = parseInt(n);
    if (isNaN(num) || num < 0) {
        console.error("Argument must be a non-negative integer.");
        process.exit(1);
    }
    let result = 1;
    for (let i = 2; i <= num; i++)
        result *= i;
    console.log(`The factorial of ${num} is ${result}`);
});
// 9. Celsius to Fahrenheit
program
    .command("celsius-to-fahrenheit <celsius>")
    .action((celsius) => {
    const c = parseFloat(celsius);
    if (isNaN(c)) {
        console.error("Argument must be a number.");
        process.exit(1);
    }
    const f = (c * 9) / 5 + 32;
    console.log(`${c}°C is equal to ${f}°F`);
});
// 10. Reverse a string
program
    .command("reverse <text>")
    .action((text) => {
    const reversed = text.split("").reverse().join("");
    console.log(`Reversed: ${reversed}`);
});
program.parse();
