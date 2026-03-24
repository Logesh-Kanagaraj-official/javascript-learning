# 📘 Express.js Complete Learning Guide

## Table of Contents

1. [Introduction to Express.js](#1-introduction)
2. [Installation & Setup](#2-installation)
3. [Creating Your First Server](#3-first-server)
4. [Routing](#4-routing)
5. [Middleware](#5-middleware)
6. [HTTP Methods & REST API](#6-rest-api)
7. [Request & Response](#7-req-res)
8. [Error Handling](#8-error-handling)
9. [CORS Configuration](#9-cors)
10. [Building a Complete API](#10-complete-api)
11. [Rate Limiting](#11-rate-limiting)
12. [Input Validation](#12-validation)
13. [async Error Handler Wrapper](#13-async-wrapper)
14. [Express Router — Modular Structure](#14-router)
15. [HTTP Status Codes Reference](#15-status-codes)
16. [Interview Questions — Express.js](#16-interview)
17. [⚠️ Gap Analysis](#gap-analysis)

---

## 1. Introduction to Express.js {#1-introduction}

### What is Express.js?

Express.js is a **minimal and flexible web application framework** for Node.js that provides a robust set of features for building web and mobile applications and APIs.

### Why Express.js?

✅ **Fast & Minimalist** - Lightweight framework  
✅ **Easy Routing** - Simple route handling  
✅ **Middleware Support** - Powerful middleware system  
✅ **REST API Ready** - Perfect for building APIs  
✅ **Large Ecosystem** - Many plugins & extensions


[⬆️ Back to Top](#table-of-contents)

---

## 2. Installation & Setup {#2-installation}

### Step 1: Create Project Folder

```bash
mkdir express-api
cd express-api
```

### Step 2: Initialize NPM

```bash
npm init -y
```

### Step 3: Install Express

```bash
npm install express
```

### Step 4: Install Nodemon (Development)

```bash
npm install nodemon --save-dev
```

### Step 5: Update package.json

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```


[⬆️ Back to Top](#table-of-contents)

---

## 3. Creating Your First Server {#3-first-server}

### Basic Express Server

**server.js:**

```javascript
const express = require("express");
const app = express();
const PORT = 5000;

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Run the Server

```bash
npm run dev
```

**Visit:** http://localhost:5000


[⬆️ Back to Top](#table-of-contents)

---

## 4. Routing {#4-routing}

### Basic Routes

```javascript
const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// About route
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

### Route Parameters

```javascript
// Static route
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Multiple parameters
app.get("/posts/:year/:month", (req, res) => {
  const { year, month } = req.params;
  res.send(`Posts from ${month}/${year}`);
});
```

### Query Parameters

```javascript
// URL: /search?name=Logesh&age=25
app.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.send(`Name: ${name}, Age: ${age}`);
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 5. Middleware {#5-middleware}

### What is Middleware?

Middleware functions have access to the request (`req`) and response (`res`) objects and can:

- Execute code
- Modify req/res objects
- End the request-response cycle
- Call the next middleware

### Built-in Middleware

```javascript
const express = require("express");
const app = express();

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static("public"));
```

### Custom Middleware

```javascript
// Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // Pass control to next middleware
};

app.use(logger);

// All routes will now log requests
app.get("/", (req, res) => {
  res.send("Home Page");
});
```

### Middleware for Specific Routes

```javascript
// Auth middleware
const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token === "secret-token") {
    next(); // User is authenticated
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Apply middleware to specific route
app.get("/dashboard", checkAuth, (req, res) => {
  res.send("Welcome to Dashboard");
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 6. HTTP Methods & REST API {#6-rest-api}

### REST API Basics

**REST** = Representational State Transfer

Common HTTP Methods:

- **GET** - Read/Retrieve data
- **POST** - Create new data
- **PUT** - Update existing data
- **DELETE** - Delete data

### Simple REST API Example

```javascript
const express = require("express");
const app = express();

app.use(express.json());

// In-memory data storage
let users = [
  { id: 1, name: "Logesh", email: "logesh@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
];

// GET - Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET - Get single user
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// POST - Create new user
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Update user
app.put("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE - Delete user
app.delete("/api/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(5000, () => {
  console.log("API running on port 5000");
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 7. Request & Response {#7-req-res}

### Request Object (req)

```javascript
app.post("/api/data", (req, res) => {
  console.log("Body:", req.body); // Request body
  console.log("Params:", req.params); // URL parameters
  console.log("Query:", req.query); // Query string
  console.log("Headers:", req.headers); // Headers
  console.log("Method:", req.method); // HTTP method
  console.log("URL:", req.url); // Request URL
});
```

### Response Object (res)

```javascript
app.get("/api/demo", (req, res) => {
  // Send text
  res.send("Hello");

  // Send JSON
  res.json({ message: "Success" });

  // Send status code
  res.status(404).send("Not Found");

  // Send file
  res.sendFile("/path/to/file.html");

  // Redirect
  res.redirect("/new-url");

  // Set headers
  res.set("Content-Type", "application/json");

  // Chain methods
  res.status(200).json({ success: true });
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 8. Error Handling {#8-error-handling}

### Basic Error Handling

```javascript
app.get("/api/error", (req, res) => {
  try {
    // Code that might throw error
    throw new Error("Something went wrong!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

### Global Error Handler Middleware

```javascript
// Must be defined AFTER all routes
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});
```

### 404 Handler

```javascript
// Handle 404 (must be after all routes)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 9. CORS Configuration {#9-cors}

### What is CORS?

CORS (Cross-Origin Resource Sharing) allows your API to be accessed from different domains.

### Install CORS

```bash
npm install cors
```

### Enable CORS

```javascript
const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all routes
app.use(cors());

// Or configure specific origins
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
```


[⬆️ Back to Top](#table-of-contents)

---

## 10. Building a Complete API {#10-complete-api}

### Project Structure

```
express-api/
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
├── middleware/
│   └── logger.js
├── server.js
└── package.json
```

### middleware/logger.js

```javascript
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
};

module.exports = logger;
```

### controllers/userController.js

```javascript
let users = [
  { id: 1, name: "Logesh", email: "logesh@example.com" },
  { id: 2, name: "John", email: "john@example.com" },
];

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get single user
exports.getUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

// Create user
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
exports.updateUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  res.json(user);
};

// Delete user
exports.deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
};
```

### routes/users.js

```javascript
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
```

### server.js

```javascript
const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express API" });
});

app.use("/api/users", userRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```


[⬆️ Back to Top](#table-of-contents)

---

## 🎯 Practice Projects

1. **Todo API** - CRUD operations for todos
2. **Blog API** - Posts, comments, categories
3. **Product API** - Products with categories and pricing
4. **User Management API** - User registration, authentication


[⬆️ Back to Top](#table-of-contents)

---

## 📚 Next Steps

After mastering Express.js, move to:

1. **[MongoDB Learning Guide](mongodb_learning_guide.md)** - Connect database
2. **[React Learning Guide](react_learning_guide.md)** - Build frontend
3. **Authentication** - JWT, bcrypt, Passport.js


[⬆️ Back to Top](#table-of-contents)

---

**Happy Learning! 🚀**

---

## 11. Rate Limiting {#11-rate-limiting}

Prevent API abuse by limiting the number of requests per IP.

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

// General limiter — 100 requests per 15 minutes
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: true,  // Send rate limit info in headers
  legacyHeaders: false,
});

// Strict limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Too many login attempts, please try again in 1 hour.' },
});

app.use('/api/', generalLimiter);
app.use('/api/auth/login', authLimiter);
app.use('/api/auth/register', authLimiter);
```

[⬆️ Back to Top](#table-of-contents)

---

## 12. Input Validation {#12-validation}

Always validate incoming request data before processing.

```bash
npm install express-validator
```

```javascript
const { body, param, query, validationResult } = require('express-validator');

// Validation rules
const createUserRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be 2–50 characters'),

  body('email')
    .trim()
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),

  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/[A-Z]/).withMessage('Must contain uppercase letter')
    .matches(/[0-9]/).withMessage('Must contain a number'),

  body('age')
    .optional()
    .isInt({ min: 18, max: 120 }).withMessage('Age must be 18–120'),
];

// Middleware to check results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Use in routes
app.post('/api/users', createUserRules, validate, async (req, res) => {
  // req.body is now validated and sanitized
  const { name, email, password } = req.body;
  // create user...
  res.status(201).json({ message: 'User created' });
});
```

[⬆️ Back to Top](#table-of-contents)

---

## 13. async Error Handler Wrapper {#13-async-wrapper}

Without this, async errors in route handlers crash Express silently.

```javascript
// ❌ BAD — uncaught promise rejection if DB fails
app.get('/api/users', async (req, res) => {
  const users = await User.find(); // if this throws, Express doesn't catch it
  res.json(users);
});

// ✅ GOOD Option 1 — try/catch manually (repetitive)
app.get('/api/users', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err); // passes to global error handler
  }
});

// ✅ GOOD Option 2 — wrap utility (DRY)
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Now all async errors auto-forward to error middleware
app.get('/api/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));

app.delete('/api/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({ message: 'Deleted' });
}));
```

[⬆️ Back to Top](#table-of-contents)

---

## 14. Express Router — Modular Structure {#14-router}

For production apps, never define all routes in `server.js`.

**Recommended Production Structure:**

```
project/
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   └── productController.js
├── routes/
│   ├── auth.js
│   ├── users.js
│   └── products.js
├── middleware/
│   ├── auth.js          ← JWT verify middleware
│   ├── validate.js      ← validation result handler
│   └── errorHandler.js  ← global error handler
├── models/
│   └── User.js
├── config/
│   └── db.js
├── utils/
│   └── asyncHandler.js
├── .env
└── server.js
```

**routes/users.js:**

```javascript
const express = require('express');
const router = express.Router();
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middleware/auth');
const { createUserRules } = require('../middleware/validate');
const asyncHandler = require('../utils/asyncHandler');

// Public routes
router.post('/', createUserRules, asyncHandler(createUser));

// Protected routes (require token)
router.use(authenticate); // applies to all routes below
router.get('/', asyncHandler(getAllUsers));
router.get('/:id', asyncHandler(getUser));
router.put('/:id', asyncHandler(updateUser));
router.delete('/:id', asyncHandler(deleteUser));

module.exports = router;
```

**server.js — clean entry point:**

```javascript
require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Routes
const authRoutes    = require('./routes/auth');
const userRoutes    = require('./routes/users');
const productRoutes = require('./routes/products');

const app = express();

connectDB(); // Connect to MongoDB

// Global middleware
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json({ limit: '10kb' })); // prevent large payloads

// Mount routes
app.use('/api/auth',     authRoutes);
app.use('/api/users',    userRoutes);
app.use('/api/products', productRoutes);

// 404 handler
app.all('*', (req, res) => {
  res.status(404).json({ message: `Route ${req.originalUrl} not found` });
});

// Global error handler (MUST be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

[⬆️ Back to Top](#table-of-contents)

---

## 15. HTTP Status Codes Reference {#15-status-codes}

| Code | Meaning | When to Use |
|------|---------|-------------|
| `200` | OK | GET success, PUT/PATCH success |
| `201` | Created | POST success (resource created) |
| `204` | No Content | DELETE success (no body) |
| `400` | Bad Request | Validation error, malformed data |
| `401` | Unauthorized | Not logged in (no/invalid token) |
| `403` | Forbidden | Logged in but no permission |
| `404` | Not Found | Resource doesn't exist |
| `409` | Conflict | Duplicate (e.g., email already exists) |
| `422` | Unprocessable Entity | Data understood but invalid |
| `429` | Too Many Requests | Rate limit exceeded |
| `500` | Internal Server Error | Uncaught server error |
| `503` | Service Unavailable | Server overloaded or down |

[⬆️ Back to Top](#table-of-contents)

---

## 16. Interview Questions — Express.js {#16-interview}

**Q1: What is Express.js? Why use it over plain Node.js `http` module?**
- Express adds routing, middleware, response helpers, and template engines on top of Node's `http` module. Writing a REST API with raw `http` is repetitive and error-prone; Express makes it declarative and structured.

**Q2: What is middleware? What are the 4 types?**
1. **Application-level** — `app.use(fn)`
2. **Router-level** — `router.use(fn)`
3. **Error-handling** — `app.use((err, req, res, next) => {})`  ← 4 params!
4. **Built-in** — `express.json()`, `express.static()`
5. **Third-party** — `cors`, `morgan`, `helmet`

**Q3: What happens if `next()` is not called in middleware?**
- The request hangs and the client eventually times out. You MUST call `next()`, `next(err)`, or send a response to end the cycle.

**Q4: What is the difference between `app.use()` and `app.get()`?**
- `app.use()` — matches ALL HTTP methods, matches if path STARTS WITH the pattern
- `app.get()` — matches only GET, requires EXACT path match

**Q5: How does Express error handling middleware work?**
```javascript
// 4 parameters = error handler (Express detects automatically)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
// Must be defined AFTER all routes and regular middleware
```

**Q6: How do you handle async errors in Express?**
- Without wrapper: use try/catch + `next(err)` in every handler
- With wrapper: use `asyncHandler` utility that wraps every handler in `.catch(next)`

**Q7: What is the difference between `req.params`, `req.query`, and `req.body`?**

```javascript
// GET /users/42?sort=name
// POST /users with body { name: 'Alice' }

req.params.id    // '42'       — URL segments (:id)
req.query.sort   // 'name'     — query string (?sort=name)
req.body.name    // 'Alice'    — request body (POST/PUT, needs express.json())
```

**Q8: How do you structure a large Express application?**
- MVC pattern: `models/`, `controllers/`, `routes/`, `middleware/`, `config/`, `utils/`
- One router file per resource
- Controllers contain business logic (no Express in controllers ideally)
- Middleware for cross-cutting concerns (auth, logging, validation)

**Q9: What is CORS and how do you configure it in Express?**
- Cross-Origin Resource Sharing — browser security policy that blocks requests from different origins. Configure with `cors` package: `app.use(cors({ origin: 'https://yourfrontend.com' }))`.

**Q10: How do you protect an Express route with JWT?**
```javascript
// Middleware checks Authorization header
// If valid → sets req.user → calls next()
// If invalid → returns 401/403
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});
```

[⬆️ Back to Top](#table-of-contents)

---

## ⚠️ Gap Analysis — What's Missing From This Guide

| Missing Topic | Priority | Description |
|---------------|----------|-------------|
| **JWT full implementation** | 🔴 High | Register, login, refresh token, logout |
| **File uploads (Multer)** | 🔴 High | `npm install multer`, multipart forms |
| **Helmet.js** | 🔴 High | Security headers (`X-XSS-Protection`, `Content-Security-Policy`) |
| **Morgan logger** | 🟡 Medium | HTTP request logging middleware |
| **Compression** | 🟡 Medium | `npm install compression` — gzip responses |
| **Cookie-parser** | 🟡 Medium | Parse cookies, use with httpOnly JWT |
| **Express + WebSockets** | 🟡 Medium | Real-time with `socket.io` |
| **API versioning** | 🟡 Medium | `/api/v1/`, `/api/v2/` routes |
| **Response caching** | 🟢 Low | `Cache-Control` headers, Redis |
| **Testing routes** | 🔴 High | Supertest + Jest for API testing |

---

**Happy Learning! 🚀**
