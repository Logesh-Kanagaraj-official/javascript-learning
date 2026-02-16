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

---

## 🎯 Practice Projects

1. **Todo API** - CRUD operations for todos
2. **Blog API** - Posts, comments, categories
3. **Product API** - Products with categories and pricing
4. **User Management API** - User registration, authentication

---

## 📚 Next Steps

After mastering Express.js, move to:

1. **[MongoDB Learning Guide](mongodb_learning_guide.md)** - Connect database
2. **[React Learning Guide](react_learning_guide.md)** - Build frontend
3. **Authentication** - JWT, bcrypt, Passport.js

---

**Happy Learning! 🚀**
