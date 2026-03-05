# MyCLI - Command Line Calculator & Utility Tool

A powerful and easy-to-use command-line interface (CLI) tool built with TypeScript that provides mathematical operations, comparisons, text utilities, and real-time API integrations right from your terminal.

## Features

- **Basic Arithmetic** - Addition, subtraction, multiplication, division, and modulo operations
- **Advanced Math** - Power, square root, absolute value, and factorial calculations
- **Comparison Functions** - Find maximum, minimum, and average of numbers
- **Utility Tools** - Temperature conversion and text reversal
- **API Integrations** - GitHub user info, real-time weather data, and inspirational quotes
- **Fast & Lightweight** - Minimal dependencies, built with TypeScript
- **Error Handling** - Comprehensive validation and helpful error messages
- **Colorful Output** - Enhanced terminal display with Chalk

## Installation

### Prerequisites
- Node.js (v20 or higher)
- npm (comes with Node.js)

### Install Globally

```bash
npm install -g
```

### Install for Development

```bash
# Clone or download the project
cd SESD_CLI_WORKSHOP

# Install dependencies
npm install

# Compile TypeScript
npx tsc

# Link CLI globally
npm link
```

## Usage

After installation, you can use the `mycli` command from anywhere in your terminal.

### Basic Syntax
```bash
mycli <command> <arguments>
```

## Available Commands

### Greeting
```bash
mycli greet <name>
```
**Example:**
```bash
mycli greet Alice
# Output: Hello Alice
```

### Basic Arithmetic

**Addition**
```bash
mycli add <number1> <number2>
# Example: mycli add 10 5
# Output: The sum of 10 and 5 is 15
```

**Subtraction**
```bash
mycli subtract <number1> <number2>
# Example: mycli subtract 10 5
# Output: The difference between 10 and 5 is 5
```

**Multiplication**
```bash
mycli multiply <number1> <number2>
# Example: mycli multiply 10 5
# Output: The product of 10 and 5 is 50
```

**Division**
```bash
mycli divide <number1> <number2>
# Example: mycli divide 10 5
# Output: The quotient of 10 and 5 is 2
```

**Modulo (Remainder)**
```bash
mycli modulo <number1> <number2>
# Example: mycli modulo 10 3
# Output: The remainder of 10 % 3 is 1
```

### Advanced Math

**Power (Exponentiation)**
```bash
mycli power <base> <exponent>
# Example: mycli power 2 3
# Output: 2 raised to the power of 3 is 8
```

**Square Root**
```bash
mycli sqrt <number>
# Example: mycli sqrt 16
# Output: The square root of 16 is 4
```

**Absolute Value**
```bash
mycli abs <number>
# Example: mycli abs -5
# Output: The absolute value of -5 is 5
```

**Factorial**
```bash
mycli factorial <number>
# Example: mycli factorial 5
# Output: The factorial of 5 is 120
```

### Comparison Functions

**Maximum**
```bash
mycli max <number1> <number2>
# Example: mycli max 10 5
# Output: The maximum of 10 and 5 is 10
```

**Minimum**
```bash
mycli min <number1> <number2>
# Example: mycli min 10 5
# Output: The minimum of 10 and 5 is 5
```

**Average**
```bash
mycli average <number1> <number2>
# Example: mycli average 10 20
# Output: The average of 10 and 20 is 15
```

### Utility Functions

**Temperature Conversion (Celsius to Fahrenheit)**
```bash
mycli celsius-to-fahrenheit <celsius>
# Example: mycli celsius-to-fahrenheit 25
# Output: 25°C is equal to 77°F
```

**Text Reversal**
```bash
mycli reverse <text>
# Example: mycli reverse hello
# Output: Reversed: olleh
```

### API Integrations

**GitHub User Information**
```bash
mycli github <username>
# Example: mycli github torvalds
# Output: Displays user profile including name, bio, repos, followers, etc.
```
Fetches real-time GitHub user information including:
- Name and bio
- Location
- Public repositories count
- Followers and following
- Profile URL

**Weather Information**
```bash
mycli weather <city>
# Example: mycli weather London
# Example: mycli weather "New York"
# Output: Displays current weather conditions with temperature, humidity, wind, etc.
```
Fetches current weather data including:
- Temperature (Celsius and Fahrenheit)
- Weather condition
- Humidity and precipitation
- Wind speed and direction
- Visibility

**Random Quote Generator**
```bash
mycli quote
# Example: mycli quote
# Output: Displays a random inspirational quote with author

# With specific tag
mycli quote --tag wisdom
mycli quote -t success
# Output: Displays a quote from the specified category
```
Available tags: wisdom, success, life, happiness, friendship, love, motivation, and more.

## Use Cases

- **Quick Calculations** - Perform math operations without opening a calculator
- **Scripting** - Integrate calculations into your shell scripts
- **Learning** - Great for students learning command-line tools
- **Development** - Use in build scripts or automation workflows
- **Teaching** - Example project for learning TypeScript and CLI development

## Built With

- **TypeScript** - Type-safe JavaScript
- **Commander.js** - Complete solution for Node.js command-line interfaces
- **Axios** - Promise-based HTTP client for API requests
- **Chalk** - Terminal string styling for colorful output
- **Node.js** - JavaScript runtime

## Project Structure

```
SESD_CLI_WORKSHOP/
├── dist/              # Compiled JavaScript files
├── index.ts           # Main TypeScript source code
├── package.json       # Project configuration
├── tsconfig.json      # TypeScript configuration
└── README.md         # This file
```

## Development

### Build the Project
```bash
npx tsc
```

### Make Changes
1. Edit `index.ts` to add or modify commands
2. Run `npx tsc` to compile
3. Test with `node dist/index.js <command>`

### Add a New Command
```typescript
program
    .command("yourcommand <arg>")
    .action((arg) => {
        // Your logic here
        console.log(`Result: ${arg}`);
    });
```

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## License

ISC

## Author

Created as part of the SESD CLI Workshop

## Acknowledgments

- Built with [Commander.js](https://github.com/tj/commander.js/)
- Powered by [TypeScript](https://www.typescriptlang.org/)

---

**Need help getting started?** Check out the detailed setup guide in `README(in Detailed).md`


