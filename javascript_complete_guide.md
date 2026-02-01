# JavaScript Complete Interview Guide

**Comprehensive Guide from Basics to Advanced**

> **Interview Focus**: This guide covers 80+ essential JavaScript topics with definitions, examples, and real-world use cases.

---

## 📌 Table of Contents

### Part 1: Core JavaScript Fundamentals

1. [What is JavaScript?](#1-what-is-javascript)
2. [Execution Context](#2-execution-context)
3. [Call Stack](#3-call-stack)
4. [Hoisting](#4-hoisting)
5. [Temporal Dead Zone (TDZ)](#5-temporal-dead-zone-tdz)
6. [undefined vs null](#6-undefined-vs-null)
7. [Primitive vs Non-Primitive Data Types](#7-primitive-vs-non-primitive-data-types)
8. [Type Coercion](#8-type-coercion)
9. [Truthy and Falsy Values](#9-truthy-and-falsy-values)
10. [NaN - Not a Number](#10-nan-not-a-number)
11. [== vs ===](#11-equality-operators)

### Part 2: Scope & Closures

12. [Scope - What & Types](#12-scope)
13. [Function Scope vs Block Scope](#13-function-scope-vs-block-scope)
14. [Global Scope vs Block Scope](#14-global-scope-vs-block-scope)
15. [Closures](#15-closures)
16. [Closure Use Cases](#16-closure-use-cases)
17. [Closure Memory Issues](#17-closure-memory-issues)
18. [Lexical Scope](#18-lexical-scope)

### Part 3: Functions & This

19. [Function Declaration vs Expression](#19-function-declaration-vs-expression)
20. [Arrow Functions vs Normal Functions](#20-arrow-functions-vs-normal-functions)
21. [this Keyword](#21-this-keyword)
22. [this in Arrow Functions](#22-this-in-arrow-functions)
23. [call, apply, bind](#23-call-apply-bind)
24. [Currying](#24-currying)
25. [Pure vs Impure Functions](#25-pure-vs-impure-functions)
26. [Memoization](#26-memoization)

### Part 4: Objects & Prototypes

27. [How Objects Work Internally](#27-objects-internal-working)
28. [Prototype](#28-prototype)
29. [Prototype Chain](#29-prototype-chain)
30. [**proto** vs prototype](#30-proto-vs-prototype)
31. [Object.create vs Constructor](#31-object-create-vs-constructor)
32. [Shallow Copy vs Deep Copy](#32-shallow-copy-vs-deep-copy)
33. [How to Clone Objects](#33-cloning-objects)
34. [Prevent Object Mutation](#34-prevent-object-mutation)

### Part 5: Arrays

35. [map, filter, reduce](#35-map-filter-reduce)
36. [When to use reduce](#36-when-to-use-reduce)
37. [Remove Duplicates from Array](#37-remove-duplicates)
38. [Flatten Nested Array](#38-flatten-array)
39. [slice vs splice](#39-slice-vs-splice)
40. [find vs filter](#40-find-vs-filter)
41. [some vs every](#41-some-vs-every)
42. [Array Immutability](#42-array-immutability)

### Part 6: Asynchronous JavaScript

43. [Synchronous vs Asynchronous](#43-sync-vs-async)
44. [Event Loop](#44-event-loop)
45. [Microtask Queue vs Macrotask Queue](#45-microtask-vs-macrotask)
46. [Promise States](#46-promise-states)
47. [Promise Chaining](#47-promise-chaining)
48. [async/await - How it Works](#48-async-await)
49. [Error Handling in async/await](#49-async-await-error-handling)
50. [Promise.all vs Promise.allSettled vs Promise.race](#50-promise-methods)
51. [Callback Hell](#51-callback-hell)
52. [What is a Callback?](#52-callbacks)
53. [Promise Chain Example](#53-promise-chain-example)

### Part 7: Browser & Web APIs

54. [DOM - Document Object Model](#54-dom)
55. [localStorage vs sessionStorage vs cookies](#55-storage-comparison)
56. [CORS - Cross-Origin Resource Sharing](#56-cors)
57. [Same-Origin Policy](#57-same-origin-policy)
58. [What Happens When You Type a URL](#58-url-to-webpage)
59. [How Browser Renders a Webpage](#59-browser-rendering)
60. [Reflow & Repaint](#60-reflow-repaint)
61. [Critical Rendering Path](#61-critical-rendering-path)
62. [How Browser Parses HTML and Builds DOM](#62-dom-tree-building)

### Part 8: ES6+ Features

63. [ES6 Features Overview](#63-es6-features)
64. [let, const vs var](#64-let-const-var)
65. [Destructuring](#65-destructuring)
66. [Spread vs Rest Operator](#66-spread-vs-rest)
67. [Template Literals](#67-template-literals)
68. [Default Parameters](#68-default-parameters)
69. [Optional Chaining](#69-optional-chaining)
70. [Nullish Coalescing](#70-nullish-coalescing)
71. [Modules (import/export)](#71-modules)
72. [Tree Shaking](#72-tree-shaking)

### Part 9: Performance & Optimization

73. [Debounce](#73-debounce)
74. [Throttle](#74-throttle)
75. [Memory Leaks in JavaScript](#75-memory-leaks)
76. [How to Prevent Memory Leaks](#76-prevent-memory-leaks)
77. [Optimizing Heavy Loops](#77-optimize-loops)
78. [Web Workers](#78-web-workers)
79. [Garbage Collection](#79-garbage-collection)

### Part 10: Error Handling & Security

80. [try/catch vs Promise catch](#80-error-handling)
81. [Global Error Handling](#81-global-error-handling)
82. [Custom Error Classes](#82-custom-errors)
83. [XSS - Cross-Site Scripting](#83-xss)
84. [CSRF - Cross-Site Request Forgery](#84-csrf)
85. [Why eval() is Dangerous](#85-eval-danger)

### Part 11: Additional Important Topics

86. [Polyfills](#86-polyfills)
87. [Weak Map and Weak Set](#87-weakmap-weakset)
88. [String Methods](#88-string-methods)
89. [Array Methods Complete](#89-array-methods-complete)

---

## Part 1: Core JavaScript Fundamentals

### 1. What is JavaScript?

**Definition:**  
JavaScript is a **high-level, interpreted, dynamically-typed programming language** primarily used to create interactive web pages. It runs in the browser and on servers (Node.js).

**Key Characteristics:**

- **Interpreted:** No compilation needed, runs directly
- **Dynamically typed:** Variables can hold any type
- **Single-threaded:** Executes one task at a time
- **Event-driven:** Responds to user interactions
- **Prototype-based:** Object inheritance through prototypes

**Example:**

```javascript
// JavaScript can manipulate HTML
document.getElementById("demo").innerHTML = "Hello JavaScript!";

// Variables (dynamically typed)
let name = "John"; // String
name = 42; // Now a number - no error!

// Functions
function greet(user) {
  return `Hello, ${user}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

---

### 2. Execution Context

**Definition:**  
An **Execution Context** is the environment in which JavaScript code is evaluated and executed. It contains information about variables, functions, and the value of `this`.

**Types of Execution Contexts:**

1. **Global Execution Context (GEC)** - Default context, created when script first runs
2. **Function Execution Context (FEC)** - Created when a function is called
3. **Eval Execution Context** - Code inside `eval()` (rarely used)

**Phases of Execution Context:**

1. **Creation Phase:**
   - Create Variable Object (stores variables, functions)
   - Create Scope Chain
   - Determine value of `this`
2. **Execution Phase:**
   - Assign values to variables
   - Execute code line by line

**Example:**

```javascript
// Global Execution Context created
var name = "Global";

function outer() {
  // Function Execution Context created for outer()
  var name = "Outer";

  function inner() {
    // Function Execution Context created for inner()
    var name = "Inner";
    console.log(name); // "Inner"
  }

  inner();
  console.log(name); // "Outer"
}

outer();
console.log(name); // "Global"
```

**Visual Representation:**

```
┌─────────────────────────────────────┐
│   Global Execution Context (GEC)    │
│   - Variables: name = 'Global'      │
│   - Functions: outer()              │
│   - this: window                    │
└─────────────────────────────────────┘
         │
         │ outer() called
         ▼
┌─────────────────────────────────────┐
│   Function Execution Context        │
│   - Variables: name = 'Outer'       │
│   - Functions: inner()              │
│   - this: (depends on call)         │
└─────────────────────────────────────┘
         │
         │ inner() called
         ▼
┌─────────────────────────────────────┐
│   Function Execution Context        │
│   - Variables: name = 'Inner'       │
│   - this: (depends on call)         │
└─────────────────────────────────────┘
```

---

### 3. Call Stack

**Definition:**  
The **Call Stack** is a mechanism to keep track of function calls. It follows **LIFO (Last In, First Out)** principle - the last function pushed onto the stack is the first to be removed.

**How It Works:**

1. When a function is called, it's **pushed** onto the stack
2. When a function returns, it's **popped** off the stack
3. JavaScript uses the call stack to know where to return after a function completes

**Example:**

```javascript
function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

first();

// Output:
// First function
// Second function
// Third function
// Second function end
// First function end
```

**Call Stack Visualization:**

```
Step 1: first() called
┌──────────┐
│ first()  │
└──────────┘

Step 2: second() called inside first()
┌──────────┐
│ second() │
├──────────┤
│ first()  │
└──────────┘

Step 3: third() called inside second()
┌──────────┐
│ third()  │
├──────────┤
│ second() │
├──────────┤
│ first()  │
└──────────┘

Step 4: third() returns
┌──────────┐
│ second() │
├──────────┤
│ first()  │
└──────────┘

Step 5: second() returns
┌──────────┐
│ first()  │
└──────────┘

Step 6: first() returns
(Empty stack)
```

**Stack Overflow Example:**

```javascript
// Infinite recursion causes stack overflow
function recursive() {
  recursive(); // No base case!
}

recursive(); // ❌ Error: Maximum call stack size exceeded
```

**Practical Interview Example:**

```javascript
function a() {
  console.log("a started");
  b();
  console.log("a ended");
}

function b() {
  console.log("b started");
  c();
  console.log("b ended");
}

function c() {
  console.log("c started");
  console.log("c ended");
}

a();

// Call Stack Flow:
// 1. a() pushed → console.log('a started')
// 2. b() pushed → console.log('b started')
// 3. c() pushed → console.log('c started') → console.log('c ended')
// 4. c() popped
// 5. console.log('b ended')
// 6. b() popped
// 7. console.log('a ended')
// 8. a() popped

// Output:
// a started
// b started
// c started
// c ended
// b ended
// a ended
```

---

### 4. Hoisting

**Definition:**  
**Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope during the creation phase, before code execution.

**Key Points:**

- **Declarations** are hoisted, not **initializations**
- `var` variables are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but **not initialized** (Temporal Dead Zone)
- Function declarations are fully hoisted (both declaration and definition)
- Function expressions and arrow functions are **not** hoisted

**var Hoisting:**

```javascript
console.log(name); // undefined (not ReferenceError)
var name = "John";
console.log(name); // "John"

// What actually happens behind the scenes:
var name; // Declaration hoisted
console.log(name); // undefined
name = "John"; // Initialization stays in place
console.log(name); // "John"
```

**let and const Hoisting (Temporal Dead Zone):**

```javascript
console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;

console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
const city = "NYC";
```

**Function Declaration Hoisting:**

```javascript
greet(); // "Hello!" - Works! Function is fully hoisted

function greet() {
  console.log("Hello!");
}
```

**Function Expression Hoisting:**

```javascript
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

// What actually happens:
var sayHi; // Hoisted as undefined
sayHi(); // Trying to call undefined()
sayHi = function () {
  console.log("Hi!");
};
```

**Arrow Function Hoisting:**

```javascript
greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization

const greet = () => {
  console.log("Hello!");
};
```

**Complete Example:**

```javascript
// Variable hoisting
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

// Function hoisting
foo(); // "Function declaration works!"
bar(); // TypeError: bar is not a function
baz(); // ReferenceError: Cannot access 'baz' before initialization

function foo() {
  console.log("Function declaration works!");
}

var bar = function () {
  console.log("Function expression");
};

const baz = () => {
  console.log("Arrow function");
};
```

---

### 5. Temporal Dead Zone (TDZ)

**Definition:**  
The **Temporal Dead Zone (TDZ)** is the period between entering a scope and the actual declaration of a `let` or `const` variable. During TDZ, the variable cannot be accessed.

**Why it Exists:**

- Prevents accessing variables before initialization
- Catches bugs early
- Enforces better coding practices

**Example:**

```javascript
{
  // TDZ starts for 'name'
  console.log(name); // ❌ ReferenceError

  let name = "John"; // TDZ ends
  console.log(name); // ✅ "John"
}
```

**TDZ with typeof:**

```javascript
// Surprising behavior!
console.log(typeof undeclaredVar); // "undefined" (no error)
console.log(typeof declaredVar); // ❌ ReferenceError (TDZ)

let declaredVar = 42;
```

**TDZ in Function Parameters:**

```javascript
function test(a = b, b = 2) {
  console.log(a, b);
}

test(); // ❌ ReferenceError: Cannot access 'b' before initialization

// Fixed version:
function test(b = 2, a = b) {
  console.log(a, b);
}

test(); // ✅ 2, 2
```

**Visual Representation:**

```javascript
{
  // ┌─── TDZ starts for 'name'
  // │
  // │  console.log(name); // ReferenceError
  // │
  // │  let name = 'John';
  // └─── TDZ ends

  console.log(name); // ✅ Works now
}
```

---

### 6. undefined vs null

**Definition:**

- **`undefined`**: A variable has been declared but not assigned a value
- **`null`**: An intentional absence of value, explicitly set by the programmer

**Key Differences:**

| Feature        | undefined                      | null                        |
| -------------- | ------------------------------ | --------------------------- |
| **Type**       | `"undefined"`                  | `"object"` (historical bug) |
| **Meaning**    | Not initialized                | Intentionally empty         |
| **Assignment** | JavaScript assigns             | You assign                  |
| **Default**    | Default for uninitialized vars | Must be explicitly set      |

**Examples:**

```javascript
// undefined
let name;
console.log(name); // undefined
console.log(typeof name); // "undefined"

function test() {
  // No return statement
}
console.log(test()); // undefined

const obj = { a: 1 };
console.log(obj.b); // undefined (property doesn't exist)

// null
let user = null; // Intentionally empty
console.log(user); // null
console.log(typeof user); // "object" (JavaScript bug!)

// Checking for null or undefined
if (value == null) {
  // true for BOTH null and undefined
}

if (value === null) {
  // true ONLY for null
}

if (value === undefined) {
  // true ONLY for undefined
}
```

**Real-World Usage:**

```javascript
// Good practice: Use null to represent "no value"
let selectedUser = null; // No user selected yet

function getUser(id) {
  if (id === 123) {
    return { name: "John", age: 30 };
  }
  return null; // User not found - intentionally empty
}

// Bad practice: Mixing undefined and null
let user; // undefined
let user2 = null; // null
// Pick one convention and stick with it!
```

---

### 7. Primitive vs Non-Primitive Data Types

**Primitive Data Types (7 types):**

1. **String** - Text
2. **Number** - Integers and decimals
3. **Boolean** - true/false
4. **undefined** - Not assigned
5. **null** - Intentionally empty
6. **Symbol** - Unique identifier (ES6)
7. **BigInt** - Large integers (ES2020)

**Non-Primitive (Reference) Types:**

1. **Object** - Collections of key-value pairs
2. **Array** - Ordered lists
3. **Function** - Executable code blocks
4. **Date, RegExp, Map, Set, etc.**

**Key Differences:**

| Aspect            | Primitive           | Non-Primitive         |
| ----------------- | ------------------- | --------------------- |
| **Storage**       | Stored in **stack** | Stored in **heap**    |
| **Mutability**    | **Immutable**       | **Mutable**           |
| **Comparison**    | By **value**        | By **reference**      |
| **Copy Behavior** | Creates **copy**    | Creates **reference** |

**Examples:**

**Primitives - Immutable:**

```javascript
// Primitives are immutable
let str = "hello";
str[0] = "H"; // Doesn't work!
console.log(str); // "hello" (unchanged)

str = "Hello"; // Creates NEW string, doesn't modify original
console.log(str); // "Hello"

// Primitive comparison (by value)
let a = 10;
let b = 10;
console.log(a === b); // true (same value)

// Copying primitives
let x = 5;
let y = x; // Copy value
y = 10;
console.log(x); // 5 (unchanged)
console.log(y); // 10
```

**Non-Primitives - Mutable:**

```javascript
// Objects are mutable
const person = { name: "John", age: 30 };
person.age = 31; // ✅ Works! Objects are mutable
console.log(person); // { name: 'John', age: 31 }

// Reference comparison
const obj1 = { value: 10 };
const obj2 = { value: 10 };
console.log(obj1 === obj2); // false (different references)

const obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)

// Copying references
const original = { name: "Alice" };
const copy = original; // Copies REFERENCE, not object

copy.name = "Bob";
console.log(original.name); // "Bob" (both changed!)
console.log(copy.name); // "Bob"
```

**Visual Memory Representation:**

```
Primitives (Stack):
┌─────────┬─────────┐
│ a = 10  │   10    │
│ b = 10  │   10    │  ← Separate values
└─────────┴─────────┘

Non-Primitives (Heap + Stack):
Stack:                  Heap:
┌──────────┬──────────┐  ┌────────────────┐
│ obj1     │  0x001   │─→│ { name: 'John' }│
│ obj2     │  0x002   │─→│ { name: 'Jane' }│
│ obj3     │  0x001   │─→│ (same as obj1)  │
└──────────┴──────────┘  └────────────────┘
```

**Checking Types:**

```javascript
// Primitives
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 9007199254740991n); // "bigint"

// Non-Primitives
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function () {}); // "function"

// Better checks for non-primitives
console.log(Array.isArray([])); // true
console.log([] instanceof Array); // true
```

---

### 8. Type Coercion

**Definition:**  
**Type Coercion** is the automatic or explicit conversion of values from one data type to another.

**Types:**

1. **Implicit Coercion** - JavaScript automatically converts types
2. **Explicit Coercion** - You manually convert types

**Implicit Coercion Examples:**

```javascript
// String concatenation
console.log("5" + 2); // "52" (number → string)
console.log("5" + true); // "5true"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

// Arithmetic operations
console.log("5" - 2); // 3 (string → number)
console.log("10" * "2"); // 20
console.log("10" / "2"); // 5
console.log("10" % "3"); // 1

// Boolean context
if ("hello") {
  console.log("Truthy!"); // Executes (non-empty string is truthy)
}

if (0) {
  console.log("Won't execute"); // 0 is falsy
}

// Comparison
console.log("2" == 2); // true (string converted to number)
console.log("2" === 2); // false (no coercion with ===)
```

**Explicit Coercion:**

```javascript
// To String
String(123); // "123"
(123).toString(); // "123"
123 + ""; // "123"

// To Number
Number("123"); // 123
parseInt("123px"); // 123 (parses until non-numeric)
parseFloat("3.14"); // 3.14
+"123"; // 123 (unary plus)

// To Boolean
Boolean(1); // true
Boolean(0); // false
!!1; // true (double NOT)
!!"hello"; // true
```

**Tricky Examples:**

```javascript
console.log([] + []); // "" (empty string)
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log(true + false); // 1 (true=1, false=0)
console.log("5" - "2"); // 3
console.log("5" + -"2"); // "5-2"
console.log([1, 2] + [3, 4]); // "1,23,4"
```

---

### 9. Truthy and Falsy Values

**Falsy Values (8 total):**
Only these values are falsy in JavaScript:

1. `false`
2. `0`
3. `-0`
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN`

**Everything else is truthy!**

**Examples:**

```javascript
// Truthy values (selected examples)
if (true) {
} // ✅
if (1) {
} // ✅
if (-1) {
} // ✅
if ("hello") {
} // ✅
if (" ") {
} // ✅ (space is not empty)
if ("0") {
} // ✅ (string '0' is not number 0)
if ("false") {
} // ✅ (string 'false' is not boolean false)
if ([]) {
} // ✅ (empty array is truthy)
if ({}) {
} // ✅ (empty object is truthy)
if (function () {}) {
} // ✅

// Falsy values
if (false) {
} // ❌
if (0) {
} // ❌
if ("") {
} // ❌
if (null) {
} // ❌
if (undefined) {
} // ❌
if (NaN) {
} // ❌
```

**Practical Usage:**

```javascript
// Default values with ||
function greet(name) {
  name = name || "Guest"; // If name is falsy, use 'Guest'
  console.log(`Hello, ${name}!`);
}

greet("John"); // "Hello, John!"
greet(); // "Hello, Guest!"
greet(""); // "Hello, Guest!" (empty string is falsy)

// Better with Nullish Coalescing (??)
function greet2(name) {
  name = name ?? "Guest"; // Only null/undefined, not all falsy
  console.log(`Hello, ${name}!`);
}

greet2(""); // "Hello, !" (empty string is kept)
greet2(null); // "Hello, Guest!"

// Check if variable has value
let user;
if (user) {
  console.log("User exists");
} else {
  console.log("No user"); // This runs
}

// Convert to boolean
!!"hello"; // true
!!0; // false
!![]; // true
```

---

### 10. NaN - Not a Number

**Definition:**  
**NaN** stands for "Not-a-Number" but ironically, its type is `"number"`. It represents an invalid numerical operation result.

**How NaN is Created:**

```javascript
console.log("abc" / 2); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("hello")); // NaN
console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
```

**Checking for NaN:**

```javascript
const result = "abc" / 2;

// ❌ WRONG ways:
console.log(result == NaN); // false (NaN never equals anything)
console.log(result === NaN); // false

// ✅ CORRECT ways:
console.log(isNaN(result)); // true
console.log(Number.isNaN(result)); // true (better, more strict)

// Difference between isNaN and Number.isNaN:
console.log(isNaN("hello")); // true (coerces to NaN)
console.log(Number.isNaN("hello")); // false (strict check)
```

**NaN Properties:**

```javascript
console.log(typeof NaN); // "number" (weird but true!)
console.log(NaN === NaN); // false (only value not equal to itself)

// Detecting NaN with Object.is
console.log(Object.is(NaN, NaN)); // true
```

---

### 11. Equality Operators (== vs ===)

**== (Loose Equality) - Allows Type Coercion:**

```javascript
console.log(5 == "5"); // true (string '5' converted to number)
console.log(1 == true); // true (true → 1)
console.log(0 == false); // true (false → 0)
console.log(null == undefined); // true (special case)
console.log("" == 0); // true
```

**=== (Strict Equality) - No Type Coercion:**

```javascript
console.log(5 === "5"); // false (different types)
console.log(1 === true); // false
console.log(0 === false); // false
console.log(null === undefined); // false
console.log("" === 0); // false
```

**Best Practice:**
✅ Always use `===` and `!==` to avoid unexpected coercion bugs!

```javascript
// Real-world bug example with ==
function checkAge(age) {
  if (age == 18) {
    return "Adult";
  }
  return "Not adult";
}

console.log(checkAge(18)); // "Adult" ✅
console.log(checkAge("18")); // "Adult" ⚠️ Might not be intended!

// Fixed with ===
function checkAge(age) {
  if (age === 18) {
    return "Adult";
  }
  return "Not adult";
}

console.log(checkAge(18)); // "Adult" ✅
console.log(checkAge("18")); // "Not adult" ✅
```

---

## Part 2: Scope & Closures

### 12. Scope

**Definition:**  
**Scope** determines the visibility/accessibility of variables. It defines where variables can be accessed in your code.

**Types of Scope:**

1. **Global Scope** - Accessible everywhere
2. **Function Scope** - Accessible within function
3. **Block Scope** - Accessible within `{ }` blocks (let/const only)

**Global Scope:**

```javascript
var globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible
}

test();
console.log(globalVar); // ✅ Accessible
```

**Function Scope:**

```javascript
function myFunction() {
  var functionVar = "I am local";
  console.log(functionVar); // ✅ Works
}

myFunction();
console.log(functionVar); // ❌ ReferenceError
```

**Block Scope:**

```javascript
{
  let blockVar = "Block scoped";
  const blockConst = "Also block scoped";
  var notBlockScoped = "Function scoped!";

  console.log(blockVar); // ✅ Works
}

console.log(blockVar); // ❌ ReferenceError
console.log(notBlockScoped); // ✅ Works (var ignores block scope)
```

---

### 13. Function Scope vs Block Scope

**Function Scope (`var`):**

```javascript
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (var is function-scoped)
}

test();
```

**Block Scope (`let`, `const`):**

```javascript
function test() {
  if (true) {
    let y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError (block-scoped)
  console.log(z); // ❌ ReferenceError (block-scoped)
}

test();
```

**Common "Bug" with var in Loops:**

```javascript
// var - Function scoped
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 3, 3, 3 (all reference same 'i')
  }, 100);
}

// let - Block scoped (creates new 'i' for each iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // 0, 1, 2 ✅
  }, 100);
}
```

---

### 14. Global Scope vs Block Scope

Already covered in [#12](#12-scope) and [#13](#13-function-scope-vs-block-scope)

---

### 15. Closures

**Definition:**  
A **closure** is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned.

**Key Point:** Inner function "remembers" variables from outer function.

**Simple Example:**

```javascript
function outer() {
  const name = "JavaScript";

  function inner() {
    console.log(name); // Accesses 'name' from outer scope
  }

  return inner;
}

const myFunc = outer();
myFunc(); // "JavaScript" ✅ - Closure in action!
```

**Visual:**

```
outer() {
    const name = 'JavaScript'
    └─→ inner() {
            console.log(name) ← Has access to 'name'
        }
}
```

**Practical Example - Counter:**

```javascript
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined (private!)
```

---

### 16. Closure Use Cases

**1. Data Privacy / Encapsulation:**

```javascript
function bankAccount(initialBalance) {
  let balance = initialBalance; // Private

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds";
    },
    getBalance() {
      return balance;
    },
  };
}

const account = bankAccount(1000);
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.balance); // undefined (can't access directly)
```

**2. Function Factories:**

```javascript
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**3. Event Handlers:**

```javascript
function setupButton(buttonId) {
  const clickCount = { count: 0 };

  document.getElementById(buttonId).addEventListener("click", function () {
    clickCount.count++;
    console.log(`Button clicked${clickCount.count} times`);
  });
}
```

**4. Memoization (Caching):**

```javascript
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("From cache");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const expensiveFunction = memoize((n) => {
  console.log("Computing...");
  return n * 2;
});

console.log(expensiveFunction(5)); // Computing... 10
console.log(expensiveFunction(5)); // From cache 10
```

---

### 17. Closure Memory Issues

**Problem:** Closures can cause memory leaks if not careful.

**Memory Leak Example:**

```javascript
function attachEvent() {
  const largeData = new Array(1000000).fill("data");

  document.getElementById("btn").addEventListener("click", function () {
    console.log("Clicked");
    // largeData is kept in memory even if not used!
  });
}

attachEvent(); // ⚠️ largeData stays in memory
```

**Solution: Nullify References:**

```javascript
function attachEvent() {
  let largeData = new Array(1000000).fill("data");
  const neededValue = largeData[0];

  largeData = null; // Free up memory

  document.getElementById("btn").addEventListener("click", function () {
    console.log(neededValue); // Only keeps what's needed
  });
}
```

**Loop Closure Issue:**

```javascript
// Common mistake
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 5, 5, 5, 5, 5
  }, 1000);
}

// Fix 1: Use let
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2, 3, 4 ✅
  }, 1000);
}

// Fix 2: IIFE
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // 0, 1, 2, 3, 4 ✅
    }, 1000);
  })(i);
}
```

---

### 18. Lexical Scope

**Definition:**  
**Lexical Scope** means that a function's scope is determined by where it is **written** in the code, not where it is **called**.

**Example:**

```javascript
const name = "Global";

function outer() {
  const name = "Outer";

  function inner() {
    console.log(name); // Looks in outer scope (where it was written)
  }

  return inner;
}

const name = "Another Global";
const myFunc = outer();
myFunc(); // "Outer" (not "Another Global")
```

**Scope Chain:**

```javascript
const global = "Global";

function level1() {
  const level1Var = "Level 1";

  function level2() {
    const level2Var = "Level 2";

    function level3() {
      const level3Var = "Level 3";
      console.log(global); // ✅ Looks up chain
      console.log(level1Var); // ✅ Looks up chain
      console.log(level2Var); // ✅ Looks up chain
      console.log(level3Var); // ✅ Own scope
    }

    level3();
  }

  level2();
}

level1();
```

---

## Part 3: Functions & This

### 19. Function Declaration vs Expression

**Function Declaration:**

```javascript
function greet() {
  return "Hello!";
}

// Characteristics:
// - Hoisted (can call before declaration)
// - Has a name
// - Creates a named function

greet(); // ✅ Works even before declaration (hoisted)
```

**Function Expression:**

```javascript
const greet = function () {
  return "Hello!";
};

// Characteristics:
// - NOT hoisted
// - Can be anonymous or named
// - Treated as a value

greet(); // ✅ Works only after this line
```

**Named Function Expression:**

```javascript
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can call itself by name
};

console.log(factorial(5)); // 120
```

**When to Use Which:**

```javascript
// Use Declaration for:
// - Top-level functions
// - Functions called before definition
function calculate() {}

// Use Expression for:
// - Callbacks
// - Conditional function creation
// - Methods
const obj = {
  method: function () {},
};

arr.map(function (item) {});
```

---

### 20. Arrow Functions vs Normal Functions

**Syntax Differences:**

```javascript
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Single parameter (no parentheses needed)
const double = (n) => n * 2;

// No parameters
const greet = () => "Hello!";

// Multiple lines
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
```

**Key Differences:**

| Feature                | Normal Function                 | Arrow Function             |
| ---------------------- | ------------------------------- | -------------------------- |
| **`this` binding**     | Dynamic (depends on call)       | Lexical (from surrounding) |
| **`arguments` object** | ✅ Has `arguments`              | ❌ No `arguments`          |
| **Constructor**        | ✅ Can use `new`                | ❌ Cannot use `new`        |
| **Hoisting**           | ✅ Function declaration hoisted | ❌ Not hoisted             |
| **Implicit return**    | ❌ Needs `return`               | ✅ Can omit `return`       |

**`this` Binding:**

```javascript
// Normal function - 'this' depends on how it's called
const obj = {
  name: "Object",
  normalFunc: function () {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  },
};

obj.normalFunc(); // "Object" (this = obj)
obj.arrowFunc(); // undefined (this = global/window)

// Real-world example
class Timer {
  constructor() {
    this.seconds = 0;
  }

  startNormal() {
    setInterval(function () {
      this.seconds++; // ❌ 'this' is not Timer instance
      console.log(this.seconds);
    }, 1000);
  }

  startArrow() {
    setInterval(() => {
      this.seconds++; // ✅ 'this' is Timer instance
      console.log(this.seconds);
    }, 1000);
  }
}
```

**No `arguments` object:**

```javascript
// Normal function
function normalFunc() {
  console.log(arguments); // ✅ Works
}

normalFunc(1, 2, 3); // [1, 2, 3]

// Arrow function
const arrowFunc = () => {
  console.log(arguments); // ❌ ReferenceError
};

// Use rest parameters instead
const arrowFunc2 = (...args) => {
  console.log(args); // ✅ Works
};

arrowFunc2(1, 2, 3); // [1, 2, 3]
```

**Cannot be used as constructor:**

```javascript
// Normal function
function Person(name) {
  this.name = name;
}

const person = new Person("John"); // ✅ Works

// Arrow function
const Person2 = (name) => {
  this.name = name;
};

const person2 = new Person2("John"); // ❌ TypeError
```

---

📝 [Back to Top](#-table-of-contents)

### 21. this Keyword

**Definition:**  
The `this` keyword refers to the object that is currently executing the code. Its value depends on **how and where** a function is called, not where it's defined.

**Rules for `this`:**

1. **Global Context:** `this` = global object (window in browsers, global in Node.js)
2. **Object Method:** `this` = the object calling the method
3. **Constructor Function:** `this` = the newly created object
4. **Arrow Function:** `this` = lexically inherited from surrounding scope
5. **Event Handler:** `this` = the element that received the event
6. **Explicit Binding:** `this` = what you set with call/apply/bind

**Examples:**

```javascript
// 1. Global context
console.log(this); // window (in browser)

function globalFunc() {
  console.log(this); // window (in non-strict mode)
}

// 2. Object method
const person = {
  name: "John",
  greet: function () {
    console.log(this.name); // 'John' (this = person)
  },
};

person.greet(); // 'John'

// 3. Method extraction problem
const greetFunc = person.greet;
greetFunc(); // undefined (this = window, window.name doesn't exist)

// 4. Constructor function
function Person(name) {
  this.name = name; // this = new object
}

const john = new Person("John");
console.log(john.name); // 'John'

// 5. Event handler
button.addEventListener("click", function () {
  console.log(this); // the button element
});

// 6. Strict mode
("use strict");
function strictFunc() {
  console.log(this); // undefined (not window!)
}
```

**Interview Gotcha:**

```javascript
const obj = {
  value: 42,
  getValue: function () {
    return this.value;
  },
};

console.log(obj.getValue()); // 42

const getValue = obj.getValue;
console.log(getValue()); // undefined (this is lost!)

// Solution: Use bind
const boundGetValue = obj.getValue.bind(obj);
console.log(boundGetValue()); // 42
```

---

📝 [Back to Top](#-table-of-contents)

### 22. this in Arrow Functions

**Definition:**  
Arrow functions **do not have their own `this`**. They inherit `this` from the surrounding (lexical) scope where they were defined.

**Key Difference:**

```javascript
// Normal function - 'this' is dynamic
const obj1 = {
  name: "Object 1",
  normalFunc: function () {
    console.log(this.name);
  },
};

obj1.normalFunc(); // 'Object 1'

// Arrow function - 'this' is lexical
const obj2 = {
  name: "Object 2",
  arrowFunc: () => {
    console.log(this.name); // 'this' from outer scope!
  },
};

obj2.arrowFunc(); // undefined (this = global scope)
```

**Real-World Use Case - Callbacks:**

```javascript
class Counter {
  constructor() {
    this.count = 0;
  }

  // ❌ Problem with normal function
  startNormal() {
    setInterval(function () {
      this.count++; // 'this' is NOT Counter instance!
      console.log(this.count); // NaN
    }, 1000);
  }

  // ✅ Solution 1: Arrow function
  startArrow() {
    setInterval(() => {
      this.count++; // 'this' IS Counter instance!
      console.log(this.count); // 1, 2, 3...
    }, 1000);
  }

  // ✅ Solution 2: bind
  startBind() {
    setInterval(
      function () {
        this.count++;
        console.log(this.count);
      }.bind(this),
      1000,
    );
  }
}
```

**Array Methods:**

```javascript
const team = {
  name: "Dev Team",
  members: ["Alice", "Bob", "Charlie"],

  // ❌ Problem
  showMembersWrong() {
    this.members.forEach(function (member) {
      console.log(this.name + ": " + member); // 'this' is undefined!
    });
  },

  // ✅ Solution: Arrow function
  showMembersCorrect() {
    this.members.forEach((member) => {
      console.log(this.name + ": " + member); // Works!
    });
  },
};

team.showMembersCorrect();
// Output:
// Dev Team: Alice
// Dev Team: Bob
// Dev Team: Charlie
```

**When NOT to use Arrow Functions:**

```javascript
// ❌ Don't use in object methods
const obj = {
  value: 42,
  getValue: () => {
    return this.value; // 'this' is NOT obj!
  },
};

// ❌ Don't use as constructors
const Person = (name) => {
  this.name = name; // TypeError: Cannot use 'new' with arrow function
};

// ❌ Don't use when you need dynamic 'this'
button.addEventListener("click", () => {
  console.log(this); // window, not the button!
});
```

---

📝 [Back to Top](#-table-of-contents)

### 23. call, apply, bind

**Definition:**  
These methods allow you to explicitly set the value of `this` and invoke functions with a specific context.

**call()**  
Calls a function with a given `this` value and arguments provided individually.

**Syntax:** `func.call(thisArg, arg1, arg2, ...)`

```javascript
function greet(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}

const person1 = { name: "John" };
const person2 = { name: "Jane" };

console.log(greet.call(person1, "Hello", "!")); // "Hello, I'm John!"
console.log(greet.call(person2, "Hi", ".")); // "Hi, I'm Jane."
```

**apply()**  
Same as `call()` but arguments are passed as an **array**.

**Syntax:** `func.apply(thisArg, [arg1, arg2, ...])`

```javascript
const numbers = [5, 6, 2, 3, 7];

// Use apply to pass array as individual arguments
const max = Math.max.apply(null, numbers); // 7
const min = Math.min.apply(null, numbers); // 2

// Modern alternative: spread operator
const max2 = Math.max(...numbers); // 7
```

**bind()**  
Creates a **new function** with `this` permanently bound to the specified value.

**Syntax:** `const boundFunc = func.bind(thisArg, arg1, arg2, ...)`

```javascript
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

person.greet(); // "Hello, I'm Alice"

const greetFunc = person.greet;
greetFunc(); // "Hello, I'm undefined" (lost context!)

const boundGreet = person.greet.bind(person);
boundGreet(); // "Hello, I'm Alice" (context preserved!)
```

**Real-World Examples:**

```javascript
// Function borrowing
const john = { name: "John", age: 30 };
const jane = { name: "Jane", age: 25 };

function introduce() {
  return `My name is ${this.name} and I'm ${this.age} years old.`;
}

console.log(introduce.call(john)); // "My name is John and I'm 30 years old."
console.log(introduce.call(jane)); // "My name is Jane and I'm 25 years old."

// Partial application with bind
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-set first argument
console.log(double(5)); // 10
console.log(double(10)); // 20

// Event handlers
class Button {
  constructor(label) {
    this.label = label;
    this.clickCount = 0;
  }

  handleClick() {
    this.clickCount++;
    console.log(`${this.label} clicked ${this.clickCount} times`);
  }

  render() {
    const button = document.createElement("button");
    button.textContent = this.label;
    // Need to bind 'this' for event handler
    button.addEventListener("click", this.handleClick.bind(this));
    return button;
  }
}
```

**Comparison Table:**

| Method    | Returns            | Arguments  | Use Case                        |
| --------- | ------------------ | ---------- | ------------------------------- |
| `call()`  | Result of function | Individual | Immediate invocation with args  |
| `apply()` | Result of function | Array      | Immediate invocation with array |
| `bind()`  | New function       | Individual | Create reusable bound function  |

---

📝 [Back to Top](#-table-of-contents)

### 24. Currying

**Definition:**  
**Currying** is a technique of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

**Why Use Currying:**
- **Reusability** - Create specialized functions from general ones
- **Partial application** - Pre-configure function arguments
- **Function composition** - Build complex functions from simple ones

**Basic Example:**

```javascript
// Regular function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6

// Curried version
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // 6

// Arrow function version (concise)
const curriedAddArrow = a => b => c => a + b + c;
console.log(curriedAddArrow(1)(2)(3)); // 6
```

**Practical Use Cases:**

```javascript
// 1. Event handling with fixed parameters
const addEvent = element => event => handler => {
    element.addEventListener(event, handler);
};

const addClickToButton = addEvent(document.querySelector('button'));
const addClick = addClickToButton('click');
addClick(() => console.log('Clicked!'));

// 2. Logging with different levels
const log = level => message => {
    console.log(`[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`);
};

const logError = log('error');
const logInfo = log('info');

logError('Something went wrong!'); // [ERROR] 2024-01-15T10:30:00.000Z: Something went wrong!
logInfo('Operation successful'); // [INFO] 2024-01-15T10:30:01.000Z: Operation successful

// 3. Discount calculator
const discount = discountPercent => price => {
    return price - (price * discountPercent / 100);
};

const tenPercentOff = discount(10);
const twentyPercentOff = discount(20);

console.log(tenPercentOff(100)); // 90
console.log(twentyPercentOff(100)); // 80
```

**Generic Curry Function:**

```javascript
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Usage
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1, 2, 3)); // 6
```

---

?? [Back to Top](#-table-of-contents)

### 25. Pure vs Impure Functions

**Pure Function:**  
A function is **pure** if:
1. **Same input always produces same output** (deterministic)
2. **No side effects** (doesn't modify external state)

**Impure Function:**  
A function that:
1. Produces different outputs for same input
2. Has side effects (modifies external state, makes API calls, etc.)

**Examples:**

```javascript
// ? PURE FUNCTIONS

// 1. Always returns same output for same input
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Always 5

// 2. No external dependencies
function multiply(x, y) {
    return x * y;
}

// 3. Doesn't modify input
function addToArray(arr, item) {
    return [...arr, item]; // Creates new array
}

const original = [1, 2, 3];
const newArray = addToArray(original, 4);
console.log(original); // [1, 2, 3] - unchanged
console.log(newArray); // [1, 2, 3, 4]

// ? IMPURE FUNCTIONS

// 1. Depends on external state
let counter = 0;
function increment() {
    counter++; // Modifies external variable
    return counter;
}

// 2. Modifies input
function addItem(arr, item) {
    arr.push(item); // Mutates input array
    return arr;
}

// 3. Non-deterministic (different output each time)
function getRandomNumber() {
    return Math.random(); // Different every time
}

function getCurrentTime() {
    return new Date(); // Different every time
}

// 4. Has side effects
function logAndReturn(value) {
    console.log(value); // Side effect: console logging
    return value;
}

function saveToDatabase(data) {
    // Side effect: modifies database
    database.save(data);
    return true;
}
```

**Benefits of Pure Functions:**

```javascript
// 1. Testability - No mocking needed
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}

// Easy to test
console.log(calculateTax(100, 0.1) === 10); // ?

// 2. Cacheability (Memoization possible)
const memoizedAdd = (() => {
    const cache = {};
    return (a, b) => {
        const key = `${a},${b}`;
        if (cache[key]) return cache[key];
        const result = a + b;
        cache[key] = result;
        return result;
    };
})();

// 3. Parallelization - Safe to run concurrently
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // Pure, can be parallelized

// 4. Easier debugging - No hidden dependencies
```

**Real-World Example:**

```javascript
// ? Impure shopping cart
class ImpureCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item); // Mutates internal state
    }
    
    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
}

// ? Pure shopping cart
const PureCart = {
    add: (cart, item) => [...cart, item],
    
    remove: (cart, itemId) => cart.filter(item => item.id !== itemId),
    
    getTotal: (cart) => cart.reduce((sum, item) => sum + item.price, 0)
};

// Usage
let cart = [];
cart = PureCart.add(cart, { id: 1, price: 100 });
cart = PureCart.add(cart, { id: 2, price: 200 });
console.log(PureCart.getTotal(cart)); // 300
```

---

?? [Back to Top](#-table-of-contents)

### 26. Memoization

**Definition:**  
**Memoization** is an optimization technique that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

**Why Use Memoization:**
- Improve performance of expensive calculations
- Avoid redundant computations
- Trade memory for speed

**Basic Example:**

```javascript
// Without memoization - slow for large numbers
function slowFibonacci(n) {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

console.time('slow');
console.log(slowFibonacci(40)); // Takes ~2-3 seconds
console.timeEnd('slow');

// With memoization - much faster
function memoizedFibonacci() {
    const cache = {};
    
    return function fib(n) {
        if (n in cache) {
            return cache[n]; // Return cached result
        }
        
        if (n <= 1) {
            return n;
        }
        
        const result = fib(n - 1) + fib(n - 2);
        cache[n] = result; // Store in cache
        return result;
    };
}

const fibonacci = memoizedFibonacci();

console.time('fast');
console.log(fibonacci(40)); // Instant!
console.timeEnd('fast');
```

**Generic Memoize Function:**

```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log('Returning from cache');
            return cache[key];
        }
        
        console.log('Calculating...');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Usage
const expensiveOperation = (n) => {
    let sum = 0;
    for (let i = 0; i < n * 1000000; i++) {
        sum += i;
    }
    return sum;
};

const memoized = memoize(expensiveOperation);

console.log(memoized(100)); // Calculating... (slow)
console.log(memoized(100)); // Returning from cache (instant!)
console.log(memoized(200)); // Calculating... (slow)
console.log(memoized(200)); // Returning from cache (instant!)
```

**Real-World Use Cases:**

```javascript
// 1. API call memoization
const memoizeAsync = (fn) => {
    const cache = new Map();
    
    return async (...args) => {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Cache hit!');
            return cache.get(key);
        }
        
        const result = await fn(...args);
        cache.set(key, result);
        return result;
    };
};

const fetchUser = memoizeAsync(async (userId) => {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
});

// First call - hits API
await fetchUser(1);
// Second call - returns cached
await fetchUser(1);

// 2. Complex calculations
const calculatePrimes = memoize((max) => {
    const primes = [];
    for (let num = 2; num <= max; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
});

console.log(calculatePrimes(1000)); // Slow first time
console.log(calculatePrimes(1000)); // Instant second time
```

**With Cache Size Limit:**

```javascript
function memoizeWithLimit(fn, limit = 100) {
    const cache = new Map();
    const keys = [];
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        
        // Remove oldest entry if cache is full
        if (keys.length >= limit) {
            const oldestKey = keys.shift();
            cache.delete(oldestKey);
        }
        
        keys.push(key);
        cache.set(key, result);
        return result;
    };
}
```

---

?? [Back to Top](#-table-of-contents)

## Part 4: Objects & Prototypes

### 27. How Objects Work Internally

**Definition:**  
In JavaScript, objects are collections of key-value pairs stored in **heap memory**. Variables hold **references** (memory addresses) to objects, not the objects themselves.

**Internal Structure:**

```javascript
// Object creation
const person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// Internally stored as:
// {
//     Properties: {
//         name: { value: 'John', writable: true, enumerable: true, configurable: true },
//         age: { value: 30, writable: true, enumerable: true, configurable: true },
//         greet: { value: [Function], writable: true, enumerable: true, configurable: true }
//     },
//     [[Prototype]]: Object.prototype
// }
```

**Property Descriptors:**

```javascript
const obj = { name: 'Alice' };

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
// {
//     value: 'Alice',
//     writable: true,      // Can be modified
//     enumerable: true,    // Shows in for...in loops
//     configurable: true   // Can be deleted or redefined
// }

// Define property with custom descriptor
Object.defineProperty(obj, 'age', {
    value: 30,
    writable: false,     // Read-only
    enumerable: true,
    configurable: false  // Cannot be deleted
});

obj.age = 40; // Silently fails (or throws in strict mode)
console.log(obj.age); // 30

delete obj.age; // Fails silently
console.log(obj.age); // 30
```

**Hash Map Implementation:**

```javascript
// Internally, JavaScript uses hash tables for object properties
// Property access is O(1) average case

const obj = {};
obj.key1 = 'value1'; // Hash 'key1', store value at hash location
obj.key2 = 'value2'; // Hash 'key2', store value at hash location

console.log(obj.key1); // O(1) lookup
```

**Memory Representation:**

```javascript
// Stack vs Heap
const a = 10; // Primitive - stored in stack
const b = a;  // Copy value

const obj1 = { value: 10 }; // Object - stored in heap, reference in stack
const obj2 = obj1;          // Copy reference, not object

b = 20;
console.log(a); // 10 (unchanged)

obj2.value = 20;
console.log(obj1.value); // 20 (both point to same object!)

/*
Stack:              Heap:
+------------+     +-------------+
�  a   � 10  �     �             �
�  b   � 20  �     �   Object    �
� obj1 � 0x1 �----?� {value: 20} �
� obj2 � 0x1 �----?�  (same)     �
+------------+     +-------------+
*/
```

---

?? [Back to Top](#-table-of-contents)

### 28. Prototype

**Definition:**  
Every JavaScript object has an internal property called `[[Prototype]]` (accessible via `__proto__` or `Object.getPrototypeOf()`). This links to another object, forming the **prototype chain**.

**Why Prototypes Exist:**
- **Inheritance** - Objects can inherit properties/methods from other objects
- **Memory efficiency** - Methods shared across instances instead of duplicated
- **Extensibility** - Add methods to all instances dynamically

**Basic Example:**

```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add method to prototype
Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

// Create instances
const john = new Person('John', 30);
const jane = new Person('Jane', 25);

console.log(john.greet()); // "Hi, I'm John"
console.log(jane.greet()); // "Hi, I'm Jane"

// Both instances share the SAME greet method
console.log(john.greet === jane.greet); // true (memory efficient!)
```

**Prototype vs Instance Properties:**

```javascript
function Car(model) {
    // Instance property - unique per instance
    this.model = model;
    this.mileage = 0;
}

// Prototype property - shared across all instances
Car.prototype.brand = 'Toyota';
Car.prototype.drive = function(miles) {
    this.mileage += miles;
    return `Driven ${miles} miles`;
};

const car1 = new Car('Camry');
const car2 = new Car('Corolla');

console.log(car1.brand); // 'Toyota' (from prototype)
console.log(car2.brand); // 'Toyota' (from prototype)

car1.drive(100);
car2.drive(50);

console.log(car1.mileage); // 100 (instance property)
console.log(car2.mileage); // 50 (instance property)

// Modify prototype - affects all instances!
Car.prototype.brand = 'Honda';
console.log(car1.brand); // 'Honda'
console.log(car2.brand); // 'Honda'

// Override prototype property on instance
car1.brand = 'Mazda';
console.log(car1.brand); // 'Mazda' (own property)
console.log(car2.brand); // 'Honda' (prototype property)
```

**Checking Prototype Properties:**

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
};

const dog = new Animal('Dog');

// Check if property exists on instance vs prototype
console.log(dog.hasOwnProperty('name')); // true (instance property)
console.log(dog.hasOwnProperty('speak')); // false (prototype property)

console.log('name' in dog); // true
console.log('speak' in dog); // true

// Get prototype
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
```

---

?? [Back to Top](#-table-of-contents)

### 29. Prototype Chain

**Definition:**  
The prototype chain is the mechanism JavaScript uses to look up props and methods. If a property doesn't exist on an object, JS looks in its prototype, then the prototype's prototype, and so on.

**How Lookup Works:**

```javascript
function Animal() {}
Animal.prototype.breathe = function() {
    return 'breathing';
};

function Dog(name) {
    this.name = name;
}

// Set Dog's prototype to Animal instance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return 'Woof!';
};

const myDog = new Dog('Buddy');

// Prototype chain lookup:
console.log(myDog.name);    // 1. Found on myDog instance
console.log(myDog.bark());  // 2. Found on Dog.prototype
console.log(myDog.breathe());// 3. Found on Animal.prototype
console.log(myDog.toString());// 4. Found on Object.prototype

/*
Prototype Chain:
myDog ? Dog.prototype ? Animal.prototype ? Object.prototype ? null

Access myDog.breathe():
1. Check myDog - not found
2. Check Dog.prototype - not found
3. Check Animal.prototype - FOUND! ?
*/
```

**Complete Chain Example:**

```javascript
function Shape() {
    this.type = 'shape';
}

Shape.prototype.describe = function() {
    return `This is a ${this.type}`;
};

function Rectangle(width, height) {
    Shape.call(this); // Call parent constructor
    this.width = width;
    this.height = height;
    this.type = 'rectangle';
}

// Establish inheritance
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

const rect = new Rectangle(10, 5);

console.log(rect.width);     // 10 (own property)
console.log(rect.area());     // 50 (Rectangle.prototype)
console.log(rect.describe()); // "This is a rectangle" (Shape.prototype)
console.log(rect.toString()); // "[object Object]" (Object.prototype)

// Prototype chain:
console.log(rect.__proto__ === Rectangle.prototype); // true
console.log(rect.__proto__.__proto__ === Shape.prototype); // true
console.log(rect.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(rect.__proto__.__proto__.__proto__.__proto__); // null
```

**Performance Considerations:**

```javascript
// Deep prototype chains are slower
// Property lookup traverses entire chain

const obj = Object.create(
    Object.create(
        Object.create(
            Object.create({})
        )
    )
);

obj.deepProperty = 'value';

// Accessing obj.deepProperty is fast (own property)
// Accessing inherited property from 4 levels up is slower
```

---

?? [Back to Top](#-table-of-contents)

### 30. __proto__ vs prototype

**Definition:**  
- **`__proto__`**: Property on every object that points to its prototype
- **`prototype`**: Property only on function objects, used as prototype for instances created with `new`

**Key Differences:**

```javascript
function Person(name) {
    this.name = name;
}

const john = new Person('John');

// __proto__ - exists on ALL objects
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true

// prototype - exists only on FUNCTIONS
console.log(typeof Person.prototype); // 'object' ?
console.log(typeof john.prototype);   // 'undefined' ?

// Chain relationships
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)
```

**Visual Representation:**

```
Constructor Function (Person):
+-------------------------+
� Person (function)       �
�  - prototype ----------+-----+
�  - __proto__ ? Function.prototype
+-------------------------+     �
                                 �
Instance (john):                  ?
+-------------------------+  +------------------+
� john (object)           �  � Person.prototype �
�  - name: 'John'         �  �  - constructor   �
�  - __proto__ -----------+-?�  - methods...    �
+-------------------------+  +------------------+
```

**Practical Usage:**

```javascript
// ? DON'T use __proto__ directly (deprecated)
const obj = {};
obj.__proto__ = somePrototype; // Avoid!

// ? DO use Object.getPrototypeOf / Object.setPrototypeOf
const obj = {};
Object.setPrototypeOf(obj, somePrototype); // Better

// ? DO use Object.create
const obj = Object.create(somePrototype); // Best!

// ? DO use prototype for constructors
function MyClass() {}
MyClass.prototype.method = function() {}; // Correct way
```

**Interview Example:**

```javascript
function Animal() {}
Animal.prototype.species = 'animal';

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myDog = new Dog();

// Quiz: What are the relationships?
console.log(myDog.__proto__ === Dog.prototype); // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Dog.__proto__ === Function.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
```

---

?? [Back to Top](#-table-of-contents)

### 31. Object.create vs Constructor

**Both ways to create objects with prototypal inheritance**

**Constructor Pattern:**

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hi, I'm ${this.name}`;
};

const john = new Person('John', 30);
console.log(john.greet()); // "Hi, I'm John"
console.log(john instanceof Person); // true
```

**Object.create Pattern:**

```javascript
const personProto = {
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};

const john = Object.create(personProto);
john.name = 'John';
john.age = 30;

console.log(john.greet()); // "Hi, I'm John"
console.log(Object.getPrototypeOf(john) === personProto); // true
```

**Comparison:**

| Feature | Constructor | Object.create |
|---------|-------------|---------------|
| Syntax | `new Constructor()` | `Object.create(proto)` |
| Initialize properties | In constructor function | Manually after creation |
| `instanceof` works | ? Yes | ? No (unless setup properly) |
| Flexibility | Less flexible | More flexible |
| Use case | Traditional OOP patterns | Modern prototypal inheritance |

**When to Use Each:**

```javascript
// ? Use Constructor when:
// - You need `instanceof` to work
// - You want traditional class-like syntax
// - You need initialization logic

function Car(model, year) {
    this.model = model;
    this.year = year;
    this.mileage = 0; // Default initialization
}

Car.prototype.drive = function(miles) {
    this.mileage += miles;
};

const myCar = new Car('Toyota', 2024);

// ? Use Object.create when:
// - You want more control over inheritance
// - You don't need constructor logic
// - You prefer composition over classes

const driveable = {
    drive(miles) {
        this.mileage += miles;
        return this.mileage;
    }
};

const startable = {
    start() {
        this.isRunning = true;
    }
};

// Compose multiple behaviors
const vehicle= Object.assign(
    Object.create(driveable),
    startable,
    { model: 'Honda', mileage: 0 }
);
```

---

?? [Back to Top](#-table-of-contents)

### 32. Shallow Copy vs Deep Copy

**Shallow Copy:**  
Copies only the first level of properties. Nested objects are still referenced.

**Deep Copy:**  
Creates completely independent copy, including all nested levels.

**Shallow Copy Methods:**

```javascript
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'NYC',
        zip: '10001'
    }
};

// Method 1: Spread operator
const copy1 = { ...original };

// Method 2: Object.assign
const copy2 = Object.assign({}, original);

// Method 3: Object.create (different - sets prototype)
const copy3 = Object.create(
    Object.getPrototypeOf(original),
    Object.getOwnPropertyDescriptors(original)
);

// Shallow copy problem
copy1.name = 'Jane'; // OK - primitive copied
copy1.address.city = 'LA'; // Problem! - object referenced

console.log(original.name); // 'John' ?
console.log(original.address.city); // 'LA' ? (modified!)
```

**Deep Copy Methods:**

```javascript
const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'NYC',
        coordinates: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    hobbies: ['reading', 'gaming']
};

// Method 1: JSON (limitations: no functions, dates, undefined, circular refs)
const deepCopy1 = JSON.parse(JSON.stringify(original));

// Method 2: structuredClone (modern, best option!)
const deepCopy2 = structuredClone(original);

// Method 3: Custom recursive function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    const clonedObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

const deepCopy3 = deepClone(original);

// Test deep copy
deepCopy2.address.city = 'LA';
deepCopy2.hobbies.push('cooking');

console.log(original.address.city); // 'NYC' ? (unchanged)
console.log(original.hobbies); // ['reading', 'gaming'] ? (unchanged)
```

---

?? [Back to Top](#-table-of-contents)

### 33. How to Clone Objects

**Complete guide to cloning objects:**

```javascript
const person = {
    name: 'Alice',
    age: 28,
    skills: ['JS', 'React']
};

// 1. Spread operator (shallow)
const clone1 = { ...person };

// 2. Object.assign (shallow)
const clone2 = Object.assign({}, person);

// 3. JSON (deep, but has limitations)
const clone3 = JSON.parse(JSON.stringify(person));

// 4. structuredClone (deep, modern)
const clone4 = structuredClone(person);

// 5. Custom recursive (deep, full control)
function cloneObject(obj, map = new WeakMap()) {
    // Handle primitives
    if (obj === null || typeof obj !== 'object') return obj;
    
    // Handle circular references
    if (map.has(obj)) return map.get(obj);
    
    // Handle Date
    if (obj instanceof Date) return new Date(obj);
    
    // Handle Array
    if (Array.isArray(obj)) {
        const arrCopy = [];
        map.set(obj, arrCopy);
        obj.forEach((item, index) => {
            arrCopy[index] = cloneObject(item, map);
        });
        return arrCopy;
    }
    
    // Handle RegExp
    if (obj instanceof RegExp) return new RegExp(obj);
    
    // Handle Objects
    const objCopy = {};
    map.set(obj, objCopy);
    Object.keys(obj).forEach(key => {
        objCopy[key] = cloneObject(obj[key], map);
    });
    return objCopy;
}
```

**Cloning Arrays:**

```javascript
const arr = [1, 2, 3, [4, 5]];

// Shallow
const shallowCopy = [...arr];
const shallowCopy2 = arr.slice();

// Deep
const deepCopy = JSON.parse(JSON.stringify(arr));
const deepCopy2 = structuredClone(arr);

// Test
shallowCopy[3][0] = 99;
console.log(arr[3][0]); // 99 (modified!)

deepCopy[3][0] = 88;
console.log(arr[3][0]); // 4 (unchanged!)
```

---

?? [Back to Top](#-table-of-contents)

### 34. Prevent Object Mutation

**Methods to make objects immutable:**

**1. Object.freeze() - Completely immutable**

```javascript
const obj = { name: 'John', age: 30 };
Object.freeze(obj);

obj.name = 'Jane'; // Silently fails (or throws in strict mode)
obj.city = 'NYC';  // Cannot add
delete obj.age;    // Cannot delete

console.log(obj); // { name: 'John', age: 30 } (unchanged)

// Check if frozen
console.log(Object.isFrozen(obj)); // true

// Shallow freeze - nested objects still mutable
const person = {
    name: 'Bob',
    address: { city: 'LA' }
};

Object.freeze(person);
person.address.city = 'NYC'; // Works! (nested not frozen)
console.log(person.address.city); // 'NYC'

// Deep freeze solution
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.values(obj).forEach(value => {
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    });
    return obj;
}
```

**2. Object.seal() - Can modify, can't add/delete**

```javascript
const obj = { name: 'Alice', age: 25 };
Object.seal(obj);

obj.name = 'Bob';  // ? Can modify existing
obj.city = 'NYC';  // ? Cannot add
delete obj.age;    // ? Cannot delete

console.log(obj); // { name: 'Bob', age: 25 }
console.log(Object.isSealed(obj)); // true
```

**3. Object.preventExtensions() - Can modify/delete, can't add**

```javascript
const obj = { name: 'Charlie' };
Object.preventExtensions(obj);

obj.name = 'David'; // ? Can modify
delete obj.name;    // ? Can delete
obj.age = 30;       // ? Cannot add

console.log(Object.isExtensible(obj)); // false
```

**4. const - Only prevents reassignment**

```javascript
const obj = { name: 'Eve' };
obj.name = 'Frank'; // ? Can mutate properties
obj = {};           // ? Cannot reassign

const arr = [1, 2, 3];
arr.push(4);  // ? Can mutate
arr = [];     // ? Cannot reassign
```

**Comparison Table:**

| Method | Add Properties | Delete Properties | Modify Properties | Reassign Variable |
|--------|---------------|-------------------|-------------------|-------------------|
| `Object.freeze()` | ? | ? | ? | - |
| `Object.seal()` | ? | ? | ? | - |
| `Object.preventExtensions()` | ? | ? | ? | - |
| `const` | ? | ? | ? | ? |

**Immutable Update Patterns:**

```javascript
// Instead of mutating, create new objects

// ? Mutation
const user = { name: 'John', age: 30 };
user.age = 31;

// ? Immutable update
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31 };

// ? Array mutation
const numbers = [1, 2, 3];
numbers.push(4);

// ? Immutable array update
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

// Nested update
const state = {
    user: {
        profile: {
            name: 'Alice'
        }
    }
};

// ? Mutation
state.user.profile.name = 'Bob';

// ? Immutable
const newState = {
    ...state,
    user: {
        ...state.user,
        profile: {
            ...state.user.profile,
            name: 'Bob'
        }
    }
};
```

---

?? [Back to Top](#-table-of-contents)

## Part 5: Arrays

### 35. map, filter, reduce

**These are the three most important array methods for functional programming.**

**map() - Transform each element**

```javascript
// Transform array elements
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Extract properties
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// Return objects
const usersWithStatus = users.map(user => ({
    ...user,
    status: user.age >= 30 ? 'senior' : 'junior'
}));
```

**filter() - Select elements that pass a test**

```javascript
// Filter numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
const adults = users.filter(user => user.age >= 30);
```

**reduce() - Reduce array to single value**

```javascript
// Sum
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Product
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // 120

// Group by property
const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' }
];

const grouped = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user);
    return acc;
}, {});

console.log(grouped);
// {
//     admin: [{ name: 'Alice', role: 'admin' }, { name: 'Charlie', role: 'admin' }],
//     user: [{ name: 'Bob', role: 'user' }]
// }

//Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count); // { apple: 3, banana: 2, orange: 1 }
```

**Chaining methods:**

```javascript
const users = [
    { name: 'Alice', age: 25, score: 85 },
    { name: 'Bob', age: 30, score: 92 },
    { name: 'Charlie', age: 35, score: 78 },
    { name: 'David', age: 28, score: 95 }
];

const result = users
    .filter(user => user.age < 35)           // Filter by age
    .map(user => ({ ...user, grade: user.score >= 90 ? 'A' : 'B' })) // Add grade
    .reduce((acc, user) => acc + user.score, 0); // Sum scores

console.log(result); // 272 (85 + 92 + 95)
```

---

📝 [Back to Top](#-table-of-contents)

### 36. When to use reduce

**Use `reduce` when:**

1. **Converting array to single value** (sum, product, min, max)
2. **Grouping/categorizing** array elements
3. **Building complex data structures** from arrays
4. **Counting occurrences**
5. **Flattening arrays**

**Don't use `reduce` when:**
1. Simple `map` or `filter` would work (reduce is harder to read)
2. You're just iterating (use `forEach`)
3. Returning an array of same length (use `map`)

**Examples:**

```javascript
// ✅ GOOD use cases for reduce

// 1. Max value
const numbers = [5, 123, 99, 1, 70];
const max = numbers.reduce((max, num) => Math.max(max, num), -Infinity);

// 2. Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// [1, 2, 3, 4, 5, 6]

// 3. Create lookup map
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});
// { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

// 4. Unique values
const nums = [1, 2, 2, 3, 3, 3, 4];
const unique = nums.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, []);
// [1, 2, 3, 4]

// ❌ BAD use cases (use simpler methods instead)

// Don't use reduce for simple map
const doubled = numbers.reduce((acc, n) => {
    acc.push(n * 2);
    return acc;
}, []); // ❌

const doubled = numbers.map(n => n * 2); // ✅ Better!

// Don't use reduce for simple filter
const evens = numbers.reduce((acc, n) => {
    if (n % 2 === 0) acc.push(n);
    return acc;
}, []); // ❌

const evens = numbers.filter(n => n % 2 === 0); // ✅ Better!
```

---

📝 [Back to Top](#-table-of-contents)

### 37. Remove Duplicates from Array

**Multiple approaches:**

```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];

// Method 1: Set (fastest, most common)
const unique1 = [...new Set(numbers)];
console.log(unique1); // [1, 2, 3, 4, 5]

// Method 2: filter + indexOf
const unique2 = numbers.filter((num, index) => numbers.indexOf(num) === index);

// Method 3: reduce
const unique3 = numbers.reduce((acc, num) => {
    if (!acc.includes(num)) {
        acc.push(num);
    }
    return acc;
}, []);

// Method 4: forEach + includes
const unique4 = [];
numbers.forEach(num => {
    if (!unique4.includes(num)) {
        unique4.push(num);
    }
});
```

**Removing duplicates from array of objects:**

```javascript
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' }, // duplicate
    { id: 3, name: 'Charlie' }
];

// Based on property
const uniqueUsers = users.filter((user, index, self) =>
    index === self.findIndex(u => u.id === user.id)
);

console.log(uniqueUsers);
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]

// Using Map
const uniqueUsersMap = [...new Map(users.map(user => [user.id, user])).values()];

// Using reduce
const uniqueUsersReduce = users.reduce((acc, user) => {
    if (!acc.find(u => u.id === user.id)) {
        acc.push(user);
    }
    return acc;
}, []);
```

---

📝 [Back to Top](#-table-of-contents)

### 38. Flatten Nested Array

**Flattening arrays of different depths:**

```javascript
// Shallow flatten (one level)
const arr = [1, [2, 3], [4, 5]];

// Method 1: flat() - ES2019
const flattened1 = arr.flat();
console.log(flattened1); // [1, 2, 3, 4, 5]

// Method 2: concat + spread
const flattened2 = [].concat(...arr);

// Method 3: reduce
const flattened3 = arr.reduce((acc, val) => acc.concat(val), []);

// Deep flatten (multiple levels)
const deepArr = [1, [2, [3, [4, [5]]]]];

// Method 1: flat(Infinity)
const deepFlat1 = deepArr.flat(Infinity);
console.log(deepFlat1); // [1, 2, 3, 4, 5]

// Method 2: Recursive function
function flattenDeep(arr) {
    return arr.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
        []
    );
}

const deepFlat2 = flattenDeep(deepArr);

// Method 3: toString + split (only for numbers)
const deepFlat3 = deepArr.toString().split(',').map(Number);

// Flatten with specific depth
const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(1)); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(3)); // [1, 2, 3, 4]
```

---

📝 [Back to Top](#-table-of-contents)

### 39. slice vs splice

**slice() - Non-destructive (returns new array)**

```javascript
const arr = [1, 2, 3, 4, 5];

// Get elements from index 1 to 3 (not including 3)
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr);    // [1, 2, 3, 4, 5] - UNCHANGED!

// Get last 2 elements
const last2 = arr.slice(-2);
console.log(last2); // [4, 5]

// Copy entire array
const copy = arr.slice();
```

**splice() - Destructive (modifies original array)**

```javascript
const arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1
const removed = arr.splice(1, 2);
console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5] - MODIFIED!

// Insert elements
const arr2 = [1, 2, 5];
arr2.splice(2, 0, 3, 4); // At index 2, remove 0, insert 3, 4
console.log(arr2); // [1, 2, 3, 4, 5]

// Replace elements
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2, 'a', 'b'); // Remove 2 items, insert 'a', 'b'
console.log(arr3); // [1, 'a', 'b', 4, 5]
```

**Comparison:**

| Feature | slice() | splice() |
|---------|---------|----------|
| Mutates original | ❌ No | ✅ Yes |
| Parameters | (start, end) | (start, deleteCount, ...items) |
| Return value | New array with extracted elements | Array of removed elements |
| Use case | Get copy or portion | Add/remove/replace elements |

---

📝 [Back to Top](#-table-of-contents)

### 40. find vs filter

**find() - Returns FIRST matching element**

```javascript
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 30 }
];

const user = users.find(u => u.age === 30);
console.log(user); // { id: 2, name: 'Bob', age: 30 } - FIRST match only

// Returns undefined if not found
const notFound = users.find(u => u.age === 50);
console.log(notFound); // undefined
```

**filter() - Returns ALL matching elements**

```javascript
const allAge30 = users.filter(u => u.age === 30);
console.log(allAge30);
// [
//     { id: 2, name: 'Bob',age: 30 },
//     { id: 3, name: 'Charlie', age: 30 }
// ]

// Returns empty array if none match
const none = users.filter(u => u.age === 50);
console.log(none); // []
```

**Comparison:**

| Feature | find() | filter() |
|---------|--------|----------|
| Returns | Single element or undefined | Array (can be empty) |
| Stops at | First match | Checks all elements |
| Performance | Faster (stops early) | Slower (checks all) |
| Use when | Need one item | Need all matching items |

**Related methods:**

```javascript
// findIndex() - returns index of first match
const index = users.findIndex(u => u.age === 30);
console.log(index); // 1

// findLast() - returns last matching element (ES2023)
const lastUser = users.findLast(u => u.age === 30);
console.log(lastUser); // { id: 3, name: 'Charlie', age: 30 }

// findLastIndex() - returns index of last match (ES2023)
const lastIndex = users.findLastIndex(u => u.age === 30);
console.log(lastIndex); // 2
```

---

📝 [Back to Top](#-table-of-contents)

### 41. some vs every

**some() - At least ONE element passes the test**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Check if at least one is even
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// Check if at least one is > 10
const hasLarge = numbers.some(n => n > 10);
console.log(hasLarge); // false

// With objects
const users = [
    { name: 'Alice', active: false },
    { name: 'Bob', active: true },
    { name: 'Charlie', active: false }
];

const hasActiveUser = users.some(u => u.active);
console.log(hasActiveUser); // true
```

**every() - ALL elements must pass the test**

```javascript
const numbers = [2, 4, 6, 8];

// Check if all are even
const allEven = numbers.every(n => n % 2 === 0);
console.log(allEven); // true

// Check if all are > 5
const allLarge = numbers.every(n => n > 5);
console.log(allLarge); // false

// With objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const allAdults = users.every(u => u.age >= 18);
console.log(allAdults); // true

const allSenior = users.every(u => u.age >= 30);
console.log(allSenior); // false
```

Comparison:**

| Method | Returns true if | Short-circuits | Use case |
|--------|----------------|----------------|----------|
| `some()` | AT LEAST ONE passes | Yes (on first true) | "Does ANY item..." |
| `every()` | ALL pass | Yes (on first false) | "Do ALL items..." |

**Practical examples:**

```javascript
// Form validation
const formFields = [
    { name: 'email', valid: true },
    { name: 'password', valid: true },
    { name: 'age', valid: false }
];

const formIsValid = formFields.every(field => field.valid);
console.log(formIsValid); // false

const hasInvalidField = formFields.some(field => !field.valid);
console.log(hasInvalidField); // true

// Permissions check
const permissions = ['read', 'write'];

const canEdit = permissions.some(p => p === 'write');
console.log(canEdit); // true

const hasAllPermissions = ['read', 'write', 'delete'].every(p => 
    permissions.includes(p)
);
console.log(hasAllPermissions); // false
```

---

📝 [Back to Top](#-table-of-contents)

### 42. Array Immutability

**Why immutability matters:**
- Predictable state changes
- Easier debugging
- Enables time-travel debugging
- Required for React state updates

**Mutable methods (modify original):**

```javascript
const arr = [1, 2, 3];

arr.push(4);        // [1, 2, 3, 4]
arr.pop();          // [1, 2, 3]
arr.shift();        // [2, 3]
arr.unshift(0);     // [0, 2, 3]
arr.splice(1, 1);   // [0, 3]
arr.reverse();      // [3, 0]
arr.sort();         // [0, 3]
arr[0] = 99;        // [99, 3]
```

**Immutable alternatives:**

```javascript
const arr = [1, 2, 3];

// Instead of push - use spread or concat
const newArr1 = [...arr, 4];          // [1, 2, 3, 4]
const newArr2 = arr.concat(4);        // [1, 2, 3, 4]

// Instead of pop - use slice
const newArr3 = arr.slice(0, -1);     // [1, 2]

// Instead of shift - use slice
const newArr4 = arr.slice(1);         // [2, 3]

// Instead of unshift - use spread
const newArr5 = [0, ...arr];          // [0, 1, 2, 3]

// Instead of splice - use slice + spread
const removed = arr.slice(0, 1).concat(arr.slice(2));  // [1, 3]

// Instead of reverse - spread + reverse
const newArr6 = [...arr].reverse();   // [3, 2, 1]

// Instead of sort - spread + sort
const newArr7 = [...arr].sort((a, b) => b - a); // [3, 2, 1]

// Instead of arr[i] = value - use map or spread
const newArr8 = arr.map((val, i) => i === 0 ? 99 : val); // [99, 2, 3]
const newArr9 = [...arr.slice(0, 0), 99, ...arr.slice(1)]; // [99, 2, 3]
```

**Immutable update patterns:**

```javascript
const todos = [
    { id: 1, text: 'Learn JS', done: false },
    { id: 2, text: 'Learn React', done: false }
];

// Add item
const addTodo = [...todos, { id: 3, text: 'Learn Node', done: false }];

// Update item
const toggleTodo = todos.map(todo =>
    todo.id === 1 ? { ...todo, done: true } : todo
);

// Delete item
const deleteTodo = todos.filter(todo => todo.id !== 1);

// Replace item
const replaceTodo = todos.map(todo =>
    todo.id === 1 ? { id: 1, text: 'Learn TypeScript', done: false } : todo
);
```

---

📝 [Back to Top](#-table-of-contents)


## Part 6: Asynchronous JavaScript

### 43. Synchronous vs Asynchronous

**Synchronous (Blocking):**  
Code executes line by line. Each operation must complete before the next one starts.

```javascript
// Synchronous example
console.log('Start');
console.log('Middle');
console.log('End');

// Output (in order):
// Start
// Middle
// End

// Blocking operation
function slowTask() {
    const start = Date.now();
    while (Date.now() - start < 3000) {} // Block for 3 seconds
    return 'Done';
}

console.log('Before');
const result = slowTask(); // Blocks everything for 3 seconds!
console.log(result);
console.log('After');
```

**Asynchronous (Non-blocking):**  
Operations can start without waiting for previous ones to complete.

```javascript
// Asynchronous example
console.log('Start');

setTimeout(() => {
    console.log('Async operation');
}, 2000);

console.log('End');

// Output:
// Start
// End
// Async operation (after 2 seconds)

// Non-blocking operation
console.log('Before');
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));
console.log('After'); // Doesn't wait for fetch!
```

**Why Async Matters:**

```javascript
// ❌ Synchronous - UI freezes
function fetchDataSync() {
    const data = slowNetworkRequest(); // Blocks for 5 seconds
    return data;
}

button.onclick = () => {
    const data = fetchDataSync(); // UI frozen for 5 seconds!
    display(data);
};

// ✅ Asynchronous - UI responsive
async function fetchDataAsync() {
    const data = await fetch('/api/data');
    return data.json();
}

button.onclick = async () => {
    const data = await fetchDataAsync(); // UI remains responsive!
    display(data);
};
```

---

📝 [Back to Top](#-table-of-contents)

### 44. Event Loop

**Definition:**  
The event loop is JavaScript's mechanism for handling asynchronous operations. It continuously checks if the call stack is empty and processes tasks from queues.

**Components:**

1. **Call Stack** - Where functions are executed
2. **Web APIs** - Browser-provided APIs (setTimeout, fetch, DOM events)
3. **Callback Queue (Macrotask Queue)** - Callbacks from setTimeout, setInterval, I/O
4. **Microtask Queue** - Callbacks from Promises, queueMicrotask
5. **Event Loop** - Coordinator

**How It Works:**

```javascript
console.log('1: Sync');

setTimeout(() => {
    console.log('2: Timeout');
}, 0);

Promise.resolve().then(() => {
    console.log('3: Promise');
});

console.log('4: Sync');

// Output:
// 1: Sync
// 4: Sync
// 3: Promise (microtask - runs first!)
// 2: Timeout (macrotask - runs after microtasks)
```

**Event Loop Process:**

```
1. Execute all synchronous code (call stack)
2. Check microtask queue
   - Execute ALL microtasks
   - Repeat until microtask queue is empty
3. Render UI (if needed)
4. Check macrotask queue
   - Execute ONE macrotask
   - Go back to step 2

Call Stack → Microtasks → Render → One Macrotask → Repeat
```

**Visual Example:**

```javascript
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
    Promise.resolve().then(() => console.log('Promise in Timeout'));
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        setTimeout(() => console.log('Timeout in Promise'), 0);
    })
    .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timeout 2'), 0);

console.log('End');

// Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Promise in Timeout
// Timeout in Promise
// Timeout 2
```

---

📝 [Back to Top](#-table-of-contents)

### 45. Microtask Queue vs Macrotask Queue

**Microtasks (Priority Queue):**
- Promise callbacks (.then, .catch, .finally)
- queueMicrotask()
- MutationObserver
- Process.nextTick (Node.js)

**Macrotasks (Callback Queue):**
- setTimeout, setInterval
- setImmediate (Node.js)
- I/O operations
- UI rendering
- requestAnimationFrame

**Key Difference: Microtasks have priority!**

```javascript
setTimeout(() => console.log('Timeout'), 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))
    .then(() => console.log('Promise 2'))
    .then(() => console.log('Promise 3'));

setTimeout(() => console.log('Timeout 2'), 0);

// Output:
// Promise 1
// Promise 2
// Promise 3
// Timeout
// Timeout 2

// Microtasks run BEFORE next macrotask
```

**Complex Example:**

```javascript
console.log('Script start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        setTimeout(() => console.log('setTimeout in Promise'), 0);
    })
    .then(() => {
        console.log('Promise 2');
    });

queueMicrotask(() => {
    console.log('queueMicrotask');
});

console.log('Script end');

// Output:
// Script start
// Script end
// Promise 1
// Promise 2
// queueMicrotask
// setTimeout
// setTimeout in Promise
```

**Starvation Example:**

```javascript
// ⚠️ Infinite microtasks block macrotasks!
function recursiveMicrotask() {
    Promise.resolve().then(() => {
        console.log('Microtask');
        recursiveMicrotask(); // Creates another microtask
    });
}

recursiveMicrotask();

setTimeout(() => {
    console.log('This will NEVER run!'); // Starved by microtasks
}, 0);
```

---

📝 [Back to Top](#-table-of-contents)

### 46. Promise States

**Three States:**

1. **Pending** - Initial state, neither fulfilled nor rejected
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

```javascript
// Creating a Promise
const promise = new Promise((resolve, reject) => {
    // Pending state here
    
    const success = Math.random() > 0.5;
    
    if (success) {
        resolve('Success!'); // → Fulfilled
    } else {
        reject('Failed!'); // → Rejected
    }
});

// Once settled (fulfilled or rejected), state cannot change!
```

**State Transitions:**

```
Pending → Fulfilled (resolve called)
Pending → Rejected (reject called)

Once fulfilled/rejected, promise is "settled" (immutable)
```

**Checking State:**

```javascript
const pendingPromise = new Promise(() => {}); // Never resolves
console.log(pendingPromise); // Promise { <pending> }

const fulfilledPromise = Promise.resolve('Success');
console.log(fulfilledPromise); // Promise { 'Success' }

const rejectedPromise = Promise.reject('Error');
console.log(rejectedPromise); // Promise { <rejected> 'Error' }

// Handling states
promise
    .then(result => {
        // Fulfilled state
        console.log('Success:', result);
    })
    .catch(error => {
        // Rejected state
        console.log('Error:', error);
    })
    .finally(() => {
        // Runs regardless of state
        console.log('Cleanup');
    });
```

**Real-World Example:**

```javascript
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        // Pending...
        
        fetch(`/api/users/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('User not found');
            })
            .then(data => resolve(data)) // → Fulfilled
            .catch(error => reject(error)); // → Rejected
    });
}

// Usage
fetchUser(123)
    .then(user => console.log('Got user:', user))
    .catch(error => console.error('Failed:', error));
```

---

📝 [Back to Top](#-table-of-contents)

### 47. Promise Chaining

**Sequential async operations:**

```javascript
// Without chaining (callback hell)
fetch('/api/user')
    .then(response => response.json())
    .then(user => {
        fetch(`/api/posts?userId=${user.id}`)
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
            });
    });

// ✅ With chaining (clean!)
fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch(`/api/posts?userId=${user.id}`))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));
```

**Returning Values:**

```javascript
Promise.resolve(1)
    .then(x => x + 1)  // return 2
    .then(x => x * 2)  // return 4
    .then(x => x ** 2) // return 16
    .then(result => console.log(result)); // 16

// Return promise to chain
Promise.resolve(1)
    .then(x => {
        return new Promise(resolve => {
            setTimeout(() => resolve(x * 2), 1000);
        });
    })
    .then(result => console.log(result)); // 2 (after 1 second)
```

**Error Handling in Chains:**

```javascript
Promise.resolve(1)
    .then(x => {
        if (x < 2) throw new Error('Too small');
        return x;
    })
    .then(x => x * 2) // Skipped due to error
    .then(x => x + 1) // Skipped
    .catch(error => {
        console.error('Caught:', error.message);
        return 10; // Recover from error
    })
    .then(x => console.log('Recovered:', x)); // 10

// Multiple catches
fetch('/api/data')
    .then(response => {
        if (!response.ok) throw new Error('Network error');
        return response.json();
    })
    .catch(error => {
        console.error('Fetch failed:', error);
        return { fallback: true };
    })
    .then(data => process(data))
    .catch(error => {
        console.error('Processing failed:', error);
    });
```

**Best Practices:**

```javascript
// ✅ Return promises in then()
function goodChain() {
    return fetch('/api/data')
        .then(response => response.json()) // Return promise
        .then(data => processData(data));  // Return value or promise
}

// ❌ Forgetting to return
function badChain() {
    return fetch('/api/data')
        .then(response => {
            response.json(); // Forgot return! Returns undefined
        })
        .then(data => console.log(data)); // data is undefined!
}
```

---

📝 [Back to Top](#-table-of-contents)

### 48. async/await - How it Works

**Definition:**  
`async/await` is syntactic sugar over Promises, making asynchronous code look synchronous.

**Basic Syntax:**

```javascript
// Promise version
function fetchData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });
}

// async/await version (cleaner!)
async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
    return data; // Automatically wrapped in Promise
}
```

**Key Points:**

1. `async` makes function return a Promise
2. `await` pauses execution until Promise resolves
3. Can only use `await` inside `async` functions

```javascript
// async always returns a Promise
async function example() {
    return 42;
}

example().then(result => console.log(result)); // 42

// Equivalent to:
function example() {
    return Promise.resolve(42);
}
```

**Sequential vs Parallel:**

```javascript
// Sequential (slow - 3 seconds total)
async function sequential() {
    const result1 = await delay(1000); // Wait 1s
    const result2 = await delay(1000); // Wait 1s
    const result3 = await delay(1000); // Wait 1s
    return [result1, result2, result3];
}

// Parallel (fast - 1 second total!)
async function parallel() {
    const promise1 = delay(1000); // Start immediately
    const promise2 = delay(1000); // Start immediately
    const promise3 = delay(1000); // Start immediately
    
    const result1 = await promise1; // Wait for all
    const result2 = await promise2;
    const result3 = await promise3;
    
    return [result1, result2, result3];
}

// Or use Promise.all
async function parallelBetter() {
    return Promise.all([
        delay(1000),
        delay(1000),
        delay(1000)
    ]);
}
```

**Real-World Example:**

```javascript
async function getUserWithPosts(userId) {
    try {
        // Fetch user
        const userResponse = await fetch(`/api/users/${userId}`);
        const user = await userResponse.json();
        
        // Fetch user's posts
        const postsResponse = await fetch(`/api/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Usage
getUserWithPosts(123)
    .then(result => console.log(result))
    .catch(error => console.error(error));
```

---

📝 [Back to Top](#-table-of-contents)

### 49. Error Handling in async/await

**try/catch with async/await:**

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw or handle
    } finally {
        console.log('Cleanup happens here');
    }
}
```

**Multiple awaits:**

```javascript
async function multipleOperations() {
    try {
       const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        
        return { user, posts, comments };
    } catch (error) {
        // Catches error from ANY await
        console.error('Operation failed:', error);
        return null;
    }
}
```

**Handling specific errors:**

```javascript
async function smartFetch(url) {
    try {
        const response = await fetch(url);
        
        if (response.status === 404) {
            throw new Error('Not Found');
        }
        
        if (response.status === 401) {
            throw new Error('Unauthorized');
        }
        
        if (!response.ok) {
            throw new Error('Network error');
        }
        
        return await response.json();
    } catch (error) {
        if (error.message === 'Not Found') {
            return { fallback: true };
        }
        
        if (error.message === 'Unauthorized') {
            redirectToLogin();
        }
        
        throw error; // Re-throw other errors
    }
}
```

**Promise all with try/catch:**

```javascript
async function fetchAllData() {
    try {
        const [users, posts, comments] = await Promise.all([
            fetchUsers(),
            fetchPosts(),
            fetchComments()
        ]);
        
        return { users, posts, comments };
    } catch (error) {
        // If ANY promise rejects, comes here
        console.error('One or more requests failed:', error);
    }
}
```

---

📝 [Back to Top](#-table-of-contents)

### 50. Promise.all vs Promise.allSettled vs Promise.race

**Promise.all() - All or nothing**

```javascript
// All promises must succeed
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results)); // [1, 2, 3]

// If ANY fails, entire thing fails
const failing = Promise.reject('Error');
Promise.all([promise1, promise2, failing])
    .then(results => console.log('Success'))
    .catch(error => console.error(error)); // 'Error'
```

**Promise.allSettled() - Wait for all, regardless of outcome**

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error');
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3])
    .then(results => console.log(results));

// Output:
// [
//     { status: 'fulfilled', value: 1 },
//     { status: 'rejected', reason: 'Error' },
//     { status: 'fulfilled', value: 3 }
// ]
```

**Promise.race() - First to finish wins**

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve('slow'), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve('fast'), 100));

Promise.race([slow, fast])
    .then(result => console.log(result)); // 'fast'

// Timeout pattern
function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout')), timeout)
        )
    ]);
}
```

**Promise.any() - First fulfilled wins (ES2021)**

```javascript
const p1 = Promise.reject('Error 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('Success'), 100));
const p3 = Promise.reject('Error 2');

Promise.any([p1, p2, p3])
    .then(result => console.log(result)); // 'Success'

// If ALL reject
Promise.any([Promise.reject(1), Promise.reject(2)])
    .catch(error => console.log(error)); // AggregateError
```

**Comparison Table:**

| Method | Resolves when | Rejects when | Use case |
|--------|---------------|--------------|----------|
| `Promise.all()` | ALL fulfill | ANY rejects | Parallel deps, all must succeed |
| `Promise.allSettled()` | ALL settle | Never | Want all results regardless |
| `Promise.race()` | FIRST settles | FIRST rejects (if first) | Timeout, fastest response |
| `Promise.any()` | FIRST fulfills | ALL reject | Fallback URLs, redundancy |

---

📝 [Back to Top](#-table-of-contents)

### 51. Callback Hell

**Definition:**  
Nested callbacks that make code hard to read and maintain (also called "Pyramid of Doom").

**The Problem:**

```javascript
// ❌ Callback Hell
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            getMoreData(c, function(d) {
                getMoreData(d, function(e) {
                    console.log(e);
                });
            });
        });
    });
});

// Real example
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return console.error(err);
    
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return console.error(err);
        
        fs.writeFile('output.txt', data1 + data2, (err) => {
            if (err) return console.error(err);
            
            console.log('Success');
        });
    });
});
```

**Solutions:**

**1. Named Functions:**

```javascript
function readFile1(callback) {
    fs.readFile('file1.txt', 'utf8', (err, data) => {
        if (err) return console.error(err);
        callback(data);
    });
}

function readFile2(data1, callback) {
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return console.error(err);
        callback(data1, data2);
    });
}

function writeFile(data1, data2) {
    fs.writeFile('output.txt', data1 + data2, (err) => {
        if (err) return console.error(err);
        console.log('Success');
    });
}

readFile1(data1 => {
    readFile2(data1, writeFile);
});
```

**2. Promises:**

```javascript
// ✅ Much cleaner!
readFilePromise('file1.txt')
    .then(data1 => readFilePromise('file2.txt')
        .then(data2 => ({ data1, data2 }))
    )
    .then(({ data1, data2 }) => writeFilePromise('output.txt', data1 + data2))
    .then(() => console.log('Success'))
    .catch(error => console.error(error));
```

**3. async/await (Best!):**

```javascript
// ✅ Cleanest!
async function processFiles() {
    try {
        const data1 = await readFilePromise('file1.txt');
        const data2 = await readFilePromise('file2.txt');
        await writeFilePromise('output.txt', data1 + data2);
        console.log('Success');
    } catch (error) {
        console.error(error);
    }
}
```

---

📝 [Back to Top](#-table-of-contents)

### 52. What is a Callback?

**Definition:**  
A callback is a function passed as an argument to another function, to be executed later.

**Types of Callbacks:**

**1. Synchronous Callbacks:**

```javascript
// Array methods
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num); // Callback executed immediately
});

const doubled = numbers.map(num => num * 2); // Callback for each element

// Custom callback
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Execute immediately
}

greet('Alice', () => console.log('Nice to meet you'));
```

**2. Asynchronous Callbacks:**

```javascript
// setTimeout
setTimeout(() => {
    console.log('Executed after 1 second');
}, 1000);

// Event handlers
button.addEventListener('click', () => {
    console.log('Button clicked');
});

// Fetch
fetch('/api/data')
    .then(response => response.json()) // Callback
    .then(data => console.log(data));   // Another callback
```

**Callback Patterns:**

```javascript
// Node.js error-first callback
fs.readFile('file.txt', (error, data) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Data:', data);
});

// Success/error callbacks
function loadData(successCallback, errorCallback) {
    fetch('/api/data')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Failed');
        })
        .then(data => successCallback(data))
        .catch(error => errorCallback(error));
}

loadData(
    data => console.log('Success:', data),
    error => console.error('Error:', error)
);
```

**Creating Callback-based Functions:**

```javascript
// Custom callback function
function fetchUserData(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: 'John' };
        callback(null, user); // Error-first pattern
    }, 1000);
}

// Usage
fetchUserData(123, (error, user) => {
    if (error) {
        console.error(error);
        return;
    }
    console.log('User:', user);
});
```

---

📝 [Back to Top](#-table-of-contents)

### 53. Promise Chain Example

**Complete Real-World Example:**

```javascript
// User authentication and data loading flow
function loginUser(credentials) {
    return fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
        .then(response => {
            if (!response.ok) throw new Error('Login failed');
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            return data.user;
        });
}

function fetchUserProfile(userId) {
    return fetch(`/api/users/${userId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
        .then(response => {
            if (!response.ok) throw new Error('Profile fetch failed');
            return response.json();
        });
}

function fetchUserPosts(userId) {
    return fetch(`/api/posts?userId=${userId}`)
        .then(response => response.json());
}

// Complete chain
loginUser({ email: 'user@example.com', password: 'pass123' })
    .then(user => {
        console.log('Logged in:', user);
        return fetchUserProfile(user.id);
    })
    .then(profile => {
        console.log('Profile loaded:', profile);
        return fetchUserPosts(profile.id);
    })
    .then(posts => {
        console.log('Posts loaded:', posts);
        return posts.length;
    })
    .then(count => {
        console.log(`User has ${count} posts`);
    })
    .catch(error => {
        console.error('Error in chain:', error);
        // Redirect to login page or show error
    })
    .finally(() => {
        console.log('Loading complete');
        hideLoadingSpinner();
    });
```

**With Error Recovery:**

```javascript
fetch('/api/primary-data')
    .then(response => {
        if (!response.ok) throw new Error('Primary failed');
        return response.json();
    })
    .catch(error => {
        console.warn('Primary failed, trying backup');
        return fetch('/api/backup-data')
            .then(response => response.json());
    })
    .then(data => {
        // Works with either primary or backup data
        processData(data);
    })
    .catch(error => {
        // Both failed
        console.error('All sources failed:', error);
        showErrorMessage();
    });
```

---

📝 [Back to Top](#-table-of-contents)


## Part 7: Browser & Web APIs

### 54. DOM - Document Object Model

**Definition:** The DOM is a programming interface for HTML documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript.

```javascript
// Selecting elements
const element = document.getElementById('myId');
const elements = document.querySelectorAll('.myClass');
const div = document.querySelector('div');

// Creating/modifying elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello';
newDiv.className = 'container';
document.body.appendChild(newDiv);

// Modifying attributes
element.setAttribute('data-value', '123');
element.classList.add('active');
element.style.color = 'red';

// Event handling
element.addEventListener('click', (e) => {
    console.log('Clicked!', e.target);
});
```

---

?? [Back to Top](#-table-of-contents)

### 55. localStorage vs sessionStorage vs cookies

**localStorage:**
- Persists until explicitly cleared
- 5-10MB storage
- Same-origin only
- Synchronous API

```javascript
localStorage.setItem('user', JSON.stringify({ name: 'John' }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear();
```

**sessionStorage:**
- Cleared when tab closes
- 5-10MB storage
- Same-origin, same tab only

**cookies:**
- Can set expiration
- 4KB limit per cookie
- Sent with every HTTP request
- Can be httpOnly, secure

```javascript
document.cookie = "user=John; max-age=3600; path=/";
```

---

?? [Back to Top](#-table-of-contents)

### 56-62. CORS, Same-Origin Policy, URL Resolution, Browser Rendering

**CORS:** Cross-Origin Resource Sharing allows servers to specify who can access their resources.

**Same-Origin Policy:** Browser security that restricts how documents/scripts from one origin can interact with resources from another origin.

**Browser Rendering:** HTML ? DOM Tree, CSS ? CSSOM Tree ? Render Tree ? Layout ? Paint

---

?? [Back to Top](#-table-of-contents)

## Part 8: ES6+ Features

### 63. ES6 Features Overview

- let/const
- Arrow functions
- Template literals
- Destructuring
- Spread/Rest operators
- Classes
- Promises
- Modules
- Default parameters
- Enhanced object literals

---

?? [Back to Top](#-table-of-contents)

### 64. let, const vs var

```javascript
// var - function scoped, hoisted
var x = 1;
if (true) {
    var x = 2; // Same variable!
}
console.log(x); // 2

// let - block scoped
let y = 1;
if (true) {
    let y = 2; // Different variable
}
console.log(y); // 1

// const - block scoped, immutable binding
const z = 1;
z = 2; // Error!

const obj = { a: 1 };
obj.a = 2; // OK - object is mutable
```

---

?? [Back to Top](#-table-of-contents)

### 65-72. Destructuring, Spread/Rest, Template Literals, Optional Chaining, Modules

```javascript
// Destructuring
const { name, age } = user;
const [first, second] = [1, 2];

// Spread
const newArr = [...arr1, ...arr2];
const newObj = { ...obj1, ...obj2 };

// Rest
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// Template literals
const msg = Hello, !;

// Optional chaining
const city = user?.address?.city;

// Nullish coalescing
const value = input ?? 'default';

// Modules
export const myFunc = () => {};
export default class MyClass {}

import MyClass, { myFunc } from './module.js';
```

---

?? [Back to Top](#-table-of-contents)

## Part 9: Performance & Optimization

### 73. Debounce

```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usage
const handleSearch = debounce((query) => {
    console.log('Searching:', query);
}, 300);
```

---

?? [Back to Top](#-table-of-contents)

### 74. Throttle

```javascript
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage
const handleScroll = throttle(() => {
    console.log('Scroll event');
}, 100);
```

---

?? [Back to Top](#-table-of-contents)

### 75-79. Memory Leaks, Garbage Collection, Web Workers

**Memory Leaks:** Unintentional memory retention (forgotten timers, closures, DOM references)

**Prevention:**
- Clear timers/intervals
- Remove event listeners
- Null out references
- Use WeakMap/WeakSet

**Web Workers:** Run JavaScript in background threads

```javascript
const worker = new Worker('worker.js');
worker.postMessage({ data: 'process this' });
worker.onmessage = (e) => console.log(e.data);
```

---

?? [Back to Top](#-table-of-contents)

## Part 10: Error Handling & Security

### 80-85. try/catch, Global Errors, Custom Errors, XSS, CSRF, eval()

```javascript
// try/catch
try {
    riskyOperation();
} catch (error) {
    console.error(error);
} finally {
    cleanup();
}

// Custom errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

throw new ValidationError('Invalid input');

// Global error handling
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// XSS Prevention
// - Escape user input
// - Use textContent instead of innerHTML
// - Content Security Policy headers

// CSRF Prevention
// - CSRF tokens
// - SameSite cookies
// - Verify origin headers

// eval() is dangerous - never use it!
// const code = "alert('XSS')";
// eval(code); // ? Never do this!
```

---

?? [Back to Top](#-table-of-contents)

## Part 11: Additional Important Topics

### 86. Polyfills

**Definition:** Code that implements features on browsers that don't support them.

```javascript
// Array.includes polyfill
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement) {
        return this.indexOf(searchElement) !== -1;
    };
}

// Promise polyfill (use libraries like core-js)
```

---

?? [Back to Top](#-table-of-contents)

### 87. Weak Map and Weak Set

```javascript
// WeakMap - keys must be objects, allows garbage collection
const wm = new WeakMap();
let obj = { data: 'value' };
wm.set(obj, 'metadata');
obj = null; // Object can be garbage collected

// WeakSet - similar but only stores objects
const ws = new WeakSet();
let item = { id: 1 };
ws.add(item);
item = null; // Can be garbage collected
```

---

?? [Back to Top](#-table-of-contents)

### 88. String Methods

```javascript
const str = 'Hello World';

// Common methods
str.length // 11
str.toLowerCase() // 'hello world'
str.toUpperCase() // 'HELLO WORLD'
str.trim() // Remove whitespace
str.slice(0, 5) // 'Hello'
str.substring(0, 5) // 'Hello'
str.indexOf('World') // 6
str.includes('World') // true
str.startsWith('Hello') // true
str.endsWith('World') // true
str.repeat(2) // 'Hello WorldHello World'
str.replace('World', 'JS') // 'Hello JS'
str.replaceAll('l', 'L') // 'HeLLo WorLd'
str.split(' ') // ['Hello', 'World']
str.charAt(0) // 'H'
str.charCodeAt(0) // 72
str.padStart(15, '*') // '****Hello World'
str.padEnd(15, '*') // 'Hello World****'
```

---

?? [Back to Top](#-table-of-contents)

### 89. Array Methods Complete

```javascript
const arr = [1, 2, 3, 4, 5];

// Mutating methods
arr.push(6) // Add to end
arr.pop() // Remove from end
arr.unshift(0) // Add to start
arr.shift() // Remove from start
arr.splice(1, 2, 'a', 'b') // Remove/add at index
arr.reverse() // Reverse in place
arr.sort((a, b) => a - b) // Sort

// Non-mutating methods
arr.concat([6, 7]) // Merge arrays
arr.slice(1, 3) // Extract portion
arr.map(x => x * 2) // Transform
arr.filter(x => x > 2) // Select
arr.reduce((sum, x) => sum + x, 0) // Reduce to value
arr.forEach(x => console.log(x)) // Iterate
arr.find(x => x > 3) // First match
arr.findIndex(x => x > 3) // Index of first match
arr.some(x => x > 3) // At least one
arr.every(x => x > 0) // All
arr.includes(3) // Contains value
arr.indexOf(3) // Index of value
arr.join(', ') // Array to string
arr.flat() // Flatten nested arrays
arr.flatMap(x => [x, x * 2]) // Map + flatten
```

---

?? [Back to Top](#-table-of-contents)

## ?? Completion

**Congratulations!** You've completed the JavaScript Complete Interview Guide covering all 89 essential topics from basics to advanced concepts.

### ?? Topics Covered:

1. **Core Fundamentals** (1-11): Execution context, hoisting, types, coercion
2. **Scope & Closures** (12-18): Scope types, closures, lexical scope
3. **Functions & This** (19-26): Arrow functions, this binding, currying, pure functions
4. **Objects & Prototypes** (27-34): Prototypal inheritance, cloning, immutability
5. **Arrays** (35-42): map/filter/reduce, array methods, immutability
6. **Async JavaScript** (43-53): Promises, async/await, event loop, callbacks
7. **Browser & Web APIs** (54-62): DOM, storage, CORS, rendering
8. **ES6+ Features** (63-72): let/const, destructuring, modules, optional chaining
9. **Performance** (73-79): Debounce, throttle, memory management, web workers
10. **Security** (80-85): Error handling, XSS, CSRF prevention
11. **Additional** (86-89): Polyfills, WeakMap/Set, string/array methods

**Total:** 89 comprehensive topics with examples, use cases, and best practices!

---

**?? [Back to Top](#-table-of-contents)**
