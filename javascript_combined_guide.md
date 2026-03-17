# JavaScript Complete Interview Guide

**Comprehensive Guide from Basics to Advanced — 112 Topics**

> **Interview Focus**: This guide covers 112 essential JavaScript topics with definitions, examples, and real-world use cases.

[⬆️ Back to Top](#-table-of-contents)

---

## 📌 Table of Contents

### Part 0: JavaScript Introduction

1. [JavaScript History & Versions](#1-javascript-history--versions)

### Part 1: Core JavaScript Fundamentals

2. [What is JavaScript?](#2-what-is-javascript)
3. [Execution Context](#3-execution-context)
4. [Call Stack](#4-call-stack)
5. [Hoisting](#5-hoisting)
6. [Temporal Dead Zone (TDZ)](#6-temporal-dead-zone-tdz)
7. [undefined vs null](#7-undefined-vs-null)
8. [Primitive vs Non-Primitive Data Types](#8-primitive-vs-non-primitive-data-types)
9. [Type Coercion](#9-type-coercion)
10. [Truthy and Falsy Values](#10-truthy-and-falsy-values)
11. [NaN - Not a Number](#11-nan---not-a-number)
12. [== vs ===](#12-equality-operators)
13. [Variable Declarations — var, let, const Deep Dive](#13-variable-declarations)
14. [Variable Naming Rules](#14-variable-naming-rules)
15. [typeof Operator](#15-typeof-operator)

### Part 2: Built-in Data Structures & Objects

16. [Built-in Objects (Math, Date, Number, String)](#16-built-in-objects)
17. [JSON](#17-json)
18. [Map & WeakMap](#18-map--weakmap)
19. [Set & WeakSet](#19-set--weakset)
20. [Typed Arrays](#20-typed-arrays)

### Part 3: Control Flow, Loops & Operators

21. [Loops & Iterations](#21-loops--iterations)
22. [Control Flow — if/else & switch](#22-control-flow)
23. [All Operators](#23-all-operators)

### Part 4: Scope & Closures

24. [Scope — What & Types](#24-scope)
25. [Function Scope vs Block Scope](#25-function-scope-vs-block-scope)
26. [Global Scope vs Block Scope](#26-global-scope-vs-block-scope)
27. [Closures](#27-closures)
28. [Closure Use Cases](#28-closure-use-cases)
29. [Closure Memory Issues](#29-closure-memory-issues)
30. [Lexical Scope](#30-lexical-scope)
31. [Scope Chain & Function Stack](#31-scope-chain--function-stack)

### Part 5: Functions & This

32. [Function Declaration vs Expression](#32-function-declaration-vs-expression)
33. [IIFE — Immediately Invoked Function Expression](#33-iife)
34. [Arrow Functions vs Normal Functions](#34-arrow-functions-vs-normal-functions)
35. [this Keyword](#35-this-keyword)
36. [this in Arrow Functions](#36-this-in-arrow-functions)
37. [call, apply, bind](#37-call-apply-bind)
38. [Currying](#38-currying)
39. [Pure vs Impure Functions](#39-pure-vs-impure-functions)
40. [Memoization](#40-memoization)
41. [Recursion & Tail Call Optimization](#41-recursion--tail-call-optimization)
42. [Generators & Iterators](#42-generators--iterators)

### Part 6: Classes

43. [Classes — Declaration, Inheritance & Private Fields](#43-classes)

### Part 7: Objects & Prototypes

44. [How Objects Work Internally](#44-objects-internal-working)
45. [Prototype](#45-prototype)
46. [Prototype Chain](#46-prototype-chain)
47. [**proto** vs prototype](#47-proto-vs-prototype)
48. [Object.create vs Constructor](#48-object-create-vs-constructor)
49. [Shallow Copy vs Deep Copy](#49-shallow-copy-vs-deep-copy)
50. [How to Clone Objects](#50-cloning-objects)
51. [Prevent Object Mutation](#51-prevent-object-mutation)

### Part 8: Arrays

52. [map, filter, reduce](#52-map-filter-reduce)
53. [When to use reduce](#53-when-to-use-reduce)
54. [Remove Duplicates from Array](#54-remove-duplicates)
55. [Flatten Nested Array](#55-flatten-array)
56. [slice vs splice](#56-slice-vs-splice)
57. [find vs filter](#57-find-vs-filter)
58. [some vs every](#58-some-vs-every)
59. [Array Immutability](#59-array-immutability)

### Part 9: Asynchronous JavaScript

60. [Synchronous vs Asynchronous](#60-sync-vs-async)
61. [setTimeout & setInterval](#61-settimeout--setinterval)
62. [XMLHttpRequest](#62-xmlhttprequest)
63. [Event Loop](#63-event-loop)
64. [Microtask Queue vs Macrotask Queue](#64-microtask-vs-macrotask)
65. [Promise States](#65-promise-states)
66. [Promise Chaining](#66-promise-chaining)
67. [async/await — How it Works](#67-async-await)
68. [Error Handling in async/await](#68-async-await-error-handling)
69. [Promise.all vs Promise.allSettled vs Promise.race](#69-promise-methods)
70. [Callback Hell](#70-callback-hell)
71. [What is a Callback?](#71-callbacks)
72. [Promise Chain Example](#72-promise-chain-example)

### Part 10: Browser & Web APIs

73. [DOM — Document Object Model](#73-dom)
74. [localStorage vs sessionStorage vs cookies](#74-storage-comparison)
75. [CORS — Cross-Origin Resource Sharing](#75-cors)
76. [Same-Origin Policy](#76-same-origin-policy)
77. [What Happens When You Type a URL](#77-url-to-webpage)
78. [How Browser Renders a Webpage](#78-browser-rendering)
79. [Reflow & Repaint](#79-reflow-repaint)
80. [Critical Rendering Path](#80-critical-rendering-path)
81. [How Browser Parses HTML and Builds DOM](#81-dom-tree-building)

### Part 11: ES6+ Features

82. [ES6 Features Overview](#82-es6-features)
83. [let, const vs var](#83-let-const-var)
84. [Destructuring](#84-destructuring)
85. [Spread vs Rest Operator](#85-spread-vs-rest)
86. [Template Literals](#86-template-literals)
87. [Default Parameters](#87-default-parameters)
88. [Optional Chaining](#88-optional-chaining)
89. [Nullish Coalescing](#89-nullish-coalescing)
90. [Modules (import/export)](#90-modules)
91. [Tree Shaking](#91-tree-shaking)
92. [CommonJS vs ES Modules (ESM)](#92-commonjs-vs-es-modules)
93. [Strict Mode](#93-strict-mode)
94. [Regular Expressions](#94-regular-expressions)

### Part 12: Performance & Optimization

95. [Debounce](#95-debounce)
96. [Throttle](#96-throttle)
97. [Memory Leaks in JavaScript](#97-memory-leaks)
98. [How to Prevent Memory Leaks](#98-prevent-memory-leaks)
99. [Optimizing Heavy Loops](#99-optimize-loops)
100.  [Web Workers](#100-web-workers)
101.  [Garbage Collection](#101-garbage-collection)

### Part 13: Error Handling & Security

102. [try/catch vs Promise catch](#102-error-handling)
103. [Exception Handling — throw, try/catch/finally, Error Objects](#103-exception-handling)
104. [Global Error Handling](#104-global-error-handling)
105. [Custom Error Classes](#105-custom-errors)
106. [XSS — Cross-Site Scripting](#106-xss)
107. [CSRF — Cross-Site Request Forgery](#107-csrf)
108. [Why eval() is Dangerous](#108-eval-danger)

### Part 14: Additional Important Topics

109. [Polyfills](#109-polyfills)
110. [Weak Map and Weak Set](#110-weakmap-weakset)
111. [String Methods](#111-string-methods)
112. [Array Methods Complete](#112-array-methods-complete)

[⬆️ Back to Top](#-table-of-contents)

---

## Part 0: JavaScript Introduction

### 1. JavaScript History & Versions

**Brief History:**

- **1995** — Brendan Eich created JavaScript in 10 days at Netscape. Originally called "Mocha", then "LiveScript", then **JavaScript**.
- **1997** — ECMAScript 1 standardized by ECMA International (TC39 committee).
- **2009** — ES5 added strict mode, `JSON`, `Array.forEach`, `Object.create`.
- **2015** — **ES6 / ES2015** — Biggest update ever: `let/const`, arrow functions, classes, promises, template literals, destructuring, modules.
- **2016** — ES7: `Array.includes`, `**` exponentiation.
- **2017** — ES8: `async/await`, `Object.entries/values`, `String.padStart/padEnd`.
- **2018** — ES9: Rest/Spread for objects, `Promise.finally`.
- **2019** — ES10: `Array.flat()`, `flatMap()`, `Object.fromEntries`, optional catch binding.
- **2020** — ES11: `BigInt`, `Promise.allSettled`, Optional Chaining `?.`, Nullish Coalescing `??`.
- **2021** — ES12: `Promise.any`, `String.replaceAll`, Logical Assignment `&&=`, `||=`, `??=`.
- **2022** — ES13: Top-level `await`, `Array.at()`, private class fields `#`.
- **2023** — ES14: `Array.findLast()`, `toSorted()`, `toReversed()`, `with()`.

**How to Run JavaScript:**

```javascript
// 1. Browser Console (F12 → Console tab)
console.log("Hello!");

// 2. HTML <script> tag
// <script src="app.js"></script>

// 3. Node.js (terminal)
// node filename.js

// 4. Online: JSBin, CodePen, StackBlitz
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 1: Core JavaScript Fundamentals

### 2. What is JavaScript?

**Definition:**

- JavaScript is a **high-level, interpreted, dynamically-typed scripting language** primarily used to create interactive and dynamic content web pages. It runs in the browser and on runtime environment servers (Node.js).

- JavaScript is **synchronous and single-threaded** by nature, but supports asynchronous operations through callbacks, promises, and async/await.

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

[⬆️ Back to Top](#-table-of-contents)

---

### 3. Execution Context

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

[⬆️ Back to Top](#-table-of-contents)

---

### 4. Call Stack

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

[⬆️ Back to Top](#-table-of-contents)

---

### 5. Hoisting

**Definition:**

- **Hoisting** is a javascript behaviour able to move function declarations, variable to the top of their scope during the compilation time

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

[⬆️ Back to Top](#-table-of-contents)

---

### 6. Temporal Dead Zone (TDZ)

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

[⬆️ Back to Top](#-table-of-contents)

---

### 7. undefined vs null

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

[⬆️ Back to Top](#-table-of-contents)

---

### 8. Primitive vs Non-Primitive Data Types

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

**Non-Primitives (Heap + Stack):**
```

Stack: Heap:
┌──────────┬──────────┐ ┌────────────────┐
│ obj1 │ 0x001 │─→│ { name: 'John' }│
│ obj2 │ 0x002 │─→│ { name: 'Jane' }│
│ obj3 │ 0x001 │─→│ (same as obj1) │
└──────────┴──────────┘ └────────────────┘

```

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

[⬆️ Back to Top](#-table-of-contents)

---

### 9. Type Coercion

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

[⬆️ Back to Top](#-table-of-contents)

---

### 10. Truthy and Falsy Values

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

[⬆️ Back to Top](#-table-of-contents)

---

### 11. NaN - Not a Number

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

[⬆️ Back to Top](#-table-of-contents)

---

### 12. Equality Operators (== vs ===)

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

[⬆️ Back to Top](#-table-of-contents)

---

[⬆️ Back to Top](#-table-of-contents)

---

### 13. Variable Declarations

**Three ways to declare variables:**

```javascript
var oldWay = "function scoped";
let modern = "block scoped, reassignable";
const constant = "block scoped, not reassignable";
```

**Detailed Comparison:**

| Feature            | `var`               | `let`     | `const`   |
| ------------------ | ------------------- | --------- | --------- |
| Scope              | Function            | Block     | Block     |
| Hoisting           | Yes (→ `undefined`) | Yes (TDZ) | Yes (TDZ) |
| Reassign           | ✅                  | ✅        | ❌        |
| Redeclare          | ✅                  | ❌        | ❌        |
| Global object prop | ✅ (window.x)       | ❌        | ❌        |

**`var` problems (why we avoid it):**

```javascript
// Problem 1: No block scope
if (true) {
  var x = 10;
}
console.log(x); // 10 — leaks out of block!

// Problem 2: Redeclaration allowed
var name = "John";
var name = "Jane"; // No error!

// Problem 3: Loop closure bug
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (not 0, 1, 2)

// Fix with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 ✅
```

**`const` — important nuance:**

```javascript
// const prevents REASSIGNMENT, not mutation
const user = { name: "John" };
user.name = "Jane"; // ✅ Works! (mutating object)
user = {}; // ❌ TypeError: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // ✅ Works!
arr = []; // ❌ Error
```

**When to use which:**

- `const` — default choice for everything
- `let` — when you need to reassign (loop counters, flags)
- `var` — avoid; only in legacy codebases

[⬆️ Back to Top](#-table-of-contents)

---

### 14. Variable Naming Rules

**Rules (must follow):**

```javascript
// ✅ Valid names
let name;
let _name;
let $price;
let camelCase;
let PascalCase;
let name123;

// ❌ Invalid names
// let 123name;   — Cannot start with digit
// let my-var;    — Hyphens not allowed
// let let;       — Reserved keyword
// let class;     — Reserved keyword
```

**Conventions (best practices):**

```javascript
// camelCase — variables & functions
let firstName = "John";
function getUserData() {}

// PascalCase — classes & constructors
class UserProfile {}
function Person() {}

// UPPER_SNAKE_CASE — constants
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";

// _underscore prefix — "private" by convention
this._privateVar = true;

// $ prefix — often used by jQuery, or special vars
const $element = document.getElementById("app");
```

[⬆️ Back to Top](#-table-of-contents)

---

### 15. typeof Operator

**Returns the data type as a string:**

```javascript
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" ⚠️ (historical bug!)
console.log(typeof Symbol("x")); // "symbol"
console.log(typeof 9n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function () {}); // "function"
```

**Common use cases:**

```javascript
// Type checking before operations
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Arguments must be numbers");
  }
  return a + b;
}

// Check if variable is defined
if (typeof myVar !== "undefined") {
  console.log("myVar exists");
}

// Better checks for non-primitives
Array.isArray([]); // true — use instead of typeof
[] instanceof Array; // true
Object.prototype.toString.call([]); // "[object Array]"
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 2: Built-in Data Structures & Objects

### 16. Built-in Objects

### Math Object

```javascript
Math.PI; // 3.14159...
Math.E; // 2.71828...

Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1); // 5
Math.trunc(4.9); // 4 (removes decimal)

Math.abs(-5); // 5
Math.max(1, 5, 3); // 5
Math.min(1, 5, 3); // 1
Math.pow(2, 10); // 1024
Math.sqrt(16); // 4
Math.cbrt(27); // 3

Math.random(); // 0 to <1
// Random int between min and max (inclusive)
Math.floor(Math.random() * (max - min + 1)) + min;

Math.log(Math.E); // 1
Math.log2(8); // 3
Math.log10(1000); // 3
```

### Date Object

```javascript
const now = new Date();
const specific = new Date("2024-01-15");
const fromMs = new Date(1673740800000);

// Getting values
now.getFullYear(); // 2024
now.getMonth(); // 0-11 (Jan = 0!)
now.getDate(); // 1-31 (day of month)
now.getDay(); // 0-6 (Sun = 0!)
now.getHours(); // 0-23
now.getMinutes(); // 0-59
now.getSeconds(); // 0-59
now.getTime(); // milliseconds since epoch

// Setting values
now.setFullYear(2025);
now.setMonth(0);

// Formatting
now.toISOString(); // "2024-01-15T10:30:00.000Z"
now.toLocaleDateString(); // "1/15/2024" (locale-based)
now.toLocaleTimeString(); // "10:30:00 AM"

// Date arithmetic
const tomorrow = new Date(Date.now() + 86400000);
const daysDiff = Math.floor((date2 - date1) / 86400000);
```

### Number Object

```javascript
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_VALUE; // 1.79e+308
Number.POSITIVE_INFINITY; // Infinity
Number.NaN; // NaN

Number.isInteger(4); // true
Number.isInteger(4.5); // false
Number.isFinite(Infinity); // false
Number.isNaN(NaN); // true
Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1); // false

(1234.5678).toFixed(2); // "1234.57"
(1234.5678).toPrecision(6); // "1234.57"
(255).toString(16); // "ff" (hex)
(255).toString(2); // "11111111" (binary)
```

### String Object (key methods)

```javascript
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
"  hello  ".trim(); // "hello"
"  hello  ".trimStart(); // "hello  "
"  hello  ".trimEnd(); // "  hello"

"hello".includes("ell"); // true
"hello".startsWith("hel"); // true
"hello".endsWith("llo"); // true
"hello".indexOf("l"); // 2
"hello".lastIndexOf("l"); // 3

"hello".slice(1, 3); // "el"
"hello".substring(1, 3); // "el"
"hello".replace("l", "r"); // "herlo" (first only)
"hello".replaceAll("l", "r"); // "herro"

"a,b,c".split(","); // ["a","b","c"]
["a", "b", "c"].join("-"); // "a-b-c"

"hi".repeat(3); // "hihihi"
"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0"); // "500"

"hello world".match(/\w+/g); // ["hello", "world"]
```

[⬆️ Back to Top](#-table-of-contents)

---

### 17. JSON

**JSON (JavaScript Object Notation)** — text format for data exchange.

```javascript
// JSON.stringify — Object → JSON string
const user = { name: "John", age: 30, hobbies: ["coding", "gaming"] };

const jsonString = JSON.stringify(user);
// '{"name":"John","age":30,"hobbies":["coding","gaming"]}'

// With formatting (pretty print)
JSON.stringify(user, null, 2);
// {
//   "name": "John",
//   "age": 30,
//   "hobbies": ["coding", "gaming"]
// }

// With replacer — filter properties
JSON.stringify(user, ["name", "age"]); // only include name, age

// JSON.parse — JSON string → Object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "John"

// What JSON does NOT support:
const problematic = {
  fn: function () {}, // ❌ functions → removed
  sym: Symbol("id"), // ❌ symbols → removed
  undef: undefined, // ❌ undefined → removed
  date: new Date(), // ⚠️ converted to ISO string
  regex: /hello/, // ⚠️ converted to {}
  map: new Map([[1, 2]]), // ⚠️ converted to {}
};

// Deep clone trick (simple objects only)
const deepCopy = JSON.parse(JSON.stringify(user));
```

[⬆️ Back to Top](#-table-of-contents)

---

### 18. Map & WeakMap

### Map

**Map** is a key-value collection where keys can be ANY type (including objects).

```javascript
// vs Object: keys can be any type, maintains insertion order
const map = new Map();

// Set values
map.set("name", "Alice");
map.set(42, "The answer");
map.set(true, "boolean key");
map.set({ id: 1 }, "object key");

// Get values
map.get("name"); // "Alice"
map.get(42); // "The answer"

// Check & delete
map.has("name"); // true
map.delete("name"); // removes it
map.size; // number of entries

// Iterate
map.forEach((value, key) => console.log(key, value));

for (const [key, value] of map) {
  console.log(key, value);
}

// Convert
const fromObj = new Map(Object.entries({ a: 1, b: 2 }));
const toObj = Object.fromEntries(map);
const toArr = [...map]; // [[key, val], ...]
```

**Map vs Object:**

| Feature     | Map                            | Object                            |
| ----------- | ------------------------------ | --------------------------------- |
| Key types   | Any type                       | String/Symbol only                |
| Order       | Insertion order                | Less predictable                  |
| Size        | `.size` property               | `Object.keys(o).length`           |
| Iteration   | Directly iterable              | Need `Object.keys/values/entries` |
| Performance | Better for frequent add/delete | Good for fixed structure          |

### WeakMap

**WeakMap** — keys must be objects; keys are held **weakly** (garbage collected when no other references).

```javascript
const weakMap = new WeakMap();

let obj = { name: "John" };
weakMap.set(obj, "some data");

weakMap.get(obj); // "some data"
weakMap.has(obj); // true
weakMap.delete(obj); // removes it

// When obj is GC'd, entry is automatically removed
obj = null; // entry cleaned up automatically

// WeakMap has NO: size, forEach, keys(), values(), entries()
// Cannot be iterated — by design!

// Use case: Private data for objects
const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { age }); // truly private
    this.name = name;
  }
  getAge() {
    return privateData.get(this).age;
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 19. Set & WeakSet

### Set

**Set** — collection of **unique values** of any type.

```javascript
const set = new Set([1, 2, 3, 2, 1]);
console.log(set); // Set {1, 2, 3} — duplicates removed!

set.add(4);
set.add(2); // ignored — already exists
set.has(3); // true
set.delete(3); // removes
set.size; // 3

// Iterate
for (const val of set) console.log(val);
set.forEach((val) => console.log(val));

// Convert
const arr = [...set]; // [1, 2, 4]
const arr2 = Array.from(set); // [1, 2, 4]

// Most common use — remove duplicates
const uniqueNums = [...new Set([1, 2, 2, 3, 3, 3])]; // [1, 2, 3]
const uniqueWords = [...new Set(["a", "b", "a", "c"])]; // ["a","b","c"]

// Set operations
const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...a, ...b]); // {1,2,3,4,5,6}

// Intersection
const intersection = new Set([...a].filter((x) => b.has(x))); // {3,4}

// Difference
const difference = new Set([...a].filter((x) => !b.has(x))); // {1,2}
```

### WeakSet

**WeakSet** — stores objects weakly (garbage collected when no other refs).

```javascript
const weakSet = new WeakSet();
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.has(obj1); // true
weakSet.delete(obj1);

// Only objects allowed — no primitives
weakSet.add(42); // ❌ TypeError

// No iteration, no size — by design

// Use case: Track DOM elements (without memory leaks)
const visited = new WeakSet();

function markVisited(node) {
  visited.add(node);
}

function isVisited(node) {
  return visited.has(node);
}
// When DOM node removed, auto-cleaned from WeakSet
```

[⬆️ Back to Top](#-table-of-contents)

---

### 20. Typed Arrays

**Typed Arrays** — fixed-type, fixed-size arrays for binary data (used in Canvas, WebGL, Web Audio).

```javascript
// Types available:
Int8Array; // 8-bit signed int (-128 to 127)
Uint8Array; // 8-bit unsigned int (0 to 255)
Uint8ClampedArray; // like Uint8, clamps values 0-255
Int16Array; // 16-bit signed int
Uint16Array; // 16-bit unsigned int
Int32Array; // 32-bit signed int
Uint32Array; // 32-bit unsigned int
Float32Array; // 32-bit float
Float64Array; // 64-bit float
BigInt64Array; // 64-bit BigInt
BigUint64Array; // 64-bit unsigned BigInt

// Creating
const bytes = new Uint8Array(4); // [0, 0, 0, 0]
const floats = new Float32Array([1.5, 2.5, 3.5]);

floats[0]; // 1.5
floats.length; // 3

// ArrayBuffer — raw binary data
const buffer = new ArrayBuffer(16); // 16 bytes
const view = new DataView(buffer);
view.setInt32(0, 255);
view.getInt32(0); // 255

// Use case: Image pixel manipulation
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imageData.data; // Uint8ClampedArray: [R,G,B,A, R,G,B,A, ...]
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 3: Control Flow, Loops & Operators

### 21. Loops & Iterations

### for loop

```javascript
// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// Counting down
for (let i = 10; i >= 0; i -= 2) {
  console.log(i); // 10, 8, 6, 4, 2, 0
}

// Looping over array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
```

### while loop

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// With condition check
let input;
while (input !== "quit") {
  input = prompt("Enter command (type 'quit' to exit):");
}
```

### do...while loop

```javascript
// Executes body AT LEAST ONCE before checking condition
let i = 0;
do {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
} while (i < 5);

// Runs once even if condition is false from the start
let x = 10;
do {
  console.log("runs once:", x); // prints!
} while (x < 5);
```

### for...in loop (iterates object keys)

```javascript
const person = { name: "Alice", age: 25, city: "NYC" };

for (const key in person) {
  console.log(key, person[key]);
  // name Alice
  // age 25
  // city NYC
}

// ⚠️ Also iterates inherited properties!
// Use hasOwnProperty to be safe
for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}

// ❌ Avoid for...in on arrays (use for...of instead)
const arr = [10, 20, 30];
for (const index in arr) {
  console.log(index); // "0", "1", "2" — strings, not numbers!
}
```

### for...of loop (iterates values)

```javascript
// Works on any iterable: Array, String, Set, Map, etc.

// Array
for (const fruit of ["apple", "banana", "cherry"]) {
  console.log(fruit);
}

// String
for (const char of "hello") {
  console.log(char); // h, e, l, l, o
}

// Set
for (const val of new Set([1, 2, 3])) {
  console.log(val);
}

// Map
const map = new Map([
  ["a", 1],
  ["b", 2],
]);
for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}

// With index (entries)
const arr = ["a", "b", "c"];
for (const [i, val] of arr.entries()) {
  console.log(i, val); // 0 a, 1 b, 2 c
}
```

### break & continue

```javascript
// break — exit loop completely
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0, 1, 2, 3, 4
}

// continue — skip current iteration
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // skip even numbers
  console.log(i); // 1, 3, 5, 7, 9
}

// Labeled break (break outer loop from inner)
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
    console.log(i, j);
  }
}
```

### forEach, map, filter (functional loops)

```javascript
const nums = [1, 2, 3, 4, 5];

// forEach — no return, side effects
nums.forEach((n, i) => console.log(i, n));

// map — transforms, returns new array
const doubled = nums.map((n) => n * 2);

// filter — selects, returns new array
const evens = nums.filter((n) => n % 2 === 0);

// Note: break/continue don't work in forEach/map/filter
// Use for...of or regular for when you need break/continue
```

**for...in vs for...of vs forEach:**

| Loop         | Use For                             | Can Break? |
| ------------ | ----------------------------------- | ---------- |
| `for`        | Anything, index needed              | ✅         |
| `while`      | Condition-based                     | ✅         |
| `do...while` | Run at least once                   | ✅         |
| `for...in`   | Object keys                         | ✅         |
| `for...of`   | Iterables (array, set, map, string) | ✅         |
| `forEach`    | Arrays, no index needed             | ❌         |

[⬆️ Back to Top](#-table-of-contents)

---

### 22. Control Flow

### if / else if / else

```javascript
const score = 75;

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Ternary (short if/else)
const grade = score >= 70 ? "Pass" : "Fail";

// Nested ternary (avoid — hard to read)
const g = score >= 90 ? "A" : score >= 80 ? "B" : "C";

// Short-circuit evaluation
const name = user && user.name; // only access .name if user is truthy
const displayName = name || "Guest"; // fallback
```

### switch

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break; // ⚠️ MUST break to prevent fall-through!
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Unknown day");
}

// Fall-through example (intentional)
const status = 2;
switch (status) {
  case 1:
    console.log("One");
  // falls through!
  case 2:
    console.log("Two");
  // falls through!
  case 3:
    console.log("Three");
    break;
  default:
    console.log("Other");
}
// Output: "Two", "Three"

// switch uses strict equality (===)
switch ("1") {
  case 1:
    console.log("number 1"); // NOT this
    break;
  case "1":
    console.log("string '1'"); // ✅ This
    break;
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 23. All Operators

### Arithmetic Operators

```javascript
5 + 3; // 8  (also string concatenation)
5 - 3; // 2
5 * 3; // 15
5 / 2; // 2.5
5 % 2; // 1  (remainder/modulo)
5 ** 2; // 25 (exponentiation, ES7)

let x = 5;
x++; // post-increment: use then add (returns 5, x becomes 6)
++x; // pre-increment: add then use (x becomes 7, returns 7)
x--; // post-decrement
--x; // pre-decrement
```

### Assignment Operators

```javascript
let x = 10;
x += 5; // x = x + 5 = 15
x -= 5; // x = x - 5 = 10
x *= 2; // x = x * 2 = 20
x /= 4; // x = x / 4 = 5
x %= 3; // x = x % 3 = 2
x **= 3; // x = x ** 3 = 8

// Logical assignment (ES2021)
x ||= 100; // x = x || 100  (assign if falsy)
x &&= 100; // x = x && 100  (assign if truthy)
x ??= 100; // x = x ?? 100  (assign if null/undefined)
```

### Comparison Operators

```javascript
5 == "5"; // true  (loose, coerces types)
5 === "5"; // false (strict, no coercion)
5 != "6"; // true
5 !== "5"; // true
5 > 3; // true
5 >= 5; // true
3 < 5; // true
3 <= 3; // true
```

### Logical Operators

```javascript
true && false; // false (AND — both must be true)
true || false; // true  (OR — at least one true)
!true; // false (NOT)

// Short-circuit: returns actual value, not just boolean
"hello" && "world"; // "world"  (last truthy)
"hello" || "world"; // "hello"  (first truthy)
null || "default"; // "default"
false && "skipped"; // false    (short-circuits)

// Nullish coalescing
null ?? "fallback"; // "fallback" (only for null/undefined)
0 ?? "fallback"; // 0         (0 is not null/undefined!)
```

### Bitwise Operators

```javascript
5 & 3; // 1   (AND: 101 & 011 = 001)
5 | 3; // 7   (OR:  101 | 011 = 111)
5 ^ 3; // 6   (XOR: 101 ^ 011 = 110)
~5; // -6  (NOT: flips all bits)
5 << 1; // 10  (left shift: 101 → 1010)
5 >> 1; // 2   (right shift: 101 → 10)
-1 >>> 1; // 2147483647 (unsigned right shift)

// Practical use
const isEven = (n) => (n & 1) === 0; // much faster than n % 2 === 0
Math.floor(3.9) === ~~3.9; // ~~ double-NOT as fast floor for positives
```

### Other Operators

```javascript
// Ternary
condition ? "yes" : "no";

// typeof
typeof "hello"; // "string"

// instanceof
[] instanceof Array; // true
"hi" instanceof String; // false (primitives)

// in — check if property exists
"name" in { name: "Alice" }; // true
2 in [1, 2, 3]; // true (checks index)

// Comma operator (rarely used)
const result = (1, 2, 3); // 3 (evaluates all, returns last)

// Void operator
void 0; // undefined
void "hello"; // undefined

// Optional chaining ?.
const city = user?.address?.city; // undefined if missing, not error

// Spread
const merged = { ...obj1, ...obj2 };
const combined = [...arr1, ...arr2];
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 4: Scope & Closures

### 24. Scope

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

[⬆️ Back to Top](#-table-of-contents)

---

### 25. Function Scope vs Block Scope

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

[⬆️ Back to Top](#-table-of-contents)

---

### 26. Global Scope vs Block Scope

Already covered in [#12](#24-scope) and [#13](#25-function-scope-vs-block-scope)

[⬆️ Back to Top](#-table-of-contents)

---

### 27. Closures

**Definition:**

- **closure** is a combination of function and lexical scoping (Environment) , In This, An inner
  function can able access the outer function variable during the runtime is known as closure , It
  "remembers" its lexical environment

**Key Point:** Inner function "remembers" variables from outer function.

**Simple Example:**

```javascript
function outer() {
  let a = 0;
  function inner() {
    a = a + 1;
    console.log(a);
  }
  return inner;
}

const result = outer();

result(); // 1
result(); // 2
result(); // 3
```

**Visual:**

```
outer() {
    let a = 0;                       ← `a` lives in outer's scope
    └─→ inner() {
            a = a + 1;              ← updates the closed-over `a`
            console.log(a);         ← reads `a` from outer scope
        }
}

Calls:
- const result = outer();   // creates closure: `inner` with access to `a`
- result(); // prints 1  (a: 0 → 1)
- result(); // prints 2  (a: 1 → 2)
- result(); // prints 3  (a: 2 → 3)
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

[⬆️ Back to Top](#-table-of-contents)

---

### 28. Closure Use Cases

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

[⬆️ Back to Top](#-table-of-contents)

---

### 29. Closure Memory Issues

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

[⬆️ Back to Top](#-table-of-contents)

---

### 30. Lexical Scope

**Definition:**  
**Lexical Scope,** also known as static scope, dictates the accessibility of variables and functions
based on where they are defined in the source code

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

[⬆️ Back to Top](#-table-of-contents)

---

### 31. Scope Chain & Function Stack

### Scope Chain

```javascript
const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function middle() {
    const middleVar = "middle";

    function inner() {
      const innerVar = "inner";

      // Can access ALL outer variables
      console.log(innerVar); // "inner"    — own scope
      console.log(middleVar); // "middle"   — middle scope
      console.log(outerVar); // "outer"    — outer scope
      console.log(globalVar); // "global"   — global scope

      // Scope chain: inner → middle → outer → global → null
    }
    inner();
  }
  middle();
}
outer();

// Variable shadowing
const x = "global x";
function test() {
  const x = "local x"; // shadows the global x
  console.log(x); // "local x"
}
test();
console.log(x); // "global x"
```

### Function Stack (Call Stack + Execution Contexts)

```javascript
// Each function call creates a new Execution Context
// pushed onto the Call Stack

function multiply(a, b) {
  return a * b; // 3. Returns 50
}

function square(n) {
  return multiply(n, n); // 2. Calls multiply
}

function printSquare(n) {
  const result = square(n); // 1. Calls square
  console.log(result); // 4. Prints 25
}

printSquare(5);

// Call Stack at step 2:
// ┌───────────────────┐
// │  square(5)        │  ← current
// ├───────────────────┤
// │  printSquare(5)   │
// └───────────────────┘
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 5: Functions & This

### 32. Function Declaration vs Expression

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

[⬆️ Back to Top](#-table-of-contents)

---

### 33. IIFE — Immediately Invoked Function Expression

**IIFE (Immediately Invoked Function Expression)** — a function that runs as soon as it's defined.

```javascript
// Syntax
(function () {
  console.log("IIFE runs immediately!");
})();

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE");
})();

// With arguments
(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");

// With return value
const result = (function () {
  return 42;
})();
console.log(result); // 42
```

**Why use IIFE:**

```javascript
// 1. Create private scope (avoid polluting global)
(function () {
  var privateVar = "can't access from outside";
  // Only accessible here
})();

console.log(typeof privateVar); // "undefined" ✅

// 2. Initialize once
const config = (() => {
  const env = process.env.NODE_ENV;
  return {
    isProduction: env === "production",
    apiUrl:
      env === "production" ? "https://api.prod.com" : "http://localhost:3000",
  };
})();

// 3. Avoid var loop problem (pre-ES6)
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 1000);
  })(i);
}
// Output: 0, 1, 2, 3, 4 ✅

// 4. Module pattern (pre-ES6 modules)
const CounterModule = (function () {
  let count = 0; // Private

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    },
  };
})();

CounterModule.increment();
CounterModule.getCount(); // 1
```

[⬆️ Back to Top](#-table-of-contents)

---

### 34. Arrow Functions vs Normal Functions

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

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 35. this Keyword

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

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 36. this in Arrow Functions

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

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 37. call, apply, bind

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

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 38. Currying

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
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6

// Arrow function version (concise)
const curriedAddArrow = (a) => (b) => (c) => a + b + c;
console.log(curriedAddArrow(1)(2)(3)); // 6
```

**Practical Use Cases:**

```javascript
// 1. Event handling with fixed parameters
const addEvent = (element) => (event) => (handler) => {
  element.addEventListener(event, handler);
};

const addClickToButton = addEvent(document.querySelector("button"));
const addClick = addClickToButton("click");
addClick(() => console.log("Clicked!"));

// 2. Logging with different levels
const log = (level) => (message) => {
  console.log(
    `[${level.toUpperCase()}] ${new Date().toISOString()}: ${message}`,
  );
};

const logError = log("error");
const logInfo = log("info");

logError("Something went wrong!"); // [ERROR] 2024-01-15T10:30:00.000Z: Something went wrong!
logInfo("Operation successful"); // [INFO] 2024-01-15T10:30:01.000Z: Operation successful

// 3. Discount calculator
const discount = (discountPercent) => (price) => {
  return price - (price * discountPercent) / 100;
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
      return function (...nextArgs) {
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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 39. Pure vs Impure Functions

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
const doubled = numbers.map((n) => n * 2); // Pure, can be parallelized

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

  remove: (cart, itemId) => cart.filter((item) => item.id !== itemId),

  getTotal: (cart) => cart.reduce((sum, item) => sum + item.price, 0),
};

// Usage
let cart = [];
cart = PureCart.add(cart, { id: 1, price: 100 });
cart = PureCart.add(cart, { id: 2, price: 200 });
console.log(PureCart.getTotal(cart)); // 300
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 40. Memoization

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

console.time("slow");
console.log(slowFibonacci(40)); // Takes ~2-3 seconds
console.timeEnd("slow");

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

console.time("fast");
console.log(fibonacci(40)); // Instant!
console.timeEnd("fast");
```

**Generic Memoize Function:**

```javascript
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log("Returning from cache");
      return cache[key];
    }

    console.log("Calculating...");
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
      console.log("Cache hit!");
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

  return function (...args) {
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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 41. Recursion & Tail Call Optimization

### Recursion

```javascript
// A function that calls itself until a base case is reached

// Factorial
function factorial(n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
factorial(5); // 120

// Fibonacci
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
fibonacci(10); // 55

// Sum of nested array (recursive)
function sumNested(arr) {
  return arr.reduce((sum, val) => {
    return Array.isArray(val) ? sum + sumNested(val) : sum + val;
  }, 0);
}
sumNested([1, [2, 3], [4, [5, 6]]]); // 21

// Tree traversal
function traverseTree(node) {
  console.log(node.value);
  if (node.left) traverseTree(node.left);
  if (node.right) traverseTree(node.right);
}
```

**Recursion vs Iteration:**

```javascript
// Recursive - elegant but can cause stack overflow for large n
function factRecursive(n) {
  if (n <= 1) return 1;
  return n * factRecursive(n - 1);
}

// Iterative - safer for large inputs
function factIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

### Tail Call Optimization (TCO)

```javascript
// A tail call is when a function call is the LAST action in a function
// TCO allows the engine to reuse the stack frame (no stack overflow)

// NOT tail call (multiplication happens after recursive call)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // multiply happens AFTER call
}

// Tail call version (accumulator pattern)
function factorialTCO(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTCO(n - 1, n * acc); // call is LAST action
}

// Note: TCO is only guaranteed in strict mode and supported
// in some JS engines (not all browsers fully support it)
```

[⬆️ Back to Top](#-table-of-contents)

---

### 42. Generators & Iterators

### Iterators

An **iterator** is any object with a `next()` method that returns `{ value, done }`.

```javascript
// Manual iterator
function createCounter(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

const counter = createCounter(1, 3);
counter.next(); // { value: 1, done: false }
counter.next(); // { value: 2, done: false }
counter.next(); // { value: 3, done: false }
counter.next(); // { value: undefined, done: true }

// Making an object iterable (Symbol.iterator)
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { done: true };
      },
    };
  },
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

### Generators

**Generators** are functions that can pause and resume execution using `yield`.

```javascript
// Syntax: function* (star after 'function')
function* simpleGenerator() {
  console.log("Start");
  yield 1;
  console.log("After first yield");
  yield 2;
  console.log("After second yield");
  yield 3;
  console.log("End");
}

const gen = simpleGenerator();
gen.next(); // "Start",  { value: 1, done: false }
gen.next(); // "After first yield", { value: 2, done: false }
gen.next(); // "After second yield", { value: 3, done: false }
gen.next(); // "End",    { value: undefined, done: true }

// Infinite generator
function* infiniteCounter(start = 0) {
  let i = start;
  while (true) {
    yield i++;
  }
}

const counter = infiniteCounter(5);
counter.next().value; // 5
counter.next().value; // 6
counter.next().value; // 7

// Generator with for...of
function* fibonacci() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
for (let i = 0; i < 8; i++) {
  process.stdout.write(fib.next().value + " ");
}
// 0 1 1 2 3 5 8 13

// Passing values INTO generator with next(value)
function* calculator() {
  const a = yield "Enter first number:";
  const b = yield "Enter second number:";
  yield `Result: ${a + b}`;
}

const calc = calculator();
calc.next(); // { value: "Enter first number:", done: false }
calc.next(10); // { value: "Enter second number:", done: false }
calc.next(20); // { value: "Result: 30", done: false }

// Async with generators (pre-async/await pattern)
function* fetchUser(id) {
  const user = yield fetch(`/api/users/${id}`);
  const posts = yield fetch(`/api/posts?userId=${user.id}`);
  return { user, posts };
}
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 6: Classes

### 43. Classes

**Classes** are syntactic sugar over prototypal inheritance.

```javascript
// Class declaration
class Animal {
  // Constructor — called with 'new'
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  // Method (on prototype, shared by all instances)
  speak() {
    return `${this.name} says ${this.sound}`;
  }

  // Static method (on class itself, not instances)
  static create(name, sound) {
    return new Animal(name, sound);
  }

  // Getter
  get info() {
    return `${this.name} (${this.sound})`;
  }

  // Setter
  set nickname(value) {
    this._nickname = value.toUpperCase();
  }

  get nickname() {
    return this._nickname;
  }
}

const dog = new Animal("Rex", "Woof");
dog.speak(); // "Rex says Woof"
dog.info; // "Rex (Woof)"
dog.nickname = "buddy"; // calls setter
dog.nickname; // "BUDDY" (stored via getter)

Animal.create("Cat", "Meow"); // static method
```

### Inheritance

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof"); // MUST call super first!
    this.breed = breed;
  }

  // Override parent method
  speak() {
    return `${super.speak()} and wags tail`; // can call super.method()
  }

  fetch(item) {
    return `${this.name} fetches the ${item}`;
  }
}

const rex = new Dog("Rex", "Labrador");
rex.speak(); // "Rex says Woof and wags tail"
rex.fetch("ball"); // "Rex fetches the ball"

rex instanceof Dog; // true
rex instanceof Animal; // true
```

### Private Fields & Methods (ES2022)

```javascript
class BankAccount {
  #balance = 0; // private field — only accessible inside class
  #owner;

  constructor(owner, initialBalance) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
    return this; // for chaining
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    return this;
  }

  get balance() {
    return this.#balance;
  }

  // Private method
  #validate(amount) {
    return amount > 0;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500).withdraw(200); // chaining
account.balance; // 1300
account.#balance; // ❌ SyntaxError — truly private!
```

### Class Patterns

```javascript
// Mixins — compose behaviors
const Serializable = (Base) =>
  class extends Base {
    serialize() {
      return JSON.stringify(this);
    }
    static deserialize(data) {
      return Object.assign(new this(), JSON.parse(data));
    }
  };

const Validatable = (Base) =>
  class extends Base {
    validate() {
      return Object.values(this).every((v) => v !== null && v !== undefined);
    }
  };

class User extends Serializable(Validatable(class {})) {
  constructor(name, email) {
    super();
    this.name = name;
    this.email = email;
  }
}

const user = new User("Alice", "alice@example.com");
user.validate(); // true
user.serialize(); // '{"name":"Alice","email":"alice@example.com"}'
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 7: Objects & Prototypes

### 44. How Objects Work Internally

**Definition:**  
In JavaScript, objects are collections of key-value pairs stored in **heap memory**. Variables hold **references** (memory addresses) to objects, not the objects themselves.

**Internal Structure:**

```javascript
// Object creation
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
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
const obj = { name: "Alice" };

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptor);
// {
//     value: 'Alice',
//     writable: true,      // Can be modified
//     enumerable: true,    // Shows in for...in loops
//     configurable: true   // Can be deleted or redefined
// }

// Define property with custom descriptor
Object.defineProperty(obj, "age", {
  value: 30,
  writable: false, // Read-only
  enumerable: true,
  configurable: false, // Cannot be deleted
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
obj.key1 = "value1"; // Hash 'key1', store value at hash location
obj.key2 = "value2"; // Hash 'key2', store value at hash location

console.log(obj.key1); // O(1) lookup
```

**Memory Representation:**

```javascript
// Stack vs Heap
const a = 10; // Primitive - stored in stack
const b = a; // Copy value

const obj1 = { value: 10 }; // Object - stored in heap, reference in stack
const obj2 = obj1; // Copy reference, not object

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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 45. Prototype

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
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

// Create instances
const john = new Person("John", 30);
const jane = new Person("Jane", 25);

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
Car.prototype.brand = "Toyota";
Car.prototype.drive = function (miles) {
  this.mileage += miles;
  return `Driven ${miles} miles`;
};

const car1 = new Car("Camry");
const car2 = new Car("Corolla");

console.log(car1.brand); // 'Toyota' (from prototype)
console.log(car2.brand); // 'Toyota' (from prototype)

car1.drive(100);
car2.drive(50);

console.log(car1.mileage); // 100 (instance property)
console.log(car2.mileage); // 50 (instance property)

// Modify prototype - affects all instances!
Car.prototype.brand = "Honda";
console.log(car1.brand); // 'Honda'
console.log(car2.brand); // 'Honda'

// Override prototype property on instance
car1.brand = "Mazda";
console.log(car1.brand); // 'Mazda' (own property)
console.log(car2.brand); // 'Honda' (prototype property)
```

**Checking Prototype Properties:**

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Dog");

// Check if property exists on instance vs prototype
console.log(dog.hasOwnProperty("name")); // true (instance property)
console.log(dog.hasOwnProperty("speak")); // false (prototype property)

console.log("name" in dog); // true
console.log("speak" in dog); // true

// Get prototype
console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 46. Prototype Chain

**Definition:**  
The prototype chain is the mechanism JavaScript uses to look up props and methods. If a property doesn't exist on an object, JS looks in its prototype, then the prototype's prototype, and so on.

**How Lookup Works:**

```javascript
function Animal() {}
Animal.prototype.breathe = function () {
  return "breathing";
};

function Dog(name) {
  this.name = name;
}

// Set Dog's prototype to Animal instance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return "Woof!";
};

const myDog = new Dog("Buddy");

// Prototype chain lookup:
console.log(myDog.name); // 1. Found on myDog instance
console.log(myDog.bark()); // 2. Found on Dog.prototype
console.log(myDog.breathe()); // 3. Found on Animal.prototype
console.log(myDog.toString()); // 4. Found on Object.prototype

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
  this.type = "shape";
}

Shape.prototype.describe = function () {
  return `This is a ${this.type}`;
};

function Rectangle(width, height) {
  Shape.call(this); // Call parent constructor
  this.width = width;
  this.height = height;
  this.type = "rectangle";
}

// Establish inheritance
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(10, 5);

console.log(rect.width); // 10 (own property)
console.log(rect.area()); // 50 (Rectangle.prototype)
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

const obj = Object.create(Object.create(Object.create(Object.create({}))));

obj.deepProperty = "value";

// Accessing obj.deepProperty is fast (own property)
// Accessing inherited property from 4 levels up is slower
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 47. **proto** vs prototype

**Definition:**

- **`__proto__`**: Property on every object that points to its prototype
- **`prototype`**: Property only on function objects, used as prototype for instances created with `new`

**Key Differences:**

```javascript
function Person(name) {
  this.name = name;
}

const john = new Person("John");

// __proto__ - exists on ALL objects
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Object.__proto__ === Function.prototype); // true

// prototype - exists only on FUNCTIONS
console.log(typeof Person.prototype); // 'object' ?
console.log(typeof john.prototype); // 'undefined' ?

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
MyClass.prototype.method = function () {}; // Correct way
```

**Interview Example:**

```javascript
function Animal() {}
Animal.prototype.species = "animal";

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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 48. Object.create vs Constructor

**Both ways to create objects with prototypal inheritance**

**Constructor Pattern:**

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

const john = new Person("John", 30);
console.log(john.greet()); // "Hi, I'm John"
console.log(john instanceof Person); // true
```

**Object.create Pattern:**

```javascript
const personProto = {
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

const john = Object.create(personProto);
john.name = "John";
john.age = 30;

console.log(john.greet()); // "Hi, I'm John"
console.log(Object.getPrototypeOf(john) === personProto); // true
```

**Comparison:**

| Feature               | Constructor              | Object.create                 |
| --------------------- | ------------------------ | ----------------------------- |
| Syntax                | `new Constructor()`      | `Object.create(proto)`        |
| Initialize properties | In constructor function  | Manually after creation       |
| `instanceof` works    | ? Yes                    | ? No (unless setup properly)  |
| Flexibility           | Less flexible            | More flexible                 |
| Use case              | Traditional OOP patterns | Modern prototypal inheritance |

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

Car.prototype.drive = function (miles) {
  this.mileage += miles;
};

const myCar = new Car("Toyota", 2024);

// ? Use Object.create when:
// - You want more control over inheritance
// - You don't need constructor logic
// - You prefer composition over classes

const driveable = {
  drive(miles) {
    this.mileage += miles;
    return this.mileage;
  },
};

const startable = {
  start() {
    this.isRunning = true;
  },
};

// Compose multiple behaviors
const vehicle = Object.assign(Object.create(driveable), startable, {
  model: "Honda",
  mileage: 0,
});
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 49. Shallow Copy vs Deep Copy

**Shallow Copy:**  
Copies only the first level of properties. Nested objects are still referenced.

**Deep Copy:**  
Creates completely independent copy, including all nested levels.

**Shallow Copy Methods:**

```javascript
const original = {
  name: "John",
  age: 30,
  address: {
    city: "NYC",
    zip: "10001",
  },
};

// Method 1: Spread operator
const copy1 = { ...original };

// Method 2: Object.assign
const copy2 = Object.assign({}, original);

// Method 3: Object.create (different - sets prototype)
const copy3 = Object.create(
  Object.getPrototypeOf(original),
  Object.getOwnPropertyDescriptors(original),
);

// Shallow copy problem
copy1.name = "Jane"; // OK - primitive copied
copy1.address.city = "LA"; // Problem! - object referenced

console.log(original.name); // 'John' ?
console.log(original.address.city); // 'LA' ? (modified!)
```

**Deep Copy Methods:**

```javascript
const original = {
  name: "John",
  age: 30,
  address: {
    city: "NYC",
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  hobbies: ["reading", "gaming"],
};

// Method 1: JSON (limitations: no functions, dates, undefined, circular refs)
const deepCopy1 = JSON.parse(JSON.stringify(original));

// Method 2: structuredClone (modern, best option!)
const deepCopy2 = structuredClone(original);

// Method 3: Custom recursive function
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item));
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
deepCopy2.address.city = "LA";
deepCopy2.hobbies.push("cooking");

console.log(original.address.city); // 'NYC' ? (unchanged)
console.log(original.hobbies); // ['reading', 'gaming'] ? (unchanged)
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 50. How to Clone Objects

**Complete guide to cloning objects:**

```javascript
const person = {
  name: "Alice",
  age: 28,
  skills: ["JS", "React"],
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
  if (obj === null || typeof obj !== "object") return obj;

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
  Object.keys(obj).forEach((key) => {
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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 51. Prevent Object Mutation

**Methods to make objects immutable:**

**1. Object.freeze() - Completely immutable**

```javascript
const obj = { name: "John", age: 30 };
Object.freeze(obj);

obj.name = "Jane"; // Silently fails (or throws in strict mode)
obj.city = "NYC"; // Cannot add
delete obj.age; // Cannot delete

console.log(obj); // { name: 'John', age: 30 } (unchanged)

// Check if frozen
console.log(Object.isFrozen(obj)); // true

// Shallow freeze - nested objects still mutable
const person = {
  name: "Bob",
  address: { city: "LA" },
};

Object.freeze(person);
person.address.city = "NYC"; // Works! (nested not frozen)
console.log(person.address.city); // 'NYC'

// Deep freeze solution
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) {
      deepFreeze(value);
    }
  });
  return obj;
}
```

**2. Object.seal() - Can modify, can't add/delete**

```javascript
const obj = { name: "Alice", age: 25 };
Object.seal(obj);

obj.name = "Bob"; // ? Can modify existing
obj.city = "NYC"; // ? Cannot add
delete obj.age; // ? Cannot delete

console.log(obj); // { name: 'Bob', age: 25 }
console.log(Object.isSealed(obj)); // true
```

**3. Object.preventExtensions() - Can modify/delete, can't add**

```javascript
const obj = { name: "Charlie" };
Object.preventExtensions(obj);

obj.name = "David"; // ? Can modify
delete obj.name; // ? Can delete
obj.age = 30; // ? Cannot add

console.log(Object.isExtensible(obj)); // false
```

**4. const - Only prevents reassignment**

```javascript
const obj = { name: "Eve" };
obj.name = "Frank"; // ? Can mutate properties
obj = {}; // ? Cannot reassign

const arr = [1, 2, 3];
arr.push(4); // ? Can mutate
arr = []; // ? Cannot reassign
```

**Comparison Table:**

| Method                       | Add Properties | Delete Properties | Modify Properties | Reassign Variable |
| ---------------------------- | -------------- | ----------------- | ----------------- | ----------------- |
| `Object.freeze()`            | ?              | ?                 | ?                 | -                 |
| `Object.seal()`              | ?              | ?                 | ?                 | -                 |
| `Object.preventExtensions()` | ?              | ?                 | ?                 | -                 |
| `const`                      | ?              | ?                 | ?                 | ?                 |

**Immutable Update Patterns:**

```javascript
// Instead of mutating, create new objects

// ? Mutation
const user = { name: "John", age: 30 };
user.age = 31;

// ? Immutable update
const user = { name: "John", age: 30 };
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
      name: "Alice",
    },
  },
};

// ? Mutation
state.user.profile.name = "Bob";

// ? Immutable
const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      name: "Bob",
    },
  },
};
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

## Part 8: Arrays

### 52. map, filter, reduce

**These are the three most important array methods for functional programming.**

---

### map() — In-Depth Deep Dive

**Definition:** `map()` creates a **brand-new array** by calling a callback function on *every element* in the original array. It does **NOT** mutate the original array.

**Full Syntax & All Arguments:**

```javascript
const newArray = array.map(callbackFn, thisArg);
```

The callback receives **3 arguments** every time it runs:

```javascript
array.map((currentValue, index, array) => { ... })
```

**Argument 1: `currentValue` (Required)** — The current element being processed:

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2); // num is currentValue
// [2, 4, 6]
```

**Argument 2: `index` (Optional)** — The index of the current element:

```javascript
const items = ['apple', 'banana', 'cherry'];
const indexed = items.map((fruit, index) => `${index + 1}: ${fruit}`);
// ['1: apple', '2: banana', '3: cherry']
```

**Argument 3: `array` (Optional)** — The original array that `map()` was called on:

```javascript
const percentages = [20, 40, 60].map((val, index, arr) => {
  return (val / arr.length); // 'arr' is the original array [20, 40, 60]
});
// [6.67, 13.33, 20]
```

**Second parameter: `thisArg` (Optional)** — Value to use as `this` inside callback. Does NOT work with arrow functions (they lexically bind `this`):

```javascript
const multiplier = { factor: 10 };
const numbers = [1, 2, 3];

// Must use regular function(), NOT arrow function!
const result = numbers.map(function(num) {
  return num * this.factor;
}, multiplier); // <-- 'multiplier' is thisArg

console.log(result); // [10, 20, 30]
```

**What does map() return?**
- Always returns a **new array** of the **same length** as the original
- If you forget `return`, the element becomes `undefined`

```javascript
const nums = [1, 2, 3];
const bad = nums.map(num => { num * 2; }); // Forgot return!
console.log(bad); // [undefined, undefined, undefined]

const good = nums.map(num => num * 2); // Implicit return with arrow
console.log(good); // [2, 4, 6]
```

**⚠️ Classic Tricky Interview Question: `['1', '2', '3'].map(parseInt)`**

```javascript
const result = ['1', '2', '3'].map(parseInt);
console.log(result); // [1, NaN, NaN] — NOT [1, 2, 3]!
```

**Why?** `map` passes 3 args to `parseInt`: `(value, index, array)`.
`parseInt` takes 2 args: `(string, radix/base)`.

- `parseInt('1', 0)` → Radix 0 defaults to base 10 → **1**
- `parseInt('2', 1)` → Radix 1 is invalid → **NaN**
- `parseInt('3', 2)` → '3' is not valid in binary → **NaN**

**Fix:** `['1', '2', '3'].map(str => parseInt(str, 10));` → `[1, 2, 3]`

**Edge Case: Sparse Arrays (Empty Slots)**

```javascript
const arr = [1, 2, , 4]; // Empty slot at index 2
const doubled = arr.map(x => x * 2);
console.log(doubled); // [2, 4, empty, 8] — skips holes but preserves them
```

**Edge Case: Mapping over NodeList (not an Array)**

```javascript
const divs = document.querySelectorAll('div'); // Returns NodeList, NOT Array
// divs.map(...) // ❌ TypeError: divs.map is not a function

// ✅ Fix: Convert to Array first
const texts = Array.from(divs).map(div => div.innerText);
const texts2 = [...divs].map(div => div.innerText);
```

**Common Mistake: Using map for side effects**

```javascript
// ❌ BAD — Don't use map if you don't need the returned array
users.map(user => console.log(user.name)); // Returns [undefined, undefined, ...]

// ✅ GOOD — Use forEach for side effects
users.forEach(user => console.log(user.name));
```

**Advanced: Returning objects (parentheses required!)**

```javascript
const users = [
  { id: 1, first: 'Bruce', last: 'Wayne' },
  { id: 2, first: 'Clark', last: 'Kent' }
];

// ❌ Without parentheses — JS thinks { } is a block, not an object
const bad = users.map(u => { fullName: u.first + ' ' + u.last }); // SyntaxError or undefined

// ✅ With parentheses — wraps the object literal
const good = users.map(({ id, first }) => ({
   userId: id,
   firstName: first
}));
// [{ userId: 1, firstName: 'Bruce' }, { userId: 2, firstName: 'Clark' }]
```

**Polyfill (Write your own map — interview favorite):**

```javascript
Array.prototype.myMap = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) { // Skip sparse/empty slots
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

[1, 2, 3].myMap(x => x * 2); // [2, 4, 6]
```

---

### filter() — In-Depth Deep Dive

**Definition:** `filter()` creates a **new array** containing only elements for which the callback returns a **truthy** value.

**Full Syntax & All Arguments:**

```javascript
const newArray = array.filter(callbackFn, thisArg);
```

The callback receives the same **3 arguments** as map:

```javascript
array.filter((currentValue, index, array) => { ... })
```

**What does filter() return?**
- A **new array** with elements that passed the test
- If NO elements pass → returns **empty array `[]`** (never undefined or null)
- Always returns an array **equal to or shorter** than the original

```javascript
const nums = [1, 2, 3, 4, 5, 6];

const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

const none = nums.filter(n => n > 100);
console.log(none); // [] — empty array, NOT undefined

// Original is unchanged
console.log(nums); // [1, 2, 3, 4, 5, 6]
```

**Using the index argument:**

```javascript
// Keep only elements at even indices
const letters = ['a', 'b', 'c', 'd', 'e'];
const everyOther = letters.filter((_, index) => index % 2 === 0);
console.log(everyOther); // ['a', 'c', 'e']
```

**Using the array argument (remove duplicates):**

```javascript
const nums = [1, 2, 2, 3, 3, 3];
const unique = nums.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(unique); // [1, 2, 3]
```

**Edge Case: Truthy/Falsy filtering**

```javascript
// Remove all falsy values from array
const mixed = [0, 'hello', '', null, undefined, 42, false, 'world', NaN];
const truthy = mixed.filter(Boolean); // Boolean is the callback!
console.log(truthy); // ['hello', 42, 'world']

// This is equivalent to:
const truthy2 = mixed.filter(val => Boolean(val));
// Or:
const truthy3 = mixed.filter(val => !!val);
```

**Edge Case: Sparse Arrays**

```javascript
const arr = [1, , 3, , 5]; // Sparse array with holes
const filtered = arr.filter(() => true); // Removes holes!
console.log(filtered); // [1, 3, 5] — no empty slots
```

**Common Mistake: filter doesn't transform — use map after filter**

```javascript
// ❌ BAD — Don't try to transform inside filter
const names = users.filter(user => user.active).map(user => user.name);

// ❌ WORSE — Returning a transformed value from filter
const bad = [1, 2, 3].filter(n => n * 2); // Returns [1, 2, 3] NOT [2, 4, 6]
// Because n * 2 is truthy for all (2, 4, 6 are all truthy)
```

**Polyfill (Write your own filter — interview favorite):**

```javascript
Array.prototype.myFilter = function(callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

[1, 2, 3, 4, 5].myFilter(n => n > 3); // [4, 5]
```

---

### reduce() — In-Depth Deep Dive

**Definition:** `reduce()` executes a "reducer" callback function on each element, carrying forward an **accumulator** value, and returns a **single final value** (can be any type: number, string, object, array).

**Full Syntax & All Arguments:**

```javascript
const result = array.reduce(callbackFn, initialValue);
```

The callback receives **4 arguments**:

```javascript
array.reduce((accumulator, currentValue, currentIndex, array) => { ... }, initialValue)
```

**Argument 1: `accumulator`** — The running total / accumulated result from previous iterations:

```javascript
const sum = [1, 2, 3, 4].reduce((acc, num) => {
  console.log(`acc: ${acc}, num: ${num}`);
  return acc + num;
}, 0);
// acc: 0, num: 1   → returns 1
// acc: 1, num: 2   → returns 3
// acc: 3, num: 3   → returns 6
// acc: 6, num: 4   → returns 10
// Final: 10
```

**Argument 2: `currentValue`** — The current element being processed.

**Argument 3: `currentIndex`** — Index of the current element (starts at 0 if initialValue provided, starts at 1 if not).

**Argument 4: `array`** — The original array.

**Second parameter: `initialValue` (Critically Important!)**

```javascript
// ✅ WITH initialValue — acc starts as 0, iteration starts at index 0
[1, 2, 3].reduce((acc, num) => acc + num, 0); // 6

// ⚠️ WITHOUT initialValue — acc starts as first element, iteration starts at index 1
[1, 2, 3].reduce((acc, num) => acc + num); // 6 (same result here, but dangerous!)

// ❌ DANGER: Empty array WITHOUT initialValue throws TypeError!
[].reduce((acc, num) => acc + num); // ❌ TypeError: Reduce of empty array with no initial value

// ✅ SAFE: Empty array WITH initialValue returns initialValue
[].reduce((acc, num) => acc + num, 0); // 0
```

**⚠️ Golden Rule: ALWAYS provide an initialValue!** It prevents crashes on empty arrays.

**What does reduce() return?**
- Returns the **final accumulator value** — can be literally ANY type
- Number, string, boolean, object, array, Map, Set, etc.

```javascript
// Return an object
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

const lookup = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});
// { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

// Return an array (flatten)
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// [1, 2, 3, 4, 5, 6]

// Group by property
const people = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' }
];

const grouped = people.reduce((acc, person) => {
  if (!acc[person.role]) {
    acc[person.role] = [];
  }
  acc[person.role].push(person);
  return acc;
}, {});
// { admin: [Alice, Charlie], user: [Bob] }

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 3, banana: 2, orange: 1 }
```

**Common Mistake: Forgetting to return the accumulator**

```javascript
// ❌ BAD — Forgot return, acc becomes undefined on next iteration
const result = [1, 2, 3].reduce((acc, num) => {
  acc + num; // No return!
}, 0);
console.log(result); // undefined

// ✅ GOOD
const result = [1, 2, 3].reduce((acc, num) => acc + num, 0); // 6
```

**Advanced: reduceRight() — same as reduce but iterates right-to-left**

```javascript
const arr = [[1, 2], [3, 4], [5, 6]];

const leftToRight = arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4, 5, 6]

const rightToLeft = arr.reduceRight((acc, val) => acc.concat(val), []);
// [5, 6, 3, 4, 1, 2]
```

**Polyfill (Write your own reduce — interview favorite):**

```javascript
Array.prototype.myReduce = function(callback, initialValue) {
  let accumulator;
  let startIndex;

  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    if (this.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator;
};

[1, 2, 3, 4].myReduce((acc, num) => acc + num, 0); // 10
```

---

### Chaining map + filter + reduce

```javascript
const users = [
  { name: 'Alice', age: 25, score: 85 },
  { name: 'Bob', age: 30, score: 92 },
  { name: 'Charlie', age: 35, score: 78 },
  { name: 'David', age: 28, score: 95 },
];

const result = users
  .filter(user => user.age < 35)           // Keep users under 35
  .map(user => ({ ...user, grade: user.score >= 90 ? 'A' : 'B' }))  // Add grade
  .reduce((acc, user) => acc + user.score, 0); // Sum scores

console.log(result); // 272 (85 + 92 + 95)
```

### map vs filter vs reduce — Quick Comparison

| Method     | Returns            | Purpose                      | Always same length? | Common mistake         |
| ---------- | ------------------ | ---------------------------- | ------------------- | ---------------------- |
| `map()`    | New array          | Transform each element       | ✅ Yes              | Forgetting `return`    |
| `filter()` | New array          | Select matching elements     | ❌ Shorter or equal | Trying to transform    |
| `reduce()` | Any single value   | Accumulate into one result   | N/A                 | No `initialValue`      |
| `forEach`  | `undefined`        | Side effects only            | N/A                 | Expecting a return     |

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 53. When to use reduce

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
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// [1, 2, 3, 4, 5, 6]

// 3. Create lookup map
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
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

const doubled = numbers.map((n) => n * 2); // ✅ Better!

// Don't use reduce for simple filter
const evens = numbers.reduce((acc, n) => {
  if (n % 2 === 0) acc.push(n);
  return acc;
}, []); // ❌

const evens = numbers.filter((n) => n % 2 === 0); // ✅ Better!
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 54. Remove Duplicates from Array

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
numbers.forEach((num) => {
  if (!unique4.includes(num)) {
    unique4.push(num);
  }
});
```

**Removing duplicates from array of objects:**

```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" }, // duplicate
  { id: 3, name: "Charlie" },
];

// Based on property
const uniqueUsers = users.filter(
  (user, index, self) => index === self.findIndex((u) => u.id === user.id),
);

console.log(uniqueUsers);
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }]

// Using Map
const uniqueUsersMap = [
  ...new Map(users.map((user) => [user.id, user])).values(),
];

// Using reduce
const uniqueUsersReduce = users.reduce((acc, user) => {
  if (!acc.find((u) => u.id === user.id)) {
    acc.push(user);
  }
  return acc;
}, []);
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 55. Flatten Nested Array

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
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}

const deepFlat2 = flattenDeep(deepArr);

// Method 3: toString + split (only for numbers)
const deepFlat3 = deepArr.toString().split(",").map(Number);

// Flatten with specific depth
const arr = [1, [2, [3, [4]]]];
console.log(arr.flat(1)); // [1, 2, [3, [4]]]
console.log(arr.flat(2)); // [1, 2, 3, [4]]
console.log(arr.flat(3)); // [1, 2, 3, 4]
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 56. slice vs splice

---

### slice() — In-Depth Deep Dive

**Definition:** `slice()` extracts a portion of an array and returns it as a **new array**. The original array is **NEVER modified**.

**Full Syntax & All Arguments:**

```javascript
array.slice(startIndex, endIndex)
```

**Argument 1: `startIndex` (Optional)** — Where to start extraction (inclusive). Defaults to `0`.

**Argument 2: `endIndex` (Optional)** — Where to stop extraction (**exclusive** — element at this index is NOT included). Defaults to `array.length`.

```javascript
const arr = [10, 20, 30, 40, 50];

arr.slice(1, 3);   // [20, 30] — from index 1 up to (NOT including) 3
arr.slice(2);      // [30, 40, 50] — from index 2 to the end
arr.slice();       // [10, 20, 30, 40, 50] — shallow copy of entire array
arr.slice(0, 1);   // [10] — just the first element
```

**What does slice() return?**
- A **new array** containing the extracted elements
- **Empty array `[]`** if no elements are in range
- Original array is **never modified**

**Edge Case: Negative indices (count from the end)**

```javascript
const arr = [10, 20, 30, 40, 50];

arr.slice(-2);     // [40, 50] — last 2 elements
arr.slice(-3, -1); // [30, 40] — from 3rd-last to 1st-last (exclusive)
arr.slice(1, -1);  // [20, 30, 40] — from index 1 to all but last
```

**Edge Case: Out-of-bounds indices**

```javascript
const arr = [10, 20, 30];

arr.slice(0, 100); // [10, 20, 30] — end clamped to array.length
arr.slice(5);      // [] — start beyond array, empty result
arr.slice(2, 1);   // [] — start > end, empty result
```

**Edge Case: slice on strings (works similarly!)**

```javascript
'hello'.slice(1, 3); // 'el'
'hello'.slice(-3);   // 'llo'
```

**Common Use: Convert array-like objects to real arrays**

```javascript
function example() {
  const args = Array.prototype.slice.call(arguments); // Old way
  const args2 = [...arguments]; // Modern way
  const args3 = Array.from(arguments); // Also modern
}
```

---

### splice() — In-Depth Deep Dive

**Definition:** `splice()` changes the contents of an array by removing, replacing, or adding elements **in place**. It **MUTATES** the original array.

**Full Syntax & All Arguments:**

```javascript
array.splice(startIndex, deleteCount, item1, item2, ...)
```

**Argument 1: `startIndex` (Required)** — Index at which to start changing the array.

**Argument 2: `deleteCount` (Optional)** — Number of elements to remove starting from `startIndex`. If `0`, no elements are removed (insert only). If omitted, removes everything from `startIndex` to end.

**Argument 3+: `items` (Optional)** — Elements to insert at the `startIndex` position.

**What does splice() return?**
- An **array of the removed elements**
- Returns `[]` if no elements were removed

```javascript
const arr = [1, 2, 3, 4, 5];

// DELETE: Remove 2 elements starting at index 1
const removed = arr.splice(1, 2);
console.log(removed); // [2, 3] — what was removed
console.log(arr);     // [1, 4, 5] — MODIFIED!

// INSERT: At index 1, remove 0 elements, insert 'a', 'b'
arr.splice(1, 0, 'a', 'b');
console.log(arr);     // [1, 'a', 'b', 4, 5]

// REPLACE: At index 0, remove 1 element, insert 'X'
arr.splice(0, 1, 'X');
console.log(arr);     // ['X', 'a', 'b', 4, 5]
```

**Edge Case: Negative startIndex**

```javascript
const arr = [1, 2, 3, 4, 5];

arr.splice(-2, 1);   // Removes 1 element starting from 2nd-last
console.log(arr);     // [1, 2, 3, 5]
```

**Edge Case: deleteCount omitted vs 0**

```javascript
const arr = [1, 2, 3, 4, 5];

arr.splice(2);       // Removes everything from index 2 onward!
console.log(arr);     // [1, 2]

const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0);   // Removes nothing (deleteCount is 0)
console.log(arr2);    // [1, 2, 3, 4, 5]
```

**⚠️ Common Interview Trap: "Which one mutates?"**

```javascript
const original = [1, 2, 3, 4, 5];

// slice() — safe, non-destructive
const copy = original.slice(1, 3);   // [2, 3]
console.log(original);               // [1, 2, 3, 4, 5] ✅ unchanged

// splice() — dangerous, destructive
const removed = original.splice(1, 2); // [2, 3]
console.log(original);                 // [1, 4, 5] ⚠️ CHANGED!
```

**Mnemonic:** "spl**ICE** = **I** **C**hange **E**verything" (it mutates)

**Comparison:**

| Feature          | slice()                           | splice()                       |
| ---------------- | --------------------------------- | ------------------------------ |
| Mutates original | ❌ No — pure function             | ✅ Yes — modifies in place     |
| Parameters       | (start, end)                      | (start, deleteCount, ...items) |
| End index        | **Exclusive** (not included)      | N/A (uses count, not end)      |
| Return value     | New array with extracted elements | Array of removed elements      |
| Can insert       | ❌ No                             | ✅ Yes                         |
| Can delete       | ❌ No (just doesn't include)      | ✅ Yes                         |
| Use case         | Get copy or portion safely        | Add/remove/replace in place    |

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 57. find vs filter

---

### find() — In-Depth Deep Dive

**Definition:** `find()` returns the **first element** in the array that satisfies the callback. It **stops searching** immediately after finding a match.

**Full Syntax & All Arguments:**

```javascript
array.find(callbackFn, thisArg)
```

Callback receives **3 arguments** (same as map/filter):

```javascript
array.find((currentValue, index, array) => { ... })
```

**What does find() return?**
- The **first matching element itself** (not wrapped in an array)
- **`undefined`** if no element matches — NOT `null`, NOT `[]`

```javascript
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 30 }
];

const user = users.find(u => u.age === 30);
console.log(user); // { id: 2, name: 'Bob', age: 30 } — FIRST match only, stops here

const notFound = users.find(u => u.age === 99);
console.log(notFound); // undefined
```

**⚠️ Interview Gotcha: find returns objects by REFERENCE**

```javascript
const users = [{ name: 'Alice', active: false }];
const found = users.find(u => u.name === 'Alice');
found.active = true; // ⚠️ This MUTATES the original array's object!
console.log(users[0].active); // true — changed!
```

**Performance: find is faster than filter when you only need one result**

```javascript
// ❌ Wasteful — filter checks ALL elements, then you take first
const user = users.filter(u => u.id === 1)[0];

// ✅ Efficient — find stops at first match
const user = users.find(u => u.id === 1);
```

---

### filter() — Quick Recap (full details in topic 52)

```javascript
const allAge30 = users.filter(u => u.age === 30);
console.log(allAge30);
// [{ id: 2, name: 'Bob', age: 30 }, { id: 3, name: 'Charlie', age: 30 }]

// Returns [] if none match (never undefined)
const none = users.filter(u => u.age === 99);
console.log(none); // []
```

### Comparison:

| Feature     | find()                              | filter()                |
| ----------- | ----------------------------------- | ----------------------- |
| Returns     | Single element or **`undefined`**   | Array (can be empty `[]`) |
| Stops at    | **First match** (short-circuits)    | Checks **all elements** |
| Performance | ✅ Faster (stops early)             | Slower (full scan)      |
| Use when    | Need ONE item (e.g., find by ID)    | Need ALL matching items |
| Mutates?    | ❌ No (but returned ref can mutate) | ❌ No                   |

### All 4 Related "find" Methods:

```javascript
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 30 }
];

// find() — first matching ELEMENT
users.find(u => u.age === 30); // { id: 2, name: 'Bob', age: 30 }

// findIndex() — INDEX of first match (-1 if not found)
users.findIndex(u => u.age === 30); // 1

// findLast() — LAST matching element (ES2023)
users.findLast(u => u.age === 30); // { id: 3, name: 'Charlie', age: 30 }

// findLastIndex() — INDEX of last match (ES2023)
users.findLastIndex(u => u.age === 30); // 2

// Edge case: not found
users.find(u => u.age === 99);          // undefined
users.findIndex(u => u.age === 99);     // -1
users.findLast(u => u.age === 99);      // undefined
users.findLastIndex(u => u.age === 99); // -1
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 58. some vs every

---

### some() — In-Depth Deep Dive

**Definition:** `some()` tests whether **at least one element** passes the callback test. Returns `true` if ANY element passes, `false` if NONE pass.

**Full Syntax & All Arguments:**

```javascript
array.some(callbackFn, thisArg)
```

Callback receives **3 arguments**: `(currentValue, index, array)`

**What does some() return?**
- **`true`** if at least one callback returns truthy
- **`false`** if ALL callbacks return falsy
- **Short-circuits** — stops iterating as soon as it finds a `true`

```javascript
const nums = [1, 3, 5, 7, 8];
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true — found 8, stopped immediately

// Proving short-circuit behavior:
[1, 2, 3, 4, 5].some(n => {
  console.log('Checking:', n);
  return n === 2;
});
// Checking: 1
// Checking: 2   ← stops here, doesn't check 3, 4, 5
```

**⚠️ Edge Case: Empty array ALWAYS returns `false`**

```javascript
[].some(() => true);  // false — no elements to test!
[].some(() => false); // false
```

---

### every() — In-Depth Deep Dive

**Definition:** `every()` tests whether **ALL elements** pass the callback test. Returns `true` only if EVERY element passes.

**Full Syntax & All Arguments:**

```javascript
array.every(callbackFn, thisArg)
```

Callback receives the same **3 arguments**: `(currentValue, index, array)`

**What does every() return?**
- **`true`** if ALL callbacks return truthy
- **`false`** if ANY callback returns falsy
- **Short-circuits** — stops iterating as soon as it finds a `false`

```javascript
const nums = [2, 4, 6, 7, 8];
const allEven = nums.every(n => n % 2 === 0);
console.log(allEven); // false — found 7 (odd), stopped immediately
```

**⚠️ Edge Case: Empty array ALWAYS returns `true` (vacuous truth!)**

```javascript
[].every(() => false);  // true — no elements to fail!
[].every(() => true);   // true

// This is "vacuous truth" — like saying "All unicorns in this room can fly"
// Since there are no unicorns, the statement is vacuously true.
```

**This is an interview favorite! "What does `[].every(x => x > 0)` return?"** → `true`

---

### Practical Real-World Examples

```javascript
// 1. Form validation — ALL fields must be valid
const formFields = [
  { name: 'email', valid: true },
  { name: 'password', valid: true },
  { name: 'age', valid: false }
];

const formIsValid = formFields.every(field => field.valid); // false
const hasAnyError = formFields.some(field => !field.valid); // true

// 2. Permissions — does user have required permission?
const userPerms = ['read', 'write'];

const canWrite = userPerms.some(p => p === 'write'); // true

const hasAllRequired = ['read', 'write', 'delete'].every(
  p => userPerms.includes(p)
); // false — missing 'delete'

// 3. Array contains specific values?
const arr = [1, 2, 3, 4, 5];
const containsThree = arr.some(n => n === 3); // true
// Same as: arr.includes(3)  — simpler for exact match
```

### some vs every vs includes — When to use which?

| Method      | Use case                              | Returns   |
| ----------- | ------------------------------------- | --------- |
| `some()`    | Complex condition on ANY element      | `boolean` |
| `every()`   | Complex condition on ALL elements     | `boolean` |
| `includes()`| Simple exact value check              | `boolean` |
| `find()`    | Need the actual matching element      | element   |

```javascript
const nums = [10, 20, 30];

nums.includes(20);           // true — simple value check
nums.some(n => n > 15);      // true — complex condition
nums.every(n => n > 5);      // true — ALL match?
nums.find(n => n > 15);      // 20 — need the VALUE, not just boolean
```

**Polyfill (Write your own some — interview favorite):**

```javascript
Array.prototype.mySome = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true; // Short-circuit on first truthy
      }
    }
  }
  return false;
};

Array.prototype.myEvery = function(callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false; // Short-circuit on first falsy
      }
    }
  }
  return true;
};
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 59. Array Immutability

**Visual Memory Representation:**

**Primitives (Stack):**

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”�
â”‚ a = 10 â”‚ 10 â”‚
â”‚ b = 10 â”‚ 10 â”‚ â†� Separate values
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Non-Primitives (Heap + Stack):
Stack: Heap:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”� â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”�
â”‚ obj1 â”‚ 0x001 â”‚â”€â†’â”‚ { name: 'John' }â”‚
â”‚ obj2 â”‚ 0x002 â”‚â”€â†’â”‚ { name: 'Jane' }â”‚
â”‚ obj3 â”‚ 0x001 â”‚â”€â†’â”‚ (same as obj1) â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

**Why immutability matters:**

- Predictable state changes
- Easier debugging
- Enables time-travel debugging
- Required for React state updates

**Mutable methods (modify original):**

```javascript
const arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
arr.shift(); // [2, 3]
arr.unshift(0); // [0, 2, 3]
arr.splice(1, 1); // [0, 3]
arr.reverse(); // [3, 0]
arr.sort(); // [0, 3]
arr[0] = 99; // [99, 3]
```

**Immutable alternatives:**

```javascript
const arr = [1, 2, 3];

// Instead of push - use spread or concat
const newArr1 = [...arr, 4]; // [1, 2, 3, 4]
const newArr2 = arr.concat(4); // [1, 2, 3, 4]

// Instead of pop - use slice
const newArr3 = arr.slice(0, -1); // [1, 2]

// Instead of shift - use slice
const newArr4 = arr.slice(1); // [2, 3]

// Instead of unshift - use spread
const newArr5 = [0, ...arr]; // [0, 1, 2, 3]

// Instead of splice - use slice + spread
const removed = arr.slice(0, 1).concat(arr.slice(2)); // [1, 3]

// Instead of reverse - spread + reverse
const newArr6 = [...arr].reverse(); // [3, 2, 1]

// Instead of sort - spread + sort
const newArr7 = [...arr].sort((a, b) => b - a); // [3, 2, 1]

// Instead of arr[i] = value - use map or spread
const newArr8 = arr.map((val, i) => (i === 0 ? 99 : val)); // [99, 2, 3]
const newArr9 = [...arr.slice(0, 0), 99, ...arr.slice(1)]; // [99, 2, 3]
```

**Immutable update patterns:**

```javascript
const todos = [
  { id: 1, text: "Learn JS", done: false },
  { id: 2, text: "Learn React", done: false },
];

// Add item
const addTodo = [...todos, { id: 3, text: "Learn Node", done: false }];

// Update item
const toggleTodo = todos.map((todo) =>
  todo.id === 1 ? { ...todo, done: true } : todo,
);

// Delete item
const deleteTodo = todos.filter((todo) => todo.id !== 1);

// Replace item
const replaceTodo = todos.map((todo) =>
  todo.id === 1 ? { id: 1, text: "Learn TypeScript", done: false } : todo,
);
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

## Part 9: Asynchronous JavaScript

### 60. Synchronous vs Asynchronous

**Synchronous (Blocking):**  
Code executes line by line. Each operation must complete before the next one starts.

```javascript
// Synchronous example
console.log("Start");
console.log("Middle");
console.log("End");

// Output (in order):
// Start
// Middle
// End

// Blocking operation
function slowTask() {
  const start = Date.now();
  while (Date.now() - start < 3000) {} // Block for 3 seconds
  return "Done";
}

console.log("Before");
const result = slowTask(); // Blocks everything for 3 seconds!
console.log(result);
console.log("After");
```

**Asynchronous (Non-blocking):**  
Operations can start without waiting for previous ones to complete.

```javascript
// Asynchronous example
console.log("Start");

setTimeout(() => {
  console.log("Async operation");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Async operation (after 2 seconds)

// Non-blocking operation
console.log("Before");
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
console.log("After"); // Doesn't wait for fetch!
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
  const data = await fetch("/api/data");
  return data.json();
}

button.onclick = async () => {
  const data = await fetchDataAsync(); // UI remains responsive!
  display(data);
};
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 61. setTimeout & setInterval

```javascript
// setTimeout — run ONCE after delay (ms)
const timerId = setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

// Cancel before it runs
clearTimeout(timerId);

// setTimeout with arguments
setTimeout(
  (name, age) => {
    console.log(`${name} is ${age}`);
  },
  1000,
  "Alice",
  25,
);

// Recursive setTimeout (better than setInterval for async tasks)
function runAfterDelay() {
  doSomethingAsync().then(() => {
    setTimeout(runAfterDelay, 1000); // next run after async completes
  });
}

// setInterval — run REPEATEDLY every delay (ms)
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);
  if (count >= 5) {
    clearInterval(intervalId); // stop after 5 ticks
  }
}, 1000);

// Practical: countdown timer
function startCountdown(seconds) {
  let remaining = seconds;

  const id = setInterval(() => {
    console.log(remaining--);
    if (remaining < 0) {
      clearInterval(id);
      console.log("Time's up!");
    }
  }, 1000);
}

startCountdown(5);

// Important: minimum delay
setTimeout(() => {}, 0); // Not 0ms — usually ~4ms minimum in browsers
// Still goes through event loop — macrotask queue
```

[⬆️ Back to Top](#-table-of-contents)

---

### 62. XMLHttpRequest

**XHR** — the original way to make HTTP requests before `fetch`.

```javascript
// Basic GET request
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/users");

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error("Error:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Network error");
};

xhr.send();

// POST request with JSON body
const xhr2 = new XMLHttpRequest();
xhr2.open("POST", "https://api.example.com/users");
xhr2.setRequestHeader("Content-Type", "application/json");

xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4) {
    // DONE
    if (xhr2.status === 201) {
      console.log("Created:", JSON.parse(xhr2.responseText));
    }
  }
};

xhr2.send(JSON.stringify({ name: "Alice", age: 25 }));

// readyState values:
// 0 — UNSENT
// 1 — OPENED
// 2 — HEADERS_RECEIVED
// 3 — LOADING
// 4 — DONE

// XHR vs Fetch comparison
// XHR: verbose, callback-based, works in all browsers
// fetch: promise-based, cleaner, modern browsers only
```

[⬆️ Back to Top](#-table-of-contents)

---

### 63. Event Loop

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
console.log("1: Sync");

setTimeout(() => {
  console.log("2: Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise");
});

console.log("4: Sync");

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
console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
  Promise.resolve().then(() => console.log("Promise in Timeout"));
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("Timeout in Promise"), 0);
  })
  .then(() => console.log("Promise 2"));

setTimeout(() => console.log("Timeout 2"), 0);

console.log("End");

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

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 64. Microtask Queue vs Macrotask Queue

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
setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"))
  .then(() => console.log("Promise 3"));

setTimeout(() => console.log("Timeout 2"), 0);

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
console.log("Script start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
    setTimeout(() => console.log("setTimeout in Promise"), 0);
  })
  .then(() => {
    console.log("Promise 2");
  });

queueMicrotask(() => {
  console.log("queueMicrotask");
});

console.log("Script end");

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
    console.log("Microtask");
    recursiveMicrotask(); // Creates another microtask
  });
}

recursiveMicrotask();

setTimeout(() => {
  console.log("This will NEVER run!"); // Starved by microtasks
}, 0);
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 65. Promise States

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
    resolve("Success!"); // → Fulfilled
  } else {
    reject("Failed!"); // → Rejected
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

const fulfilledPromise = Promise.resolve("Success");
console.log(fulfilledPromise); // Promise { 'Success' }

const rejectedPromise = Promise.reject("Error");
console.log(rejectedPromise); // Promise { <rejected> 'Error' }

// Handling states
promise
  .then((result) => {
    // Fulfilled state
    console.log("Success:", result);
  })
  .catch((error) => {
    // Rejected state
    console.log("Error:", error);
  })
  .finally(() => {
    // Runs regardless of state
    console.log("Cleanup");
  });
```

**Real-World Example:**

```javascript
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // Pending...

    fetch(`/api/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("User not found");
      })
      .then((data) => resolve(data)) // → Fulfilled
      .catch((error) => reject(error)); // → Rejected
  });
}

// Usage
fetchUser(123)
  .then((user) => console.log("Got user:", user))
  .catch((error) => console.error("Failed:", error));
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 66. Promise Chaining

**Sequential async operations:**

```javascript
// Without chaining (callback hell)
fetch("/api/user")
  .then((response) => response.json())
  .then((user) => {
    fetch(`/api/posts?userId=${user.id}`)
      .then((response) => response.json())
      .then((posts) => {
        console.log(posts);
      });
  });

// ✅ With chaining (clean!)
fetch("/api/user")
  .then((response) => response.json())
  .then((user) => fetch(`/api/posts?userId=${user.id}`))
  .then((response) => response.json())
  .then((posts) => console.log(posts))
  .catch((error) => console.error(error));
```

**Returning Values:**

```javascript
Promise.resolve(1)
  .then((x) => x + 1) // return 2
  .then((x) => x * 2) // return 4
  .then((x) => x ** 2) // return 16
  .then((result) => console.log(result)); // 16

// Return promise to chain
Promise.resolve(1)
  .then((x) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(x * 2), 1000);
    });
  })
  .then((result) => console.log(result)); // 2 (after 1 second)
```

**Error Handling in Chains:**

```javascript
Promise.resolve(1)
  .then((x) => {
    if (x < 2) throw new Error("Too small");
    return x;
  })
  .then((x) => x * 2) // Skipped due to error
  .then((x) => x + 1) // Skipped
  .catch((error) => {
    console.error("Caught:", error.message);
    return 10; // Recover from error
  })
  .then((x) => console.log("Recovered:", x)); // 10

// Multiple catches
fetch("/api/data")
  .then((response) => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .catch((error) => {
    console.error("Fetch failed:", error);
    return { fallback: true };
  })
  .then((data) => process(data))
  .catch((error) => {
    console.error("Processing failed:", error);
  });
```

**Best Practices:**

```javascript
// ✅ Return promises in then()
function goodChain() {
  return fetch("/api/data")
    .then((response) => response.json()) // Return promise
    .then((data) => processData(data)); // Return value or promise
}

// ❌ Forgetting to return
function badChain() {
  return fetch("/api/data")
    .then((response) => {
      response.json(); // Forgot return! Returns undefined
    })
    .then((data) => console.log(data)); // data is undefined!
}
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 67. async/await - How it Works

**Definition:**  
`async/await` is syntactic sugar over Promises, making asynchronous code look synchronous.

**Basic Syntax:**

```javascript
// Promise version
function fetchData() {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
}

// async/await version (cleaner!)
async function fetchData() {
  const response = await fetch("/api/data");
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

example().then((result) => console.log(result)); // 42

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
  return Promise.all([delay(1000), delay(1000), delay(1000)]);
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
    console.error("Error:", error);
    throw error;
  }
}

// Usage
getUserWithPosts(123)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 68. Error Handling in async/await

**try/catch with async/await:**

```javascript
async function fetchData() {
  try {
    const response = await fetch("/api/data");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw or handle
  } finally {
    console.log("Cleanup happens here");
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
    console.error("Operation failed:", error);
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
      throw new Error("Not Found");
    }

    if (response.status === 401) {
      throw new Error("Unauthorized");
    }

    if (!response.ok) {
      throw new Error("Network error");
    }

    return await response.json();
  } catch (error) {
    if (error.message === "Not Found") {
      return { fallback: true };
    }

    if (error.message === "Unauthorized") {
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
      fetchComments(),
    ]);

    return { users, posts, comments };
  } catch (error) {
    // If ANY promise rejects, comes here
    console.error("One or more requests failed:", error);
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 69. Promise.all vs Promise.allSettled vs Promise.race

**Promise.all() - All or nothing**

```javascript
// All promises must succeed
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(results),
); // [1, 2, 3]

// If ANY fails, entire thing fails
const failing = Promise.reject("Error");
Promise.all([promise1, promise2, failing])
  .then((results) => console.log("Success"))
  .catch((error) => console.error(error)); // 'Error'
```

**Promise.allSettled() - Wait for all, regardless of outcome**

```javascript
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(3);

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

// Output:
// [
//     { status: 'fulfilled', value: 1 },
//     { status: 'rejected', reason: 'Error' },
//     { status: 'fulfilled', value: 3 }
// ]
```

**Promise.race() - First to finish wins**

```javascript
const slow = new Promise((resolve) => setTimeout(() => resolve("slow"), 2000));
const fast = new Promise((resolve) => setTimeout(() => resolve("fast"), 100));

Promise.race([slow, fast]).then((result) => console.log(result)); // 'fast'

// Timeout pattern
function fetchWithTimeout(url, timeout = 5000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout")), timeout),
    ),
  ]);
}
```

**Promise.any() - First fulfilled wins (ES2021)**

```javascript
const p1 = Promise.reject("Error 1");
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success"), 100));
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3]).then((result) => console.log(result)); // 'Success'

// If ALL reject
Promise.any([Promise.reject(1), Promise.reject(2)]).catch((error) =>
  console.log(error),
); // AggregateError
```

**Comparison Table:**

| Method                 | Resolves when  | Rejects when             | Use case                        |
| ---------------------- | -------------- | ------------------------ | ------------------------------- |
| `Promise.all()`        | ALL fulfill    | ANY rejects              | Parallel deps, all must succeed |
| `Promise.allSettled()` | ALL settle     | Never                    | Want all results regardless     |
| `Promise.race()`       | FIRST settles  | FIRST rejects (if first) | Timeout, fastest response       |
| `Promise.any()`        | FIRST fulfills | ALL reject               | Fallback URLs, redundancy       |

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 70. Callback Hell

**Definition:**  
Nested callbacks that make code hard to read and maintain (also called "Pyramid of Doom").

**The Problem:**

```javascript
// ❌ Callback Hell
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        getMoreData(d, function (e) {
          console.log(e);
        });
      });
    });
  });
});

// Real example
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.error(err);

  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);

    fs.writeFile("output.txt", data1 + data2, (err) => {
      if (err) return console.error(err);

      console.log("Success");
    });
  });
});
```

**Solutions:**

**1. Named Functions:**

```javascript
function readFile1(callback) {
  fs.readFile("file1.txt", "utf8", (err, data) => {
    if (err) return console.error(err);
    callback(data);
  });
}

function readFile2(data1, callback) {
  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);
    callback(data1, data2);
  });
}

function writeFile(data1, data2) {
  fs.writeFile("output.txt", data1 + data2, (err) => {
    if (err) return console.error(err);
    console.log("Success");
  });
}

readFile1((data1) => {
  readFile2(data1, writeFile);
});
```

**2. Promises:**

```javascript
// ✅ Much cleaner!
readFilePromise("file1.txt")
  .then((data1) =>
    readFilePromise("file2.txt").then((data2) => ({ data1, data2 })),
  )
  .then(({ data1, data2 }) => writeFilePromise("output.txt", data1 + data2))
  .then(() => console.log("Success"))
  .catch((error) => console.error(error));
```

**3. async/await (Best!):**

```javascript
// ✅ Cleanest!
async function processFiles() {
  try {
    const data1 = await readFilePromise("file1.txt");
    const data2 = await readFilePromise("file2.txt");
    await writeFilePromise("output.txt", data1 + data2);
    console.log("Success");
  } catch (error) {
    console.error(error);
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 71. What is a Callback?

**Definition:**  
A callback is a function passed as an argument to another function, to be executed later.

**Types of Callbacks:**

**1. Synchronous Callbacks:**

```javascript
// Array methods
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num); // Callback executed immediately
});

const doubled = numbers.map((num) => num * 2); // Callback for each element

// Custom callback
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Execute immediately
}

greet("Alice", () => console.log("Nice to meet you"));
```

**2. Asynchronous Callbacks:**

```javascript
// setTimeout
setTimeout(() => {
  console.log("Executed after 1 second");
}, 1000);

// Event handlers
button.addEventListener("click", () => {
  console.log("Button clicked");
});

// Fetch
fetch("/api/data")
  .then((response) => response.json()) // Callback
  .then((data) => console.log(data)); // Another callback
```

**Callback Patterns:**

```javascript
// Node.js error-first callback
fs.readFile("file.txt", (error, data) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("Data:", data);
});

// Success/error callbacks
function loadData(successCallback, errorCallback) {
  fetch("/api/data")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed");
    })
    .then((data) => successCallback(data))
    .catch((error) => errorCallback(error));
}

loadData(
  (data) => console.log("Success:", data),
  (error) => console.error("Error:", error),
);
```

**Creating Callback-based Functions:**

```javascript
// Custom callback function
function fetchUserData(userId, callback) {
  setTimeout(() => {
    const user = { id: userId, name: "John" };
    callback(null, user); // Error-first pattern
  }, 1000);
}

// Usage
fetchUserData(123, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("User:", user);
});
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

### 72. Promise Chain Example

**Complete Real-World Example:**

```javascript
// User authentication and data loading flow
function loginUser(credentials) {
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Login failed");
      return response.json();
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
      return data.user;
    });
}

function fetchUserProfile(userId) {
  return fetch(`/api/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    if (!response.ok) throw new Error("Profile fetch failed");
    return response.json();
  });
}

function fetchUserPosts(userId) {
  return fetch(`/api/posts?userId=${userId}`).then((response) =>
    response.json(),
  );
}

// Complete chain
loginUser({ email: "user@example.com", password: "pass123" })
  .then((user) => {
    console.log("Logged in:", user);
    return fetchUserProfile(user.id);
  })
  .then((profile) => {
    console.log("Profile loaded:", profile);
    return fetchUserPosts(profile.id);
  })
  .then((posts) => {
    console.log("Posts loaded:", posts);
    return posts.length;
  })
  .then((count) => {
    console.log(`User has ${count} posts`);
  })
  .catch((error) => {
    console.error("Error in chain:", error);
    // Redirect to login page or show error
  })
  .finally(() => {
    console.log("Loading complete");
    hideLoadingSpinner();
  });
```

**With Error Recovery:**

```javascript
fetch("/api/primary-data")
  .then((response) => {
    if (!response.ok) throw new Error("Primary failed");
    return response.json();
  })
  .catch((error) => {
    console.warn("Primary failed, trying backup");
    return fetch("/api/backup-data").then((response) => response.json());
  })
  .then((data) => {
    // Works with either primary or backup data
    processData(data);
  })
  .catch((error) => {
    // Both failed
    console.error("All sources failed:", error);
    showErrorMessage();
  });
```

[⬆️ Back to Top](#-table-of-contents)

---

📝 [Back to Top](#-table-of-contents)

## Part 10: Browser & Web APIs

### 73. DOM - Document Object Model

**Definition:** The DOM is a programming interface for HTML documents. It represents the page structure as a tree of objects that can be manipulated with JavaScript.

```javascript
// Selecting elements
const element = document.getElementById("myId");
const elements = document.querySelectorAll(".myClass");
const div = document.querySelector("div");

// Creating/modifying elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello";
newDiv.className = "container";
document.body.appendChild(newDiv);

// Modifying attributes
element.setAttribute("data-value", "123");
element.classList.add("active");
element.style.color = "red";

// Event handling
element.addEventListener("click", (e) => {
  console.log("Clicked!", e.target);
});
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 74. localStorage vs sessionStorage vs cookies

**localStorage:**

- Persists until explicitly cleared
- 5-10MB storage
- Same-origin only
- Synchronous API

```javascript
localStorage.setItem("user", JSON.stringify({ name: "John" }));
const user = JSON.parse(localStorage.getItem("user"));
localStorage.removeItem("user");
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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 56-62. CORS, Same-Origin Policy, URL Resolution, Browser Rendering

**CORS:** Cross-Origin Resource Sharing allows servers to specify who can access their resources.

**Same-Origin Policy:** Browser security that restricts how documents/scripts from one origin can interact with resources from another origin.

**Browser Rendering:** HTML ? DOM Tree, CSS ? CSSOM Tree ? Render Tree ? Layout ? Paint

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

## Part 11: ES6+ Features

### 82. ES6 Features Overview

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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 83. let, const vs var

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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 84. Destructuring — In-Depth Deep Dive

**Definition:** Destructuring is a syntax to **unpack values** from arrays or **extract properties** from objects into distinct variables.

---

### Object Destructuring

**Full Syntax & All Patterns:**

```javascript
const user = { name: 'Alice', age: 25, city: 'NYC', role: 'admin' };

// Basic — extract properties into variables
const { name, age } = user;
console.log(name); // 'Alice'
console.log(age);  // 25

// Renaming — extract to a DIFFERENT variable name
const { name: userName, age: userAge } = user;
console.log(userName); // 'Alice'
console.log(userAge);  // 25
// 'name' and 'age' are NOT defined here

// Default values — if property doesn't exist
const { name, country = 'Unknown' } = user;
console.log(country); // 'Unknown' (user.country is undefined)

// Rename + Default combined
const { name: n, country: c = 'USA' } = user;
console.log(c); // 'USA'

// Rest pattern — collect remaining properties
const { name, ...rest } = user;
console.log(name); // 'Alice'
console.log(rest); // { age: 25, city: 'NYC', role: 'admin' }
```

**Nested Object Destructuring:**

```javascript
const response = {
  data: {
    user: {
      name: 'Bob',
      address: { city: 'LA', zip: '90001' }
    }
  },
  status: 200
};

// Deep destructuring
const { data: { user: { name, address: { city } } } } = response;
console.log(name); // 'Bob'
console.log(city); // 'LA'

// With defaults for safety
const { data: { user: { phone = 'N/A' } } } = response;
console.log(phone); // 'N/A'
```

**Function Parameter Destructuring (interview favorite):**

```javascript
// ❌ Without destructuring
function createUser(options) {
  const name = options.name;
  const age = options.age;
  const role = options.role || 'user';
}

// ✅ With destructuring + defaults
function createUser({ name, age, role = 'user' } = {}) {
  console.log(name, age, role);
}

createUser({ name: 'Alice', age: 25 }); // 'Alice' 25 'user'
createUser(); // undefined undefined 'user' — doesn't crash due to = {}
```

---

### Array Destructuring

```javascript
const colors = ['red', 'green', 'blue', 'yellow'];

// Basic
const [first, second] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Skip elements
const [, , third] = colors;
console.log(third); // 'blue'

// Rest pattern
const [head, ...tail] = colors;
console.log(head); // 'red'
console.log(tail); // ['green', 'blue', 'yellow']

// Default values
const [a, b, c, d, e = 'purple'] = colors;
console.log(e); // 'purple'

// ⚠️ Swap variables without temp! (Interview classic)
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

**Destructuring from Functions:**

```javascript
// Return multiple values
function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([5, 2, 8, 1, 9]);
console.log(min, max); // 1, 9

// Return named values (object)
function getUserInfo() {
  return { name: 'Alice', age: 25, role: 'admin' };
}

const { name, role } = getUserInfo();
```

**⚠️ Edge Case: Destructuring `null` or `undefined` throws!**

```javascript
const { name } = null;      // ❌ TypeError: Cannot destructure null
const { name } = undefined; // ❌ TypeError

// ✅ Safe with default
const { name } = null || {}; // Works
```

---

### 85. Spread vs Rest Operators — In-Depth Deep Dive

Both use `...` but they do **opposite things**:
- **Spread** = **expands** elements (used in function calls, array/object literals)
- **Rest** = **collects** elements (used in function parameters, destructuring)

### Spread Operator (Expanding)

```javascript
// 1. Array spreading — copy and merge
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];     // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];                // [1, 2, 3] — shallow copy
const withExtra = [0, ...arr1, 99];    // [0, 1, 2, 3, 99]

// 2. Object spreading — copy and merge
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }
const updated = { ...obj1, b: 99 };      // { a: 1, b: 99 } — override!

// ⚠️ Last one wins when properties conflict!
const conflict = { ...{a: 1}, ...{a: 2} }; // { a: 2 }

// 3. Function call spreading
const nums = [5, 2, 8, 1];
Math.max(...nums);  // 8 — same as Math.max(5, 2, 8, 1)
console.log(...nums); // 5 2 8 1 — same as console.log(5, 2, 8, 1)

// 4. String spreading
const chars = [..."hello"]; // ['h', 'e', 'l', 'l', 'o']
```

**⚠️ Spread creates SHALLOW copies only!**

```javascript
const original = { name: 'Alice', address: { city: 'NYC' } };
const copy = { ...original };

copy.name = 'Bob';          // ✅ Doesn't affect original
copy.address.city = 'LA';   // ⚠️ DOES affect original! (shared reference)

console.log(original.address.city); // 'LA' — changed!
```

### Rest Operator (Collecting)

```javascript
// 1. Function parameters — collect remaining args
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10
// 'numbers' is a real Array: [1, 2, 3, 4]

// 2. With other params — rest MUST be last
function log(level, ...messages) {
  messages.forEach(msg => console.log(`[${level}] ${msg}`));
}
log('ERROR', 'Failed', 'Retry'); // [ERROR] Failed, [ERROR] Retry

// 3. Destructuring rest
const [first, ...remaining] = [1, 2, 3, 4, 5];
// first = 1, remaining = [2, 3, 4, 5]

const { name, ...otherProps } = { name: 'Alice', age: 25, city: 'NYC' };
// name = 'Alice', otherProps = { age: 25, city: 'NYC' }
```

**rest vs arguments — Why rest is better:**

```javascript
// ❌ Old way with arguments
function oldWay() {
  console.log(arguments);       // Arguments object (NOT a real array)
  arguments.map(x => x);        // ❌ TypeError — no array methods!
  [...arguments].map(x => x);   // ✅ Convert first
}

// ✅ New way with rest
const newWay = (...args) => {
  console.log(args);            // Real Array
  args.map(x => x * 2);        // ✅ Works directly!
};
```

---

### 86. Template Literals — In-Depth

```javascript
const name = 'Alice';
const age = 25;

// Basic interpolation
const msg = `Hello, ${name}! You are ${age} years old.`;

// Multi-line (No \n needed!)
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;

// Expressions inside ${}
const price = 29.99;
const tax = 0.1;
console.log(`Total: $${(price * (1 + tax)).toFixed(2)}`); // "Total: $32.99"

// Ternary inside template
const status = `User is ${age >= 18 ? 'adult' : 'minor'}`;

// Function calls inside template
console.log(`Upper: ${name.toUpperCase()}`); // "Upper: ALICE"
```

**Tagged Templates (Advanced — interview topic):**

```javascript
function highlight(strings, ...values) {
  // strings = ["Hello, ", "! You are ", " years old."]
  // values  = ["Alice", 25]
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<b>${values[i]}</b>` : '');
  }, '');
}

const result = highlight`Hello, ${name}! You are ${age} years old.`;
// "Hello, <b>Alice</b>! You are <b>25</b> years old."
```

---

### 87. Optional Chaining & Nullish Coalescing

**Optional Chaining `?.`** — safely access deeply nested properties:

```javascript
const user = {
  name: 'Alice',
  address: { city: 'NYC' }
};

// ❌ Without — crashes if anything is null/undefined
const zip = user.address.zip.code; // TypeError!

// ✅ With optional chaining — returns undefined instead of crashing
const zip = user?.address?.zip?.code; // undefined (no error)

// Works on methods too
const result = user.getName?.(); // undefined if getName doesn't exist

// Works on arrays
const first = user?.friends?.[0]; // undefined if friends doesn't exist

// Works on delete
delete user?.address?.city; // Safe delete
```

**Nullish Coalescing `??`** — provides default only for `null`/`undefined`:

```javascript
// ?? vs ||
const value1 = 0 || 'default';   // 'default' — 0 is falsy!
const value2 = 0 ?? 'default';   // 0 — 0 is NOT null/undefined

const value3 = '' || 'default';  // 'default' — '' is falsy!
const value4 = '' ?? 'default';  // '' — '' is NOT null/undefined

const value5 = null ?? 'default';     // 'default'
const value6 = undefined ?? 'default'; // 'default'
const value7 = false ?? 'default';     // false — NOT null/undefined

// Combining ?. with ??
const city = user?.address?.city ?? 'Unknown';
// Returns city if it exists, 'Unknown' if null/undefined
```

**⚠️ Interview Gotcha: `??` vs `||`**

```javascript
function getUserAge(config) {
  // ❌ BAD — if age is 0, this incorrectly uses default
  const age = config.age || 25;

  // ✅ GOOD — only uses default if age is null/undefined
  const age = config.age ?? 25;
}

getUserAge({ age: 0 });
// || → 25 (wrong! 0 is a valid age)
// ?? → 0  (correct!)
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 92. CommonJS vs ES Modules (ESM)

### CommonJS (Node.js default, `.js` files pre-ESM)

```javascript
// math.js — exporting
const PI = 3.14159;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

module.exports = { PI, add, subtract };

// Or in parts:
module.exports.PI = 3.14159;
module.exports.add = (a, b) => a + b;

// app.js — importing
const { PI, add } = require("./math");
const math = require("./math"); // import all

// require() is SYNCHRONOUS and can be called anywhere
if (condition) {
  const util = require("./util"); // dynamic import ✅
}
```

### ES Modules (ESM) — Modern Standard

```javascript
// math.js — named exports
export const PI = 3.14159;
export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

// math.js — default export
export default function multiply(a, b) {
  return a * b;
}

// app.js — importing named exports
import { PI, add } from "./math.js";
import { add as sum } from "./math.js"; // alias

// Import default
import multiply from "./math.js";

// Import all
import * as math from "./math.js";
math.add(1, 2);

// Dynamic import (returns a Promise)
async function loadModule() {
  const { add } = await import("./math.js"); // lazy loading
  console.log(add(1, 2));
}

// Re-export
export { add, subtract } from "./math.js";
export { default as multiply } from "./math.js";
```

**Comparison:**

| Feature         | CommonJS                       | ESM                       |
| --------------- | ------------------------------ | ------------------------- |
| Syntax          | `require()` / `module.exports` | `import` / `export`       |
| Loading         | Synchronous                    | Asynchronous              |
| When evaluated  | At runtime                     | Static (compile time)     |
| Dynamic imports | `require(variable)`            | `import()` function       |
| Tree shaking    | ❌ Hard                        | ✅ Easy                   |
| Browser native  | ❌                             | ✅ (with `type="module"`) |
| Top-level await | ❌                             | ✅                        |

```html
<!-- In HTML, ESM requires type="module" -->
<script type="module" src="app.js"></script>
```

```json
// In package.json to use ESM in Node.js
{ "type": "module" }
```

[⬆️ Back to Top](#-table-of-contents)

---

### 93. Strict Mode

**Strict Mode** catches common mistakes and prevents certain unsafe actions.

```javascript
"use strict"; // Enable for entire file (must be first line)

function myFunction() {
  "use strict"; // Or enable for single function only
}
```

**What strict mode does:**

```javascript
"use strict";

// 1. No undeclared variables
x = 10; // ❌ ReferenceError: x is not defined

// 2. No duplicate parameter names
function add(a, a) {} // ❌ SyntaxError

// 3. this is undefined in functions (not global)
function test() {
  console.log(this); // undefined (not window!)
}

// 4. Cannot delete undeletable properties
delete Object.prototype; // ❌ TypeError

// 5. Cannot use reserved keywords as variable names
let implements = 5; // ❌ SyntaxError
let interface = 5;  // ❌ SyntaxError
let static = 5;     // ❌ SyntaxError

// 6. eval has its own scope
eval("var x = 5");
console.log(x); // ❌ ReferenceError (in strict mode)

// 7. with statement is not allowed
with (obj) {} // ❌ SyntaxError

// 8. Octal literals not allowed
let num = 010;   // ❌ SyntaxError (octal)
let num2 = 0o10; // ✅ Use 0o prefix instead

// 9. Assigning to read-only property throws
const obj = Object.freeze({ a: 1 });
obj.a = 2; // ❌ TypeError (silently fails in non-strict)
```

**ES6 Modules and Classes always use strict mode automatically.**

[⬆️ Back to Top](#-table-of-contents)

---

### 94. Regular Expressions

**RegEx** — patterns to match, search, and replace text.

```javascript
// Two ways to create
const re1 = /hello/;              // literal
const re2 = new RegExp("hello");  // constructor (for dynamic patterns)

// Flags
/hello/i;   // case-insensitive
/hello/g;   // global (find all matches)
/hello/m;   // multiline (^ $ match per line)
/hello/s;   // dotAll (. matches newline too)
/hello/gi;  // combine flags

// Test method — returns boolean
/hello/.test("say hello world"); // true
/^hello/.test("say hello"); // false (^ = start of string)

// Match method — returns array
"hello world hello".match(/hello/g); // ["hello", "hello"]
"2024-01-15".match(/(\d{4})-(\d{2})-(\d{2})/);
// ["2024-01-15", "2024", "01", "15"]

// Replace
"hello world".replace(/hello/, "hi"); // "hi world"
"hello hello".replace(/hello/g, "hi"); // "hi hi" (global)
"John, Jane".replace(/(\w+), (\w+)/, "$2, $1"); // "Jane, John"

// Split
"one,two;three".split(/[,;]/); // ["one", "two", "three"]
```

**Common Patterns:**

```javascript
// Character classes
/[abc]/      // a, b, or c
/[^abc]/     // NOT a, b, or c
/[a-z]/      // any lowercase letter
/[A-Z]/      // any uppercase letter
/[0-9]/      // any digit (same as \d)

// Shorthand classes
/\d/  // digit [0-9]
/\D/  // non-digit
/\w/  // word char [a-zA-Z0-9_]
/\W/  // non-word
/\s/  // whitespace (space, tab, newline)
/\S/  // non-whitespace
/./   // any char except newline

// Anchors
/^hello/  // starts with hello
/hello$/  // ends with hello
/\bhello\b/  // whole word "hello"

// Quantifiers
/a{3}/     // exactly 3 'a' (aaa)
/a{2,4}/   // 2 to 4 'a'
/a{2,}/    // 2 or more 'a'
/a+/       // 1 or more (same as {1,})
/a*/       // 0 or more (same as {0,})
/a?/       // 0 or 1 (same as {0,1})

// Groups
/(abc)/    // capturing group
/(?:abc)/  // non-capturing group
/(?<year>\d{4})/  // named group

// Lookahead/Lookbehind
/\d+(?= dollars)/   // digits followed by " dollars"
/\d+(?! dollars)/   // digits NOT followed by " dollars"
/(?<=\$)\d+/       // digits preceded by "$"
/(?<!\$)\d+/       // digits NOT preceded by "$"

// Common validation patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[\d\s-]{10,15}$/;
const urlRegex = /^https?:\/\/[\w.-]+\.[a-z]{2,}(\/\S*)?$/i;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#]).{8,}$/;
// At least: 1 uppercase, 1 digit, 1 special char, 8+ chars

// Practical examples
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function extractNumbers(str) {
  return str.match(/\d+/g)?.map(Number) || [];
}

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")   // remove special chars
    .replace(/\s+/g, "-")        // spaces → hyphens
    .replace(/-+/g, "-")         // multiple hyphens → one
    .trim();
}
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 12: Performance & Optimization

### 95. Debounce

```javascript
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const handleSearch = debounce((query) => {
  console.log("Searching:", query);
}, 300);
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 96. Throttle

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
const handleScroll = throttle(() => {
  console.log("Scroll event");
}, 100);
```

[⬆️ Back to Top](#-table-of-contents)

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
const worker = new Worker("worker.js");
worker.postMessage({ data: "process this" });
worker.onmessage = (e) => console.log(e.data);
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

## Part 13: Error Handling & Security

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
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid input");

// Global error handling
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
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

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

## Part 11: Additional Important Topics

### 86. Polyfills

**Definition:** Code that implements features on browsers that don't support them.

```javascript
// Array.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}

// Promise polyfill (use libraries like core-js)
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 87. Weak Map and Weak Set

```javascript
// WeakMap - keys must be objects, allows garbage collection
const wm = new WeakMap();
let obj = { data: "value" };
wm.set(obj, "metadata");
obj = null; // Object can be garbage collected

// WeakSet - similar but only stores objects
const ws = new WeakSet();
let item = { id: 1 };
ws.add(item);
item = null; // Can be garbage collected
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 88. String Methods

```javascript
const str = "Hello World";

// Common methods
str.length; // 11
str.toLowerCase(); // 'hello world'
str.toUpperCase(); // 'HELLO WORLD'
str.trim(); // Remove whitespace
str.slice(0, 5); // 'Hello'
str.substring(0, 5); // 'Hello'
str.indexOf("World"); // 6
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("World"); // true
str.repeat(2); // 'Hello WorldHello World'
str.replace("World", "JS"); // 'Hello JS'
str.replaceAll("l", "L"); // 'HeLLo WorLd'
str.split(" "); // ['Hello', 'World']
str.charAt(0); // 'H'
str.charCodeAt(0); // 72
str.padStart(15, "*"); // '****Hello World'
str.padEnd(15, "*"); // 'Hello World****'
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 89. Array Methods Complete

```javascript
const arr = [1, 2, 3, 4, 5];

// Mutating methods
arr.push(6); // Add to end
arr.pop(); // Remove from end
arr.unshift(0); // Add to start
arr.shift(); // Remove from start
arr.splice(1, 2, "a", "b"); // Remove/add at index
arr.reverse(); // Reverse in place
arr.sort((a, b) => a - b); // Sort

// Non-mutating methods
arr.concat([6, 7]); // Merge arrays
arr.slice(1, 3); // Extract portion
arr.map((x) => x * 2); // Transform
arr.filter((x) => x > 2); // Select
arr.reduce((sum, x) => sum + x, 0); // Reduce to value
arr.forEach((x) => console.log(x)); // Iterate
arr.find((x) => x > 3); // First match
arr.findIndex((x) => x > 3); // Index of first match
arr.some((x) => x > 3); // At least one
arr.every((x) => x > 0); // All
arr.includes(3); // Contains value
arr.indexOf(3); // Index of value
arr.join(", "); // Array to string
arr.flat(); // Flatten nested arrays
arr.flatMap((x) => [x, x * 2]); // Map + flatten
```

[⬆️ Back to Top](#-table-of-contents)

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

[⬆️ Back to Top](#-table-of-contents)

---

**?? [Back to Top](#-table-of-contents)**

### 103. Exception Handling — throw, try/catch/finally, Error Objects

### throw statement

```javascript
// Throw any value
throw "Something went wrong";
throw 404;
throw new Error("Custom error message");
throw new TypeError("Expected a string");
throw new RangeError("Value out of range");
throw new ReferenceError("Variable not defined");

// Custom error
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}
```

### try / catch / finally

```javascript
try {
  // Code that might throw
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  // Handles the thrown error
  console.error("Caught:", error.message);
} finally {
  // ALWAYS runs (cleanup code)
  console.log("Done — always runs!");
}

// Catch specific error types
try {
  JSON.parse("invalid json");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON syntax error:", error.message);
  } else if (error instanceof TypeError) {
    console.log("Type error:", error.message);
  } else {
    throw error; // re-throw unknown errors
  }
}

// Optional catch binding (ES2019)
try {
  riskyOperation();
} catch {
  // No need to name 'error' if you don't use it
  console.log("Something failed");
}
```

### Error Objects

```javascript
// Built-in error types
new Error("General error");
new SyntaxError("Bad syntax");
new TypeError("Wrong type");
new ReferenceError("Undefined variable");
new RangeError("Out of range");
new URIError("Bad URI");
new EvalError("Eval error");
new AggregateError([err1, err2], "Multiple errors"); // ES2021

// Error properties
const err = new Error("Something broke");
err.name; // "Error"
err.message; // "Something broke"
err.stack; // Stack trace string

// Custom Error Classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Usage
function validateAge(age) {
  if (typeof age !== "number") {
    throw new ValidationError("Age must be a number", "age");
  }
  if (age < 0 || age > 150) {
    throw new ValidationError("Age out of valid range", "age");
  }
  return true;
}

try {
  validateAge("twenty");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(
      `Validation failed on field '${error.field}': ${error.message}`,
    );
  } else {
    throw error;
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 14: Additional Important Topics

### 109. Polyfills

**Definition:** Code that implements features on browsers that don't support them.

```javascript
// Array.includes polyfill
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}

// Promise polyfill (use libraries like core-js)
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 110. Weak Map and Weak Set

```javascript
// WeakMap - keys must be objects, allows garbage collection
const wm = new WeakMap();
let obj = { data: "value" };
wm.set(obj, "metadata");
obj = null; // Object can be garbage collected

// WeakSet - similar but only stores objects
const ws = new WeakSet();
let item = { id: 1 };
ws.add(item);
item = null; // Can be garbage collected
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 111. String Methods

```javascript
const str = "Hello World";

// Common methods
str.length; // 11
str.toLowerCase(); // 'hello world'
str.toUpperCase(); // 'HELLO WORLD'
str.trim(); // Remove whitespace
str.slice(0, 5); // 'Hello'
str.substring(0, 5); // 'Hello'
str.indexOf("World"); // 6
str.includes("World"); // true
str.startsWith("Hello"); // true
str.endsWith("World"); // true
str.repeat(2); // 'Hello WorldHello World'
str.replace("World", "JS"); // 'Hello JS'
str.replaceAll("l", "L"); // 'HeLLo WorLd'
str.split(" "); // ['Hello', 'World']
str.charAt(0); // 'H'
str.charCodeAt(0); // 72
str.padStart(15, "*"); // '****Hello World'
str.padEnd(15, "*"); // 'Hello World****'
```

[⬆️ Back to Top](#-table-of-contents)

---

?? [Back to Top](#-table-of-contents)

### 112. Array Methods Complete

```javascript
const arr = [1, 2, 3, 4, 5];

// Mutating methods
arr.push(6); // Add to end
arr.pop(); // Remove from end
arr.unshift(0); // Add to start
arr.shift(); // Remove from start
arr.splice(1, 2, "a", "b"); // Remove/add at index
arr.reverse(); // Reverse in place
arr.sort((a, b) => a - b); // Sort

// Non-mutating methods
arr.concat([6, 7]); // Merge arrays
arr.slice(1, 3); // Extract portion
arr.map((x) => x * 2); // Transform
arr.filter((x) => x > 2); // Select
arr.reduce((sum, x) => sum + x, 0); // Reduce to value
arr.forEach((x) => console.log(x)); // Iterate
arr.find((x) => x > 3); // First match
arr.findIndex((x) => x > 3); // Index of first match
arr.some((x) => x > 3); // At least one
arr.every((x) => x > 0); // All
arr.includes(3); // Contains value
arr.indexOf(3); // Index of value
arr.join(", "); // Array to string
arr.flat(); // Flatten nested arrays
arr.flatMap((x) => [x, x * 2]); // Map + flatten
```

[⬆️ Back to Top](#-table-of-contents)

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

[⬆️ Back to Top](#-table-of-contents)

---

**?? [Back to Top](#-table-of-contents)**
