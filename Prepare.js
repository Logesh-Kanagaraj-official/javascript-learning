console.log("Preparing for the interview");

const data = {
  electronics: {
    mobile: 10,
    laptop: 5,
  },
  fashion: {
    shirt: 20,
    jeans: 15,
  },
  groceries: {
    rice: 30,
    wheat: 25,
  }
};

console.log("categories and items:", data);

// first javascript array, object, function, loop, conditional statement, 
// promise, async await, class, inheritance, closure, callback, event handling, 
// DOM manipulation, fetch API, error handling, destructuring, spread operator, 
// template literals, modules, hoisting, scope, this keyword
// [8:10 pm, 26/12/2025] Jothish❤: DOM manipulation, ES6 functions, Promises, loops, Sync and async, (bind,call,apply), objects, JSON, Arrays(splice,slice), Strings(indexof,substring)
//Fetch, shallow copy, Hoisting,Closures, Scope of variables, Callback function


// array




const fruits = ["apple", "banana", "cherry"];

const num=[1,2,3,4,5,6,7,8,9]
console.log(num);
console.log(fruits);

// mamp
const numaar=num.map((x)=> {
    const y = x*x; 
    console.log(y)
} );

const nummaarr=num.map((x)=>x*x)
console.log(nummaarr)
const furarr=fruits.map((x)=>console.log(x));


//filter
const numbers=[2,4,6,8,20,10];

const filternum=numbers.filter((x)=> x>8);
console.log(filternum)


//callback function and higher order function
function A(n){
  console.log("A - console for higher order");
  let result =20;
  n(result); // Calls the B function passed as an argument
}

function B(result) {
  console.log("b - console from the function");
  console.log("Result received from A:", result);
}

A(B); // Passes the function B as an argument to A


// remebers
function outer() {
    var a = 10;
    // We must return the inner function to make it accessible outside
    return function inner() { 
        var b = 40;
        var sum = a + b; 
        return sum;
    };
}
let finals = outer(); 
console.log(finals()); // Output: 30
