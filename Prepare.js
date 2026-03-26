
// ============================================================
//         JAVASCRIPT INTERVIEW PREP  — Review 4
//         Topics: All core + advanced JS concepts
// ============================================================

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 1. VARIABLES  (var | let | const)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  var   → function-scoped, hoisted (initialized to undefined), re-declarable
  let   → block-scoped, hoisted but in TDZ (Temporal Dead Zone), NOT re-declarable
  const → block-scoped, hoisted but in TDZ, must be initialized, cannot be reassigned
*/
var x = 10;     // old way
let myName = "Logesh"; // preferred
const PI = 3.14;       // constant

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 2. HOISTING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Hoisting = JS moves declarations to the TOP of their scope during compilation.
  
  ✅ var declarations are hoisted and initialized to `undefined`
  ✅ function declarations are fully hoisted (the body too)
  ❌ let/const are hoisted but NOT initialized → TDZ error if accessed early
  ❌ function expressions / arrow functions → NOT fully hoisted (depends on var/let/const)
*/

// Function Declaration → FULLY hoisted ✅
console.log(greet("Logesh")); // Output: "Hello, Logesh" — works before definition
function greet(name) {
  return `Hello, ${name}`;
}

// var hoisting
console.log(score); // undefined (declaration hoisted, not value)
var score = 100;

// let / const — Temporal Dead Zone (TDZ)
// console.log(age); // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;

// Function Expression — NOT hoisted
// sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  return "Hi!";
};

// Arrow Function — NOT hoisted
// arrowFn(); // ❌ ReferenceError (if let/const) or TypeError (if var)
const arrowFn = () => "Arrow!";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 3. TEMPORAL DEAD ZONE (TDZ)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  TDZ = The period between when a let/const variable is hoisted and when it 
        is initialized with a value. Accessing it during TDZ throws ReferenceError.
  
  Phase 1 – Compilation: JS engine knows `let city` exists (hoisted) but does NOT init it.
  Phase 2 – Execution:   Until `let city = "Chennai"` line runs → TDZ is active.
*/
{
  // TDZ starts here for `city`
  // console.log(city); // ❌ ReferenceError
  let city = "Chennai"; // TDZ ends here
  console.log(city);    // ✅ "Chennai"
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 4. OPERATORS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Arithmetic   : + - * / % ** (exponent)
  Assignment   : = += -= *= /= %= **=
  Comparison   : == === != !== > < >= <=
  Logical      : && || ! ?? (nullish coalescing)
  Ternary      : condition ? trueVal : falseVal
  typeof       : returns type as string
  instanceof   : checks prototype chain
  Spread/Rest  : ...
  Optional Chain: ?.
*/

// == vs ===
console.log(5 == "5");    // true  (type coercion)
console.log(5 === "5");   // false (strict — no coercion)

// Nullish Coalescing
const userInput = null;
const displayName = userInput ?? "Guest"; // "Guest"

// Optional Chaining
const user = { profile: { email: "a@b.com" } };
console.log(user?.profile?.email);    // "a@b.com"
console.log(user?.address?.city);     // undefined (no error)

// typeof
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"  ← famous JS bug
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 5. FUNCTIONS  (all types)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  ┌────────────────────────────┬────────────┬──────────────┐
  │ Type                       │ Hoisted?   │ `this` bind? │
  ├────────────────────────────┼────────────┼──────────────┤
  │ Function Declaration       │ ✅ Fully   │ Dynamic      │
  │ Function Expression (var)  │ 🔸 var only│ Dynamic      │
  │ Arrow Function             │ ❌ No      │ Lexical      │
  │ IIFE                       │ ❌ No      │ Depends      │
  │ Constructor Function       │ ✅ Fully   │ New instance │
  │ Generator Function         │ ✅ Fully   │ Dynamic      │
  └────────────────────────────┴────────────┴──────────────┘
*/

// Function Declaration
function add(a, b) { return a + b; }

// Function Expression
const multiply = function (a, b) { return a * b; };

// Arrow Function — no own `this`, `arguments`
const divide = (a, b) => a / b;

// IIFE (Immediately Invoked Function Expression)
const result = (function () {
  const secret = "private";
  return secret.toUpperCase();
})();
console.log(result); // "PRIVATE"

// Default Parameters
function power(base, exp = 2) { return base ** exp; }
console.log(power(3));    // 9
console.log(power(3, 3)); // 27

// Rest Parameters
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 6. CLOSURE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Closure = A function that REMEMBERS the variables of its outer scope 
            even after that outer function has finished executing.
  
  Why? JS uses LEXICAL SCOPING — functions look up variables where they 
  are DEFINED, not where they are CALLED.
  
  Use Cases: data privacy, memoization, currying, event listeners, module pattern.
*/

function makeCounter() {
  let count = 0; // Private variable — lives in closure
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount:  () => count,
  };
}
const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // 2

// Closure with loop (Classic Interview Bug)
// ❌ Bug: var in loop — all share same `i`
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 100); // prints 3,3,3
}

// ✅ Fix 1: Use `let` (creates new binding per iteration)
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 200); // prints 0,1,2
}

// ✅ Fix 2: IIFE in loop
for (var k = 0; k < 3; k++) {
  ((k) => setTimeout(() => console.log("IIFE:", k), 300))(k); // prints 0,1,2
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 7. OBJECTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Object = Collection of key-value pairs. Keys are strings (or Symbols).
  Everything in JS (except primitives) is an object.
*/

const person = {
  firstName: "Logesh",
  lastName: "Kanagaraj",
  age: 22,
  address: { city: "Chennai", pincode: 600001 },
  greet() { return `Hi, I'm ${this.firstName}`; },
};

// Access
console.log(person.firstName);          // dot notation
console.log(person["lastName"]);        // bracket notation
console.log(person.address.city);       // nested

// Destructuring
const { firstName: personFirstName, age: personAge, address: { city: personCity2 } } = person;
console.log(personFirstName, personAge, personCity2); // "Logesh" 22 "Chennai"

// Spread — shallow copy
const personCopy = { ...person, age: 25 }; // age overridden

// Object methods
console.log(Object.keys(person));     // ["firstName","lastName","age","address","greet"]
console.log(Object.values(person));   // [values...]
console.log(Object.entries(person));  // [[key,val], ...]
console.log(Object.hasOwn(person, "age")); // true

// Computed property names
const key = "role";
const obj = { [key]: "developer" }; // { role: "developer" }

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 8. CONSTRUCTOR FUNCTION & `new` keyword
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Before ES6 classes, constructor functions were used to create objects.
  `new` does 4 things:
    1. Creates a new empty object {}
    2. Sets `this` to that new object
    3. Executes the constructor function
    4. Returns `this` (unless an explicit object is returned)
*/
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    return `Hello, I am ${this.name}`;
  };
}

// Add method via prototype (shared — memory efficient)
Person.prototype.getAge = function () {
  return this.age;
};

const p1 = new Person("Logesh", 22);
const p2 = new Person("Ram", 25);
console.log(p1.sayHello()); // "Hello, I am Logesh"
console.log(p2.getAge());   // 25

// ES6 Class (syntactic sugar over constructor functions)
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
    super(name, "Woof"); // must call super() before using `this`
  }
  fetch() { return `${this.name} fetches the ball!`; }
}

const dog = new Dog("Bruno");
console.log(dog.speak());  // "Bruno says Woof"
console.log(dog.fetch());  // "Bruno fetches the ball!"
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 9. WHY IS JAVASCRIPT DYNAMICALLY TYPED?
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  JS is DYNAMICALLY TYPED = variable types are determined at RUNTIME, not compile-time.
  You don't declare a type — the engine infers it from the value.

  Primitives (immutable, stored by value):
    number, string, boolean, undefined, null, BigInt, Symbol

  Objects (mutable, stored by reference):
    Object, Array, Function, Date, Map, Set …
  
  Type Coercion happens automatically:
    "5" + 5 → "55"  (string wins in +)
    "5" - 5 → 0     (number wins in -)
*/
let dynamicVar = 42;         // type: number
dynamicVar = "Hello";        // type: string — OK in JS
dynamicVar = true;           // type: boolean — OK in JS
console.log(typeof dynamicVar); // "boolean"

// Coercion examples
console.log("5" + 5);   // "55"
console.log("5" - 5);   // 0
console.log(true + 1);  // 2
console.log(null + 1);  // 1

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 10. COMPILER vs INTERPRETER  (How JS Engine Works)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  JS uses a JIT (Just-In-Time) Compiler — a HYBRID approach.

  Interpreter:
    - Reads & executes code line-by-line
    - Faster to START (no pre-compilation)
    - Slower execution for repeated code
  
  Compiler:
    - Translates entire code to machine code BEFORE execution
    - Slower start, FASTER execution

  JIT (V8 Engine — used in Node.js & Chrome):
    1. Parsing   → Source code → AST (Abstract Syntax Tree)
    2. Ignition  → AST → Bytecode (interpreted quickly)
    3. TurboFan  → Hot (frequently run) code → optimized machine code
    4. De-optimization if assumptions break (e.g. type changes)

  Execution Context:
    - Global EC  → created first (window / global object + `this`)
    - Function EC → created for every function call
    - Call Stack → manages execution order (LIFO)
    - Memory Heap → stores objects/closures (garbage collected)
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 11. ARRAY METHODS  (all key methods)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const words = ["banana", "apple", "cherry", "date"];

// --- TRANSFORM ---
// map( callback(item, index, arr) ) → new array, same length
const doubled = nums.map(n => n * 2);
console.log("map:", doubled); // [2,4,6,8,10,12,14,16,18,20]

// filter( callback ) → new array with items that pass the test
const evens = nums.filter(n => n % 2 === 0);
console.log("filter:", evens); // [2,4,6,8,10]

// reduce( callback(accumulator, current, index, arr), initialValue )
const total = nums.reduce((acc, cur) => acc + cur, 0);
console.log("reduce:", total); // 55

// flatMap — map then flatten one level
const nested = [[1, 2], [3, 4]];
console.log("flatMap:", nested.flatMap(x => x)); // [1,2,3,4]

// --- SEARCH ---
// find — first item matching condition
console.log("find:", nums.find(n => n > 5)); // 6

// findIndex — index of first match
console.log("findIndex:", nums.findIndex(n => n > 5)); // 5

// indexOf — index of exact value (-1 if not found)
console.log("indexOf:", words.indexOf("apple")); // 1

// includes — boolean check
console.log("includes:", words.includes("date")); // true

// some — true if ANY item passes
console.log("some:", nums.some(n => n > 9)); // true

// every — true if ALL items pass
console.log("every:", nums.every(n => n > 0)); // true

// --- MUTATION ---
// push / pop — end
const arr = [1, 2, 3];
arr.push(4);
console.log("push:", arr);  // [1,2,3,4]
arr.pop();
console.log("pop:", arr);   // [1,2,3]

// unshift / shift — beginning
arr.unshift(0);
console.log("unshift:", arr); // [0,1,2,3]
arr.shift();
console.log("shift:", arr);   // [1,2,3]

// splice(startIndex, deleteCount, ...itemsToAdd) — MUTATES original
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple"); // remove 1 at index 1, add 2
console.log("splice:", colors); // ["red","yellow","purple","blue"]

// slice(start, end) — does NOT mutate, returns new array
const sliced = nums.slice(2, 5);
console.log("slice:", sliced); // [3,4,5]

// sort — mutates! default is alphabetical (lexicographic)
const sortedWords = [...words].sort();
console.log("sort strings:", sortedWords); // alphabetically
const sortedNums = [3,1,4,1,5,9,2,6].sort((a,b) => a - b); // ascending
console.log("sort nums:", sortedNums);

// reverse — mutates
console.log("reverse:", [1,2,3].reverse()); // [3,2,1]

// join — array to string
console.log("join:", ["a","b","c"].join("-")); // "a-b-c"

// flat(depth) — flatten nested arrays
console.log("flat:", [1,[2,[3,[4]]]].flat(Infinity)); // [1,2,3,4]

// fill(value, start, end) — mutates
console.log("fill:", new Array(5).fill(0)); // [0,0,0,0,0]

// Array.from — create array from iterable / array-like
console.log("Array.from:", Array.from("hello")); // ["h","e","l","l","o"]
console.log("Array.from:", Array.from({length:3}, (_, i) => i+1)); // [1,2,3]

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 12. JSON.parse()  &  JSON.stringify()
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  JSON (JavaScript Object Notation) = text format to transfer data.

  JSON.stringify(value, replacer, space)
    → Converts JS value (object/array) → JSON string
    → Arguments:
        value    : the JS value to convert
        replacer : array of keys to include OR function(key,val)=>val  (optional)
        space    : indent spaces for pretty print (optional)
    → undefined, functions, Symbol → omitted from JSON

  JSON.parse(text, reviver)
    → Converts JSON string → JS value
    → Arguments:
        text    : JSON string to parse
        reviver : function(key,val)=>val to transform values (optional)
    → Throws SyntaxError for invalid JSON
*/

const student = { name: "Logesh", age: 22, skills: ["JS", "React"] };

// stringify
const jsonString = JSON.stringify(student);
console.log("stringify:", jsonString);
// '{"name":"Logesh","age":22,"skills":["JS","React"]}'

// Pretty print
const pretty = JSON.stringify(student, null, 2);
console.log("pretty:\n", pretty);

// stringify with replacer (only include specific keys)
const filtered = JSON.stringify(student, ["name", "skills"]);
console.log("filtered stringify:", filtered);
// '{"name":"Logesh","skills":["JS","React"]}'

// parse
const restored = JSON.parse(jsonString);
console.log("parse:", restored);          // JS object
console.log("parse type:", typeof restored); // "object"

// parse with reviver
const parsed = JSON.parse('{"score":"100"}', (key, val) => {
  return key === "score" ? Number(val) : val;
});
console.log("reviver:", parsed.score, typeof parsed.score); // 100 "number"

// Deep clone trick (simple, but loses functions/undefined)
const deepClone = JSON.parse(JSON.stringify(student));

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 13. PROMISES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  A Promise = an object representing the eventual completion or failure 
              of an asynchronous operation.

  States:
    pending   → initial state (operation in progress)
    fulfilled → operation completed successfully  → .then() runs
    rejected  → operation failed                  → .catch() runs
  
  Once settled (fulfilled | rejected) → state is IMMUTABLE.

  Constructor: new Promise((resolve, reject) => { ... })
    resolve(value) → moves to fulfilled
    reject(reason) → moves to rejected
*/

// Basic Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data fetched!");
  else reject(new Error("Fetch failed!"));
});

myPromise
  .then(data => console.log("then:", data))       // "Data fetched!"
  .catch(err => console.error("catch:", err))
  .finally(() => console.log("finally: runs always"));

// Promise chaining
Promise.resolve(1)
  .then(val => val + 1)   // 2
  .then(val => val * 3)   // 6
  .then(val => console.log("chain:", val)); // 6

// ---- PROMISE METHODS ----
/*
  Promise.all(iterable)
    → Waits for ALL promises to resolve.
    → Returns: array of results (same order).
    → Rejects IMMEDIATELY if ANY promise rejects.
    → Use: parallel independent operations where all must succeed.

  Promise.allSettled(iterable)
    → Waits for ALL promises to settle (resolve OR reject).
    → Returns: array of { status: "fulfilled"|"rejected", value/reason }
    → NEVER rejects itself.
    → Use: when you want all results regardless of failures.

  Promise.any(iterable)
    → Resolves with FIRST fulfilled promise.
    → Rejects only if ALL promises reject (AggregateError).
    → Use: first successful response wins.

  Promise.race(iterable)
    → Resolves/Rejects with FIRST settled promise (fulfilled OR rejected).
    → Use: timeout pattern.
*/

// Promise.all — all must resolve
Promise.all([
  Promise.resolve("A"),
  Promise.resolve("B"),
  Promise.resolve("C"),
]).then(results => console.log("Promise.all:", results)); // ["A","B","C"]

// Promise.all — one rejects → all fail
Promise.all([
  Promise.resolve("A"),
  Promise.reject("Oops"),
  Promise.resolve("C"),
]).catch(err => console.log("Promise.all rejected:", err)); // "Oops"

// Promise.allSettled — always gets all results
Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("Oops"),
  Promise.resolve("C"),
]).then(results => {
  results.forEach(r => {
    if (r.status === "fulfilled") console.log("allSettled ✅:", r.value);
    else console.log("allSettled ❌:", r.reason);
  });
});

// Promise.any — first resolve wins
Promise.any([
  Promise.reject("fail1"),
  Promise.resolve("Winner!"),
  Promise.resolve("Second"),
]).then(val => console.log("Promise.any:", val)); // "Winner!"

// Promise.race — first to settle (resolve or reject)
Promise.race([
  new Promise(res => setTimeout(() => res("Slow"), 300)),
  new Promise(res => setTimeout(() => res("Fast"), 100)),
]).then(val => console.log("Promise.race:", val)); // "Fast"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 14. ASYNC / AWAIT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  async/await = syntactic sugar over Promises.

  `async` function:
    - Always returns a Promise (auto-wraps non-promise return values)
    - Enables use of `await` inside

  `await`:
    - Pauses execution of the async function until the Promise settles
    - Returns the resolved value
    - Can ONLY be used inside async functions (or top-level module)
    - If Promise rejects → throws error (handle with try/catch)
*/

// Simulate API call
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, name: "Logesh", role: "developer" });
      else reject(new Error("Invalid ID"));
    }, 1000);
  });
}

// Async / Await
async function getUser(id) {
  try {
    console.log("Fetching user...");
    const user = await fetchUser(id); // waits here
    console.log("User:", user);
    return user; // resolves the async function's promise with this value
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("getUser done");
  }
}
getUser(1);
getUser(-1);

// Sequential vs Parallel
async function sequential() {
  const a = await fetchUser(1); // waits 1s
  const b = await fetchUser(2); // waits another 1s — total 2s
  return [a, b];
}

async function parallel() {
  const [a, b] = await Promise.all([fetchUser(1), fetchUser(2)]); // both run simultaneously — total ~1s
  return [a, b];
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 15. FETCH API  &  HTTP METHODS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  fetch(url, options) → returns a Promise<Response>
    - Step 1: await fetch()       → gives Response object
    - Step 2: await res.json()    → parses JSON body (also a Promise)
  
  Response object properties:
    res.ok         → boolean (true if status 200-299)
    res.status     → HTTP status code (200, 404, 500…)
    res.statusText → "OK", "Not Found" …
    res.headers    → Headers object
    res.url        → request URL
  
  Response body methods (each returns a Promise):
    res.json()     → parse as JSON
    res.text()     → parse as plain text
    res.blob()     → parse as Blob (images, files)
    res.formData() → parse as FormData
    res.arrayBuffer() → parse as ArrayBuffer

  ── HTTP METHODS ──────────────────────────────────────────
  GET     → Read / Retrieve data          (no body)
  POST    → Create / Submit new data      (has body)
  PUT     → Replace entire resource       (has body)
  PATCH   → Partially update resource     (has body)
  DELETE  → Delete a resource             (no/optional body)
  HEAD    → Like GET but no response body
  OPTIONS → Check allowed methods (CORS preflight)

  ── STATUS CODES ──────────────────────────────────────────
  1xx → Informational
  2xx → Success      (200 OK, 201 Created, 204 No Content)
  3xx → Redirect     (301 Moved, 304 Not Modified)
  4xx → Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
  5xx → Server Error (500 Internal Error, 503 Service Unavailable)
*/

// GET request
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    const data = await res.json();
    console.log("GET:", data.title);
  } catch (err) {
    console.error("Fetch error:", err.message);
  }
}
// getData(); // uncomment in browser

// POST request
async function postData(newPost) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",   // tell server format
        "Authorization": "Bearer <token>",    // if auth needed
      },
      body: JSON.stringify(newPost),           // JS object → JSON string
    });
    const data = await res.json();
    console.log("POST result:", data);
  } catch (err) {
    console.error("POST error:", err.message);
  }
}
// postData({ title: "Hello", body: "World", userId: 1 }); // uncomment in browser

// PUT — full update
async function putData(id, updatedPost) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPost),
  });
  return res.json();
}

// PATCH — partial update
async function patchData(id, partialData) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(partialData),
  });
  return res.json();
}

// DELETE
async function deletePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  console.log("DELETE status:", res.status); // 200
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 16. DOM  (Document Object Model)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  DOM = Tree representation of the HTML document. JS can read & modify it.
  document → root of the DOM tree.
*/

// ---- SELECTING ELEMENTS ----
// document.getElementById("id")         → single element or null
// document.querySelector(".class #id")  → first match or null  (CSS selector)
// document.querySelectorAll("p")        → NodeList (all matches)
// document.getElementsByClassName("x")  → HTMLCollection (live)
// document.getElementsByTagName("div")  → HTMLCollection (live)

// ---- READING / WRITING ----
// el.textContent       → all text inside (including hidden)
// el.innerHTML         → HTML markup inside (⚠️ XSS risk)
// el.innerText         → visible text only
// el.value             → value of input/textarea/select
// el.getAttribute("src") / el.setAttribute("src","url")
// el.classList.add("active") / remove / toggle / contains
// el.style.color = "red"

// ---- CREATING & INSERTING ----
// document.createElement("div")
// parent.appendChild(child)
// parent.insertBefore(newEl, referenceEl)
// parent.replaceChild(newEl, oldEl)
// el.remove()
// el.append("text", el2)          // newer API, accepts strings
// el.before() / el.after()
// el.insertAdjacentHTML("beforeend", "<p>hi</p>")

// ---- TRAVERSAL ----
// el.parentElement / el.children / el.firstElementChild / el.lastElementChild
// el.nextElementSibling / el.previousElementSibling

// Example (conceptual — run in browser)
/*
const btn = document.getElementById("myBtn");
const list = document.querySelector("ul");
const items = document.querySelectorAll("li");

items.forEach(item => item.classList.add("highlight"));

const newItem = document.createElement("li");
newItem.textContent = "New Item";
list.appendChild(newItem);
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 17. EVENT BUBBLING  (& Capturing & Delegation)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Event Phases:
    1. CAPTURING (Trickling) — event travels DOWN from window → target
    2. TARGET                — event reaches the clicked element
    3. BUBBLING              — event travels UP from target → window

  addEventListener(event, handler, useCapture)
    useCapture = false (default) → handler fires in BUBBLING phase
    useCapture = true            → handler fires in CAPTURING phase

  event.stopPropagation()  → stops event from bubbling/capturing further
  event.preventDefault()   → prevents browser default action (e.g. form submit, link nav)

  Event Delegation:
    Attach ONE listener on a parent to handle events for many children.
    Works because of bubbling.
    → Better performance, works for dynamically added elements.
*/

// Example (run in browser):
/*
// BUBBLING
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("child clicked");
  // e.stopPropagation(); // uncomment to stop bubble
});
document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent: bubble caught");
});

// CAPTURING
document.querySelector("#parent").addEventListener("click", () => {
  console.log("parent: CAPTURE phase");
}, true);

// EVENT DELEGATION — handle clicks on any <li> via parent <ul>
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 18. WINDOW OBJECT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  `window` = the global object in browsers.
  All global variables/functions become properties of `window`.

  Key properties / methods:
    window.document       → the DOM
    window.location       → URL info + navigation
    window.history        → browser history
    window.navigator      → browser/device info
    window.screen         → screen dimensions
    window.localStorage   → persistent storage (no expiry)
    window.sessionStorage → session storage (tab-scoped)
    window.alert()        → dialog
    window.confirm()      → OK/Cancel dialog
    window.prompt()       → input dialog
    window.setTimeout(fn, ms) → run fn after ms
    window.setInterval(fn, ms) → run fn every ms
    window.clearTimeout(id)   → cancel timeout
    window.clearInterval(id)  → cancel interval
    window.fetch()        → built-in fetch API
    window.innerWidth / window.innerHeight → viewport size
    window.scrollTo(x, y) / window.scrollBy(x, y)

  localStorage vs sessionStorage:
    localStorage:   persists until manually cleared
    sessionStorage: cleared when tab/window is closed
*/

// localStorage example (browser)
/*
localStorage.setItem("token", "abc123");
const token = localStorage.getItem("token");
localStorage.removeItem("token");
localStorage.clear();
*/

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 19. POLYFILLS  (implementing native methods from scratch)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  Polyfill = JavaScript code that implements a feature that the browser/engine 
             doesn't natively support (usually for older browsers).
*/

// Polyfill: Array.prototype.map
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}
console.log("myMap:", [1, 2, 3].myMap(x => x * 2)); // [2,4,6]

// Polyfill: Array.prototype.filter
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) result.push(this[i]);
    }
    return result;
  };
}
console.log("myFilter:", [1,2,3,4,5].myFilter(x => x > 3)); // [4,5]

// Polyfill: Array.prototype.reduce
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0];
    let start = initialValue !== undefined ? 0 : 1;
    for (let i = start; i < this.length; i++) {
      acc = callback(acc, this[i], i, this);
    }
    return acc;
  };
}
console.log("myReduce:", [1,2,3,4].myReduce((acc, x) => acc + x, 0)); // 10

// Polyfill: Function.prototype.bind
if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function (...newArgs) {
      return fn.apply(context, [...args, ...newArgs]);
    };
  };
}

// Polyfill: Promise
// (Simplified version — real ones handle edge cases)
function MyPromise(executor) {
  let state = "pending", value;
  const fulfillCallbacks = [], rejectCallbacks = [];

  function resolve(val) {
    if (state !== "pending") return;
    state = "fulfilled"; value = val;
    fulfillCallbacks.forEach(fn => fn(val));
  }
  function reject(reason) {
    if (state !== "pending") return;
    state = "rejected"; value = reason;
    rejectCallbacks.forEach(fn => fn(reason));
  }

  this.then = function (onFulfilled) {
    if (state === "fulfilled") onFulfilled(value);
    else fulfillCallbacks.push(onFulfilled);
    return this;
  };
  this.catch = function (onRejected) {
    if (state === "rejected") onRejected(value);
    else rejectCallbacks.push(onRejected);
    return this;
  };

  executor(resolve, reject);
}

new MyPromise((resolve) => resolve("polyfill works!"))
  .then(val => console.log("MyPromise:", val));

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 20. CALL, APPLY, BIND
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  All three let you explicitly set `this` for a function.

  call(thisArg, arg1, arg2, ...)  → invokes IMMEDIATELY, args individually
  apply(thisArg, [arg1, arg2])    → invokes IMMEDIATELY, args as array
  bind(thisArg, arg1, ...)        → returns NEW function (doesn't invoke)
*/
function introduce(greeting, punctuation) {
  return `${greeting}, I am ${this.name}${punctuation}`;
}
const dev = { name: "Logesh" };

console.log(introduce.call(dev, "Hello", "!"));       // call
console.log(introduce.apply(dev, ["Hi", "?"]));       // apply
const boundIntro = introduce.bind(dev, "Hey");        // bind
console.log(boundIntro("..."));                        // "Hey, I am Logesh..."

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 21. SPREAD & REST  /  DESTRUCTURING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Spread — expands iterable/object into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];          // [1,2,3,4,5,6]
const objMerged = { ...person, age: 30 };  // override age

// Rest — collects remaining arguments into array
function logArgs(first, second, ...rest) {
  console.log(first, second, rest);
}
logArgs(1, 2, 3, 4, 5); // 1  2  [3,4,5]

// Array Destructuring
const [a, b, , d] = [10, 20, 30, 40]; // skip index 2
console.log(a, b, d); // 10 20 40

// Object Destructuring with rename & default
const { firstName: fName, phone = "N/A" } = person;
console.log(fName, phone); // "Logesh" "N/A"

// Nested destructuring
const { address: { city: personCityNested } } = person;
console.log(personCityNested); // "Chennai"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SUMMARY — All Key Interview Points
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/*
  ✅ Variables      : var (fn-scoped, hoisted) | let/const (block-scoped, TDZ)
  ✅ Hoisting       : declarations moved up; fn declarations fully hoisted; let/const → TDZ
  ✅ TDZ            : let/const exist but can't be accessed before their line
  ✅ Closure        : inner fn remembers outer scope even after outer fn returns
  ✅ Objects        : key-value pairs, reference type, prototype chain
  ✅ Constructor    : new keyword → creates object, sets this, executes body, returns this
  ✅ Dynamically Typed: types resolved at runtime, type coercion happens
  ✅ JIT Compiler   : parsing → bytecode (Ignition) → machine code (TurboFan)
  ✅ Array Methods  : map/filter/reduce/find/findIndex/some/every/splice/slice/sort
  ✅ JSON           : stringify (JS→string), parse (string→JS)
  ✅ Promises       : pending→fulfilled/rejected | .then .catch .finally
  ✅ Promise methods: all (fail-fast) | allSettled (all results) | any (first win) | race (first settle)
  ✅ async/await    : syntactic sugar over promises; try/catch for errors
  ✅ fetch          : GET/POST/PUT/PATCH/DELETE; check res.ok; parse body with res.json()
  ✅ DOM            : querySelector/createElement/appendChild/classList/textContent
  ✅ Events         : capturing(down)→target→bubbling(up) | stopPropagation | delegation
  ✅ Window         : global object | localStorage | setTimeout/setInterval
  ✅ Polyfills      : manual implementation of native methods for compatibility
  ✅ call/apply/bind: explicitly set `this`
  ✅ Spread/Rest    : expand vs collect
  ✅ Destructuring  : extract values from arrays/objects cleanly
*/
