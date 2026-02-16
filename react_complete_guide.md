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
import React, { useState } from "react";

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
import React, { Component } from "react";

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

| Feature                  | Functional         | Class               |
| ------------------------ | ------------------ | ------------------- |
| **Syntax**               | Simpler, less code | More verbose        |
| **State**                | `useState` hook    | `this.state`        |
| **Lifecycle**            | `useEffect` hook   | Lifecycle methods   |
| **`this`**               | No `this`          | Need to bind `this` |
| **Performance**          | Slightly better    | Slightly slower     |
| **React Recommendation** | ✅ Recommended     | 🚫 Legacy           |

### 28. Lifecycle Methods in Class Components

**Definition:**  
Lifecycle methods are special methods in class components that run at specific stages of a component's life.

**Three Phases:**

1. **Mounting** - Component is created
2. **Updating** - Component re-renders
3. **Unmounting** - Component is removed

**Common Lifecycle Methods:**

```jsx
class UserProfile extends React.Component {
  // 1. MOUNTING
  constructor(props) {
    super(props);
    this.state = { user: null };
    console.log("1. Constructor - Initialize state");
  }

  componentDidMount() {
    console.log("3. componentDidMount - After first render");
    // Perfect for: API calls, subscriptions, timers
    fetch("/api/user")
      .then((res) => res.json())
      .then((user) => this.setState({ user }));
  }

  // 2. UPDATING
  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate - After re-render");
    // Run side effects when props/state change
    if (prevProps.userId !== this.props.userId) {
      this.fetchUser(this.props.userId);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Return false to skip re-render (optimization)
    return nextState.user !== this.state.user;
  }

  // 3. UNMOUNTING
  componentWillUnmount() {
    console.log("5. componentWillUnmount - Before removal");
    // Cleanup: Remove listeners, cancel requests, clear timers
    clearInterval(this.timer);
  }

  render() {
    console.log("2. Render - Return JSX");
    return <div>{this.state.user?.name}</div>;
  }
}
```

**Lifecycle Flow:**

```
Mount: constructor → render → componentDidMount
Update: render → componentDidUpdate
Unmount: componentWillUnmount
```

---

### 29. Lifecycle in Function Components

**Definition:**  
In functional components, we use **hooks** to achieve the same lifecycle behavior as class components.

**Mapping Class Lifecycle to Hooks:**

| Class Component        | Functional Component (Hook)               |
| ---------------------- | ----------------------------------------- |
| `componentDidMount`    | `useEffect(() => {}, [])`                 |
| `componentDidUpdate`   | `useEffect(() => {})`                     |
| `componentWillUnmount` | `useEffect(() => { return cleanup }, [])` |

**Examples:**

```jsx
import { useState, useEffect } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  // componentDidMount - Runs once after first render
  useEffect(() => {
    console.log("Component mounted");
    fetchUser(userId);
  }, []); // Empty array = run once

  // componentDidUpdate - Runs when userId changes
  useEffect(() => {
    console.log("userId changed, fetching new user");
    fetchUser(userId);
  }, [userId]); // Runs when userId updates

  // componentWillUnmount - Cleanup
  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);

    return () => {
      console.log("Component unmounting, cleanup");
      clearInterval(timer);
    };
  }, []);

  // Combined: Mount, Update, Unmount
  useEffect(() => {
    console.log("Component mounted or userId changed");
    const subscription = subscribeToUser(userId);

    return () => {
      console.log("Cleanup before next effect or unmount");
      subscription.unsubscribe();
    };
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

**Comparison Example:**

```jsx
// CLASS COMPONENT
class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ time: Date.now() });
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

// FUNCTIONAL COMPONENT (Equivalent)
function Timer() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(timer); // Cleanup
  }, []); // Mount and unmount only

  return <div>{time}</div>;
}
```

---

### 30. Controlled Components

**Definition:**  
A **Controlled Component** is a form element whose value is controlled by React state.

**Key Concept:**  
React state is the "single source of truth" for the input value.

**Example:**

```jsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email} // ✅ Controlled by state
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password} // ✅ Controlled by state
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Benefits:**

- **Validation** - Validate on every keystroke
- **Formatting** - Format input in real-time
- **Conditional rendering** - Show/hide based on input

**Example with Validation:**

```jsx
function UsernameInput() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    // Real-time validation
    if (value.length < 3) {
      setError("Username must be at least 3 characters");
    } else if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setError("Only letters and numbers allowed");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input value={username} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
```

---

### 31. Uncontrolled Components

**Definition:**  
An **Uncontrolled Component** stores its own state internally in the DOM, not in React state. Use refs to access the value.

**When to Use:**

- Simple forms
- File uploads
- Integrating with non-React code

**Example:**

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Read value from DOM directly
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        ref={emailRef}
        defaultValue="user@example.com" // Note: defaultValue, not value
      />
      <input type="password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Controlled vs Uncontrolled:**

| Feature        | Controlled           | Uncontrolled               |
| -------------- | -------------------- | -------------------------- |
| **State**      | React state          | DOM state                  |
| **Access**     | `value` + `onChange` | `ref.current.value`        |
| **Validation** | Real-time            | On submit                  |
| **Complexity** | More code            | Less code                  |
| **Use Case**   | Most forms           | Simple forms, file uploads |

**File Upload (Always Uncontrolled):**

```jsx
function FileUpload() {
  const fileRef = useRef();

  const handleUpload = () => {
    const file = fileRef.current.files[0];
    console.log("File:", file.name);
  };

  return (
    <div>
      <input type="file" ref={fileRef} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
```

---

### 32. Higher-Order Components (HOC)

**Definition:**  
A **Higher-Order Component** is a function that takes a component and returns a new enhanced component.

**Pattern:**

```jsx
const EnhancedComponent = higherOrderComponent(OriginalComponent);
```

**Example - With Loading:**

```jsx
// HOC that adds loading state
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}

// Original Component
function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Enhanced Component
const UserListWithLoading = withLoading(UserList);

// Usage
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return <UserListWithLoading isLoading={isLoading} users={users} />;
}
```

**Example - With Authentication:**

```jsx
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      // Check if user is logged in
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return <div>Please log in to continue</div>;
    }

    return <Component {...props} />;
  };
}

// Protected component
function Dashboard({ user }) {
  return <div>Welcome {user.name}!</div>;
}

// Enhanced with auth check
const ProtectedDashboard = withAuth(Dashboard);
```

**Real-World Example - With Data Fetching:**

```jsx
function withData(Component, url) {
  return function WithDataComponent(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then(setData)
        .catch(setError)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return <Component data={data} {...props} />;
  };
}

// Usage
const UserList = ({ data }) => (
  <ul>
    {data.map((user) => (
      <li key={user.id}>{user.name}</li>
    ))}
  </ul>
);

const UserListWithData = withData(UserList, "/api/users");
```

---

### 33. Render Props Pattern

**Definition:**  
**Render Props** is a pattern where a component receives a function as a prop that returns JSX.

**Pattern:**

```jsx
<Component render={(data) => <div>{data}</div>} />
```

**Example - Mouse Tracker:**

```jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {render(position)} {/* Call the render prop */}
    </div>
  );
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>
          Mouse position: {x}, {y}
        </h1>
      )}
    />
  );
}
```

**Example - Toggle Component:**

```jsx
function Toggle({ render }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return render({ isOn, toggle });
}

// Usage
function App() {
  return (
    <Toggle
      render={({ isOn, toggle }) => (
        <div>
          <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
          {isOn && <p>Content is visible!</p>}
        </div>
      )}
    />
  );
}
```

**Using `children` as Render Prop:**

```jsx
function DataProvider({ url, children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);

  return children({ data, loading });
}

// Usage
<DataProvider url="/api/users">
  {({ data, loading }) => (
    loading ? <div>Loading...</div> : <ul>{data.map(...)}</ul>
  )}
</DataProvider>
```

**Render Props vs HOC:**

| Feature         | Render Props     | HOC                   |
| --------------- | ---------------- | --------------------- |
| **Flexibility** | More flexible    | Less flexible         |
| **Composition** | Explicit         | Implicit              |
| **Naming**      | No wrapper hell  | Possible wrapper hell |
| **Use case**    | Dynamic behavior | Static enhancement    |

---

### 34. Custom Hooks

**Definition:**  
**Custom Hooks** are reusable functions that use built-in React hooks. They let you extract component logic into reusable functions.

**Naming:**  
Must start with `use` (e.g., `useAuth`, `useFetch`)

**Example - useFetch:**

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserList() {
  const { data, loading, error } = useFetch("/api/users");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Example - useLocalStorage:**

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
```

**Example - useToggle:**

```jsx
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, { toggle, setTrue, setFalse }];
}

// Usage
function Modal() {
  const [isOpen, { toggle, setFalse }] = useToggle(false);

  return (
    <>
      <button onClick={toggle}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={setFalse}>Close</button>
        </div>
      )}
    </>
  );
}
```

**Example - useDebounce:**

```jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage - Search with debounce
function SearchBox() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // API call only after user stops typing for 500ms
      fetchResults(debouncedSearch);
    }
  }, [debouncedSearch]);

  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
```

---


fetchResults(debouncedSearch);
}
}, [debouncedSearch]);

return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
`

---

## Part 4: Performance & Optimization

### 35. Reconciliation

**Definition:**  
**Reconciliation** is the process React uses to update the DOM by comparing the new Virtual DOM with the previous Virtual DOM.

**How it Works:**

```
1. State/Props Change
   ↓
2. React creates NEW Virtual DOM
   ↓
3. React DIFFs new VS old Virtual DOM
   ↓
4. React calculates MINIMUM changes
   ↓
5. React updates ONLY changed parts in real DOM
```

**Example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  // When count changes from 0 to 1:
  // React reconciliation:
  // 1. Creates new Virtual DOM with count=1
  // 2. Compares with old Virtual DOM (count=0)
  // 3. Finds only text node '0' → '1' changed
  // 4. Updates ONLY that text node in real DOM
  // (Doesn't re-create entire div!)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

**Key Point:**  
Reconciliation makes React FAST by updating only what changed, not the entire page.

---

### 36. Diffing Algorithm

**Definition:**  
The **Diffing Algorithm** is the specific algorithm React uses during reconciliation to compare two Virtual DOM trees.

**Two Rules:**

1. **Different Element Types → Complete Rebuild**

```jsx
// Old Virtual DOM
<div><Counter /></div>

// New Virtual DOM
<span><Counter /></span>

// Result: React destroys <div> and <Counter>, creates new <span> and <Counter>
// Counter loses state!
```

2. **Same Element Type → Update Attributes**

```jsx
// Old
<div className="old" title="before">Hello</div>

// New
<div className="new" title="after">Hello</div>

// Result: React keeps <div>, updates only className and title attributes
```

**List Diffing with Keys:**

```jsx
// ❌ Without keys - Inefficient
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

// Add 'Cherry' at beginning
<ul>
  <li>Cherry</li>  {/* React thinks this WAS Apple */}
  <li>Apple</li>   {/* React thinks this WAS Banana */}
  <li>Banana</li>  {/* React thinks this is NEW */}
</ul>
// React updates ALL three <li> elements!

// ✅ With keys - Efficient
<ul>
  <li key="apple">Apple</li>
  <li key="banana">Banana</li>
</ul>

// Add 'Cherry'
<ul>
  <li key="cherry">Cherry</li>  {/* React knows this is NEW */}
  <li key="apple">Apple</li>    {/* React knows this MOVED */}
  <li key="banana">Banana</li>  {/* React knows this MOVED */}
</ul>
// React only creates ONE new element and repositions existing ones
```

---

### 37. Reconciliation vs Diffing

| Aspect      | Reconciliation        | Diffing Algorithm        |
| ----------- | --------------------- | ------------------------ |
| **What**    | The overall process   | The specific algorithm   |
| **Scope**   | Complete update flow  | Virtual DOM comparison   |
| **Job**     | "Update the DOM"      | "Find what changed"      |
| **Analogy** | The entire renovation | The blueprint comparison |

**Think of it this way:**

- **Reconciliation** = The entire process of updating your house
- **Diffing** = Comparing old blueprint vs new blueprint to find changes

---

### 38. React.memo

**Definition:**  
`React.memo` is a higher-order component that **prevents re-renders** if props haven't changed.

**Problem:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ExpensiveChild /> {/* ❌ Re-renders on EVERY Parent render */}
    </div>
  );
}

function ExpensiveChild() {
  console.log("ExpensiveChild rendered!");
  return <div>I'm expensive to render</div>;
}
```

**Solution with React.memo:**

```jsx
import { memo } from "react";

// ✅ Only re-renders if props change
const ExpensiveChild = memo(function ExpensiveChild() {
  console.log("ExpensiveChild rendered!");
  return <div>I'm expensive to render</div>;
});

// Now ExpensiveChild won't re-render when Parent's count changes!
```

**With Props:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Greeting name={name} /> {/* Only re-renders when 'name' changes */}
    </div>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting rendered");
  return <h1>Hello, {name}!</h1>;
});
```

**Custom Comparison:**

```jsx
const User = memo(
  function User({ user }) {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    // Return true to SKIP re-render
    // Return false to ALLOW re-render
    return prevProps.user.id === nextProps.user.id;
  },
);
```

---

### 39. Key Prop

**Definition:**  
The `key` prop helps React identify which items in a list have changed, been added, or removed.

**Why Keys Matter:**

```jsx
// ❌ Without keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>{todo.text}</li>
      ))}
    </ul>
  );
}
// Warning: Each child in a list should have a unique "key" prop.
// React can't track which item is which!

// ✅ With keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

**Key Rules:**

1. **Must be unique among siblings**
2. **Should be stable** (not random)
3. **Don't use array index** for dynamic lists

**Index as Key (❌ Anti-pattern):**

```jsx
// ❌ Bad - Using index
{
  items.map((item, index) => <div key={index}>{item.name}</div>);
}

// Problem: If you remove first item, ALL keys shift!
// Item 0 → becomes Item 1's data
// Item 1 → becomes Item 2's data
// This breaks React's optimization and can cause bugs
```

**Proper Keys:**

```jsx
// ✅ Use unique IDs
{
  users.map((user) => <UserCard key={user.id} user={user} />);
}

// ✅ Generate stable IDs
const todos = [
  { id: "todo-1", text: "Learn React" },
  { id: "todo-2", text: "Build app" },
];
```

---

### 40. Code Splitting

**Definition:**  
**Code Splitting** breaks your bundle into smaller chunks that load on-demand, improving initial page load time.

**Problem:**

```
Without code splitting:
bundle.js (5 MB) ← User downloads EVERYTHING upfront
```

**Solution:**

```
With code splitting:
main.js (500 KB) ← Essential code
admin.chunk.js (1 MB) ← Loaded only when visiting /admin
dashboard.chunk.js (800 KB) ← Loaded only when needed
```

**React Implementation:**

```jsx
// ❌ Without code splitting - Everything loads upfront
import HomePage from "./HomePage";
import AdminPage from "./AdminPage";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

// ✅ With code splitting - Loads on demand
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./HomePage"));
const AdminPage = lazy(() => import("./AdminPage"));
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
```

**Benefits:**

- Faster initial load
- Better performance
- Load code only when needed

---

### 41. Lazy Loading

**Definition:**  
**Lazy loading** defers loading of components until they're needed.

**React.lazy Syntax:**

```jsx
const Component = lazy(() => import("./Component"));
```

**Example:**

```jsx
import { lazy, Suspense } from "react";

// Lazy load heavy components
const HeavyChart = lazy(() => import("./HeavyChart"));
const VideoPlayer = lazy(() => import("./VideoPlayer"));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>Show Chart</button>

      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart /> {/* Only loads when button clicked */}
        </Suspense>
      )}
    </div>
  );
}
```

**Route-based Lazy Loading:**

```jsx
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

---

### 42. Suspense

**Definition:**  
**Suspense** lets you show a fallback UI while waiting for lazy-loaded components.

**Basic Usage:**

```jsx
import { Suspense, lazy } from "react";

const Comments = lazy(() => import("./Comments"));

function Post() {
  return (
    <div>
      <h1>My Post</h1>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments />
      </Suspense>
    </div>
  );
}
```

**Multiple Suspense Boundaries:**

```jsx
function App() {
  return (
    <div>
      {/* Navbar loads independently */}
      <Suspense fallback={<NavSkeleton />}>
        <Navbar />
      </Suspense>

      {/* Main content loads independently */}
      <Suspense fallback={<MainSkeleton />}>
        <MainContent />
      </Suspense>

      {/* Sidebar loads independently */}
      <Suspense fallback={<SidebarSkeleton />}>
        <Sidebar />
      </Suspense>
    </div>
  );
}
```

**Nested Suspense:**

```jsx
function Page() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Header />
      <Suspense fallback={<ContentLoader />}>
        <Content />
        <Suspense fallback={<CommentsLoader />}>
          <Comments />
        </Suspense>
      </Suspense>
    </Suspense>
  );
}
```

---

### 43. Concurrent Rendering

**Definition:**  
**Concurrent Rendering** allows React to work on multiple tasks simultaneously and prioritize urgent updates.

**Key Concept:**  
React can interrupt rendering to handle high-priority updates (like user input).

**Example:**

```jsx
import { useState, useTransition } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;

    // High priority - Update input immediately
    setQuery(value);

    // Low priority - Can be interrupted
    startTransition(() => {
      const filtered = expensiveSearch(value);
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending && <Spinner />}
      <Results data={results} />
    </div>
  );
}
```

**Benefits:**

- Input stays responsive
- No UI freezing
- Better user experience

---

### 44. Immutability in React

**Definition:**  
**Immutability** means never modifying data directly. Instead, create new copies with changes.

**Why Immutability:**

- React detects changes by reference comparison
- Easier debugging
- Enables time-travel debugging
- Better performance with React.memo

**❌ Mutating State (Wrong):**

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    todos.push({ id: Date.now(), text }); // ❌ Mutates array
    setTodos(todos); // ❌ Same reference, React won't re-render!
  };

  const updateTodo = (id, newText) => {
    const todo = todos.find((t) => t.id === id);
    todo.text = newText; // ❌ Mutates object
    setTodos(todos); // ❌ Won't trigger re-render
  };

  return /* ... */;
}
```

**✅ Immutable Updates (Correct):**

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);

  // ✅ Add - Create new array
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  // ✅ Remove - Filter creates new array
  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // ✅ Update - Map creates new array with new object
  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, text: newText } // New object
            : todo, // Keep existing object
      ),
    );
  };

  // ✅ Toggle - Immutable update
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return /* ... */;
}
```

**Object Updates:**

```jsx
const [user, setUser] = useState({
  name: "John",
  age: 25,
  address: { city: "NYC" },
});

// ❌ Wrong
user.age = 26;
setUser(user);

// ✅ Correct - Shallow update
setUser({ ...user, age: 26 });

// ✅ Correct - Nested update
setUser({
  ...user,
  address: {
    ...user.address,
    city: "LA",
  },
});
```

**Array Methods:**

```jsx
// ✅ Immutable methods (create new array)
.map()
.filter()
.slice()
.concat()
[...array]

// ❌ Mutable methods (modify original)
.push()
.pop()
.shift()
.unshift()
.splice()
.sort()
.reverse()
```

---

## Part 5: React Router

### 45. React Router DOM

**Definition:**  
**React Router** is a library for handling navigation and routing in React applications.

**Installation:**

```bash
npm install react-router-dom
```

**Basic Setup:**

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Key Components:**

- `BrowserRouter` - Wraps your app
- `Routes` - Container for Route components
- `Route` - Defines a route
- `Link` - Navigation link (doesn't reload page)

---

### 46. Routing Basics

**Nested Routes:**

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav>{/* Navigation */}</nav>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}
```

**Dynamic Routes:**

```jsx
// Route definition
<Route path="/users/:userId" element={<UserProfile />} />;

// Component
function UserProfile() {
  const { userId } = useParams(); // Get URL parameter

  return <div>User ID: {userId}</div>;
}

// Navigate to: /users/123 → userId = '123'
```

**Protected Routes:**

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Usage
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>;
```

---

### 47. useNavigate, useParams, useLocation

**useNavigate - Programmatic Navigation:**

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login
    navigate("/dashboard"); // Navigate to dashboard
  };

  const handleCancel = () => {
    navigate(-1); // Go back one page
  };

  return (
    <form>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}
```

**useParams - Get URL Parameters:**

```jsx
import { useParams } from "react-router-dom";

// Route: /products/:productId/reviews/:reviewId
function ReviewDetail() {
  const { productId, reviewId } = useParams();

  return (
    <div>
      Product: {productId}
      Review: {reviewId}
    </div>
  );
}
```

**useLocation - Get Current Location:**

```jsx
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    trackPageView(location.pathname);
  }, [location]);

  return (
    <div>
      <p>Current path: {location.pathname}</p>
      <p>Search params: {location.search}</p>
      <p>Hash: {location.hash}</p>
    </div>
  );
}

// Access passed state
function Results() {
  const location = useLocation();
  const data = location.state?.data; // Access state from navigation

  return <div>{data}</div>;
}

// Navigate with state
function SearchForm() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate("/results", { state: { data: query } });
  };
}
```

**useSearchParams - Query Parameters:**

```jsx
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category"); // Get ?category=electronics
  const page = searchParams.get("page") || "1";

  const handleFilter = (newCategory) => {
    setSearchParams({ category: newCategory, page: "1" });
  };

  return (
    <div>
      <p>Category: {category}</p>
      <p>Page: {page}</p>
      <button onClick={() => handleFilter("electronics")}>Electronics</button>
    </div>
  );
}
```

---

## Part 6: State Management

### 48. Redux

**Definition:**  
**Redux** is a predictable state management library for JavaScript applications. It stores the entire application state in a single centralized store.

**Core Concepts:**

1. **Store** - Holds entire app state
2. **Action** - Plain object describing what happened
3. **Reducer** - Pure function that updates state
4. **Dispatch** - Send actions to update state

**Basic Example:**

```jsx
// 1. Actions
const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });
const incrementByAmount = (amount) => ({
  type: "INCREMENT_BY",
  payload: amount,
});

// 2. Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "INCREMENT_BY":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// 3. Store
import { createStore } from "redux";
const store = createStore(counterReducer);

// 4. React Integration
import { Provider, useSelector, useDispatch } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

---

### 49. Redux Flow

**The Complete Flow:**

```
┌─────────────┐
│   React     │
│  Component  │
└──────┬──────┘
       │
       │ 1. User clicks button
       ↓
   dispatch(action)
       │
       │ 2. Action dispatched
       ↓
   ┌─────────┐
   │  Store  │
   └────┬────┘
        │
        │ 3. Passes (state, action) to reducer
        ↓
   ┌──────────┐
   │ Reducer  │
   └────┬─────┘
        │
        │ 4. Returns new state
        ↓
   ┌─────────┐
   │  Store  │ (Updated)
   └────┬────┘
        │
        │ 5. Notifies subscribers
        ↓
   ┌──────────┐
   │   React  │ (Re-renders)
   └──────────┘
```

**Step-by-Step Example:**

```jsx
// 1. Component dispatches action
function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } });
  };

  // 6. Component re-renders with updated todos
  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(todo => <div key={todo.id}>{todo.text}</div>)}
    </div>
  );
}

// 2. Action object
{
  type: 'ADD_TODO',
  payload: { id: 1, text: 'Learn Redux' }
}

// 3. Reducer receives action
function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      // 4. Reducer returns NEW state (immutable)
      return [...state, action.payload];
    default:
      return state;
  }
}

// 5. Store updates and notifies React
```

---

### 50. When to Use Redux vs useContext

**Use Context When:**

- Small to medium apps
- Simple state sharing
- Not many updates
- Theme, auth, language preferences

**Use Redux When:**

- Large complex apps
- Frequent state updates
- Time-travel debugging needed
- Middleware needed (logging, async)
- Multiple developers

**Comparison:**

| Feature            | useContext                       | Redux                    |
| ------------------ | -------------------------------- | ------------------------ |
| **Learning Curve** | Easy                             | Steep                    |
| **Setup**          | Minimal                          | More boilerplate         |
| **DevTools**       | No                               | Yes (Redux DevTools)     |
| **Performance**    | Can cause unnecessary re-renders | Optimized with selectors |
| **Middleware**     | No                               | Yes                      |
| **Use Case**       | Simple state sharing             | Complex state management |

**Example - useContext:**

```jsx
const AuthContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </AuthContext.Provider>
  );
}

function Dashboard() {
  const { user } = useContext(AuthContext);
  return <div>Welcome, {user?.name}</div>;
}
```

**Same with Redux:**

```jsx
// Reducer
const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case "SET_USER":
      return { user: action.payload };
    default:
      return state;
  }
};

// Component
function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  return <div>Welcome, {user?.name}</div>;
}
```

---

### 51. Redux Optimization

**1. Use Selectors Wisely:**

```jsx
// ❌ Bad - Creates new array on every render
function TodoList() {
  const completedTodos = useSelector((state) =>
    state.todos.filter((t) => t.completed),
  );
  // Component re-renders unnecessarily
}

// ✅ Good - Use Reselect for memoization
import { createSelector } from "reselect";

const selectTodos = (state) => state.todos;
const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((t) => t.completed),
);

function TodoList() {
  const completedTodos = useSelector(selectCompletedTodos);
}
```

**2. Normalize State Shape:**

```jsx
// ❌ Bad - Nested structure
{
  posts: [
    { id: 1, title: 'Post 1', author: { id: 1, name: 'John' } },
    { id: 2, title: 'Post 2', author: { id: 1, name: 'John' } }
  ]
}

// ✅ Good - Normalized
{
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', authorId: 1 },
      2: { id: 2, title: 'Post 2', authorId: 1 }
    },
    allIds: [1, 2]
  },
  users: {
    byId: {
      1: { id: 1, name: 'John' }
    },
    allIds: [1]
  }
}
```

**3. Split Reducers:**

```jsx
// ❌ One giant reducer
function appReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_TODO": /* ... */
    case "UPDATE_TODO": /* ... */
    case "SET_USER": /* ... */
    case "UPDATE_SETTINGS": /* ... */
    // 100+ cases...
  }
}

// ✅ Split into smaller reducers
import { combineReducers } from "redux";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});
```

---

### 52. Redux Toolkit

**Definition:**  
**Redux Toolkit** is the official, recommended way to write Redux logic. It simplifies Redux with less boilerplate.

**Installation:**

```bash
npm install @reduxjs/toolkit react-redux
```

**Before (Vanilla Redux):**

```jsx
// Actions
const INCREMENT = "INCREMENT";
const increment = () => ({ type: INCREMENT });

// Reducer
const counterReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    default:
      return state;
  }
};

// Store
import { createStore } from "redux";
const store = createStore(counterReducer);
```

**After (Redux Toolkit):**

```jsx
import { createSlice, configureStore } from "@reduxjs/toolkit";

// Slice (combines actions + reducer)
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // ✅ Looks like mutation, but Redux Toolkit uses Immer
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Component
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

**Async with createAsyncThunk:**

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await fetch("/api/users");
  return response.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Component
function UserList() {
  const { data, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## Part 7: Advanced Topics

### 53. Intersection Observer

**Definition:**  
Intersection Observer API detects when an element enters or leaves the viewport. Used for lazy loading, infinite scroll, and animations.

**React Implementation:**

```jsx
import { useEffect, useRef, useState } from "react";

function useInView(options = {}) {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isInView];
}

// Usage - Lazy Load Image
function LazyImage({ src, alt }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (isInView) {
      setImageSrc(src); // Load image only when in view
    }
  }, [isInView, src]);

  return (
    <div ref={ref}>
      {imageSrc ? <img src={imageSrc} alt={alt} /> : <div>Loading...</div>}
    </div>
  );
}

// Usage - Infinite Scroll
function InfiniteList() {
  const [items, setItems] = useState([1, 2, 3]);
  const [ref, isInView] = useInView();

  useEffect(() => {
    if (isInView) {
      // Load more items when sentinel is in view
      setItems((prev) => [...prev, prev.length + 1, prev.length + 2]);
    }
  }, [isInView]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>Item {item}</div>
      ))}
      <div ref={ref}>Loading more...</div>
    </div>
  );
}
```

---

### 54. React vs Library/Framework

**React is a LIBRARY, not a Framework**

**Library:**

- Provides specific functionality
- You call the library
- You control the flow
- Example: React, Lodash, Axios

**Framework:**

- Complete solution
- Framework calls your code
- Framework controls the flow
- Example: Next.js, Angular, Vue

**Why React is a Library:**

```jsx
// YOU decide:
// - Routing (React Router, TanStack Router)
// - State management (Redux, Zustand, Context)
// - Styling (CSS Modules, Styled Components, Tailwind)
// - Forms (React Hook Form, Formik)
// - HTTP (Axios, Fetch)

// React ONLY handles UI rendering
function App() {
  return <div>Hello World</div>;
}
```

**Comparison:**

| Aspect             | React (Library)    | Next.js (Framework) |
| ------------------ | ------------------ | ------------------- |
| **Routing**        | Add your own       | Built-in file-based |
| **Data Fetching**  | Choose your method | Built-in            |
| **SSR**            | Add your own       | Built-in            |
| **File Structure** | You decide         | Opinionated         |
| **Flexibility**    | High               | Medium              |
| **Setup Time**     | Longer             | Faster              |

---

### 55. React Fiber

**Definition:**  
**React Fiber** is the new reconciliation engine in React 16+. It's a complete rewrite of React's core algorithm.

**Key Goals:**

1. **Pause and resume work** - Interruptible rendering
2. **Priority to different updates** - User input > data fetching
3. **Return multiple elements** - Fragments
4. **Better error handling** - Error boundaries

**How It Works:**

```
Old React (Stack):
┌──────────────────────────────┐
│  Render starts               │
│         ↓                    │
│  Must complete entire tree   │
│  (Can't be interrupted)      │
│         ↓                    │
│  Commit to DOM               │
└──────────────────────────────┘

React Fiber:
┌──────────────────────────────┐
│  Render phase (Interruptible)│
│    → Can pause for urgent    │
│    → Can split into chunks   │
│         ↓                    │
│  Commit phase (Synchronous)  │
│    → Update DOM all at once  │
└──────────────────────────────┘
```

**Practical Benefits:**

```jsx
// Without Fiber: UI freezes during heavy render
function HeavyComponent() {
  const items = Array.from({ length: 10000 });
  return items.map((_, i) => <div key={i}>Item {i}</div>);
}

// With Fiber: React can pause rendering to handle user input
function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {/* Input stays responsive even while rendering 10k items */}
      <HeavyComponent />
    </div>
  );
}
```

---

### 56. Streaming SSR

**Definition:**  
**Streaming SSR** sends HTML to the browser in chunks as it's generated, instead of waiting for the entire page.

**Traditional SSR:**

```
Server: Generate ENTIRE page → Send all HTML → Browser shows page
Time: ████████████████████████ (4 seconds) → Page appears
```

**Streaming SSR:**

```
Server: Generate chunk 1 → Send → Generate chunk 2 → Send → ...
Browser: Shows chunk 1 → Shows chunk 2 → ...
Time: ███ (Page starts showing after 0.5s, completes over time)
```

**React 18 Implementation:**

```jsx
import { Suspense } from "react";

// Server Component
function Page() {
  return (
    <div>
      {/* Sends immediately */}
      <Header />

      {/* Streams when ready */}
      <Suspense fallback={<Skeleton />}>
        <SlowComponent /> {/* Doesn't block rest of page */}
      </Suspense>

      {/* Sends immediately */}
      <Footer />
    </div>
  );
}
```

**Benefits:**

- Faster Time to First Byte (TTFB)
- Progressive page loading
- Better user experience

---

### 57. Error Boundaries

**Definition:**  
**Error Boundaries** are components that catch JavaScript errors in their child component tree and display a fallback UI.

**Implementation:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state when error occurs
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error("Error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  );
}

function ProblematicComponent() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error("Count reached 5!");
  }

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

**Multiple Error Boundaries:**

```jsx
function App() {
  return (
    <ErrorBoundary fallback={<AppError />}>
      <Header />

      <ErrorBoundary fallback={<SidebarError />}>
        <Sidebar />
      </ErrorBoundary>

      <ErrorBoundary fallback={<ContentError />}>
        <MainContent />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}
```

**What Error Boundaries DON'T Catch:**

- Event handlers (use try-catch)
- Async code
- Server-side rendering errors
- Errors in the error boundary itself

---

### 58. Portals

**Definition:**  
**Portals** let you render children into a DOM node outside the parent component hierarchy.

**Use Cases:**

- Modals
- Tooltips
- Dropdowns

**Basic Example:**

```jsx
import { createPortal } from "react-dom";

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal">{children}</div>
    </div>,
    document.body, // Renders outside React root
  );
}

// Usage
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen}>
        <h1>Modal Content</h1>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
```

**Why Portals:**

```html
<!-- Without Portal: Modal might be clipped by parent overflow -->
<div style="overflow: hidden">
  <div class="modal">...</div>
  <!-- ❌ Clipped! -->
</div>

<!-- With Portal: Modal renders at body level -->
<div style="overflow: hidden">
  <!-- App content -->
</div>
<div class="modal">...</div>
<!-- ✅ Not clipped! -->
```

**Tooltip Example:**

```jsx
function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setShow(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <span onMouseEnter={handleMouseEnter} onMouseLeave={() => setShow(false)}>
        {children}
      </span>

      {show &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: position.y,
              left: position.x,
              background: "black",
              color: "white",
              padding: "5px",
            }}
          >
            {text}
          </div>,
          document.body,
        )}
    </>
  );
}
```

---

### 59. Context vs Props

**When to Use Props:**

- Parent-child communication
- Component reusability
- Explicit data flow
- Less than 3 levels deep

**When to Use Context:**

- Global data (theme, auth, language)
- Deep component trees (avoid prop drilling)
- Data needed by many components
- More than 3 levels deep

**Comparison:**

| Feature          | Props          | Context              |
| ---------------- | -------------- | -------------------- |
| **Scope**        | Parent → Child | Any descendant       |
| **Explicitness** | Very explicit  | Implicit             |
| **Performance**  | Better         | Can cause re-renders |
| **Testing**      | Easier         | Harder               |
| **Use Case**     | Component API  | App-wide state       |

**Example:**

```jsx
// ❌ Props drilling - BAD for deep trees
function App() {
  const [user, setUser] = useState({ name: "John" });
  return <Level1 user={user} />;
}

function Level1({ user }) {
  return <Level2 user={user} />; // Just passing through
}

function Level2({ user }) {
  return <Level3 user={user} />; // Just passing through
}

function Level3({ user }) {
  return <div>{user.name}</div>; // Finally used!
}

// ✅ Context - GOOD for deep trees
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: "John" });

  return (
    <UserContext.Provider value={user}>
      <Level1 />
    </UserContext.Provider>
  );
}

function Level1() {
  return <Level2 />; // No props!
}

function Level2() {
  return <Level3 />; // No props!
}

function Level3() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}
```

---

### 60. StrictMode

**Definition:**  
**StrictMode** is a tool for highlighting potential problems in an application. It activates additional checks and warnings in development mode.

**What It Does:**

1. Detects unsafe lifecycles
2. Warns about legacy APIs
3. Detects unexpected side effects
4. Warns about deprecated findDOMNode
5. Double-invokes functions to find bugs

**Usage:**

```jsx
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <Header />
      <MainContent />
      <Footer />
    </StrictMode>
  );
}
```

**Double Invocation:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  console.log("Render"); // ⚠️ Logs TWICE in StrictMode (dev only)

  // This helps catch impure functions
  const impureFunction = () => {
    someGlobalVar++; // ❌ BAD: Side effect outside React
  };

  return <div>{count}</div>;
}
```

**Effects Double Invoke:**

```jsx
function Component() {
  useEffect(() => {
    console.log("Mount"); // Runs twice in StrictMode

    return () => {
      console.log("Unmount"); // Runs twice too
    };
  }, []);

  // This helps ensure cleanup works correctly
}
```

**Benefits:**

- Catches bugs early
- Ensures components are resilient
- Prepares for concurrent features
- No runtime overhead in production

**Note:** StrictMode checks only run in **development mode**, not in production.

---

## 🎯 Interview Quick Reference

### Must-Know Concepts:

1. **Virtual DOM** - Performance optimization
2. **JSX** - Syntax extension
3. **Components** - Building blocks
4. **Props vs State** - Data management
5. **Hooks** - useState, useEffect, useContext
6. **Lifecycle** - Mount, Update, Unmount
7. **Keys** - List optimization
8. **React.memo** - Performance
9. **Controlled Components** - Form handling
10. **Context API** - State sharing

### Common Interview Questions:

1. "Explain Virtual DOM" → Lightweight copy, diff algorithm, batch updates
2. "useState vs useRef" → Re-renders vs doesn't re-render
3. "When to use Redux" → Large apps, complex state, middleware
4. "What are keys?" → Help React identify list items
5. "Controlled vs Uncontrolled" → React state vs DOM state

### Performance Checklist:

- ✅ Use React.memo for expensive components
- ✅ Use useMemo/useCallback for expensive calculations
- ✅ Use keys in lists
- ✅ Code splitting with lazy()
- ✅ Avoid inline functions in JSX
- ✅ Keep state close to where it's used
- ✅ Normalize Redux state

---

**🎉 Congratulations! You've completed the React Complete Interview Guide!**

This guide covers 60+ topics from basics to advanced concepts. Practice building projects using these patterns, and you'll be well-prepared for any React interview.

**Next Steps:**

1. Build a project using these concepts
2. Practice explaining concepts out loud
3. Review common interview questions
4. Study the official React documentation

Good luck with your interviews! 🚀
