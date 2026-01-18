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
30. [__proto__ vs prototype](#30-proto-vs-prototype)
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
document.getElementById('demo').innerHTML = 'Hello JavaScript!';

// Variables (dynamically typed)
let name = 'John';  // String
name = 42;          // Now a number - no error!

// Functions
function greet(user) {
    return `Hello, ${user}!`;
}

console.log(greet('Alice')); // "Hello, Alice!"
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
var name = 'Global';

function outer() {
    // Function Execution Context created for outer()
    var name = 'Outer';
    
    function inner() {
        // Function Execution Context created for inner()
        var name = 'Inner';
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
    console.log('First function');
    second();
    console.log('First function end');
}

function second() {
    console.log('Second function');
    third();
    console.log('Second function end');
}

function third() {
    console.log('Third function');
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
    console.log('a started');
    b();
    console.log('a ended');
}

function b() {
    console.log('b started');
    c();
    console.log('b ended');
}

function c() {
    console.log('c started');
    console.log('c ended');
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
var name = 'John';
console.log(name); // "John"

// What actually happens behind the scenes:
var name; // Declaration hoisted
console.log(name); // undefined
name = 'John'; // Initialization stays in place
console.log(name); // "John"
```

**let and const Hoisting (Temporal Dead Zone):**
```javascript
console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;

console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
const city = 'NYC';
```

**Function Declaration Hoisting:**
```javascript
greet(); // "Hello!" - Works! Function is fully hoisted

function greet() {
    console.log('Hello!');
}
```

**Function Expression Hoisting:**
```javascript
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function() {
    console.log('Hi!');
};

// What actually happens:
var sayHi; // Hoisted as undefined
sayHi(); // Trying to call undefined()
sayHi = function() { console.log('Hi!'); };
```

**Arrow Function Hoisting:**
```javascript
greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization

const greet = () => {
    console.log('Hello!');
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
    console.log('Function declaration works!');
}

var bar = function() {
    console.log('Function expression');
};

const baz = () => {
    console.log('Arrow function');
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
    
    let name = 'John'; // TDZ ends
    console.log(name); // ✅ "John"
}
```

**TDZ with typeof:**
```javascript
// Surprising behavior!
console.log(typeof undeclaredVar); // "undefined" (no error)
console.log(typeof declaredVar);   // ❌ ReferenceError (TDZ)

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

| Feature | undefined | null |
|---------|-----------|------|
| **Type** | `"undefined"` | `"object"` (historical bug) |
| **Meaning** | Not initialized | Intentionally empty |
| **Assignment** | JavaScript assigns | You assign |
| **Default** | Default for uninitialized vars | Must be explicitly set |

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
        return { name: 'John', age: 30 };
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

| Aspect | Primitive | Non-Primitive |
|--------|-----------|---------------|
| **Storage** | Stored in **stack** | Stored in **heap** |
| **Mutability** | **Immutable** | **Mutable** |
| **Comparison** | By **value** | By **reference** |
| **Copy Behavior** | Creates **copy** | Creates **reference** |

**Examples:**

**Primitives - Immutable:**
```javascript
// Primitives are immutable
let str = 'hello';
str[0] = 'H'; // Doesn't work!
console.log(str); // "hello" (unchanged)

str = 'Hello'; // Creates NEW string, doesn't modify original
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
const person = { name: 'John', age: 30 };
person.age = 31; // ✅ Works! Objects are mutable
console.log(person); // { name: 'John', age: 31 }

// Reference comparison
const obj1 = { value: 10 };
const obj2 = { value: 10 };
console.log(obj1 === obj2); // false (different references)

const obj3 = obj1;
console.log(obj1 === obj3); // true (same reference)

// Copying references
const original = { name: 'Alice' };
const copy = original; // Copies REFERENCE, not object

copy.name = 'Bob';
console.log(original.name); // "Bob" (both changed!)
console.log(copy.name);     // "Bob"
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
console.log(typeof 'hello');    // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (bug!)
console.log(typeof Symbol('id'));// "symbol"
console.log(typeof 9007199254740991n); // "bigint"

// Non-Primitives
console.log(typeof {});          // "object"
console.log(typeof []);          // "object" (arrays are objects)
console.log(typeof function(){}); // "function"

// Better checks for non-primitives
console.log(Array.isArray([]));  // true
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
console.log('5' + 2);        // "52" (number → string)
console.log('5' + true);     // "5true"
console.log('5' + null);     // "5null"
console.log('5' + undefined); // "5undefined"

// Arithmetic operations
console.log('5' - 2);   // 3 (string → number)
console.log('10' * '2'); // 20
console.log('10' / '2'); // 5
console.log('10' % '3'); // 1

// Boolean context
if ('hello') {
    console.log('Truthy!'); // Executes (non-empty string is truthy)
}

if (0) {
    console.log('Won\'t execute'); // 0 is falsy
}

// Comparison
console.log('2' == 2);  // true (string converted to number)
console.log('2' === 2); // false (no coercion with ===)
```

**Explicit Coercion:**
```javascript
// To String
String(123);        // "123"
(123).toString();   // "123"
123 + '';           // "123"

// To Number
Number('123');      // 123
parseInt('123px');  // 123 (parses until non-numeric)
parseFloat('3.14'); // 3.14
+'123';             // 123 (unary plus)

// To Boolean
Boolean(1);         // true
Boolean(0);         // false
!!1;                // true (double NOT)
!!'hello';          // true
```

**Tricky Examples:**
```javascript
console.log([] + []);       // "" (empty string)
console.log([] + {});       // "[object Object]"
console.log({} + []);       // "[object Object]"
console.log(true + false);  // 1 (true=1, false=0)
console.log('5' - '2');     // 3
console.log('5' + - '2');   // "5-2"
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
if (true) { }        // ✅
if (1) { }           // ✅
if (-1) { }          // ✅
if ('hello') { }     // ✅
if (' ') { }         // ✅ (space is not empty)
if ('0') { }         // ✅ (string '0' is not number 0)
if ('false') { }     // ✅ (string 'false' is not boolean false)
if ([]) { }          // ✅ (empty array is truthy)
if ({}) { }          // ✅ (empty object is truthy)
if (function(){}) { }// ✅

// Falsy values
if (false) { }       // ❌
if (0) { }           // ❌
if ('') { }          // ❌
if (null) { }        // ❌
if (undefined) { }   // ❌
if (NaN) { }         // ❌
```

**Practical Usage:**
```javascript
// Default values with ||
function greet(name) {
    name = name || 'Guest'; // If name is falsy, use 'Guest'
    console.log(`Hello, ${name}!`);
}

greet('John');  // "Hello, John!"
greet();        // "Hello, Guest!"
greet('');      // "Hello, Guest!" (empty string is falsy)

// Better with Nullish Coalescing (??)
function greet2(name) {
    name = name ?? 'Guest'; // Only null/undefined, not all falsy
    console.log(`Hello, ${name}!`);
}

greet2('');     // "Hello, !" (empty string is kept)
greet2(null);   // "Hello, Guest!"

// Check if variable has value
let user;
if (user) {
    console.log('User exists');
} else {
    console.log('No user'); // This runs
}

// Convert to boolean
!!'hello'; // true
!!0;       // false
!![];      // true
```

---

### 10. NaN - Not a Number

**Definition:**  
**NaN** stands for "Not-a-Number" but ironically, its type is `"number"`. It represents an invalid numerical operation result.

**How NaN is Created:**
```javascript
console.log('abc' / 2);        // NaN
console.log(Math.sqrt(-1));    // NaN
console.log(parseInt('hello')); // NaN
console.log(0 / 0);            // NaN
console.log(Infinity - Infinity); // NaN
```

**Checking for NaN:**
```javascript
const result = 'abc' / 2;

// ❌ WRONG ways:
console.log(result == NaN);  // false (NaN never equals anything)
console.log(result === NaN); // false

// ✅ CORRECT ways:
console.log(isNaN(result));        // true
console.log(Number.isNaN(result)); // true (better, more strict)

// Difference between isNaN and Number.isNaN:
console.log(isNaN('hello'));        // true (coerces to NaN)
console.log(Number.isNaN('hello')); // false (strict check)
```

**NaN Properties:**
```javascript
console.log(typeof NaN);  // "number" (weird but true!)
console.log(NaN === NaN); // false (only value not equal to itself)

// Detecting NaN with Object.is
console.log(Object.is(NaN, NaN)); // true
```

---

### 11. Equality Operators (== vs ===)

**== (Loose Equality) - Allows Type Coercion:**
```javascript
console.log(5 == '5');    // true (string '5' converted to number)
console.log(1 == true);   // true (true → 1)
console.log(0 == false);  // true (false → 0)
console.log(null == undefined); // true (special case)
console.log('' == 0);     // true
```

**=== (Strict Equality) - No Type Coercion:**
```javascript
console.log(5 === '5');   // false (different types)
console.log(1 === true);  // false
console.log(0 === false); // false
console.log(null === undefined); // false
console.log('' === 0);    // false
```

**Best Practice:**
✅ Always use `===` and `!==` to avoid unexpected coercion bugs!

```javascript
// Real-world bug example with ==
function checkAge(age) {
    if (age == 18) {
        return 'Adult';
    }
    return 'Not adult';
}

console.log(checkAge(18));   // "Adult" ✅
console.log(checkAge('18')); // "Adult" ⚠️ Might not be intended!

// Fixed with ===
function checkAge(age) {
    if (age === 18) {
        return 'Adult';
    }
    return 'Not adult';
}

console.log(checkAge(18));   // "Adult" ✅
console.log(checkAge('18')); // "Not adult" ✅
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
var globalVar = 'I am global';

function test() {
    console.log(globalVar); // ✅ Accessible
}

test();
console.log(globalVar); // ✅ Accessible
```

**Function Scope:**
```javascript
function myFunction() {
    var functionVar = 'I am local';
    console.log(functionVar); // ✅ Works
}

myFunction();
console.log(functionVar); // ❌ ReferenceError
```

**Block Scope:**
```javascript
{
    let blockVar = 'Block scoped';
    const blockConst = 'Also block scoped';
    var notBlockScoped = 'Function scoped!';
    
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
    const name = 'JavaScript';
    
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
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
console.log(counter.count);       // undefined (private!)
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
            return 'Insufficient funds';
        },
        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount(1000);
console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.balance);       // undefined (can't access directly)
```

**2. Function Factories:**
```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

**3. Event Handlers:**
```javascript
function setupButton(buttonId) {
    const clickCount = { count: 0 };
    
    document.getElementById(buttonId).addEventListener('click', function() {
        clickCount.count++;
        console.log(`Button clicked${clickCount.count} times`);
    });
}
```

**4. Memoization (Caching):**
```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('From cache');
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const expensiveFunction = memoize((n) => {
    console.log('Computing...');
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
    const largeData = new Array(1000000).fill('data');
    
    document.getElementById('btn').addEventListener('click', function() {
        console.log('Clicked');
        // largeData is kept in memory even if not used!
    });
}

attachEvent(); // ⚠️ largeData stays in memory
```

**Solution: Nullify References:**
```javascript
function attachEvent() {
    let largeData = new Array(1000000).fill('data');
    const neededValue = largeData[0];
    
    largeData = null; // Free up memory
    
    document.getElementById('btn').addEventListener('click', function() {
        console.log(neededValue); // Only keeps what's needed
    });
}
```

**Loop Closure Issue:**
```javascript
// Common mistake
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // 5, 5, 5, 5, 5
    }, 1000);
}

// Fix 1: Use let
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2, 3, 4 ✅
    }, 1000);
}

// Fix 2: IIFE
for (var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout(function() {
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
const name = 'Global';

function outer() {
    const name = 'Outer';
    
    function inner() {
        console.log(name); // Looks in outer scope (where it was written)
    }
    
    return inner;
}

const name = 'Another Global';
const myFunc = outer();
myFunc(); // "Outer" (not "Another Global")
```

**Scope Chain:**
```javascript
const global = 'Global';

function level1() {
    const level1Var = 'Level 1';
    
    function level2() {
        const level2Var = 'Level 2';
        
        function level3() {
            const level3Var = 'Level 3';
            console.log(global);     // ✅ Looks up chain
            console.log(level1Var);  // ✅ Looks up chain
            console.log(level2Var);  // ✅ Looks up chain
            console.log(level3Var);  // ✅ Own scope
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
    return 'Hello!';
}

// Characteristics:
// - Hoisted (can call before declaration)
// - Has a name
// - Creates a named function

greet(); // ✅ Works even before declaration (hoisted)
```

**Function Expression:**
```javascript
const greet = function() {
    return 'Hello!';
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
function calculate() { }

// Use Expression for:
// - Callbacks
// - Conditional function creation
// - Methods
const  obj = {
    method: function() { }
};

arr.map(function(item) { });
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
const double = n => n * 2;

// No parameters
const greet = () => 'Hello!';

// Multiple lines
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

**Key Differences:**

| Feature | Normal Function | Arrow Function |
|---------|----------------|----------------|
| **`this` binding** | Dynamic (depends on call) | Lexical (from surrounding) |
| **`arguments` object** | ✅ Has `arguments` | ❌ No `arguments` |
| **Constructor** | ✅ Can use `new` | ❌ Cannot use `new` |
| **Hoisting** | ✅ Function declaration hoisted | ❌ Not hoisted |
| **Implicit return** | ❌ Needs `return` | ✅ Can omit `return` |

**`this` Binding:**
```javascript
// Normal function - 'this' depends on how it's called
const obj = {
    name: 'Object',
    normalFunc: function() {
        console.log(this.name);
    },
    arrowFunc: () => {
        console.log(this.name);
    }
};

obj.normalFunc(); // "Object" (this = obj)
obj.arrowFunc();  // undefined (this = global/window)

// Real-world example
class Timer {
    constructor() {
        this.seconds = 0;
    }
    
    startNormal() {
        setInterval(function() {
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

const person = new Person('John'); // ✅ Works

// Arrow function
const Person2 = (name) => {
    this.name = name;
};

const person2 = new Person2('John'); // ❌ TypeError
```

---

*The guide continues with remaining 60+ topics...*

**Due to the massive size (this would be 15,000+ lines), I'll now create this as a complete file and also create the React guide and TODO projects. Let me save this and continue...**
