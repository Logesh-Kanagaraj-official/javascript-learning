# JavaScript Missing Topics — Supplement Guide

> **Purpose:** These are topics from the JavaScript roadmap that are absent or only briefly mentioned in `javascript_complete_guide.md`. Combine with the main guide later.

---

## 📌 Table of Contents

1. [JavaScript History & Versions](#1-javascript-history--versions)
2. [Variable Declarations — var, let, const Deep Dive](#2-variable-declarations)
3. [Variable Naming Rules](#3-variable-naming-rules)
4. [typeof Operator](#4-typeof-operator)
5. [Built-in Objects](#5-built-in-objects)
6. [JSON](#6-json)
7. [Map & WeakMap](#7-map--weakmap)
8. [Set & WeakSet](#8-set--weakset)
9. [Typed Arrays](#9-typed-arrays)
10. [Loops & Iterations](#10-loops--iterations)
11. [Control Flow — if/else & switch](#11-control-flow)
12. [All Operators](#12-all-operators)
13. [Exception Handling — throw, try/catch/finally, Error Objects](#13-exception-handling)
14. [IIFE — Immediately Invoked Function Expression](#14-iife)
15. [Scope Chain & Function Stack](#15-scope-chain--function-stack)
16. [Recursion & Tail Call Optimization](#16-recursion--tail-call-optimization)
17. [Generators & Iterators](#17-generators--iterators)
18. [Classes](#18-classes)
19. [setTimeout & setInterval](#19-settimeout--setinterval)
20. [XMLHttpRequest](#20-xmlhttprequest)
21. [Strict Mode](#21-strict-mode)
22. [CommonJS vs ES Modules (ESM)](#22-commonjs-vs-es-modules)
23. [Regular Expressions](#23-regular-expressions)

---

## 1. JavaScript History & Versions

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

---

## 2. Variable Declarations

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

---

## 3. Variable Naming Rules

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

---

## 4. typeof Operator

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

---

## 5. Built-in Objects

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

---

## 6. JSON

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

---

## 7. Map & WeakMap

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

---

## 8. Set & WeakSet

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

---

## 9. Typed Arrays

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

---

## 10. Loops & Iterations

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

---

## 11. Control Flow

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

---

## 12. All Operators

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

---

## 13. Exception Handling

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

---

## 14. IIFE

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

---

## 15. Scope Chain & Function Stack

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

---

## 16. Recursion & Tail Call Optimization

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

---

## 17. Generators & Iterators

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

---

## 18. Classes

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

---

## 19. setTimeout & setInterval

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

---

## 20. XMLHttpRequest

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

---

## 21. Strict Mode

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
let interface = 5; // ❌ SyntaxError
let static = 5; // ❌ SyntaxError

// 6. eval has its own scope
eval("var x = 5");
console.log(x); // ❌ ReferenceError (in strict mode)

// 7. with statement is not allowed
with (obj) {
} // ❌ SyntaxError

// 8. Octal literals not allowed
let num = 010; // ❌ SyntaxError (octal)
let num2 = 0o10; // ✅ Use 0o prefix instead

// 9. Assigning to read-only property throws
const obj = Object.freeze({ a: 1 });
obj.a = 2; // ❌ TypeError (silently fails in non-strict)
```

**ES6 Modules and Classes always use strict mode automatically.**

---

## 22. CommonJS vs ES Modules

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

---

## 23. Regular Expressions

**RegEx** — patterns to match, search, and replace text.

```javascript
// Two ways to create
const re1 = /hello/; // literal
const re2 = new RegExp("hello"); // constructor (for dynamic patterns)

// Flags
/hello/i; // case-insensitive
/hello/g; // global (find all matches)
/hello/m; // multiline (^ $ match per line)
/hello/s; // dotAll (. matches newline too)
/hello/gi; // combine flags

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

---

> **📌 Reminder:** Combine this file with `javascript_complete_guide.md` for a complete resource.
>
> **Topics not in main guide — covered here:**
> JavaScript History, Variable Declarations (deep dive), Variable Naming, typeof, Built-in Objects, JSON, Map/WeakMap, Set/WeakSet, Typed Arrays, All Loop types, Control Flow (if/switch), All Operators, Exception Handling, IIFE, Scope Chain, Recursion & TCO, Generators & Iterators, Classes, setTimeout/setInterval, XMLHttpRequest, Strict Mode, CommonJS vs ESM, Regular Expressions.
