# JavaScript Interview Prep — Review  🚀

> Deep-dive reference for JS interviews. Each section includes definition, internals, and code examples.

---

## Table of Contents

1. [Variables](#1-variables)
2. [Hoisting](#2-hoisting)
3. [Temporal Dead Zone (TDZ)](#3-temporal-dead-zone-tdz)
4. [Operators](#4-operators)
5. [Functions & Which Are Hoisted](#5-functions--which-are-hoisted)
6. [Closure](#6-closure)
7. [Objects](#7-objects)
8. [Constructor Function & `new`](#8-constructor-function--new)
9. [Why JS is Dynamically Typed](#9-why-js-is-dynamically-typed)
10. [Compiler vs Interpreter (JIT)](#10-compiler-vs-interpreter-jit)
11. [Array Methods](#11-array-methods)
12. [JSON.parse() & JSON.stringify()](#12-jsonparse--jsonstringify)
13. [Promises](#13-promises)
14. [Promise Methods](#14-promise-methods)
15. [Async / Await](#15-async--await)
16. [Fetch API & HTTP Methods](#16-fetch-api--http-methods)
17. [DOM](#17-dom)
18. [Event Bubbling](#18-event-bubbling)
19. [Window Object](#19-window-object)
20. [Polyfills](#20-polyfills)
21. [call / apply / bind](#21-call--apply--bind)
22. [Spread, Rest & Destructuring](#22-spread-rest--destructuring)

---

## 1. Variables

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisted | ✅ (`undefined`) | ✅ (TDZ) | ✅ (TDZ) |
| Re-declarable | ✅ | ❌ | ❌ |
| Re-assignable | ✅ | ✅ | ❌ |
| Must initialize | ❌ | ❌ | ✅ |

```js
var x = 10;       // function-scoped, hoisted as undefined
let name = "Dev"; // block-scoped, TDZ before this line
const PI = 3.14;  // cannot be reassigned
```

> **Rule of thumb**: Always use `const` by default. Use `let` when you need to reassign. Avoid `var`.

---

## 2. Hoisting

**Definition**: JavaScript moves **declarations** (not initializations) to the top of their scope during the compilation phase.

### What gets hoisted?

| Type | Hoisted? | Initialized? |
|------|----------|-------------|
| `var` declaration | ✅ | ✅ (`undefined`) |
| `let` / `const` | ✅ | ❌ (TDZ) |
| Function Declaration | ✅ | ✅ (full body) |
| Function Expression | Depends on `var`/`let` | ❌ |
| Arrow Function | Depends on `var`/`let` | ❌ |

```js
// ✅ Works — function declaration is fully hoisted
console.log(greet("Logesh")); // "Hello, Logesh"
function greet(name) { return `Hello, ${name}`; }

// 🔸 var — hoisted as undefined
console.log(score); // undefined
var score = 100;

// ❌ let/const — TDZ error
// console.log(age); // ReferenceError
let age = 25;

// ❌ Function Expression — not hoisted
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() { return "Hi!"; };
```

---

## 3. Temporal Dead Zone (TDZ)

**Definition**: The period between when a `let`/`const` variable is **hoisted** (known to the engine) and when it is **initialized** (assigned a value). Accessing it during TDZ throws a `ReferenceError`.

```
Compilation phase → engine knows `let city` exists (hoisted, NOT initialized)
Execution phase   → until line `let city = "Chennai"` runs → TDZ is active
```

```js
{
  // TDZ starts for `city` ↓
  // console.log(city); // ❌ ReferenceError: Cannot access 'city' before initialization
  let city = "Chennai"; // TDZ ends ↑
  console.log(city);    // ✅ "Chennai"
}
```

> **Interview tip**: `typeof` on a TDZ variable also throws `ReferenceError` (unlike `var` which returns `"undefined"`).

---

## 4. Operators

### Types at a Glance

| Category | Operators |
|----------|-----------|
| Arithmetic | `+ - * / % **` |
| Assignment | `= += -= *= /= %= **=` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& \|\| ! ??` |
| Bitwise | `& \| ^ ~ << >>` |
| Ternary | `condition ? a : b` |
| Type | `typeof`, `instanceof` |
| Optional | `?.` (optional chaining) |
| Spread/Rest | `...` |

### `==` vs `===`

```js
5 == "5"    // ✅ true  (type coercion — string → number)
5 === "5"   // ❌ false (strict — no coercion)
null == undefined  // true
null === undefined // false
```

### Nullish Coalescing `??` vs `||`

```js
// ?? → returns right side only if left is null or undefined
const a = 0 ?? "default";   // 0     (0 is NOT null/undefined)
const b = 0 || "default";   // "default" (0 is falsy)
const c = null ?? "default"; // "default"
```

### Optional Chaining `?.`

```js
const user = { profile: { email: "a@b.com" } };
console.log(user?.profile?.email);  // "a@b.com"
console.log(user?.address?.city);   // undefined (no error)
```

---

## 5. Functions & Which Are Hoisted

### Types of Functions

```js
// 1. Function Declaration — FULLY hoisted ✅
function add(a, b) { return a + b; }

// 2. Function Expression — hoisting depends on var/let/const
const multiply = function(a, b) { return a * b; }; // ❌ not hoisted

// 3. Arrow Function — NOT hoisted ❌, no own `this` or `arguments`
const divide = (a, b) => a / b;

// 4. IIFE (Immediately Invoked Function Expression)
const result = (function() {
  return "private scope!";
})();

// 5. Default Parameters
function power(base, exp = 2) { return base ** exp; }

// 6. Rest Parameters
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
```

### Hoisting Summary

```
✅ Fully hoisted  → function greet() {}
🔸 Partially      → var sayHi = function() {}  (var hoisted as undefined)
❌ Not hoisted    → let/const fn expressions, arrow functions
```

### `this` in Functions

| Type | `this` |
|------|--------|
| Regular function | Dynamic (depends on caller) |
| Arrow function | Lexical (inherits from enclosing scope) |
| Constructor (`new`) | New object instance |
| `call/apply/bind` | Explicitly set |

---

## 6. Closure

**Definition**: A **closure** is a function that **remembers** the variables from its outer (lexical) scope even after the outer function has finished executing.

**Why it works**: JavaScript uses **lexical scoping** — functions look up variables where they are **defined**, not where they are **called**.

```js
function makeCounter() {
  let count = 0; // private — lives in closure
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount:  () => count,
  };
}

const counter = makeCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1
// `count` is NOT accessible from outside — data privacy!
```

### Classic Loop Bug & Fix

```js
// ❌ Bug: var — all callbacks share the SAME `i`
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// ✅ Fix 1: let (new binding per iteration)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2
}

// ✅ Fix 2: IIFE
for (var k = 0; k < 3; k++) {
  ((k) => setTimeout(() => console.log(k), 100))(k); // 0, 1, 2
}
```

**Use cases**: data privacy, memoization, currying, module pattern, event listeners.

---

## 7. Objects

**Definition**: A collection of **key-value pairs** (properties). Everything in JS (except primitives) is an object.

```js
const person = {
  name: "Logesh",
  age: 22,
  address: { city: "Chennai" },
  greet() { return `Hi, I'm ${this.name}`; },
};

// Access
person.name          // dot notation
person["name"]       // bracket notation (dynamic keys)
person.address.city  // nested

// Destructuring
const { name, age, address: { city } } = person;

// Spread (shallow copy + override)
const updated = { ...person, age: 25 };
```

### Object Methods

| Method | Returns |
|--------|---------|
| `Object.keys(obj)` | Array of keys |
| `Object.values(obj)` | Array of values |
| `Object.entries(obj)` | Array of `[key, value]` pairs |
| `Object.assign(target, src)` | Merged object (mutates target) |
| `Object.freeze(obj)` | Makes object immutable |
| `Object.hasOwn(obj, key)` | `true`/`false` |

---

## 8. Constructor Function & `new`

### What `new` does (4 steps):
1. Creates a new empty object `{}`
2. Sets `this` to that new object
3. Executes the constructor function body
4. Returns `this` (unless you explicitly return another object)

```js
function Person(name, age) {
  this.name = name;
  this.age  = age;
}
Person.prototype.greet = function() {
  return `Hello, I'm ${this.name}`;
};

const p1 = new Person("Logesh", 22);
console.log(p1.greet()); // "Hello, I'm Logesh"
```

### ES6 Class (syntactic sugar)

```js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  speak() { return `${this.name} says ${this.sound}`; }
  static create(name, sound) { return new Animal(name, sound); }
}

class Dog extends Animal {
  constructor(name) {
    super(name, "Woof"); // MUST call super() before `this`
  }
  fetch() { return `${this.name} fetches the ball!`; }
}

const dog = new Dog("Bruno");
dog.speak();  // "Bruno says Woof"
dog instanceof Dog;    // true
dog instanceof Animal; // true
```

---

## 9. Why JS is Dynamically Typed

**Definition**: Types are determined at **runtime**, not at compile time. You don't declare types — the engine infers them from the assigned value.

```js
let x = 42;       // number
x = "Hello";      // string — perfectly valid
x = true;         // boolean — OK
x = { a: 1 };    // object — OK
```

### Primitive vs Reference Types

| Primitives (by value) | Reference Types (by reference) |
|-----------------------|-------------------------------|
| `number` | `Object` |
| `string` | `Array` |
| `boolean` | `Function` |
| `null` | `Date`, `Map`, `Set` |
| `undefined` | |
| `BigInt` | |
| `Symbol` | |

### Type Coercion

```js
"5" + 5    // "55"  (+ → string concatenation)
"5" - 5    // 0     (- → numeric conversion)
true + 1   // 2
null + 1   // 1
[] + {}    // "[object Object]"
```

> Use `===` to avoid unintended coercion.

---

## 10. Compiler vs Interpreter (JIT)

| | Interpreter | Compiler |
|-|-------------|----------|
| Execution | Line by line | All at once |
| Start time | Fast | Slow |
| Runtime speed | Slow | Fast |

**JS uses JIT (Just-In-Time) — a Hybrid approach.**

### V8 Engine Pipeline (Chrome / Node.js)

```
Source Code
    ↓
  Parser → AST (Abstract Syntax Tree)
    ↓
 Ignition → Bytecode (interpreted fast)
    ↓
 TurboFan → Optimized Machine Code (hot code paths)
    ↓
 De-optimization (if type assumptions break)
```

### Execution Context & Call Stack

```
Global Execution Context (GEC)
  └── created first → global object (window/global) + `this`

Function Execution Context (FEC)
  └── created for every function call

Call Stack (LIFO)
  └── manages execution order

Memory Heap
  └── stores objects and closures (GC-managed)
```

---

## 11. Array Methods

### Quick Reference Table

| Method | Args | Returns | Mutates? |
|--------|------|---------|----------|
| `map(cb)` | `(item, index, arr)` | New array (same length) | ❌ |
| `filter(cb)` | `(item, index, arr)` | New array (subset) | ❌ |
| `reduce(cb, init)` | `(acc, cur, index, arr)`, initial | Single value | ❌ |
| `find(cb)` | `(item, index, arr)` | First match or `undefined` | ❌ |
| `findIndex(cb)` | `(item, index, arr)` | Index or `-1` | ❌ |
| `some(cb)` | `(item, index, arr)` | `boolean` | ❌ |
| `every(cb)` | `(item, index, arr)` | `boolean` | ❌ |
| `includes(val)` | value | `boolean` | ❌ |
| `indexOf(val)` | value | index or `-1` | ❌ |
| `flat(depth)` | depth (default 1) | Flattened array | ❌ |
| `flatMap(cb)` | callback | map + flat(1) | ❌ |
| `push(...items)` | items | New length | ✅ |
| `pop()` | — | Removed item | ✅ |
| `shift()` | — | Removed item | ✅ |
| `unshift(...items)` | items | New length | ✅ |
| `splice(start, del, ...add)` | start, deleteCount, items | Removed items | ✅ |
| `slice(start, end)` | start, end (exclusive) | New array | ❌ |
| `sort(compareFn)` | `(a, b) => a - b` | Sorted array | ✅ |
| `reverse()` | — | Reversed array | ✅ |
| `join(sep)` | separator | String | ❌ |
| `fill(val, start, end)` | value, start, end | Modified array | ✅ |
| `Array.from(iter, mapFn)` | iterable, map fn | New array | — |
| `Array.isArray(val)` | value | `boolean` | — |

### Key Examples

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);              // [2,4,6,8,10]
nums.filter(n => n > 3);           // [4,5]
nums.reduce((acc, n) => acc + n, 0); // 15
nums.find(n => n > 3);             // 4
nums.some(n => n > 4);             // true
nums.every(n => n > 0);            // true

// splice vs slice
[1,2,3,4].splice(1, 2);           // removes [2,3], array becomes [1,4]
[1,2,3,4].slice(1, 3);            // returns [2,3], original unchanged

// sort numbers (MUST provide comparator)
[3,1,4,1,5].sort((a, b) => a - b); // [1,1,3,4,5]
```

---

## 12. JSON.parse() & JSON.stringify()

### JSON.stringify(value, replacer, space)

| Argument | Type | Purpose |
|----------|------|---------|
| `value` | any | JS value to convert |
| `replacer` | Array / Function | Filter keys or transform values |
| `space` | number / string | Indentation for pretty-print |

```js
const obj = { name: "Logesh", age: 22, skills: ["JS", "React"] };

JSON.stringify(obj);              // '{"name":"Logesh","age":22,"skills":["JS","React"]}'
JSON.stringify(obj, null, 2);     // Pretty-printed (2 spaces)
JSON.stringify(obj, ["name"]);    // '{"name":"Logesh"}' — only `name` key
JSON.stringify(obj, (k, v) => typeof v === "number" ? undefined : v);
// Removes numbers → '{"name":"Logesh","skills":["JS","React"]}'
```

> ⚠️ `undefined`, `Symbol`, and `Function` values are **omitted** from JSON output.

### JSON.parse(text, reviver)

| Argument | Type | Purpose |
|----------|------|---------|
| `text` | string | JSON string to parse |
| `reviver` | Function | Transform each `(key, value)` |

```js
const json = '{"name":"Logesh","score":"100"}';

JSON.parse(json);                  // { name: "Logesh", score: "100" }
JSON.parse(json, (key, val) => {
  return key === "score" ? Number(val) : val;
});                                // { name: "Logesh", score: 100 }

// Invalid JSON → throws SyntaxError
JSON.parse("{bad json}");          // ❌ SyntaxError

// Deep clone (simple — loses functions/undefined)
const clone = JSON.parse(JSON.stringify(obj));
```

---

## 13. Promises

**Definition**: A `Promise` is an object representing the **eventual completion or failure** of an asynchronous operation.

### States

```
pending → { operation running }
    ├─→ fulfilled  → .then() fires
    └─→ rejected   → .catch() fires
```
> Once **settled** (fulfilled or rejected), state is **immutable**.

### Constructor

```js
new Promise((resolve, reject) => {
  // async work here
  if (success) resolve(value);   // → fulfilled
  else         reject(reason);   // → rejected
});
```

### Chaining

```js
fetchData()
  .then(data => processData(data))  // return value passed to next .then
  .then(result => console.log(result))
  .catch(err => console.error(err)) // catches any error above
  .finally(() => console.log("Done")); // always runs
```

---

## 14. Promise Methods

| Method | Resolves when | Rejects when | Returns |
|--------|--------------|--------------|---------|
| `Promise.all(arr)` | **All** resolve | **Any** rejects (fast-fail) | Array of values |
| `Promise.allSettled(arr)` | **All** settle | Never rejects | Array of `{status, value/reason}` |
| `Promise.any(arr)` | **First** resolves | **All** reject | First resolved value |
| `Promise.race(arr)` | **First** settles (resolve OR reject) | First rejects | First settled value |

```js
// Promise.all — ALL must succeed
Promise.all([p1, p2, p3])
  .then(([r1, r2, r3]) => console.log(r1, r2, r3))
  .catch(err => console.log("One failed:", err)); // fails fast

// Promise.allSettled — get ALL results regardless
Promise.allSettled([p1, p2, p3])
  .then(results => results.forEach(r => {
    if (r.status === "fulfilled") console.log("✅", r.value);
    else console.log("❌", r.reason);
  }));

// Promise.any — FIRST winner
Promise.any([failP, successP, successP2])
  .then(val => console.log("Winner:", val))
  .catch(e => console.log(e)); // AggregateError if ALL fail

// Promise.race — first to settle wins / loses
Promise.race([slowP, fastP])
  .then(val => console.log("First:", val));
```

### Creating resolved/rejected shortcuts

```js
Promise.resolve("immediate value").then(console.log);
Promise.reject(new Error("instant fail")).catch(console.error);
```

---

## 15. Async / Await

**Definition**: Syntactic sugar over Promises that makes async code look synchronous.

- `async` function → **always returns a Promise**
- `await` → **pauses** the async function until the Promise settles, returns resolved value
- Errors → use `try/catch`

```js
async function getUser(id) {
  try {
    const res   = await fetch(`/api/users/${id}`); // pauses here
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const user  = await res.json();                // pauses again
    return user;
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("Always runs");
  }
}
```

### Sequential vs Parallel

```js
// ❌ Sequential — total time = sum of all
async function slow() {
  const a = await fetchA(); // wait 1s
  const b = await fetchB(); // wait 1s more → total 2s
}

// ✅ Parallel — total time = longest
async function fast() {
  const [a, b] = await Promise.all([fetchA(), fetchB()]); // both run together → ~1s
}
```

> **Rule**: Use `Promise.all` when operations are **independent**.

---

## 16. Fetch API & HTTP Methods

### fetch(url, options) — returns `Promise<Response>`

```js
const res  = await fetch(url, options); // Step 1 — get Response
const data = await res.json();          // Step 2 — parse body
```

### Response Object

| Property / Method | Description |
|-------------------|-------------|
| `res.ok` | `true` if status 200–299 |
| `res.status` | HTTP status code |
| `res.statusText` | "OK", "Not Found" etc. |
| `res.headers` | Headers object |
| `res.json()` | Parse body as JSON → Promise |
| `res.text()` | Parse body as text → Promise |
| `res.blob()` | Parse body as Blob → Promise |
| `res.formData()` | Parse as FormData → Promise |

### HTTP Methods

| Method | Purpose | Has Body? | Idempotent? |
|--------|---------|-----------|-------------|
| `GET` | Read/retrieve data | ❌ | ✅ |
| `POST` | Create new resource | ✅ | ❌ |
| `PUT` | Replace entire resource | ✅ | ✅ |
| `PATCH` | Partially update resource | ✅ | ❌ |
| `DELETE` | Delete a resource | Optional | ✅ |
| `HEAD` | Like GET but no body | ❌ | ✅ |
| `OPTIONS` | Check allowed methods (CORS) | ❌ | ✅ |

### HTTP Status Codes

| Range | Category | Common Codes |
|-------|----------|-------------|
| 1xx | Informational | 100 Continue |
| 2xx | Success | 200 OK, 201 Created, 204 No Content |
| 3xx | Redirect | 301 Moved Permanently, 304 Not Modified |
| 4xx | Client Error | 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| 5xx | Server Error | 500 Internal Server Error, 503 Unavailable |

### Code Examples

```js
// GET
async function getData(id) {
  const res = await fetch(`/api/posts/${id}`);
  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
}

// POST
async function createPost(data) {
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),  // JS object → JSON string
  });
  return res.json();
}

// PUT (full replace)
async function updatePost(id, data) {
  const res = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// PATCH (partial update)
async function patchPost(id, partial) {
  const res = await fetch(`/api/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partial),
  });
  return res.json();
}

// DELETE
async function deletePost(id) {
  const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
  console.log("Deleted:", res.status); // 200 or 204
}
```

---

## 17. DOM

**DOM (Document Object Model)** = Tree representation of the HTML document that JS can read and modify.

### Selecting Elements

```js
document.getElementById("id")           // single element or null
document.querySelector(".class #id")    // first CSS match or null
document.querySelectorAll("li")         // NodeList (all matches)
document.getElementsByClassName("x")    // HTMLCollection (live)
document.getElementsByTagName("div")    // HTMLCollection (live)
```

### Reading & Writing

```js
el.textContent = "Hello";          // set text (safe)
el.innerHTML   = "<b>Bold</b>";    // set HTML (⚠️ XSS risk)
el.value;                          // input value
el.getAttribute("href");
el.setAttribute("href", "/new");
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.style.color = "red";
```

### Creating & Inserting

```js
const el = document.createElement("div");
el.textContent = "New element";
parent.appendChild(el);              // at end
parent.insertBefore(el, reference);  // before reference
el.remove();                         // remove self
el.insertAdjacentHTML("beforeend", "<p>hi</p>");
```

---

## 18. Event Bubbling

### Event Propagation Phases

```
Window
  └── Document
        └── HTML
              └── Body
                    └── #parent      ← Phase 1: CAPTURING (top → down)
                          └── #child ← Phase 2: TARGET
                    Phase 3: BUBBLING (bottom → up) →→→→→→→→→→→ Window
```

```js
// Bubbling (default — useCapture: false)
child.addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation(); // stops bubbling up
});

// Capturing (useCapture: true)
parent.addEventListener("click", () => {
  console.log("parent CAPTURE");
}, true);

// prevent default browser action
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stops form from reloading page
});
```

### Event Delegation

Attach **one listener on the parent** to handle events for many children (including dynamically added ones).

```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
```

> ✅ More memory efficient — one listener instead of N listeners.

---

## 19. Window Object

**`window`** = the global object in browsers. All global variables and functions are properties of `window`.

### Key Properties & Methods

| Property / Method | Description |
|-------------------|-------------|
| `window.document` | The DOM |
| `window.location` | URL info & navigation |
| `window.history` | Browser history API |
| `window.navigator` | Browser/device info |
| `window.localStorage` | Persistent key-value storage |
| `window.sessionStorage` | Tab-scoped storage |
| `window.alert(msg)` | Alert dialog |
| `window.confirm(msg)` | OK/Cancel dialog → boolean |
| `window.prompt(msg)` | Input dialog → string |
| `window.setTimeout(fn, ms)` | Run once after delay |
| `window.setInterval(fn, ms)` | Run repeatedly |
| `window.clearTimeout(id)` | Cancel timeout |
| `window.clearInterval(id)` | Cancel interval |
| `window.innerWidth/Height` | Viewport dimensions |
| `window.scrollTo(x, y)` | Scroll to position |

### localStorage vs sessionStorage

| Feature | `localStorage` | `sessionStorage` |
|---------|---------------|-----------------|
| Expires | Never (manual clear) | When tab/window closes |
| Scope | All tabs (same origin) | Same tab only |
| Size | ~5MB | ~5MB |

```js
localStorage.setItem("token", "abc123");
const token = localStorage.getItem("token"); // "abc123"
localStorage.removeItem("token");
localStorage.clear();
```

---

## 20. Polyfills

**Definition**: Code that implements a **native feature** the browser doesn't support — mainly for older browsers.

### Array.prototype.map

```js
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
[1,2,3].myMap(x => x * 2); // [2,4,6]
```

### Array.prototype.filter

```js
Array.prototype.myFilter = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) result.push(this[i]);
  }
  return result;
};
[1,2,3,4].myFilter(x => x > 2); // [3,4]
```

### Array.prototype.reduce

```js
Array.prototype.myReduce = function(callback, initialValue) {
  let acc   = initialValue !== undefined ? initialValue : this[0];
  let start = initialValue !== undefined ? 0 : 1;
  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
[1,2,3,4].myReduce((acc, x) => acc + x, 0); // 10
```

### Function.prototype.bind

```js
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(context, [...args, ...newArgs]);
  };
};
```

---

## 21. call / apply / bind

All three **explicitly set `this`** for a function.

| Method | Invokes immediately? | Args format |
|--------|---------------------|-------------|
| `call(ctx, a, b)` | ✅ Yes | Individual args |
| `apply(ctx, [a, b])` | ✅ Yes | Array of args |
| `bind(ctx, a, b)` | ❌ Returns new fn | Individual args |

```js
function introduce(greeting, punctuation) {
  return `${greeting}, I'm ${this.name}${punctuation}`;
}
const dev = { name: "Logesh" };

introduce.call(dev, "Hello", "!");       // "Hello, I'm Logesh!"
introduce.apply(dev, ["Hi", "?"]);       // "Hi, I'm Logesh?"
const fn = introduce.bind(dev, "Hey");   // returns new function
fn("...");                               // "Hey, I'm Logesh..."
```

> **Memory trick**: `call` = comma (individual), `apply` = array.

---

## 22. Spread, Rest & Destructuring

### Spread `...` — expands

```js
// Arrays
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];      // [1,2,3,4,5,6]

// Objects
const base = { x: 1, y: 2 };
const extended = { ...base, z: 3 }; // { x:1, y:2, z:3 }

// Copy (shallow)
const copy = [...a];
const objCopy = { ...base };
```

### Rest `...` — collects

```js
function log(first, second, ...rest) {
  console.log(first, second, rest); // rest is an Array
}
log(1, 2, 3, 4, 5); // 1  2  [3,4,5]
```

### Destructuring

```js
// Array destructuring
const [x, y, , z] = [10, 20, 30, 40]; // skip index 2
const [head, ...tail] = [1, 2, 3, 4]; // head=1, tail=[2,3,4]

// Object destructuring
const { name, age = 18 } = person;             // default value
const { name: fullName } = person;              // rename
const { address: { city } } = person;           // nested
const { name: n, ...rest } = person;            // rest in object

// In function params
function display({ name, age = 0 }) {
  console.log(name, age);
}
```

---

## 🔑 Quick Revision Cheat Sheet

| Topic | One-liner |
|-------|-----------|
| `var` | Function-scoped, hoisted as `undefined`, can re-declare |
| `let`/`const` | Block-scoped, TDZ, cannot re-declare |
| Hoisting | Declarations moved to top; fn declarations fully hoisted |
| TDZ | `let`/`const` exist but unusable until initialized |
| Closure | Inner fn retains access to outer scope after outer fn exits |
| `new` keyword | Create obj → set `this` → run constructor → return `this` |
| Dynamically typed | Types resolved at runtime; coercion happens implicitly |
| JIT | Parse → Bytecode → Machine code (hot paths optimized) |
| `map` | Transform each element → new array |
| `filter` | Keep elements passing test → new array |
| `reduce` | Accumulate all elements → single value |
| `splice` | **Mutates** — remove/add at index |
| `slice` | **Non-mutating** — copy portion |
| `JSON.stringify` | JS → JSON string (`replacer`, `space` args) |
| `JSON.parse` | JSON string → JS (`reviver` arg) |
| Promise states | `pending` → `fulfilled` / `rejected` |
| `Promise.all` | All must resolve; one fail → reject |
| `Promise.allSettled` | Always waits for all; never self-rejects |
| `Promise.any` | First resolve wins; all fail → AggregateError |
| `Promise.race` | First to settle (resolve or reject) wins |
| `async/await` | Sugar over Promises; `try/catch` for errors |
| `fetch` | `GET/POST/PUT/PATCH/DELETE`; check `res.ok`; parse with `res.json()` |
| DOM | `querySelector` → select; `createElement` → create; `appendChild` → insert |
| Bubbling | Event travels **up** from target to window |
| Capturing | Event travels **down** from window to target |
| Event Delegation | One parent listener handles children via `e.target` |
| `window` | Global object; `localStorage`, timers, `location`, `history` |
| Polyfill | Manually implement native methods for compatibility |
| `call/apply/bind` | Set `this`; call=immediate+args, apply=immediate+array, bind=returns fn |
| Spread | Expand iterable/object |
| Rest | Collect remaining args into array |
