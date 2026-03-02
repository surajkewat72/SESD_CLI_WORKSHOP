# CLI Calculator & Utility Tool - Complete Setup Guide

A command-line interface (CLI) tool built with TypeScript that provides mathematical operations and text utilities. This guide will walk you through building this project from scratch.

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Step-by-Step Setup](#step-by-step-setup)
- [Building the Project](#building-the-project)
- [Using the CLI](#using-the-cli)
- [Available Commands](#available-commands)
- [Troubleshooting](#troubleshooting)

## Project Overview

This CLI tool provides:
- Basic arithmetic operations (add, subtract, multiply, divide, modulo)
- Advanced math functions (power, square root, factorial)
- Comparison functions (max, min, average)
- Utility functions (temperature conversion, text reversal)

## Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)
- **nvm** (Node Version Manager) - optional but recommended

---

## Step-by-Step Setup

Follow these steps exactly to build this project from scratch:

### Step 1: Set Up Node Version (Using nvm)

If you have nvm installed, set up the correct Node.js version:

```bash
# Install Node.js version 20
nvm install 20

# Use Node.js version 20
nvm use 20

# Verify the installation
node --version
```

Expected output: `v20.x.x`

### Step 2: Create Project Directory

```bash
# Create a new directory for your project
mkdir SESD_CLI_WORKSHOP

# Navigate into the directory
cd SESD_CLI_WORKSHOP
```

### Step 3: Initialize npm Project

```bash
# Initialize a new npm project (creates package.json)
npm init -y
```

This creates a basic `package.json` file.

### Step 4: Install Dependencies

#### Install Development Dependencies

```bash
npm install -D typescript ts-node nodemon @types/node
```

**What each package does:**
- `typescript` - TypeScript compiler
- `ts-node` - Runs TypeScript files directly
- `nodemon` - Auto-restarts the application on file changes
- `@types/node` - TypeScript type definitions for Node.js

#### Install Production Dependencies

```bash
npm install commander
```

**What it does:**
- `commander` - Library for building CLI applications

### Step 5: Initialize TypeScript Configuration

```bash
# Create tsconfig.json file
npx tsc --init
```

This creates a `tsconfig.json` file with default TypeScript settings.

### Step 6: Configure TypeScript (tsconfig.json)

Open `tsconfig.json` and **replace its entire content** with:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./",
    "module": "CommonJS",
    "target": "ES2019",
    "esModuleInterop": true
  }
}
```

**Configuration explanation:**
- `outDir`: Compiled JavaScript files will go to the `dist` folder
- `rootDir`: Source files are in the root directory
- `module`: Use CommonJS module system
- `target`: Compile to ES2019 JavaScript
- `esModuleInterop`: Enables compatibility with ES modules

### Step 7: Configure package.json

Open `package.json` and add the following:

#### Add the "bin" field

Add this section to `package.json` (after the "license" field):

```json
"bin": {
  "mycli": "./dist/index.js"
}
```

Your complete `package.json` should look like this:

```json
{
  "name": "sesd-workshop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commander": "^14.0.3"
  },
  "devDependencies": {
    "@types/node": "^25.3.1",
    "nodemon": "^3.1.14",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3"
  },
  "bin": {
    "mycli": "./dist/index.js"
  }
}
```

**What "bin" does:**
- Maps the command `mycli` to the compiled JavaScript file
- Allows you to run the CLI tool from anywhere on your system

### Step 8: Create the Main CLI File (index.ts)

Create a file named `index.ts` in the root directory with the following content:

```typescript
#!/usr/bin/env node
const { Command } = require('commander')

const program = new Command()
program
    .command("greet <name>")
    .action((name) => {
        console.log(`Hello ${name}`)
    });


program.parse();
```

**Important notes:**
- The first line `#!/usr/bin/env node` is called a "shebang" - it tells the system to run this file with Node.js
- This file defines all CLI commands using Commander.js

---

## Building the Project

After creating all files, compile the TypeScript code to JavaScript:

```bash
npx tsc
```

**What this does:**
- Compiles `index.ts` to JavaScript
- Creates a `dist` folder
- Generates `dist/index.js`

You should now see a `dist` folder with `index.js` inside.

---

## Using the CLI

### Method 1: Link the CLI Locally (for testing)

This makes the `mycli` command available system-wide:

```bash
npm link
```

Now you can run commands from anywhere:

```bash
mycli greet John
mycli add 5 10
mycli multiply 7 8
```

### Method 2: Run Without Linking

You can also run commands directly from the project directory:

```bash
node dist/index.js greet John
node dist/index.js add 5 10
```

---

## Available Commands

### Greeting
```bash
mycli greet <name>
# Example: mycli greet Alice
# Output: Hello Alice
```

---

## Troubleshooting

### Command not found: mycli
If you get this error after running `npm link`, try:
```bash
# Unlink and re-link
npm unlink
npm link
```

### TypeScript compilation errors
Make sure your `tsconfig.json` is configured correctly. If you have errors, try:
```bash
# Remove dist folder and recompile
rm -rf dist
npx tsc
```

### Module not found errors
Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Permission denied when running mycli
Make sure the `dist/index.js` file is executable:
```bash
chmod +x dist/index.js
```

---

## Project Structure

After setup, your project should look like this:

```
SESD_CLI_WORKSHOP/
├── dist/
│   └── index.js          # Compiled JavaScript (generated)
├── node_modules/         # Dependencies (generated)
├── index.ts              # Main TypeScript source code
├── package.json          # Project configuration
├── package-lock.json     # Dependency lock file (generated)
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

---

## What You Learned

By following this guide, you've learned how to:
1. Set up a Node.js project with TypeScript
2. Configure TypeScript compiler options
3. Install and use npm packages
4. Build a CLI application using Commander.js
5. Compile TypeScript to JavaScript
6. Create a globally executable CLI tool
7. Handle user input and perform operations

---

## Quick Command Reference

Here's a complete list of all commands used in this setup:

```bash
# Node setup
nvm install 20
nvm use 20

# Project initialization
mkdir SESD_CLI_WORKSHOP
cd SESD_CLI_WORKSHOP
npm init -y

# Install dependencies
npm install -D typescript ts-node nodemon @types/node
npm install commander

# TypeScript setup
npx tsc --init

# Compile TypeScript
npx tsc

# Link CLI globally
npm link

# Test the CLI
mycli greet World
```

---

## Next Steps

To extend this project, you could:
- Add more commands (e.g., percentage calculations, currency conversion)
- Add color output using packages like `chalk`
- Add interactive prompts using `inquirer`
- Add file operations (read/write files)
- Publish your CLI to npm for others to use

---

