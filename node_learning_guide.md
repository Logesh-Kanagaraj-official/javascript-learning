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
11. [Streams](#11-streams)
12. [EventEmitter](#12-events)
13. [process Object](#13-process)
14. [Path & URL Utilities](#14-path-url)
15. [JWT Authentication in Node.js](#15-jwt)
16. [Blocking vs Non-Blocking I/O](#16-blocking)
17. [Interview Questions — Node.js](#17-interview)
18. [⚠️ Gap Analysis](#gap-analysis)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

---

## 🎯 Practice Projects

1. **File Manager CLI** - Create, read, update, delete files via command line
2. **Todo App (JSON)** - Store todos in a JSON file
3. **Simple Web Server** - Serve HTML pages
4. **Weather App CLI** - Fetch weather data from an API


[⬆️ Back to Top](#table-of-contents)

---

## 📚 Next Steps

After mastering Node.js basics, move to:

1. **[Express.js Learning Guide](express_learning_guide.md)** - Build REST APIs
2. **[MongoDB Learning Guide](mongodb_learning_guide.md)** - Database operations
3. **[React Learning Guide](react_learning_guide.md)** - Frontend development


[⬆️ Back to Top](#table-of-contents)

---

**Happy Learning! 🚀**

---

## 11. Streams {#11-streams}

Streams are objects that let you read/write data **piece by piece** instead of loading everything into memory.

**4 Types of Streams:**

| Type | Description | Example |
|------|-------------|---------|
| `Readable` | Data can be read | `fs.createReadStream` |
| `Writable` | Data can be written | `fs.createWriteStream` |
| `Duplex` | Both read & write | TCP socket |
| `Transform` | Modify data in transit | `zlib.createGzip()` |

```javascript
const fs = require('fs');

// ❌ BAD — loads entire file into memory
const data = fs.readFileSync('bigfile.txt', 'utf8');
console.log(data);

// ✅ GOOD — streams chunk by chunk (memory efficient)
const readStream = fs.createReadStream('bigfile.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('Chunk received:', chunk.length, 'bytes');
});
readStream.on('end', () => console.log('Done reading!'));
readStream.on('error', (err) => console.error('Error:', err));

// Pipe — read from file, write to another file
const readStream  = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('dest.txt');
readStream.pipe(writeStream);
writeStream.on('finish', () => console.log('File copied!'));

// Transform stream (compress a file)
const zlib = require('zlib');
fs.createReadStream('file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('file.txt.gz'))
  .on('finish', () => console.log('Compressed!'));
```

**Why Streams matter for interviews:**
- Reading a 5GB log file with `readFileSync` → crashes (no memory)
- With streams → reads 64KB at a time, uses constant memory

[⬆️ Back to Top](#table-of-contents)

---

## 12. EventEmitter {#12-events}

Node.js is **event-driven**. The `events` module provides `EventEmitter`.

```javascript
const EventEmitter = require('events');

// Create an emitter
const emitter = new EventEmitter();

// Register listeners
emitter.on('data', (payload) => {
  console.log('data event received:', payload);
});

emitter.once('connect', () => {
  console.log('Connected! (fires only once)');
});

// Emit events
emitter.emit('connect');           // 'Connected!'
emitter.emit('connect');           // nothing (once only)
emitter.emit('data', { id: 1 });   // 'data event received: { id: 1 }'

// Remove listener
const handler = (d) => console.log(d);
emitter.on('update', handler);
emitter.off('update', handler); // or removeListener

// EventEmitter in a class (real-world pattern)
class Database extends EventEmitter {
  connect(url) {
    // simulate connection
    setTimeout(() => {
      this.emit('connected', { url });
    }, 500);
  }
}

const db = new Database();
db.on('connected', ({ url }) => console.log('DB connected to', url));
db.connect('mongodb://localhost:27017');
```

[⬆️ Back to Top](#table-of-contents)

---

## 13. process Object {#13-process}

`process` is a global that gives info about and control over the Node.js process.

```javascript
// Environment & args
console.log(process.env.NODE_ENV);    // 'development'
console.log(process.argv);            // ['node', 'app.js', '--port', '3000']
console.log(process.cwd());           // Current working directory
console.log(process.platform);        // 'win32', 'linux', 'darwin'
console.log(process.version);         // 'v22.x.x'

// Memory usage
const mem = process.memoryUsage();
console.log('Heap used:', (mem.heapUsed / 1024 / 1024).toFixed(2), 'MB');

// Exit
process.exit(0);   // Exit with success
process.exit(1);   // Exit with failure (error)

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nGracefully shutting down...');
  // Close DB connections, save state
  server.close(() => process.exit(0));
});

// Catch unhandled errors
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});
```

[⬆️ Back to Top](#table-of-contents)

---

## 14. Path & URL Utilities {#14-path-url}

```javascript
const path = require('path');
const url  = require('url');

// __dirname — directory of current file
console.log(__dirname);  // 'D:\JavaScript'

// __filename — full path of current file
console.log(__filename); // 'D:\JavaScript\app.js'

// path.join — safely join paths (handles OS separators)
const fullPath = path.join(__dirname, 'config', 'db.js');

// path.resolve — returns absolute path
path.resolve('config', 'db.js'); // D:\JavaScript\config\db.js

// path.extname / basename / dirname
path.extname('app.js');           // '.js'
path.basename('/users/app.js');   // 'app.js'
path.basename('/users/app.js', '.js'); // 'app' (strip extension)
path.dirname('/users/app.js');    // '/users'

// URL parsing
const myUrl = new URL('https://example.com:8080/api/users?page=2&limit=10');
myUrl.hostname;  // 'example.com'
myUrl.port;      // '8080'
myUrl.pathname;  // '/api/users'
myUrl.searchParams.get('page');   // '2'
myUrl.searchParams.get('limit');  // '10'
```

[⬆️ Back to Top](#table-of-contents)

---

## 15. JWT Authentication in Node.js {#15-jwt}

JWT (JSON Web Token) is the standard for stateless authentication in REST APIs.

**Install:**

```bash
npm install jsonwebtoken bcryptjs
```

**Token flow:**
```
1. User logs in → server validates credentials
2. Server creates JWT (signed with secret)
3. Server sends JWT to client
4. Client stores JWT (localStorage / httpOnly cookie)
5. Client sends JWT in Authorization header on every request
6. Server verifies JWT → grants or denies access
```

```javascript
const jwt  = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret';

// --- SIGN TOKEN ---
function generateToken(userId) {
  return jwt.sign(
    { id: userId },          // payload
    JWT_SECRET,               // secret
    { expiresIn: '7d' }       // options
  );
}

// --- VERIFY TOKEN MIDDLEWARE ---
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, iat, exp }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

// --- HASH PASSWORD ---
async function hashPassword(plainText) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(plainText, salt);
}

// --- COMPARE PASSWORD ---
async function verifyPassword(plainText, hash) {
  return bcrypt.compare(plainText, hash);
}

// --- USAGE ---
// POST /login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await verifyPassword(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.json({ token, user: { id: user._id, email: user.email } });
});

// Protected route
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Hello user ${req.user.id}` });
});
```

[⬆️ Back to Top](#table-of-contents)

---

## 16. Blocking vs Non-Blocking I/O {#16-blocking}

This is **the most important Node.js concept** for interviews.

```javascript
const fs = require('fs');

// ❌ BLOCKING (Synchronous) — freezes the entire process
console.log('Before read');
const data = fs.readFileSync('file.txt', 'utf8'); // blocks here
console.log('After read'); // only runs after file is fully read

// ✅ NON-BLOCKING (Asynchronous) — continues immediately
console.log('Before read');
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File content:', data); // runs when ready
});
console.log('After read'); // runs immediately, BEFORE file is read
// Output: Before read → After read → File content
```

**When to use Sync:**
- Startup config files (once, at boot time)
- CLI scripts where blocking doesn't matter

**When to use Async:**
- Web servers (ALWAYS — blocking one request blocks ALL users)
- Any I/O in production

[⬆️ Back to Top](#table-of-contents)

---

## 17. Interview Questions — Node.js {#17-interview}

**Q1: What is Node.js and how does it differ from browser JavaScript?**
- Node.js is a JS runtime built on V8 engine. It has `fs`, `http`, `path`, `process`, `Buffer` — no `document`, `window`, `localStorage`.

**Q2: What is the Event Loop in Node.js?**
- Single-threaded loop that picks tasks from the queue once the call stack is empty. Phases: timers → pending callbacks → idle → poll → check (setImmediate) → close callbacks.

**Q3: What is the difference between `process.nextTick()` and `setImmediate()`?**

```javascript
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
// Output: nextTick → setImmediate
// nextTick fires before any I/O/timer callbacks; setImmediate fires in check phase
```

**Q4: What is the difference between `require()` and `import`?**

| | `require()` (CJS) | `import` (ESM) |
|--|--|--|
| Sync/Async | Synchronous | Asynchronous |
| Dynamic | ✅ Can be conditional | Mostly static |
| Tree-shaking | ❌ | ✅ |
| File extension | `.js` (default CJS) | `.mjs` or `"type":"module"` |

**Q5: What are streams and why are they used?**
- Streams handle large data chunk by chunk to avoid loading it all in memory. Used for file processing, HTTP responses, compression.

**Q6: What is middleware in Node/Express context?**
- A function with `(req, res, next)` signature. Can inspect, modify, or end the request-response cycle. Executed in order. Must call `next()` to pass to the next middleware.

**Q7: How do you prevent callback hell?**
- Use Promises, async/await, or named functions instead of anonymous nested callbacks.

**Q8: What is `package.json` vs `package-lock.json`?**
- `package.json`: Lists your direct dependencies (ranges like `^4.18.0`).
- `package-lock.json`: Locks EXACT versions of every installed package (including nested deps) for reproducible installs.

**Q9: What is `__dirname`?**
- The absolute path of the directory containing the current file. Unlike `process.cwd()`, it doesn't change based on where you run Node from.

**Q10: How do you handle errors in async code in Node.js?**
```javascript
// With callbacks — first argument is always error
fs.readFile('file.txt', (err, data) => {
  if (err) return handleError(err);
  // use data
});

// With async/await
try {
  const data = await fs.promises.readFile('file.txt', 'utf8');
} catch (err) {
  handleError(err);
}

// Global unhandled rejections
process.on('unhandledRejection', (reason) => {
  console.error(reason);
  process.exit(1);
});
```

[⬆️ Back to Top](#table-of-contents)

---

## ⚠️ Gap Analysis — What's Missing From This Guide

| Missing Topic | Priority | Description |
|---------------|----------|-------------|
| **Cluster module** | 🔴 High | Use all CPU cores: `cluster.fork()` |
| **Worker Threads** | 🔴 High | True parallelism for CPU-heavy tasks |
| **http2 module** | 🟡 Medium | HTTP/2 server in Node |
| **crypto module** | 🟡 Medium | Hashing, encryption, UUID |
| **Buffer** | 🟡 Medium | Binary data handling |
| **net / dgram** | 🟢 Low | TCP/UDP raw sockets |
| **Debugging** | 🟡 Medium | `node --inspect`, Chrome DevTools for Node |
| **Performance profiling** | 🟡 Medium | `--prof` flag, flame graphs |

---

**Happy Learning! 🚀**
