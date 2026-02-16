# 📗 Node.js Complete Learning Guide

## Table of Contents

1. [Introduction to Node.js](#1-introduction)
2. [Installation & Setup](#2-installation)
3. [Your First Node.js Program](#3-first-program)
4. [Node.js Modules](#4-modules)
5. [File System Operations](#5-file-system)
6. [NPM - Node Package Manager](#6-npm)
7. [Asynchronous JavaScript](#7-async)
8. [Creating HTTP Server](#8-http-server)
9. [Working with JSON](#9-json)
10. [Environment Variables](#10-env)

---

## 1. Introduction to Node.js {#1-introduction}

### What is Node.js?

Node.js is a **JavaScript runtime** built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the **server-side** (outside the browser).

### Why Node.js?

✅ **Fast & Scalable** - Non-blocking I/O  
✅ **JavaScript Everywhere** - Same language for frontend & backend  
✅ **NPM** - Largest package ecosystem  
✅ **Great for APIs** - Build REST APIs quickly  
✅ **Active Community** - Strong support & resources

### Where is Node.js Used?

- REST APIs
- Real-time applications (chat apps, live feeds)
- Microservices
- Command-line tools
- Web servers

---

## 2. Installation & Setup {#2-installation}

### Step 1: Download Node.js

Visit [https://nodejs.org/](https://nodejs.org/) and download the **LTS version** (v18+)

### Step 2: Verify Installation

Open your terminal and run:

```bash
node -v
```

**Expected Output:**

```
v22.21.0
```

Check NPM version:

```bash
npm -v
```

**Expected Output:**

```
11.9.0
```

### Step 3: Setup Your First Project Folder

```bash
mkdir node-basics
cd node-basics
```

---

## 3. Your First Node.js Program {#3-first-program}

### Create a File: `app.js`

```javascript
console.log("Hello from Node.js!");
console.log("Welcome to server-side JavaScript!");
```

### Run the Program

```bash
node app.js
```

**Output:**

```
Hello from Node.js!
Welcome to server-side JavaScript!
```

### Simple Calculator Example

**calculator.js:**

```javascript
const num1 = 10;
const num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
```

**Run:**

```bash
node calculator.js
```

---

## 4. Node.js Modules {#4-modules}

### What are Modules?

Modules are reusable blocks of code. Node.js has three types of modules:

1. **Built-in Modules** (fs, http, path, os)
2. **Custom Modules** (your own files)
3. **Third-party Modules** (from NPM)

### 4.1 Built-in Modules

#### Example 1: OS Module

```javascript
const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());
```

#### Example 2: Path Module

```javascript
const path = require("path");

const filePath = "/users/documents/file.txt";

console.log("Directory Name:", path.dirname(filePath));
console.log("File Name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Joined Path:", path.join("/users", "documents", "file.txt"));
```

### 4.2 Creating Custom Modules

**math.js:**

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

// Export functions
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};
```

**app.js:**

```javascript
const math = require("./math");

console.log("5 + 3 =", math.add(5, 3));
console.log("10 - 4 =", math.subtract(10, 4));
console.log("6 * 7 =", math.multiply(6, 7));
console.log("20 / 4 =", math.divide(20, 4));
```

### 4.3 Alternative Export Syntax

**user.js:**

```javascript
const getUser = () => {
  return {
    name: "Logesh",
    age: 25,
    role: "MERN Developer",
  };
};

module.exports = getUser;
```

**app.js:**

```javascript
const getUser = require("./user");

const user = getUser();
console.log(user);
```

---

## 5. File System Operations {#5-file-system}

### FS Module

The `fs` module allows you to work with files and directories.

### 5.1 Writing to a File

**Synchronous (Blocking):**

```javascript
const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello World!");
console.log("File created successfully!");
```

**Asynchronous (Non-blocking):**

```javascript
const fs = require("fs");

fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});
```

### 5.2 Reading from a File

**Synchronous:**

```javascript
const fs = require("fs");

const data = fs.readFileSync("hello.txt", "utf8");
console.log(data);
```

**Asynchronous:**

```javascript
const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 5.3 Appending to a File

```javascript
const fs = require("fs");

fs.appendFileSync("hello.txt", "\nThis is a new line!");
console.log("Content appended!");
```

### 5.4 Deleting a File

```javascript
const fs = require("fs");

fs.unlinkSync("hello.txt");
console.log("File deleted!");
```

### 5.5 Working with Directories

**Create Directory:**

```javascript
const fs = require("fs");

if (!fs.existsSync("myFolder")) {
  fs.mkdirSync("myFolder");
  console.log("Folder created!");
}
```

**Read Directory:**

```javascript
const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);
```

**Delete Directory:**

```javascript
const fs = require("fs");

fs.rmdirSync("myFolder");
console.log("Folder deleted!");
```

---

## 6. NPM - Node Package Manager {#6-npm}

### What is NPM?

NPM is the package manager for Node.js. It allows you to install third-party packages.

### 6.1 Initialize a Project

```bash
npm init -y
```

This creates `package.json` file:

```json
{
  "name": "node-basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 6.2 Installing Packages

**Install a package:**

```bash
npm install chalk
```

**Install as dev dependency:**

```bash
npm install nodemon --save-dev
```

**Install globally:**

```bash
npm install -g nodemon
```

### 6.3 Using Installed Packages

**Example: Using `chalk` for colored console output**

```bash
npm install chalk@4.1.2
```

**app.js:**

```javascript
const chalk = require("chalk");

console.log(chalk.green("Success!"));
console.log(chalk.red("Error!"));
console.log(chalk.blue("Info!"));
console.log(chalk.yellow("Warning!"));
```

### 6.4 Nodemon (Auto-restart)

Nodemon automatically restarts your app when files change.

**Install:**

```bash
npm install nodemon --save-dev
```

**Update package.json:**

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

**Run:**

```bash
npm run dev
```

---

## 7. Asynchronous JavaScript {#7-async}

### 7.1 Callbacks

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Logesh", role: "Developer" };
    callback(data);
  }, 2000);
}

fetchData((data) => {
  console.log("Data received:", data);
});

console.log("Fetching data...");
```

### 7.2 Promises

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ name: "Logesh", role: "Developer" });
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### 7.3 Async/Await

```javascript
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Logesh", role: "Developer" });
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
```

---

## 8. Creating HTTP Server {#8-http-server}

### 8.1 Basic HTTP Server

**server.js:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Server!");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

**Run:**

```bash
node server.js
```

**Visit:** http://localhost:3000

### 8.2 Handling Different Routes

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else if (req.url === "/api/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "Logesh", role: "Developer" }));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

---

## 9. Working with JSON {#9-json}

### 9.1 Reading JSON File

**data.json:**

```json
{
  "users": [
    { "id": 1, "name": "Logesh", "email": "logesh@example.com" },
    { "id": 2, "name": "John", "email": "john@example.com" }
  ]
}
```

**app.js:**

```javascript
const fs = require("fs");

const data = fs.readFileSync("data.json", "utf8");
const jsonData = JSON.parse(data);

console.log(jsonData.users);
```

### 9.2 Writing JSON File

```javascript
const fs = require("fs");

const users = [
  { id: 1, name: "Logesh", email: "logesh@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
];

const jsonData = JSON.stringify(users, null, 2);

fs.writeFileSync("users.json", jsonData);
console.log("JSON file created!");
```

---

## 10. Environment Variables {#10-env}

### 10.1 Install dotenv

```bash
npm install dotenv
```

### 10.2 Create .env File

**.env:**

```
PORT=5000
API_KEY=your_secret_key_123
DB_URL=mongodb://localhost:27017/mydb
```

### 10.3 Use Environment Variables

**app.js:**

```javascript
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

console.log("Port:", PORT);
console.log("API Key:", API_KEY);
```

---

## 🎯 Practice Projects

1. **File Manager CLI** - Create, read, update, delete files via command line
2. **Todo App (JSON)** - Store todos in a JSON file
3. **Simple Web Server** - Serve HTML pages
4. **Weather App CLI** - Fetch weather data from an API

---

## 📚 Next Steps

After mastering Node.js basics, move to:

1. **[Express.js Learning Guide](express_learning_guide.md)** - Build REST APIs
2. **[MongoDB Learning Guide](mongodb_learning_guide.md)** - Database operations
3. **[React Learning Guide](react_learning_guide.md)** - Frontend development

---

**Happy Learning! 🚀**
