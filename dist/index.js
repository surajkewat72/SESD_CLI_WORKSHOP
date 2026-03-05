#!/usr/bin/env node
const { Command } = require('commander');
const axios = require('axios');
const chalk = require('chalk');
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
program
    .command("reverse <text>")
    .action((text) => {
    const reversed = text.split("").reverse().join("");
    console.log(`Reversed: ${reversed}`);
});
program
    .command("github <username>")
    .description("Fetch GitHub user information")
    .action(async (username) => {
    var _a;
    try {
        console.log(chalk.blue(`Fetching GitHub info for ${username}...`));
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const user = response.data;
        console.log(chalk.green('\n✓ User Found!\n'));
        console.log(chalk.cyan('━'.repeat(50)));
        console.log(chalk.bold('Name:        ') + (user.name || 'N/A'));
        console.log(chalk.bold('Username:    ') + user.login);
        console.log(chalk.bold('Bio:         ') + (user.bio || 'N/A'));
        console.log(chalk.bold('Location:    ') + (user.location || 'N/A'));
        console.log(chalk.bold('Public Repos:') + chalk.yellow(` ${user.public_repos}`));
        console.log(chalk.bold('Followers:   ') + chalk.yellow(` ${user.followers}`));
        console.log(chalk.bold('Following:   ') + chalk.yellow(` ${user.following}`));
        console.log(chalk.bold('Profile:     ') + chalk.blue(user.html_url));
        console.log(chalk.cyan('━'.repeat(50)));
    }
    catch (error) {
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            console.error(chalk.red(`✗ User '${username}' not found on GitHub.`));
        }
        else {
            console.error(chalk.red('✗ Error fetching GitHub data:'), error.message);
        }
        process.exit(1);
    }
});
program
    .command("weather <city>")
    .description("Fetch current weather information for a city")
    .action(async (city) => {
    try {
        console.log(chalk.blue(`Fetching weather for ${city}...`));
        const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
        const weather = response.data;
        const current = weather.current_condition[0];
        const area = weather.nearest_area[0];
        console.log(chalk.green('\n✓ Weather Data Retrieved!\n'));
        console.log(chalk.cyan('━'.repeat(50)));
        console.log(chalk.bold('Location:    ') + `${area.areaName[0].value}, ${area.country[0].value}`);
        console.log(chalk.bold('Temperature: ') + chalk.yellow(`${current.temp_C}°C (${current.temp_F}°F)`));
        console.log(chalk.bold('Feels Like:  ') + `${current.FeelsLikeC}°C (${current.FeelsLikeF}°F)`);
        console.log(chalk.bold('Condition:   ') + current.weatherDesc[0].value);
        console.log(chalk.bold('Humidity:    ') + `${current.humidity}%`);
        console.log(chalk.bold('Wind:        ') + `${current.windspeedKmph} km/h ${current.winddir16Point}`);
        console.log(chalk.bold('Precipitation:') + ` ${current.precipMM} mm`);
        console.log(chalk.bold('Visibility:  ') + `${current.visibility} km`);
        console.log(chalk.cyan('━'.repeat(50)));
    }
    catch (error) {
        console.error(chalk.red('✗ Error fetching weather data:'), error.message);
        console.error(chalk.yellow('Tip: Make sure the city name is spelled correctly.'));
        process.exit(1);
    }
});
program
    .command("quote")
    .description("Fetch a random inspirational quote")
    .option("-t, --tag <tag>", "Get a quote with specific tag (e.g., wisdom, success, life)")
    .action(async (options) => {
    var _a;
    try {
        console.log(chalk.blue('Fetching an inspiring quote...'));
        let url = 'https://api.quotable.io/random';
        if (options.tag) {
            url += `?tags=${encodeURIComponent(options.tag)}`;
        }
        const response = await axios.get(url);
        const quote = response.data;
        console.log(chalk.green('\n✓ Quote Retrieved!\n'));
        console.log(chalk.cyan('━'.repeat(50)));
        console.log(chalk.italic(`"${quote.content}"`));
        console.log('');
        console.log(chalk.bold('— ' + quote.author));
        if (quote.tags && quote.tags.length > 0) {
            console.log(chalk.gray(`Tags: ${quote.tags.join(', ')}`));
        }
        console.log(chalk.cyan('━'.repeat(50)));
    }
    catch (error) {
        console.error(chalk.red('✗ Error fetching quote:'), error.message);
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
            console.error(chalk.yellow(`No quotes found with tag '${options.tag}'.`));
            console.error(chalk.yellow('Try tags like: wisdom, success, life, happiness, friendship'));
        }
        process.exit(1);
    }
});
program.parse();
