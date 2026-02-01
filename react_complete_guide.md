# React Complete Interview Guide

**From Basics to Advanced**

> **Focus**: Complete React interview preparation covering 60+ topics with examples and real-world patterns

---

## 📌 Table of Contents

### Part 1: React Fundamentals

1. [What is React?](#1-what-is-react)
2. [React Features](#2-react-features)
3. [Virtual DOM](#3-virtual-dom)
4. [JSX](#4-jsx)
5. [Components](#5-components)
6. [Props](#6-props)
7. [Props Drilling](#7-props-drilling)
8. [State](#8-state)
9. [One-Way Data Flow](#9-one-way-data-flow)

### Part 2: Hooks

10. [Hooks Overview](#10-hooks-overview)
11. [useState](#11-usestate)
12. [useEffect](#12-useeffect)
13. [useEffect Dependency Array](#13-useeffect-dependency-array)
14. [useEffect Return (Cleanup)](#14-useeffect-cleanup)
15. [useContext](#15-usecontext)
16. [useRef](#16-useref)
17. [useRef vs useState](#17-useref-vs-usestate)
18. [forwardRef](#18-forwardref)
19. [useMemo](#19-usememo)
20. [useCallback](#20-usecallback)
21. [React.memo vs useMemo](#21-reactmemo-vs-usememo)
22. [useReducer](#22-usereducer)
23. [useReducer vs useState](#23-usereducer-vs-usestate)
24. [useLayoutEffect](#24-uselayouteffect)
25. [useLayoutEffect vs useEffect](#25-uselayouteffect-vs-useeffect)
26. [useTransition](#26-usetransition)

### Part 3: Component Patterns

27. [Functional vs Class Components](#27-functional-vs-class-components)
28. [Lifecycle Methods in Class Components](#28-lifecycle-methods)
29. [Lifecycle in Function Components](#29-lifecycle-in-function-components)
30. [Controlled Components](#30-controlled-components)
31. [Uncontrolled Components](#31-uncontrolled-components)
32. [Higher-Order Components (HOC)](#32-hoc)
33. [Render Props Pattern](#33-render-props)
34. [Custom Hooks](#34-custom-hooks)

### Part 4: Performance & Optimization

35. [Reconciliation](#35-reconciliation)
36. [Diffing Algorithm](#36-diffing-algorithm)
37. [Reconciliation vs Diffing](#37-reconciliation-vs-diffing)
38. [React.memo](#38-react-memo)
39. [Key Prop](#39-key-prop)
40. [Code Splitting](#40-code-splitting)
41. [Lazy Loading](#41-lazy-loading)
42. [Suspense](#42-suspense)
43. [Concurrent Rendering](#43-concurrent-rendering)
44. [Immutability in React](#44-immutability)

### Part 5: React Router

45. [React Router DOM](#45-react-router-dom)
46. [Routing Basics](#46-routing-basics)
47. [useNavigate, useParams, useLocation](#47-router-hooks)

### Part 6: State Management

48. [Redux](#48-redux)
49. [Redux Flow](#49-redux-flow)
50. [When to Use Redux vs useContext](#50-redux-vs-usecontext)
51. [Redux Optimization](#51-redux-optimization)
52. [Redux Toolkit](#52-redux-toolkit)

### Part 7: Advanced Topics

53. [Intersection Observer](#53-intersection-observer)
54. [React vs Library/Framework](#54-react-library-vs-framework)
55. [React Fiber](#55-react-fiber)
56. [Streaming SSR](#56-streaming-ssr)
57. [Error Boundaries](#57-error-boundaries)
58. [Portals](#58-portals)
59. [Context vs Props](#59-context-vs-props)
60. [StrictMode](#60-strictmode)

---

## Part 1: React Fundamentals

### 1. What is React?

**Definition:**  
**React** is a **JavaScript library** for building fast, interactive user interfaces, primarily for single-page applications. Created by Facebook (Meta) in 2013.

**Key Points:**

- **Component-based** - Build encapsulated components
- **Declarative** - Describe what UI should look like
- **Learn once, write anywhere** - Web, mobile (React Native), desktop
- **Virtual DOM** - Efficient UI updates
- **Unidirectional data flow** - Predictable state management

**Example:**

```jsx
import React from "react";

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;
```

---

### 2. React Features

**Core Features:**

1. **Virtual DOM** - Fast UI updates
2. **JSX** - HTML-like syntax in JavaScript
3. **Components** - Reusable UI building blocks
4. **One-way Data Binding** - Predictable data flow
5. **Hooks** - State and lifecycle in functional components
6. **Server-Side Rendering (SSR)** - SEO-friendly
7. **High Performance** - Efficient diffing algorithm
8. **Strong Ecosystem** - Router, state management, etc.

---

### 3. Virtual DOM

**Definition:**  
The **Virtual DOM** is a lightweight JavaScript representation of the actual DOM. React uses it to minimize direct DOM manipulations, which are expensive.

**How it Works:**

```
1. State Changes
   ↓
2. React Creates New Virtual DOM
   ↓
3. Diff Algorithm Compares Old vs New Virtual DOM
   ↓
4. React Calculates Minimum Changes Needed
   ↓
5. Batch Update Real DOM (Reconciliation)
```

**Example:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  // When count changes:
  // 1. React creates new Virtual DOM with updated count
  // 2. Compares with previous Virtual DOM
  // 3. Updates ONLY the changed text node in real DOM

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Benefits:**

- **Performance** - Minimizes expensive DOM operations
- **Efficiency** - Batch updates
- **Cross-platform** - Can render to different targets

**Real DOM vs Virtual DOM:**

| Aspect              | Real DOM                 | Virtual DOM      |
| ------------------- | ------------------------ | ---------------- |
| **Updates**         | Slow (repaints/reflows)  | Fast (in-memory) |
| **Manipulation**    | Direct, expensive        | Indirect, cheap  |
| **Memory**          | Heavier                  | Lighter          |
| **Update Strategy** | Re-render entire subtree | Diff and patch   |

---

### 4. JSX

**Definition:**  
**JSX (JavaScript XML)** is a syntax extension that allows you to write HTML-like code in JavaScript. It makes React code more readable.

**Not HTML, It's JavaScript:**

```jsx
// JSX
const element = <h1 className="title">Hello</h1>;

// Compiles to:
const element = React.createElement("h1", { className: "title" }, "Hello");
```

**JSX Rules:**

1. **Single Parent Element:**

```jsx
// ❌ Wrong
return (
    <h1>Title</h1>
    <p>Paragraph</p>
);

// ✅ Correct
return (
    <div>
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
);

// ✅ Or use Fragment
return (
    <>
        <h1>Title</h1>
        <p>Paragraph</p>
    </>
);
```

2. **className instead of class:**

```jsx
<div className="container">Content</div>
```

3. **camelCase for attributes:**

```jsx
<input onClick={handleClick} onChange={handleChange} />
```

4. **Self-closing tags:**

```jsx
<img src="photo.jpg" />
<input type="text" />
<br />
```

5. **JavaScript expressions in { }:**

```jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;

const element2 = <p>{2 + 2}</p>; // <p>4</p>

const isLoggedIn = true;
const greeting = <h1>{isLoggedIn ? "Welcome back!" : "Please log in"}</h1>;
```

**Complete Example:**

```jsx
function UserCard({ user }) {
  const isOnline = user.status === "online";

  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "🟢 Online" : "🔴 Offline"}
      </p>
      <button onClick={() => console.log(`Message ${user.name}`)}>
        Message
      </button>
    </div>
  );
}
```

---

### 5. Components

**Definition:**  
**Components** are independent, reusable pieces of UI. They are the building blocks of React applications.

**Types of Components:**

1. **Functional Components (Modern):**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Or with arrow function
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};
```

2. **Class Components (Legacy):**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

**Component Example:**

```jsx
// Button Component
function Button({ label, onClick, variant = "primary" }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

// Using the component
function App() {
  return (
    <div>
      <Button label="Submit" onClick={() => alert("Submitted!")} />
      <Button
        label="Cancel"
        onClick={() => alert("Cancelled")}
        variant="secondary"
      />
    </div>
  );
}
```

**Component Best Practices:**

- **Single Responsibility** - One component, one purpose
- **Reusability** - Make components generic
- **Composition** - Build complex UIs from simple components
- **Props** - Pass data down
- **Naming** - PascalCase for component names

---

### 6. Props

**Definition:**  
**Props (Properties)** are read-only data passed from parent to child components.

**Characteristics:**

- **Immutable** - Cannot be modified by child
- **Unidirectional** - Flow from parent to child
- **Any data type** - strings, numbers, objects, functions

**Example:**

```jsx
// Parent Component
function App() {
  const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  return <UserProfile user={user} isAdmin={true} />;
}

// Child Component
function UserProfile({ user, isAdmin }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  );
}
```

**Default Props:**

```jsx
function Button({ label, variant = "primary" }) {
  return <button className={variant}>{label}</button>;
}

// Or with defaultProps
Button.defaultProps = {
  variant: "primary",
};
```

**Props Destructuring:**

```jsx
// Without destructuring
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// With destructuring (preferred)
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

**Children Prop:**

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

// Usage
<Card>
  <h2>Title</h2>
  <p>Content goes here</p>
</Card>;
```

---

### 7. Props Drilling

**Definition:**  
**Props Drilling** is the process of passing props through multiple levels of components to reach a deeply nested component.

**Problem:**

```jsx
// App.js
function App() {
  const user = { name: "John", role: "admin" };
  return <Header user={user} />;
}

// Header.js
function Header({ user }) {
  return <Navigation user={user} />; // Just passing through
}

// Navigation.js
function Navigation({ user }) {
  return <UserMenu user={user} />; // Just passing through
}

// UserMenu.js
function UserMenu({ user }) {
  return <div>Welcome, {user.name}!</div>; // Finally used!
}
```

**Solutions:**

**1. Context API (Recommended):**

```jsx
// Create Context
const UserContext = React.createContext();

// Provider in App
function App() {
  const user = { name: "John", role: "admin" };

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

// No need to pass props through Header and Navigation!
function Header() {
  return <Navigation />;
}

function Navigation() {
  return <UserMenu />;
}

// Consumer in UserMenu
function UserMenu() {
  const user = React.useContext(UserContext);
  return <div>Welcome, {user.name}!</div>;
}
```

**2. Composition:**

```jsx
function App() {
  const user = { name: "John" };

  return (
    <Header>
      <UserMenu user={user} /> {/* Direct child */}
    </Header>
  );
}

function Header({ children }) {
  return (
    <header>
      <Logo />
      {children}
    </header>
  );
}
```

**3. State Management (Redux, Zustand):**

```jsx
// With Redux
function UserMenu() {
  const user = useSelector((state) => state.user);
  return <div>Welcome, {user.name}!</div>;
}
```

---

### 8. State

**Definition:**  
**State** is data that changes over time and affects what the component renders. Unlike props, state is managed within the component.

**useState Hook:**

```jsx
import React, { useState } from "react";

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0); // Initial value: 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

**Multiple State Variables:**

```jsx
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
      />
    </form>
  );
}
```

**Object State:**

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = (field, value) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form>
      <input
        value={user.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        value={user.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
    </form>
  );
}
```

**State Updates are Asynchronous:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count); // ❌ Still old value! State updates are batched
  };

  // Use functional update for dependent updates
  const incrementTwice = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1); // ✅ Works correctly
  };

  return <button onClick={incrementTwice}>+2</button>;
}
```

---

### 9. One-Way Data Flow

**Definition:**  
In React, data flows **unidirectionally** (one-way) from parent to child components through props. Child components cannot directly modify parent state.

**Example:**

```
       App (Parent)
         │
         │ props ↓
         ▼
    ChildComponent
         │
         │ props ↓
         ▼
  GrandchildComponent
```

**Parent to Child:**

```jsx
function Parent() {
  const [message, setMessage] = useState("Hello");

  return <Child message={message} />;
}

function Child({ message }) {
  // ❌ Cannot do: message = 'New value'
  // Props are read-only!

  return <p>{message}</p>;
}
```

**Child to Parent Communication (Lifting State Up):**

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onIncrement={incrementCount} />
    </div>
  );
}

function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment in Parent</button>;
}
```

---

## Part 2: Hooks

### 10. Hooks Overview

**What are Hooks?**  
**Hooks** are functions that let you "hook into" React features like state and lifecycle in functional components.

**Rules of Hooks:**

1. **Only call hooks at the top level** - Not inside loops, conditions, or nested functions
2. **Only call hooks in React functions** - Functional components or custom hooks

**Built-in Hooks:**

- `useState` - State management
- `useEffect` - Side effects
- `useContext` - Context API
- `useReducer` - Complex state logic
- `useCallback` - Memoize functions
- `useMemo` - Memoize values
- `useRef` - DOM references / persistent values
- `useLayoutEffect` - Synchronous effects
- `useImperativeHandle` - Expose ref methods
- `useDebugValue` - Custom hook labels
- `useTransition` - Concurrent features
- `useDeferredValue` - Defer expensive updates

---

### 11. useState

**Definition:**  
`useState` allows you to add state to functional components.

**Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

**Examples:**

```jsx
// Simple counter
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

// Toggle
function Toggle() {
    const [isOn, setIsOn] = useState(false);

    return (
        <button onClick={() => setIsOn(!isOn)}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}

// Array state
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (/* UI */);
}

// Lazy initialization (expensive computation)
function ExpensiveComponent() {
    const [data, setData] = useState(() => {
        // Only runs once on mount
        return expensiveCalculation();
    });

    return <div>{data}</div>;
}
```

---

### 12. useEffect

**Definition:**  
`useEffect` allows you to perform side effects in functional components (data fetching, subscriptions, manual DOM manipulation).

**Syntax:**

```jsx
useEffect(() => {
  // Side effect code

  return () => {
    // Cleanup code (optional)
  };
}, [dependencies]);
```

**Examples:**

**1. Run on every render:**

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

**2. Run once on mount:**

```jsx
useEffect(() => {
  console.log("Runs once on mount");
}, []); // Empty dependency array
```

**3. Run when specific values change:**

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]); // Runs when userId changes

  return <div>{user?.name}</div>;
}
```

**4. Cleanup function:**

```jsx
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(interval); // Cleanup on unmount
  };
}, []);
```

---

### 13. useEffect Dependency Array

**Three Scenarios:**

1. **No dependency array** - Runs after every render

```jsx
useEffect(() => {
  console.log("Every render");
});
```

2. **Empty array `[]`** - Runs once on mount

```jsx
useEffect(() => {
  console.log("Only on mount");
}, []);
```

3. **With dependencies** - Runs when dependencies change

```jsx
useEffect(() => {
  console.log("When count changes");
}, [count]);
```

**Multiple Dependencies:**

```jsx
useEffect(() => {
  console.log("When name OR age changes");
}, [name, age]);
```

---

### 14. useEffect Cleanup

**When Cleanup Runs:**

- Before component unmounts
- Before effect runs again (if dependencies changed)

**Examples:**

**Event Listeners:**

```jsx
useEffect(() => {
  const handleResize = () => {
    console.log("Window resized");
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); // Cleanup
  };
}, []);
```

**Timers:**

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Delayed action");
  }, 1000);

  return () => clearTimeout(timer); // Cleanup
}, []);
```

**Subscriptions:**

```jsx
useEffect(() => {
  const subscription = dataSource.subscribe((data) => {
    console.log(data);
  });

  return () => subscription.unsubscribe(); // Cleanup
}, []);
```

**WebSocket:**

```jsx
useEffect(() => {
  const ws = new WebSocket("ws://localhost:8080");

  ws.onmessage = (event) => {
    console.log(event.data);
  };

  return () => ws.close(); // Cleanup
}, []);
```

---

### 15. useContext

**Definition:**  
`useContext` allows you to consume context without wrapping components in `Context.Consumer`.

**Basic Usage:**

```jsx
import React, { createContext, useContext, useState } from "react";

// 1. Create Context
const ThemeContext = createContext();

// 2. Provider Component
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

// 3. Consumer Component
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </header>
  );
}
```

**Multiple Contexts:**

```jsx
const UserContext = createContext();
const ThemeContext = createContext();

function App() {
  return (
    <UserContext.Provider value={{ name: "John" }}>
      <ThemeContext.Provider value={{ theme: "dark" }}>
        <Dashboard />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

function Dashboard() {
  const user = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>Welcome, {user.name}!</div>;
}
```

**Custom Context Hook Pattern:**

```jsx
const AuthContext = createContext();

// Custom hook
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

// Provider wrapper
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Usage
function Profile() {
  const { user, logout } = useAuth();
  return <button onClick={logout}>Logout {user.name}</button>;
}
```

---

### 16. useRef

**Definition:**  
`useRef` creates a mutable reference that persists across renders without causing re-renders when changed.

**Use Cases:**

**1. Accessing DOM Elements:**

```jsx
function TextInputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**2. Storing Mutable Values:**

```jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Cleanup
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
```

**3. Previous Value Tracking:**

```jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**4. Avoiding Stale Closures:**

```jsx
function Component() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // Always up-to-date
  }, [count]);

  const handleAlert = () => {
    setTimeout(() => {
      alert(`Count: ${countRef.current}`); // ✅ Current value
    }, 3000);
  };

  return <button onClick={handleAlert}>Show Alert</button>;
}
```

---

### 17. useRef vs useState

**Key Differences:**

| Feature        | useRef                       | useState               |
| -------------- | ---------------------------- | ---------------------- |
| **Re-renders** | ❌ Doesn't trigger re-render | ✅ Triggers re-render  |
| **Updates**    | Synchronous                  | Asynchronous (batched) |
| **Use case**   | DOM refs, mutable values     | UI state               |
| **Persists**   | ✅ Across renders            | ✅ Across renders      |

**Examples:**

**useState - Triggers Re-render:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // ✅ Re-renders component
  };

  return <p>Count: {count}</p>; // Updates UI
}
```

**useRef - No Re-render:**

```jsx
function ClickTracker() {
  const clickCount = useRef(0);
  const [, forceUpdate] = useState();

  const handleClick = () => {
    clickCount.current += 1; // ❌ No re-render
    console.log(`Clicks: ${clickCount.current}`);
  };

  return (
    <div>
      <p>Clicks: {clickCount.current}</p> {/* Won't update! */}
      <button onClick={handleClick}>Click</button>
      <button onClick={() => forceUpdate({})}>Force Update</button>
    </div>
  );
}
```

**When to Use Each:**

```jsx
function Example() {
  // ✅ useState - For UI state
  const [visible, setVisible] = useState(true);

  // ✅ useRef - For values that don't affect UI
  const renderCount = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    renderCount.current += 1; // Track renders without causing re-render
  });

  return (
    <div>
      {visible && <p>Render count: {renderCount.current}</p>}
      <input ref={inputRef} />
      <button onClick={() => setVisible(!visible)}>Toggle</button>
    </div>
  );
}
```

---

### 18. forwardRef

**Definition:**  
`forwardRef` allows a component to forward a ref to a child component, enabling parent components to access child DOM elements.

**Basic Usage:**

```jsx
import React, { forwardRef, useRef } from "react";

// Child component with forwardRef
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Parent component
function Form() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Enter text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**With Additional Props:**

```jsx
const FancyButton = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={`fancy ${className}`} {...props}>
      {children}
    </button>
  );
});

function App() {
  const buttonRef = useRef();

  return (
    <FancyButton
      ref={buttonRef}
      className="primary"
      onClick={() => buttonRef.current.blur()}
    >
      Click Me
    </FancyButton>
  );
}
```

**useImperativeHandle with forwardRef:**

```jsx
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
    getValue: () => {
      return inputRef.current.value;
    },
  }));

  return <input ref={inputRef} {...props} />;
});

function Parent() {
  const inputRef = useRef();

  const handleSubmit = () => {
    const value = inputRef.current.getValue();
    console.log(value);
    inputRef.current.clear();
  };

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
```

---

### 19. useMemo

**Definition:**  
`useMemo` memoizes (caches) expensive computations and only recalculates when dependencies change.

**Syntax:**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**Examples:**

**1. Expensive Calculation:**

```jsx
function ProductList({ products, filter }) {
  // ⚠️ Without useMemo - Recalculates on every render
  const filteredProducts = products.filter((p) => p.category === filter);

  // ✅ With useMemo - Only recalculates when products or filter changes
  const filteredProducts = useMemo(() => {
    console.log("Filtering products...");
    return products.filter((p) => p.category === filter);
  }, [products, filter]);

  return <div>{/* Render products */}</div>;
}
```

**2. Complex Computation:**

```jsx
function Fibonacci({ n }) {
  const fibonacci = useMemo(() => {
    const fib = (num) => {
      if (num <= 1) return num;
      return fib(num - 1) + fib(num - 2);
    };
    return fib(n);
  }, [n]);

  return (
    <p>
      Fibonacci({n}) = {fibonacci}
    </p>
  );
}
```

**3. Object/Array Reference Stability:**

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // ✅ Memoized object - Same reference if filter doesn't change
  const filterConfig = useMemo(
    () => ({
      showActive: filter === "active",
      showCompleted: filter === "completed",
      showAll: filter === "all",
    }),
    [filter],
  );

  return <TodoItems config={filterConfig} />;
}
```

**When NOT to use useMemo:**

```jsx
// ❌ Don't optimize simple operations
const doubled = useMemo(() => count * 2, [count]); // Overkill!

// ✅ Just do it directly
const doubled = count * 2;
```

---

### 20. useCallback

**Definition:**  
`useCallback` memoizes functions to prevent unnecessary re-creations, useful when passing callbacks to optimized child components.

**Syntax:**

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

**Examples:**

**1. Prevent Child Re-renders:**

```jsx
import React, { useState, useCallback, memo } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering button: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // ❌ Without useCallback - New function on every render
  const handleClick = () => {
    console.log("Clicked!");
  };

  // ✅ With useCallback - Same function reference
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // Dependencies

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Count: {count}</p>
      <Button onClick={handleClick}>Click</Button>
    </div>
  );
}
```

**2. With Dependencies:**

```jsx
function SearchComponent() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchResults = useCallback(async () => {
        const data = await fetch(`/api/search?q=${query}`);
        setResults(await data.json());
    }, [query]); // Recreates only when query changes

    useEffect(() => {
        fetchResults();
    }, [fetchResults]);

    return (/* UI */);
}
```

**3. Event Handlers with State:**

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []); // No dependencies needed with functional update

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }, []);

  return (
    <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
  );
}
```

---

### 21. React.memo vs useMemo

**Key Differences:**

| Feature              | React.memo                   | useMemo                      |
| -------------------- | ---------------------------- | ---------------------------- |
| **What it memoizes** | Entire component             | Value/computation            |
| **Type**             | Higher-Order Component       | Hook                         |
| **Returns**          | Memoized component           | Memoized value               |
| **Use case**         | Prevent component re-renders | Cache expensive calculations |

**React.memo - Memoize Component:**

```jsx
// Wraps entire component
const ExpensiveComponent = React.memo(({ data }) => {
  console.log("Rendering ExpensiveComponent");
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
});

// Only re-renders if 'data' prop changes
function Parent() {
  const [count, setCount] = useState(0);
  const data = [{ id: 1, name: "Item 1" }];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveComponent data={data} />
    </div>
  );
}
```

**useMemo - Memoize Value:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Memoizes the filtered result
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value");
    return items.filter((item) => item.active).map((item) => item.value);
  }, [items]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <p>Result: {expensiveValue}</p>
    </div>
  );
}
```

**Using Both Together:**

```jsx
const ChildComponent = React.memo(({ config }) => {
  // Component only re-renders if config reference changes
  return <div>{config.title}</div>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // useMemo ensures same reference if dependencies don't change
  const config = useMemo(
    () => ({
      title: "Dashboard",
      theme: "dark",
    }),
    [],
  ); // Empty deps = never changes

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ChildComponent config={config} />
    </div>
  );
}
```

---

### 22. useReducer

**Definition:**  
`useReducer` is an alternative to `useState` for managing complex state logic with actions and reducers.

**Syntax:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

**Basic Example:**

```jsx
// Reducer function
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
```

**Complex State Management:**

```jsx
const initialState = {
    user: null,
    loading: false,
    error: null
};

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN_START':
            return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return { user: action.payload, loading: false, error: null };
        case 'LOGIN_FAILURE':
            return { ...state, loading: false, error: action.payload };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

function AuthComponent() {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = async (credentials) => {
        dispatch({ type: 'LOGIN_START' });
        try {
            const user = await api.login(credentials);
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        }
    };

    return (/* UI */);
}
```

**Todo List with useReducer:**

```jsx
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { id: Date.now(), text: action.payload, done: false }];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, done: !todo.done } : todo
            );
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.done);
        default:
            return state;
    }
}

function TodoApp() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const addTodo = (text) => {
        dispatch({ type: 'ADD_TODO', payload: text });
    };

    return (/* UI */);
}
```

---

### 23. useReducer vs useState

**When to Use Each:**

| Use useState                           | Use useReducer                               |
| -------------------------------------- | -------------------------------------------- |
| Simple state (number, string, boolean) | Complex state (objects with multiple fields) |
| Independent state updates              | Related state updates                        |
| 1-2 state variables                    | 3+ related state variables                   |
| Simple logic                           | Complex update logic                         |

**useState Example:**

```jsx
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  // Multiple independent setters
  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
    </form>
  );
}
```

**useReducer Example (Better for Complex Forms):**

```jsx
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return action.payload;
    default:
      return state;
  }
}

function Form() {
  const initialState = { name: "", email: "", age: 0 };
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  return (
    <form>
      <input
        value={state.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <input
        value={state.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "RESET", payload: initialState })}
      >
        Reset
      </button>
    </form>
  );
}
```

---

### 24. useLayoutEffect

**Definition:**  
`useLayoutEffect` runs synchronously after DOM mutations but before the browser paints, useful for DOM measurements and synchronous updates.

**Syntax:**

```jsx
useLayoutEffect(() => {
  // Runs synchronously after DOM updates
  return () => {
    // Cleanup
  };
}, [dependencies]);
```

**Example - Tooltip Positioning:**

```jsx
function Tooltip({ children, text }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef();

  useLayoutEffect(() => {
    const rect = tooltipRef.current.getBoundingClientRect();

    // Calculate position BEFORE paint
    setCoords({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });
  }, [text]);

  return (
    <div ref={tooltipRef}>
      {children}
      <div style={{ position: "absolute", left: coords.x, top: coords.y }}>
        {text}
      </div>
    </div>
  );
}
```

**Measuring Elements:**

```jsx
function MeasureExample() {
  const [height, setHeight] = useState(0);
  const divRef = useRef();

  useLayoutEffect(() => {
    // Measure immediately after render, before paint
    setHeight(divRef.current.offsetHeight);
  }, []);

  return (
    <div>
      <div ref={divRef}>Content here</div>
      <p>Height: {height}px</p>
    </div>
  );
}
```

---

### 25. useLayoutEffect vs useEffect

**Key Differences:**

| Feature         | useEffect                    | useLayoutEffect                |
| --------------- | ---------------------------- | ------------------------------ |
| **Timing**      | After paint (asynchronous)   | Before paint (synchronous)     |
| **Blocking**    | Non-blocking                 | Blocks visual updates          |
| **Use case**    | Data fetching, subscriptions | DOM measurements, animations   |
| **Performance** | Better (non-blocking)        | Can impact performance if slow |

**Visual Comparison:**

```
useEffect:
Render → Paint → useEffect runs

useLayoutEffect:
Render → useLayoutEffect runs → Paint
```

**Examples:**

**useEffect - Flicker Possible:**

```jsx
function Component() {
  const [color, setColor] = useState("red");
  const divRef = useRef();

  useEffect(() => {
    // Runs AFTER paint - user might see initial red
    const width = divRef.current.offsetWidth;
    setColor(width > 500 ? "green" : "blue");
  }, []);

  return (
    <div ref={divRef} style={{ backgroundColor: color }}>
      Content
    </div>
  );
}
```

**useLayoutEffect - No Flicker:**

```jsx
function Component() {
  const [color, setColor] = useState("red");
  const divRef = useRef();

  useLayoutEffect(() => {
    // Runs BEFORE paint - no flicker
    const width = divRef.current.offsetWidth;
    setColor(width > 500 ? "green" : "blue");
  }, []);

  return (
    <div ref={divRef} style={{ backgroundColor: color }}>
      Content
    </div>
  );
}
```

**When to Use Each:**

```jsx
// ✅ useEffect - Default choice
useEffect(() => {
  fetchData();
  subscribe();
}, []);

// ✅ useLayoutEffect - Only when needed
useLayoutEffect(() => {
  const rect = element.getBoundingClientRect();
  adjustPosition(rect);
}, []);
```

---

### 26. useTransition

**Definition:**  
`useTransition` (React 18+) allows you to mark state updates as non-urgent, keeping the UI responsive during expensive updates.

**Syntax:**

```jsx
const [isPending, startTransition] = useTransition();
```

**Example - Search with Heavy Filtering:**

```jsx
function SearchComponent() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Update input immediately (urgent)
    setInput(e.target.value);

    // Update filtered list as transition (non-urgent)
    startTransition(() => {
      const filtered = hugeList.filter((item) => item.includes(e.target.value));
      setList(filtered);
    });
  };

  return (
    <div>
      <input value={input} onChange={handleChange} />
      {isPending && <span>Loading...</span>}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**Tab Switching:**

```jsx
function TabContainer() {
  const [tab, setTab] = useState("posts");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab); // Non-urgent update
    });
  };

  return (
    <div>
      <button onClick={() => selectTab("posts")}>Posts</button>
      <button onClick={() => selectTab("contacts")}>Contacts</button>

      {isPending && <Spinner />}

      {tab === "posts" && <PostsTab />}
      {tab === "contacts" && <ContactsTab />}
    </div>
  );
}
```

---
## Part 3: Component Patterns

### 27. Functional vs Class Components

**Functional Components (Modern - Recommended):**
```jsx
import React, { useState } from 'react';

function Welcome({ name }) {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

**Class Components (Legacy):**
```jsx
import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```

**Key Differences:**

| Feature | Functional | Class |
|---------|------------|-------|
| **Syntax** | Simpler, less code | More verbose |
| **State** | `useState` hook | `this.state` |
| **Lifecycle** | `useEffect` hook | Lifecycle methods |
| **`this`** | No `this` | Need to bind `this` |
| **Performance** | Slightly better | Slightly slower |
| **React Recommendation** | ✅ Recommended | 🚫 Legacy |

---
