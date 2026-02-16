# 📙 MongoDB Complete Learning Guide

## Table of Contents

1. [Introduction to MongoDB](#1-introduction)
2. [Installation & Setup](#2-installation)
3. [MongoDB Basics](#3-basics)
4. [CRUD Operations](#4-crud)
5. [Mongoose ODM](#5-mongoose)
6. [Schemas & Models](#6-schemas)
7. [Data Validation](#7-validation)
8. [Relationships](#8-relationships)
9. [Queries & Filters](#9-queries)
10. [Connecting with Express](#10-express-integration)

---

## 1. Introduction to MongoDB {#1-introduction}

### What is MongoDB?

MongoDB is a **NoSQL database** that stores data in flexible, JSON-like documents.

### SQL vs NoSQL

| SQL (MySQL, PostgreSQL) | NoSQL (MongoDB)    |
| ----------------------- | ------------------ |
| Tables                  | Collections        |
| Rows                    | Documents          |
| Columns                 | Fields             |
| Fixed Schema            | Flexible Schema    |
| Relationships (Joins)   | Embedded Documents |

### Why MongoDB?

✅ **Flexible Schema** - No rigid structure  
✅ **Scalable** - Horizontal scaling  
✅ **JSON-like** - Easy to work with JavaScript  
✅ **Fast** - High performance for read/write  
✅ **Rich Queries** - Powerful query language

---

## 2. Installation & Setup {#2-installation}

### Option 1: MongoDB Atlas (Cloud - Recommended for Beginners)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster (free tier)
4. Create database user
5. Whitelist IP address (0.0.0.0/0 for development)
6. Get connection string

**Connection String Format:**

```
mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### Option 2: Local Installation

**Windows:**

1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install MongoDB Community Server
3. Add MongoDB to PATH

**Verify Installation:**

```bash
mongod --version
```

### Install MongoDB Compass (GUI)

Download [MongoDB Compass](https://www.mongodb.com/try/download/compass) - Visual tool for MongoDB

---

## 3. MongoDB Basics {#3-basics}

### Key Concepts

- **Database** - Container for collections
- **Collection** - Group of documents (like table in SQL)
- **Document** - A record in JSON format (like row in SQL)
- **Field** - A key-value pair (like column in SQL)

### Example Document

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Logesh",
  "email": "logesh@example.com",
  "age": 25,
  "skills": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "Chennai",
    "state": "Tamil Nadu"
  },
  "createdAt": "2024-02-15T10:30:00Z"
}
```

---

## 4. CRUD Operations {#4-crud}

### Using MongoDB Shell

```bash
mongosh
```

### Create Database

```javascript
use mydb
```

### Create Collection

```javascript
db.createCollection("users");
```

### Insert Documents

**Insert One:**

```javascript
db.users.insertOne({
  name: "Logesh",
  email: "logesh@example.com",
  age: 25,
});
```

**Insert Many:**

```javascript
db.users.insertMany([
  { name: "John", email: "john@example.com", age: 30 },
  { name: "Jane", email: "jane@example.com", age: 28 },
]);
```

### Read Documents

**Find All:**

```javascript
db.users.find();
```

**Find One:**

```javascript
db.users.findOne({ name: "Logesh" });
```

**Find with Filter:**

```javascript
db.users.find({ age: { $gte: 25 } });
```

### Update Documents

**Update One:**

```javascript
db.users.updateOne({ name: "Logesh" }, { $set: { age: 26 } });
```

**Update Many:**

```javascript
db.users.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
```

### Delete Documents

**Delete One:**

```javascript
db.users.deleteOne({ name: "John" });
```

**Delete Many:**

```javascript
db.users.deleteMany({ age: { $lt: 20 } });
```

---

## 5. Mongoose ODM {#5-mongoose}

### What is Mongoose?

Mongoose is an **Object Data Modeling (ODM)** library for MongoDB and Node.js. It provides:

- Schema validation
- Type casting
- Query building
- Middleware

### Install Mongoose

```bash
npm install mongoose
```

### Connect to MongoDB

**config/db.js:**

```javascript
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

**server.js:**

```javascript
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

---

## 6. Schemas & Models {#6-schemas}

### Creating a Schema

**models/User.js:**

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  age: {
    type: Number,
    min: 0,
    max: 120,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  skills: [
    {
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
```

### Schema Data Types

- `String`
- `Number`
- `Date`
- `Boolean`
- `Array`
- `ObjectId`
- `Mixed`
- `Buffer`

---

## 7. Data Validation {#7-validation}

### Built-in Validators

```javascript
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be positive"],
    max: 10000,
  },
  category: {
    type: String,
    required: true,
    enum: {
      values: ["electronics", "clothing", "food"],
      message: "{VALUE} is not a valid category",
    },
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});
```

### Custom Validators

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  age: {
    type: Number,
    validate: {
      validator: function (v) {
        return v >= 18;
      },
      message: "Age must be 18 or above",
    },
  },
});
```

---

## 8. Relationships {#8-relationships}

### One-to-Many (Referencing)

**models/Post.js:**

```javascript
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
```

**Usage:**

```javascript
// Create post
const post = new Post({
  title: "My First Post",
  content: "Post content here",
  author: userId, // Reference to User
});
await post.save();

// Populate author details
const posts = await Post.find().populate("author", "name email");
```

### Embedding Documents

```javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  orders: [
    {
      product: String,
      quantity: Number,
      price: Number,
      date: { type: Date, default: Date.now },
    },
  ],
});
```

---

## 9. Queries & Filters {#9-queries}

### Basic Queries

```javascript
const User = require("./models/User");

// Find all users
const users = await User.find();

// Find by field
const user = await User.findOne({ email: "logesh@example.com" });

// Find by ID
const userById = await User.findById("507f1f77bcf86cd799439011");
```

### Query Operators

```javascript
// Greater than
const adults = await User.find({ age: { $gte: 18 } });

// Less than
const young = await User.find({ age: { $lt: 30 } });

// Multiple conditions
const activeUsers = await User.find({
  age: { $gte: 18, $lte: 60 },
  isActive: true,
});

// OR condition
const users = await User.find({
  $or: [{ role: "admin" }, { age: { $gte: 30 } }],
});

// IN operator
const users = await User.find({
  role: { $in: ["admin", "moderator"] },
});

// Regex (pattern matching)
const users = await User.find({
  name: { $regex: /^Log/i }, // Names starting with 'Log'
});
```

### Sorting, Limiting, Skipping

```javascript
// Sort by age (ascending)
const users = await User.find().sort({ age: 1 });

// Sort by age (descending)
const users = await User.find().sort({ age: -1 });

// Limit results
const users = await User.find().limit(10);

// Skip and limit (pagination)
const page = 2;
const limit = 10;
const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);

// Select specific fields
const users = await User.find().select("name email -_id");
```

---

## 10. Connecting with Express {#10-express-integration}

### Complete Express + MongoDB Example

**server.js:**

```javascript
const express = require("express");
const connectDB = require("./config/db");
const User = require("./models/User");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes

// Get all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single user
app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create user
app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});

// Update user
app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

---

## 🎯 Practice Projects

1. **User Management System** - CRUD operations
2. **Blog API** - Posts, comments, categories with relationships
3. **E-commerce Product Catalog** - Products, categories, reviews
4. **Task Manager** - Todo lists with user authentication

---

## 📚 Next Steps

After mastering MongoDB, move to:

1. **[React Learning Guide](react_learning_guide.md)** - Build frontend
2. **Authentication** - Password hashing, JWT tokens
3. **Advanced MongoDB** - Aggregation, indexing, transactions

---

**Happy Learning! 🚀**
