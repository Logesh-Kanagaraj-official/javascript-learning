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
11. [Aggregation Pipeline](#11-aggregation)
12. [Indexing](#12-indexing)
13. [Mongoose Virtuals, Methods & Statics](#13-model-features)
14. [Transactions](#14-transactions)
15. [Mongoose Population (Deep Dive)](#15-population)
16. [Query Operators — Complete Reference](#16-operators)
17. [Interview Questions — MongoDB](#17-interview)
18. [⚠️ Gap Analysis](#gap-analysis)

[⬆️ Back to Top](#table-of-contents)


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

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


[⬆️ Back to Top](#table-of-contents)

---

## 🎯 Practice Projects

1. **User Management System** - CRUD operations
2. **Blog API** - Posts, comments, categories with relationships
3. **E-commerce Product Catalog** - Products, categories, reviews
4. **Task Manager** - Todo lists with user authentication


[⬆️ Back to Top](#table-of-contents)

---

## 📚 Next Steps

After mastering MongoDB, move to:

1. **[React Learning Guide](react_learning_guide.md)** - Build frontend
2. **Authentication** - Password hashing, JWT tokens
3. **Advanced MongoDB** - Aggregation, indexing, transactions


[⬆️ Back to Top](#table-of-contents)

---

**Happy Learning! 🚀**

---

## 11. Aggregation Pipeline {#11-aggregation}

Aggregation processes data through a series of **stages** — the most powerful MongoDB feature.

```javascript
// Aggregation stages: $match → $group → $sort → $project → $limit

// Example: Sales report by category
const result = await Order.aggregate([
  // Stage 1: Filter — only completed orders
  { $match: { status: 'completed' } },

  // Stage 2: Group — total revenue per category
  {
    $group: {
      _id: '$category',
      totalRevenue: { $sum: '$amount' },
      totalOrders:  { $count: {} },
      avgOrderValue: { $avg: '$amount' },
      maxOrder: { $max: '$amount' },
    }
  },

  // Stage 3: Sort — highest revenue first
  { $sort: { totalRevenue: -1 } },

  // Stage 4: Shape output
  {
    $project: {
      category: '$_id',
      totalRevenue: 1,
      totalOrders: 1,
      avgOrderValue: { $round: ['$avgOrderValue', 2] },
      _id: 0,
    }
  },

  // Stage 5: Limit — top 5
  { $limit: 5 },
]);

// Join collections with $lookup
const ordersWithUsers = await Order.aggregate([
  {
    $lookup: {
      from: 'users',          // collection name (lowercase plural)
      localField: 'userId',   // field in Order
      foreignField: '_id',    // field in User
      as: 'user',             // output array field
    }
  },
  { $unwind: '$user' },       // flatten array to object
  {
    $project: {
      title: 1,
      amount: 1,
      'user.name': 1,
      'user.email': 1,
    }
  }
]);

// Pagination with aggregation
const page  = parseInt(req.query.page)  || 1;
const limit = parseInt(req.query.limit) || 10;

const paginatedResults = await Product.aggregate([
  { $match: { isActive: true } },
  { $sort: { createdAt: -1 } },
  {
    $facet: {
      data: [
        { $skip: (page - 1) * limit },
        { $limit: limit },
      ],
      total: [{ $count: 'count' }],
    }
  }
]);
```

[⬆️ Back to Top](#table-of-contents)

---

## 12. Indexing {#12-indexing}

Indexes dramatically speed up queries — critical for production performance.

```javascript
// Without index: MongoDB scans EVERY document (collection scan)
// With index: MongoDB jumps directly to matching documents (index scan)

// In Mongoose schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,   // creates index automatically
    index: true,    // explicit index
  },
  name: String,
  age: Number,
  city: String,
  createdAt: { type: Date, default: Date.now },
});

// Compound index (queries on multiple fields)
userSchema.index({ city: 1, age: -1 }); // city ASC, age DESC

// Text index (full-text search)
userSchema.index({ name: 'text', bio: 'text' });

// TTL index (auto-delete after N seconds)
const sessionSchema = new mongoose.Schema({
  token: String,
  createdAt: { type: Date, default: Date.now, expires: 3600 }, // expires in 1 hour
});

// MongoDB shell — view indexes
// db.users.getIndexes()
// db.users.explain('executionStats').find({ email: 'test@test.com' })

// When NOT to over-index:
// - Indexes slow down writes (insert/update/delete)
// - Each index uses memory
// - Only index fields used in WHERE, ORDER BY, JOIN conditions
```

**Index Best Practices:**

| Scenario | Index Type |
|----------|-----------|
| Single field lookup | Single field index |
| Multiple field queries | Compound index |
| Order frequently matters | Include sort field in compound |
| Full-text search | Text index |
| Auto-expire documents | TTL index |
| Geolocation | `2dsphere` index |

[⬆️ Back to Top](#table-of-contents)

---

## 13. Mongoose Virtuals, Methods & Statics {#13-model-features}

```javascript
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName:  String,
  password:  String,
  role:      { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true }); // adds createdAt, updatedAt automatically

// VIRTUAL — computed property (not stored in DB)
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});
// Usage: user.fullName → 'John Doe'

// INSTANCE METHOD — called on a document
userSchema.methods.isAdmin = function() {
  return this.role === 'admin';
};
userSchema.methods.toSafeObject = function() {
  const obj = this.toObject();
  delete obj.password; // never leak password
  return obj;
};
// Usage: user.isAdmin() → true/false

// STATIC METHOD — called on the Model
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};
userSchema.statics.findAdmins = function() {
  return this.find({ role: 'admin' });
};
// Usage: await User.findByEmail('test@test.com')

// MIDDLEWARE (Hooks) — run before/after operations
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next(); // only hash if changed
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post('findOneAndDelete', async function(doc) {
  if (doc) {
    // Clean up related data when user is deleted
    await Post.deleteMany({ author: doc._id });
  }
});
```

[⬆️ Back to Top](#table-of-contents)

---

## 14. Transactions {#14-transactions}

Use transactions when multiple operations must ALL succeed or ALL fail (atomic).

```javascript
// Example: Transfer money between accounts
// BOTH debit and credit must succeed, or neither should

async function transferFunds(fromId, toId, amount) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Debit from sender
    const sender = await Account.findByIdAndUpdate(
      fromId,
      { $inc: { balance: -amount } },
      { new: true, session, runValidators: true }
    );

    if (sender.balance < 0) {
      throw new Error('Insufficient funds');
    }

    // Credit to receiver
    await Account.findByIdAndUpdate(
      toId,
      { $inc: { balance: amount } },
      { session }
    );

    // Record transaction
    await Transaction.create([{
      from: fromId,
      to: toId,
      amount,
      status: 'completed',
    }], { session });

    await session.commitTransaction();
    console.log('Transfer successful');
  } catch (error) {
    await session.abortTransaction(); // Roll back ALL changes
    throw error;
  } finally {
    session.endSession();
  }
}
```

> **Note:** Transactions require a **MongoDB Replica Set** (not standalone). MongoDB Atlas free tier supports it.

[⬆️ Back to Top](#table-of-contents)

---

## 15. Mongoose Population (Deep Dive) {#15-population}

```javascript
// Basic populate
const posts = await Post.find()
  .populate('author', 'name email -_id')  // only name, email
  .populate('category', 'name');

// Nested populate
const posts = await Post.find().populate({
  path: 'author',
  select: 'name',
  populate: {           // nested — populate author's posts count
    path: 'profile',
    select: 'avatar bio',
  }
});

// Multiple populate in one query
const orders = await Order.find()
  .populate('user',    'name email')
  .populate('product', 'name price')
  .populate('address');

// Populate with filter conditions
const posts = await Post.find().populate({
  path: 'comments',
  match: { isApproved: true },  // only approved comments
  options: { limit: 5, sort: { createdAt: -1 } },
  select: 'content author createdAt',
});

// When NOT to populate — use Aggregation $lookup instead
// Populate = multiple queries (N+1 problem possible)
// $lookup = single query (more efficient for large datasets)
```

[⬆️ Back to Top](#table-of-contents)

---

## 16. MongoDB Query Operators — Complete Reference {#16-operators}

```javascript
// COMPARISON
{ age: { $eq: 25 } }        // equal (same as { age: 25 })
{ age: { $ne: 25 } }        // not equal
{ age: { $gt: 25 } }        // greater than
{ age: { $gte: 25 } }       // greater than or equal
{ age: { $lt: 25 } }        // less than
{ age: { $lte: 25 } }       // less than or equal
{ role: { $in: ['admin', 'moderator'] } }   // value in array
{ role: { $nin: ['banned'] } }              // value NOT in array

// LOGICAL
{ $and: [{ age: { $gte: 18 } }, { isActive: true }] }
{ $or:  [{ role: 'admin' }, { age: { $gte: 60 } }] }
{ $not: [{ role: 'banned' }] }
{ $nor: [{ isActive: false }, { role: 'banned' }] }

// ELEMENT
{ email: { $exists: true } }  // field exists
{ age:   { $type: 'number' } } // field is of type

// ARRAY
{ tags: { $all: ['js', 'node'] } }    // must contain all
{ tags: { $elemMatch: { $gt: 9 } } }  // at least one element matches
{ tags: { $size: 3 } }               // array has exactly 3 elements

// UPDATE OPERATORS
{ $set:   { name: 'New Name' } }        // set field value
{ $unset: { tempField: '' } }           // remove field
{ $inc:   { views: 1, score: -5 } }     // increment/decrement
{ $push:  { tags: 'newTag' } }          // add to array
{ $pull:  { tags: 'oldTag' } }          // remove from array
{ $addToSet: { tags: 'unique' } }       // add only if not exists
{ $pop:   { tags: 1 } }                // remove last (1) or first (-1)

// Production example — increment views, set updatedAt
await Post.findByIdAndUpdate(id, {
  $inc: { views: 1 },
  $set: { updatedAt: new Date() },
});
```

[⬆️ Back to Top](#table-of-contents)

---

## 17. Interview Questions — MongoDB {#17-interview}

**Q1: What is MongoDB? How is it different from SQL?**
- MongoDB is a NoSQL document database. Instead of tables/rows/columns it uses Collections/Documents/Fields. Schema is flexible — each document can have different fields. Better for unstructured or rapidly changing data.

**Q2: What is Mongoose? Why use it?**
- Mongoose is an ODM (Object Data Modeling) library that adds schema validation, type casting, middleware, virtuals, and a query builder on top of MongoDB's native driver.

**Q3: What is the difference between embedding and referencing?**

| | Embedding | Referencing |
|--|--|--|
| Data | Stored inside document | Stored in separate collection |
| Access | Single query | Requires populate/join |
| Best for | Small, rarely changing data | Large/frequently changing data |
| Example | User address | User posts |

**Q4: What is the aggregation pipeline?**
- A framework for data processing through stages: `$match` (filter), `$group` (group + compute), `$sort`, `$project` (shape), `$lookup` (join), `$unwind` (flatten arrays), `$limit`, `$skip`.

**Q5: What is an index? When should you create one?**
- An index is a data structure that improves query speed. Create on fields used in `find()`, `sort()`, or `where()` conditions. Don't over-index — each index slows writes.

**Q6: What is `findByIdAndUpdate` — what does `{ new: true }` do?**
```javascript
// Without new: true → returns the ORIGINAL document (before update)
// With new: true → returns the UPDATED document
const updated = await User.findByIdAndUpdate(id, { name: 'New' }, { new: true });
```

**Q7: What is the difference between `save()` and `findByIdAndUpdate()`?**
- `save()` — loads document, modifies in JS, saves. Triggers `pre/post save` hooks & validators.
- `findByIdAndUpdate()` — atomic DB-level update. By default skips validators. Use `{ runValidators: true }` to enable.

**Q8: What is an ObjectId? How do you validate one?**
```javascript
const mongoose = require('mongoose');
mongoose.Types.ObjectId.isValid('507f1f77bcf86cd799439011'); // true
mongoose.Types.ObjectId.isValid('invalid');                  // false

// Always validate before findById
if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
  return res.status(400).json({ message: 'Invalid ID' });
}
```

**Q9: What is a MongoDB transaction? When do you need it?**
- A transaction ensures multiple operations are atomic — all succeed or all roll back. Needed for financial operations, inventory deductions, anything where partial updates would corrupt data.

**Q10: What is the `$lookup` stage used for?**
- It performs a left outer join between two collections — similar to SQL JOIN. Used to combine related data stored in separate collections in a single aggregation query.

[⬆️ Back to Top](#table-of-contents)

---

## ⚠️ Gap Analysis — What's Missing From This Guide

| Missing Topic | Priority | Description |
|---------------|----------|-------------|
| **Aggregation — `$bucket`, `$unwind`** | 🔴 High | Advanced grouping stages |
| **Full-text Search** | 🔴 High | `$text`, `$search`, Atlas Search |
| **Geospatial queries** | 🟡 Medium | `$near`, `$geoWithin` for location apps |
| **MongoDB Change Streams** | 🟡 Medium | Real-time data change events |
| **Schema migration strategy** | 🔴 High | How to safely change schema in production |
| **Connection pooling** | 🟡 Medium | `mongoose.connect` options, pool size |
| **MongoDB Atlas features** | 🟡 Medium | Atlas Search, Data API, Charts |
| **Backup & Restore** | 🟡 Medium | `mongodump`, `mongorestore` |
| **Soft delete pattern** | 🔴 High | `isDeleted: true` instead of removing |
| **Caching with Redis** | 🔴 High | Cache frequent queries, invalidation strategy |

---

**Happy Learning! 🚀**
