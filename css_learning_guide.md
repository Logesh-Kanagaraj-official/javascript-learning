# CSS Complete Learning Guide
**From Basics to Advanced**


[⬆️ Back to Top](#-table-of-contents)

---

## 📌 Table of Contents
1. [What is CSS?](#what-is-css)
2. [Types of CSS](#types-of-css)
3. [CSS Selectors](#css-selectors)
4. [Pseudo-Classes and Pseudo-Elements](#pseudo-classes-and-pseudo-elements)
5. [Display Flex](#display-flex)
6. [Display Grid](#display-grid)
7. [Position: Absolute vs Relative](#position-absolute-vs-relative)
8. [Z-Index](#z-index)
9. [CSS Box Model](#css-box-model)
10. [Media Queries](#media-queries)
11. [CSS Frameworks](#css-frameworks)
12. [Rem and Em](#rem-and-em)
13. [CSS Variables](#css-variables)
14. [currentColor](#currentcolor)
15. [Reflow and Repaint](#reflow-and-repaint)
16. [Tailwind vs Traditional CSS](#tailwind-vs-traditional-css)
17. [min() and max()](#min-and-max)
18. [inherit, initial, and unset](#inherit-initial-and-unset)


[⬆️ Back to Top](#-table-of-contents)

---

## What is CSS?

### Definition
**CSS (Cascading Style Sheets)** is a stylesheet language used to describe the presentation and visual styling of HTML documents. It controls how HTML elements are displayed on screen, paper, or other media.

### Purpose
- **Separation of concerns** - Separates content (HTML) from presentation (CSS)
- **Styling** - Colors, fonts, layouts, spacing
- **Responsive design** - Adapt to different screen sizes
- **Animations** - Create visual transitions and effects
- **Consistency** - Apply uniform styles across multiple pages

### Basic Syntax
```css
selector {
    property: value;
}
```

### Example: Without CSS vs With CSS

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* With CSS */
        h1 {
            color: #2c3e50;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        
        p {
            color: #34495e;
            font-size: 18px;
            line-height: 1.6;
            max-width: 600px;
            margin: 20px auto;
        }
        
        .highlight {
            background-color: #f1c40f;
            padding: 5px 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <!-- Without CSS: Plain, black text on white background -->
    <h1>Welcome to CSS</h1>
    <p>CSS makes your website <span class="highlight">beautiful</span> and professional!</p>
</body>
</html>
```


[⬆️ Back to Top](#-table-of-contents)

---

## Types of CSS

There are **three ways** to add CSS to HTML:

### 1. Inline CSS

**Definition:** CSS applied directly to HTML elements using the `style` attribute.

**Pros:** Quick, high specificity  
**Cons:** Not reusable, hard to maintain, mixes content with presentation

```html
<h1 style="color: blue; font-size: 32px; text-align: center;">
    Hello World
</h1>

<p style="color: gray; font-size: 16px;">
    This is inline CSS.
</p>
```

### 2. Internal/Embedded CSS

**Definition:** CSS defined within `<style>` tags in the `<head>` section of the HTML document.

**Pros:** Keeps styles in one place, good for single-page sites  
**Cons:** Not reusable across multiple pages, increases HTML file size

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        
        h1 {
            color: #333;
            text-align: center;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Internal CSS Example</h1>
    </div>
</body>
</html>
```

### 3. External CSS (Best Practice ✅)

**Definition:** CSS defined in separate `.css` files and linked to HTML using `<link>` tag.

**Pros:** Reusable across multiple pages, clean separation, cacheable  
**Cons:** Requires additional HTTP request (minor)

**styles.css:**
```css
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ecf0f1;
}

header {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>External CSS Example</h1>
    </header>
    <div class="container">
        <p>This is styled using external CSS.</p>
        <button>Click Me</button>
    </div>
</body>
</html>
```

### Comparison Table

| Type | Syntax | Scope | Best For | Maintainability |
|------|--------|-------|----------|----------------|
| **Inline** | `<tag style="...">` | Single element | Quick tests | ❌ Poor |
| **Internal** | `<style>` in `<head>` | Single page | One-page sites | ⚠️ Moderate |
| **External** | `<link href="style.css">` | Multiple pages | All projects | ✅ Excellent |

### CSS Precedence (Specificity)

When multiple CSS rules target the same element:

```css
/* Priority order (highest to lowest): */
1. Inline styles: style="color: red;"
2. IDs: #header { color: blue; }
3. Classes, attributes, pseudo-classes: .title { color: green; }
4. Elements: h1 { color: black; }
```

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Internal CSS */
        h1 {
            color: green; /* Lower priority */
        }
        
        #main-title {
            color: blue; /* Higher priority */
        }
    </style>
</head>
<body>
    <!-- Inline CSS wins! -->
    <h1 id="main-title" style="color: red;">
        This text will be RED
    </h1>
</body>
</html>
```


[⬆️ Back to Top](#-table-of-contents)

---

## CSS Selectors

### Definition
**CSS Selectors** are patterns used to select and target HTML elements that you want to style.

### Types of Selectors

#### 1. Universal Selector (`*`)
Selects all elements

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### 2. Element/Type Selector
Selects all elements of a specific type

```css
h1 {
    color: navy;
}

p {
    font-size: 16px;
}

a {
    text-decoration: none;
}
```

#### 3. Class Selector (`.`)
Selects elements with a specific class attribute

```html
<div class="container">Content</div>
<p class="highlight">Important text</p>
```

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

#### 4. ID Selector (`#`)
Selects a unique element with a specific id

```html
<header id="main-header">Header</header>
```

```css
#main-header {
    background-color: #333;
    color: white;
    padding: 20px;
}
```

> **Note:** IDs should be unique per page. Use classes for multiple elements.

#### 5. Attribute Selector
Selects elements based on attributes

```css
/* Has attribute */
input[type] {
    border: 1px solid #ccc;
}

/* Exact match */
input[type="text"] {
    background-color: #f9f9f9;
}

/* Starts with */
a[href^="https"] {
    color: green;
}

/* Ends with */
a[href$=".pdf"] {
    color: red;
}

/* Contains */
img[alt*="logo"] {
    width: 200px;
}
```

```html
<input type="text">
<input type="email">
<a href="https://example.com">Secure Link</a>
<a href="document.pdf">Download PDF</a>
```

#### 6. Descendant Selector (Space)
Selects elements that are descendants (children, grandchildren, etc.)

```css
div p {
    color: blue;
}
```

```html
<div>
    <p>This will be blue</p>
    <section>
        <p>This will also be blue (grandchild)</p>
    </section>
</div>
<p>This will NOT be blue (not a descendant of div)</p>
```

#### 7. Child Selector (`>`)
Selects direct children only

```css
div > p {
    font-weight: bold;
}
```

```html
<div>
    <p>Bold (direct child)</p>
    <section>
        <p>NOT bold (grandchild, not direct child)</p>
    </section>
</div>
```

#### 8. Adjacent Sibling Selector (`+`)
Selects the element immediately after another

```css
h1 + p {
    font-size: 20px;
    color: gray;
}
```

```html
<h1>Title</h1>
<p>This paragraph will be styled (immediately after h1)</p>
<p>This will NOT be styled</p>
```

#### 9. General Sibling Selector (`~`)
Selects all siblings after an element

```css
h1 ~ p {
    color: green;
}
```

```html
<h1>Title</h1>
<p>Green (sibling after h1)</p>
<div>Some content</div>
<p>Also green (sibling after h1)</p>
```

#### 10. Grouping Selector (`,`)
Apply same styles to multiple selectors

```css
h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: #333;
}

.btn-primary, .btn-secondary, .btn-success {
    padding: 10px 20px;
    border-radius: 5px;
}
```

### Complete Selector Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Universal */
        * { box-sizing: border-box; }
        
        /* Element */
        body { font-family: Arial, sans-serif; }
        
        /* Class */
        .container { max-width: 1200px; margin: 0 auto; }
        
        /* ID */
        #header { background: #333; color: white; padding: 20px; }
        
        /* Attribute */
        input[type="email"] { border: 2px solid blue; }
        
        /* Descendant */
        .container p { line-height: 1.6; }
        
        /* Child */
        .menu > li { display: inline-block; }
        
        /* Adjacent Sibling */
        h2 + p { font-style: italic; }
        
        /* General Sibling */
        h2 ~ p { margin-left: 20px; }
        
        /* Grouping */
        h1, h2, h3 { color: navy; }
    </style>
</head>
<body>
    <header id="header">
        <h1>CSS Selectors</h1>
    </header>
    
    <div class="container">
        <h2>Introduction</h2>
        <p>First paragraph after h2 (italic)</p>
        <p>Second paragraph (margin-left)</p>
        
        <input type="email" placeholder="Email">
        
        <ul class="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
</body>
</html>
```


[⬆️ Back to Top](#-table-of-contents)

---

## Pseudo-Classes and Pseudo-Elements

### Pseudo-Classes

**Definition:** Keywords added to selectors that specify a special state of an element.

#### Syntax
```css
selector:pseudo-class {
    property: value;
}
```

#### Common Pseudo-Classes

| Pseudo-Class | Description | Example |
|--------------|-------------|---------|
| `:hover` | Mouse over element | `a:hover { color: red; }` |
| `:active` | Element being clicked | `button:active { scale: 0.95; }` |
| `:focus` | Element has focus | `input:focus { border: 2px solid blue; }` |
| `:visited` | Visited link | `a:visited { color: purple; }` |
| `:nth-child(n)` | Nth child of parent | `li:nth-child(2) { color: red; }` |
| `:first-child` | First child | `p:first-child { font-weight: bold; }` |
| `:last-child` | Last child | `p:last-child { margin-bottom: 0; }` |
| `:not(selector)` | Elements not matching | `.btn:not(.primary) { ... }` |
| `:checked` | Checked inputs | `input:checked { background: green; }` |
| `:disabled` | Disabled elements | `button:disabled { opacity: 0.5; }` |
| `:empty` | Elements with no children | `div:empty { display: none; }` |

#### Example: Interactive Link States
```css
/* Link states (LoVe HAte mnemonic) */
a:link {
    color: blue;
    text-decoration: none;
}

a:visited {
    color: purple;
}

a:hover {
    color: red;
    text-decoration: underline;
}

a:active {
    color: orange;
}
```

#### Example: nth-child Patterns
```css
/* Odd rows */
tr:nth-child(odd) {
    background-color: #f2f2f2;
}

/* Even rows */
tr:nth-child(even) {
    background-color: white;
}

/* Every 3rd element */
li:nth-child(3n) {
    color: red;
}

/* First 3 elements */
p:nth-child(-n+3) {
    font-weight: bold;
}
```

### Pseudo-Elements

**Definition:** Keywords that style specific parts of an element.

#### Syntax
```css
selector::pseudo-element {
    property: value;
}
```

> **Note:** Use double colons `::` (CSS3) instead of single `:` (CSS2)

#### Common Pseudo-Elements

| Pseudo-Element | Description | Use Case |
|----------------|-------------|----------|
| `::before` | Insert content before element | Icons, decorations |
| `::after` | Insert content after element | Icons, decorations |
| `::first-letter` | First letter of element | Drop caps |
| `::first-line` | First line of element | Styling paragraphs |
| `::selection` | User-selected text | Highlight color |
| `::placeholder` | Input placeholder text | Form styling |
| `::marker` | List item markers | Custom bullets |

#### Example: ::before and ::after
```css
/* Add icon before links */
a::before {
    content: "🔗 ";
}

/* Add arrow after external links */
a[href^="http"]::after {
    content: " ↗";
}

/* Decorative quotes */
blockquote::before {
    content: '"';
    font-size: 4em;
    color: #ccc;
}

blockquote::after {
    content: '"';
    font-size: 4em;
    color: #ccc;
}
```

#### Example: First Letter Drop Cap
```css
p::first-letter {
    font-size: 3em;
    font-weight: bold;
    float: left;
    margin-right: 5px;
    line-height: 1;
}

p::first-line {
    font-weight: bold;
    color: #333;
}
```

#### Example: Custom Selection Color
```css
::selection {
    background-color: #ffeb3b;
    color: #000;
}

/* Firefox */
::-moz-selection {
    background-color: #ffeb3b;
    color: #000;
}
```

#### Example: Styled Placeholder
```css
input::placeholder {
    color: #999;
    font-style: italic;
    opacity: 0.7;
}
```

### Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Pseudo-classes */
        button {
            padding: 10px 20px;
            background: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        button:hover {
            background: #2980b9;
            transform: translateY(-2px);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        button:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
        
        /* Nth-child */
        li:nth-child(odd) {
            background: #f0f0f0;
        }
        
        li:first-child {
            font-weight: bold;
        }
        
        li:last-child {
            border-bottom: 2px solid #333;
        }
        
        /* Pseudo-elements */
        .badge::before {
            content: "★ ";
            color: gold;
        }
        
        .external-link::after {
            content: " ↗";
            font-size: 0.8em;
            color: #3498db;
        }
        
        p::first-letter {
            font-size: 2em;
            font-weight: bold;
            color: #e74c3c;
        }
        
        ::selection {
            background: #3498db;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Pseudo-Classes & Pseudo-Elements</h1>
    
    <button>Hover Me</button>
    <button disabled>Disabled</button>
    
    <ul>
        <li>First Item (bold)</li>
        <li>Second Item (gray bg)</li>
        <li>Third Item (white bg)</li>
        <li>Last Item (border)</li>
    </ul>
    
    <p class="badge">Premium Badge</p>
    <a href="https://google.com" class="external-link">External Link</a>
    
    <p>This paragraph has a large first letter. Select this text to see custom selection colors!</p>
</body>
</html>
```

### Difference: Pseudo-Class vs Pseudo-Element

| Aspect | Pseudo-Class | Pseudo-Element |
|--------|--------------|----------------|
| **Purpose** | Targets element states | Targets parts of elements |
| **Syntax** | `:` (single colon) | `::` (double colon) |
| **Example** | `:hover`, `:focus` | `::before`, `::after` |
| **Content** | Styles existing content | Can add new content |

```css
/* Pseudo-Class: State */
button:hover { background: red; }

/* Pseudo-Element: Part/Addition */
button::before { content: "→ "; }
```


[⬆️ Back to Top](#-table-of-contents)

---

## Display Flex

### Definition
**Flexbox (Flexible Box Layout)** is a one-dimensional layout system for arranging items in rows or columns. It makes it easy to align and distribute space among items in a container.

### Basic Concepts

```
┌─────────────────────────────────────┐
│      Flex Container (Parent)         │
│  ┌────────┐ ┌────────┐ ┌────────┐  │
│  │ Flex   │ │ Flex   │ │ Flex   │  │
│  │ Item 1 │ │ Item 2 │ │ Item 3 │  │
│  └────────┘ └────────┘ └────────┘  │
└─────────────────────────────────────┘
```

### Enabling Flexbox

```css
.container {
    display: flex; /* or inline-flex */
}
```

### Flex Container Properties (Parent)

#### 1. flex-direction
Defines the main axis direction

```css
.container {
    display: flex;
    flex-direction: row; /* Default: left to right */
}

/* Options: */
flex-direction: row;            /* → */
flex-direction: row-reverse;    /* ← */
flex-direction: column;         /* ↓ */
flex-direction: column-reverse; /* ↑ */
```

#### 2. justify-content
Aligns items along the main axis

```css
.container {
    display: flex;
    justify-content: flex-start; /* Default */
}

/* Options: */
justify-content: flex-start;    /* ├──────── */
justify-content: flex-end;      /* ────────┤ */
justify-content: center;        /* ───────  */
justify-content: space-between; /* ├─  ──  ─┤ */
justify-content: space-around;  /* ─├─  ──  ─┤─ */
justify-content: space-evenly;  /* ─├──  ──  ──┤─ */
```

#### 3. align-items
Aligns items along the cross axis

```css
.container {
    display: flex;
    align-items: stretch; /* Default */
}

/* Options: */
align-items: flex-start;  /* Top */
align-items: flex-end;    /* Bottom */
align-items: center;      /* Middle */
align-items: baseline;    /* Text baseline */
align-items: stretch;     /* Fill container */
```

#### 4. flex-wrap
Controls wrapping of items

```css
.container {
    display: flex;
    flex-wrap: nowrap; /* Default */
}

/* Options: */
flex-wrap: nowrap;   /* Single line */
flex-wrap: wrap;     /* Multiple lines */
flex-wrap: wrap-reverse; /* Multiple lines, reversed */
```

#### 5. gap
Space between flex items

```css
.container {
    display: flex;
    gap: 20px; /* Space between all items */
    
    /* Or specify row and column gaps */
    row-gap: 20px;
    column-gap: 10px;
}
```

### Flex Item Properties (Children)

#### 1. flex-grow
How much an item should grow relative to others

```css
.item {
    flex-grow: 0; /* Default: don't grow */
}

.item-1 { flex-grow: 1; } /* Take 1 part */
.item-2 { flex-grow: 2; } /* Take 2 parts (twice as much) */
```

#### 2. flex-shrink
How much an item should shrink relative to others

```css
.item {
    flex-shrink: 1; /* Default: can shrink */
}

.item-fixed { flex-shrink: 0; } /* Don't shrink */
```

#### 3. flex-basis
Initial size of item before growing/shrinking

```css
.item {
    flex-basis: auto; /* Default */
    flex-basis: 200px; /* Fixed width */
    flex-basis: 50%;   /* Percentage */
}
```

#### 4. flex (Shorthand)
Combines grow, shrink, and basis

```css
.item {
    flex: 0 1 auto; /* Default: grow shrink basis */
    flex: 1;        /* Common: flex-grow: 1 */
    flex: 1 1 200px; /* Grow, shrink, 200px basis */
}
```

#### 5. align-self
Override align-items for individual item

```css
.item-special {
    align-self: flex-end; /* Align this item differently */
}
```

#### 6. order
Change visual order of items

```css
.item-1 { order: 2; }
.item-2 { order: 1; } /* Appears first */
.item-3 { order: 3; }
```

### Complete Flexbox Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        /* Flex Container */
        .flex-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            background-color: #f0f0f0;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        /* Flex Items */
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        
        /* Example 1: Equal Width Items */
        .example-1 .flex-item {
            flex: 1; /* All items grow equally */
        }
        
        /* Example 2: Different Grow Factors */
        .example-2 .item-1 { flex-grow: 1; }
        .example-2 .item-2 { flex-grow: 2; } /* 2x wider */
        .example-2 .item-3 { flex-grow: 1; }
        
        /* Example 3: Center Everything */
        .example-3 {
            justify-content: center;
            align-items: center;
            min-height: 200px;
        }
        
        /* Example 4: Wrap Items */
        .example-4 {
            flex-wrap: wrap;
        }
        
        .example-4 .flex-item {
            flex: 0 0 150px; /* Fixed width */
        }
        
        /* Example 5: Navigation Bar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #2c3e50;
            padding: 15px 30px;
        }
        
        .logo {
            color: white;
            font-size: 24px;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            gap: 30px;
            list-style: none;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
        }
        
        .nav-menu a:hover {
            color: #3498db;
        }
    </style>
</head>
<body>
    <h1>Flexbox Examples</h1>
    
    <!-- Example 1: Equal Width -->
    <h2>1. Equal Width Items</h2>
    <div class="flex-container example-1">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
    
    <!-- Example 2: Different Grow Factors -->
    <h2>2. Different Grow Factors</h2>
    <div class="flex-container example-2">
        <div class="flex-item item-1">Grow: 1</div>
        <div class="flex-item item-2">Grow: 2</div>
        <div class="flex-item item-3">Grow: 1</div>
    </div>
    
    <!-- Example 3: Centered -->
    <h2>3. Centered Content</h2>
    <div class="flex-container example-3">
        <div class="flex-item">Centered!</div>
    </div>
    
    <!-- Example 4: Wrapping Items -->
    <h2>4. Wrapping Items</h2>
    <div class="flex-container example-4">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
        <div class="flex-item">6</div>
    </div>
    
    <!-- Example 5: Navigation Bar -->
    <h2>5. Navigation Bar</h2>
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</body>
</html>
```

### Common Flexbox Patterns

#### 1. Center Element (Horizontally & Vertically)
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

#### 2. Equal Height Columns
```css
.columns {
    display: flex;
}

.column {
    flex: 1;
}
```

#### 3. Sticky Footer
```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* Grows to fill space */
}
```

#### 4. Card Layout
```css
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, min 300px */
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## Display Grid

### Definition
**CSS Grid** is a two-dimensional layout system that allows you to create complex layouts with rows and columns. Unlike Flexbox (1D), Grid works in both dimensions simultaneously.

### Basic Concepts

```
┌────────┬────────┬────────┐
│ Cell 1 │ Cell 2 │ Cell 3 │  Row 1
├────────┼────────┼────────┤
│ Cell 4 │ Cell 5 │ Cell 6 │  Row 2
├────────┼────────┼────────┤
│ Cell 7 │ Cell 8 │ Cell 9 │  Row 3
└────────┴────────┴────────┘
 Col 1    Col 2    Col 3
```

### Enabling Grid

```css
.container {
    display: grid; /* or inline-grid */
}
```

### Grid Container Properties

#### 1. grid-template-columns
Define column tracks

```css
.grid {
    display: grid;
    
    /* Fixed width columns */
    grid-template-columns: 200px 200px 200px;
    
    /* Fractional units (fr) */
    grid-template-columns: 1fr 1fr 1fr; /* Equal width */
    grid-template-columns: 2fr 1fr; /* 2:1 ratio */
    
    /* repeat() function */
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-columns: repeat(4, 100px);
    
    /* Mix units */
    grid-template-columns: 200px 1fr 2fr;
    
    /* Auto-fit & Auto-fill */
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

#### 2. grid-template-rows
Define row tracks

```css
.grid {
    display: grid;
    grid-template-rows: 100px 200px 100px;
    grid-template-rows: repeat(3, 150px);
    grid-template-rows: auto 1fr auto; /* Header, content, footer */
}
```

#### 3. gap (grid-gap)
Spacing between grid items

```css
.grid {
    display: grid;
    gap: 20px; /* Row and column gap */
    
    /* Or specify separately */
    row-gap: 20px;
    column-gap: 10px;
}
```

#### 4. justify-items
Align items horizontally within their cell

```css
.grid {
    justify-items: start;    /* Left */
    justify-items: end;      /* Right */
    justify-items: center;   /* Center */
    justify-items: stretch;  /* Default: fill width */
}
```

#### 5. align-items
Align items vertically within their cell

```css
.grid {
    align-items: start;    /* Top */
    align-items: end;      /* Bottom */
    align-items: center;   /* Middle */
    align-items: stretch;  /* Default: fill height */
}
```

#### 6. justify-content
Align entire grid horizontally

```css
.grid {
    justify-content: start;
    justify-content: end;
    justify-content: center;
    justify-content: space-between;
    justify-content: space-around;
    justify-content: space-evenly;
}
```

#### 7. align-content
Align entire grid vertically

```css
.grid {
    align-content: start;
    align-content: end;
    align-content: center;
    align-content: space-between;
}
```

### Grid Item Properties

#### 1. grid-column
Span columns

```css
.item {
    /* Start and end line numbers */
    grid-column: 1 / 3; /* Start at line 1, end before line 3 */
    
    /* Span keyword */
    grid-column: span 2; /* Span 2 columns */
    
    /* Shorthand for start / end */
    grid-column-start: 1;
    grid-column-end: 4;
}
```

#### 2. grid-row
Span rows

```css
.item {
    grid-row: 1 / 3;
    grid-row: span 2;
    
    grid-row-start: 1;
    grid-row-end: 4;
}
```

#### 3. grid-area
Place item in named area or by lines

```css
/* Using line numbers */
.item {
    grid-area: 1 / 1 / 3 / 3; /* row-start / col-start / row-end / col-end */
}

/* Using named areas (see template-areas below) */
.header {
    grid-area: header;
}
```

### Grid Template Areas

Define named grid areas

```css
.container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
    gap: 20px;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }
```

### Complete Grid Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        /* Example 1: Basic 3-Column Grid */
        .grid-basic {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .grid-item {
            background: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        
        /* Example 2: Responsive Grid (Auto-fit) */
        .grid-responsive {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        /* Example 3: Page Layout with Grid Areas */
        .page-layout {
            display: grid;
            grid-template-columns: 200px 1fr 200px;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header header"
                "sidebar main aside"
                "footer footer footer";
            gap: 20px;
            min-height: 500px;
        }
        
        .header  { grid-area: header;  background: #2c3e50; color: white; padding: 20px; }
        .sidebar { grid-area: sidebar; background: #34495e; color: white; padding: 20px; }
        .main    { grid-area: main;    background: #ecf0f1; padding: 20px; }
        .aside   { grid-area: aside;   background: #34495e; color: white; padding: 20px; }
        .footer  { grid-area: footer;  background: #2c3e50; color: white; padding: 20px; }
        
        /* Example 4: Complex Spanning */
        .grid-complex {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 100px);
            gap: 10px;
        }
        
        .complex-item {
            background: #e74c3c;
            color: white;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .complex-item-1 { grid-column: 1 / 3; grid-row: 1 / 2; }
        .complex-item-2 { grid-column: 3 / 5; grid-row: 1 / 3; }
        .complex-item-3 { grid-column: 1 / 2; grid-row: 2 / 4; }
        .complex-item-4 { grid-column: 2 / 4; grid-row: 2 / 3; }
        .complex-item-5 { grid-column: 2 / 5; grid-row: 3 / 4; }
    </style>
</head>
<body>
    <h1>CSS Grid Examples</h1>
    
    <!-- Example 1: Basic Grid -->
    <h2>1. Basic 3-Column Grid</h2>
    <div class="grid-basic">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
    </div>
    
    <!-- Example 2: Responsive Grid -->
    <h2>2. Responsive Grid (Auto-fit)</h2>
    <div class="grid-responsive">
        <div class="grid-item">Card 1</div>
        <div class="grid-item">Card 2</div>
        <div class="grid-item">Card 3</div>
        <div class="grid-item">Card 4</div>
        <div class="grid-item">Card 5</div>
    </div>
    
    <!-- Example 3: Page Layout -->
    <h2>3. Page Layout with Grid Areas</h2>
    <div class="page-layout">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="main">Main Content</div>
        <div class="aside">Aside</div>
        <div class="footer">Footer</div>
    </div>
    
    <br><br>
    
    <!-- Example 4: Complex Spanning -->
    <h2>4. Complex Grid Spanning</h2>
    <div class="grid-complex">
        <div class="complex-item complex-item-1">Span 2 cols</div>
        <div class="complex-item complex-item-2">Span 2 cols, 2 rows</div>
        <div class="complex-item complex-item-3">Span 2 rows</div>
        <div class="complex-item complex-item-4">Span 2 cols</div>
        <div class="complex-item complex-item-5">Span 3 cols</div>
    </div>
</body>
</html>
```

### Grid vs Flexbox

| Aspect | Flexbox | Grid |
|--------|---------|------|
| **Dimensions** | 1D (row OR column) | 2D (rows AND columns) |
| **Use Case** | Components, small layouts | Page layouts, complex structures |
| **Content Flow** | Content-first | Layout-first |
| **Best For** | Navigation, cards, toolbars | Page structure, dashboards |

### Common Grid Patterns

#### 1. Responsive Card Grid
```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

#### 2. Holy Grail Layout
```css
.holy-grail {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
```

#### 3. Equal Height Columns
```css
.equal-columns {
    display: grid;
    grid-auto-rows: 1fr;
}
```

#### 4. Pinterest-style Masonry
```css
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 10px;
}

.masonry-item {
    grid-row-end: span var(--row-span);
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## Position: Absolute vs Relative

### Definition
The CSS `position` property controls how an element is placed in the document. It determines the **positioning context** and how `top`, `right`, `bottom`, `left` offsets are applied.

### All 5 Position Values

| Value | Description |
|-------|-------------|
| `static` | Default — normal document flow, offsets have no effect |
| `relative` | Offset **from its own normal position**, stays in flow |
| `absolute` | Removed from flow, offset relative to **nearest positioned ancestor** |
| `fixed` | Removed from flow, offset relative to **viewport** (stays on screen) |
| `sticky` | Acts like `relative` until scroll threshold, then like `fixed` |

### static (Default)
```css
.box {
    position: static; /* default — no effect from top/left/etc */
}
```

### relative
Moves the element **from where it normally sits**, but reserves its original space.

```css
.box {
    position: relative;
    top: 20px;   /* Move 20px DOWN from its normal position */
    left: 30px;  /* Move 30px RIGHT from its normal position */
}
```

```html
<div style="border: 2px solid blue;">Normal div</div>
<div style="position: relative; top: 20px; left: 30px; border: 2px solid red;">
    Moved 20px down, 30px right (space still reserved above)
</div>
<div style="border: 2px solid green;">Normal div (gap appears above)</div>
```

### absolute
Removed from document flow, positioned relative to **nearest ancestor with position set** (not static).

```css
.parent {
    position: relative; /* Creates positioning context */
    width: 300px;
    height: 200px;
    background: lightblue;
}

.child {
    position: absolute;
    top: 10px;
    right: 10px; /* 10px from parent's top-right corner */
    background: red;
    padding: 10px;
}
```

```html
<div class="parent">
    Parent (relative)
    <div class="child">Absolute child</div>
</div>
```

> ⚠️ If no ancestor has `position` set, it positions relative to `<html>`.

### fixed
Always stays in the same viewport position — even when scrolling.

```css
.fixed-navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #333;
    color: white;
    padding: 15px;
    z-index: 1000;
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: blue;
    color: white;
    padding: 10px 15px;
    border-radius: 50%;
    cursor: pointer;
}
```

### sticky
Scrolls normally until it hits the offset threshold, then "sticks".

```css
.sticky-header {
    position: sticky;
    top: 0; /* Sticks when it reaches 0px from the top of viewport */
    background: white;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    z-index: 100;
}

/* Table headers that stick while scrolling */
th {
    position: sticky;
    top: 0;
    background: #f2f2f2;
}
```

### Key Interview Comparison

```css
/* relative: still in document flow */
.relative-box {
    position: relative;
    top: 50px; /* Moves DOWN but leaves gap */
}

/* absolute: out of flow, placed inside .parent */
.parent { position: relative; }
.absolute-box {
    position: absolute;
    bottom: 0;
    right: 0; /* Anchored to parent's bottom-right */
}

/* fixed: always visible in viewport */
.fixed-box {
    position: fixed;
    top: 20px;
    right: 20px; /* Always top-right of screen */
}
```

### Complete Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; font-family: Arial; }

        /* Fixed navbar */
        .navbar {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            background: #2c3e50;
            color: white;
            padding: 15px 30px;
            z-index: 1000;
        }

        .content {
            margin-top: 60px; /* Account for fixed navbar */
            padding: 20px;
        }

        /* Relative parent + absolute child */
        .card {
            position: relative;
            width: 250px;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
        }

        .card img { width: 100%; display: block; }

        .badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: red;
            color: white;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 12px;
        }

        /* Sticky section heading */
        h2 {
            position: sticky;
            top: 50px; /* Below the fixed navbar */
            background: white;
            padding: 10px 0;
            border-bottom: 2px solid #3498db;
        }
    </style>
</head>
<body>
    <nav class="navbar">Fixed Navbar</nav>
    <div class="content">
        <h2>Sticky Heading (sticks below navbar)</h2>
        <div class="card">
            <img src="image.jpg" alt="Card">
            <div class="badge">NEW</div>
            <p style="padding: 10px;">Card content here</p>
        </div>
    </div>
</body>
</html>
```


[⬆️ Back to Top](#-table-of-contents)

---

## Z-Index

### Definition
`z-index` controls the **stacking order** of elements on the z-axis (depth). Higher values appear in front of lower values.

> Only works on elements with `position` set to anything **other than** `static`.

### Basic Usage

```css
.box-red {
    position: absolute;
    z-index: 1;  /* Behind */
}

.box-blue {
    position: absolute;
    z-index: 2;  /* In front */
}

.box-green {
    position: absolute;
    z-index: 3;  /* Frontmost */
}
```

### Stacking Context

A **stacking context** is a 3D conceptual space. New stacking contexts are created by:
- `position` + `z-index` (not `auto`)
- `opacity` < 1
- `transform`, `filter`, `perspective`
- `will-change`

```css
/* Creates new stacking context */
.modal-overlay {
    position: fixed;
    z-index: 1000;
    inset: 0;
    background: rgba(0,0,0,0.5);
}

.modal {
    position: fixed;
    z-index: 1001; /* Must be > overlay */
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 30px;
    border-radius: 8px;
}

/* Navbar always on top */
.navbar {
    position: fixed;
    z-index: 9999;
}

/* Tooltip above everything */
.tooltip {
    position: absolute;
    z-index: 100;
}
```

### Common Z-Index Scale (Best Practice)

```css
/* Use a defined scale to avoid chaos */
:root {
    --z-below:   -1;
    --z-normal:   0;
    --z-dropdown: 100;
    --z-sticky:   200;
    --z-overlay:  300;
    --z-modal:    400;
    --z-toast:    500;
    --z-tooltip:  600;
}

.sticky-header { z-index: var(--z-sticky); }
.modal         { z-index: var(--z-modal); }
.toast         { z-index: var(--z-toast); }
```

### Z-Index Gotcha

```css
/* Even z-index: 9999 won't help if parent has lower z-index! */
.parent {
    position: relative;
    z-index: 1; /* Parent creates a stacking context */
}

.child {
    position: absolute;
    z-index: 9999; /* Still BELOW another parent with z-index: 2 */
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## CSS Box Model

### Definition
The **CSS Box Model** describes how every HTML element is rendered as a rectangular box with four areas: **content**, **padding**, **border**, and **margin**.

```
┌───────────────────────────────┐ ← margin
│  ┌─────────────────────────┐  │ ← border
│  │  ┌───────────────────┐  │  │ ← padding
│  │  │     CONTENT       │  │  │
│  │  │  (width × height) │  │  │
│  │  └───────────────────┘  │  │
│  └─────────────────────────┘  │
└───────────────────────────────┘
```

### The Four Box Areas

```css
.box {
    /* 1. Content */
    width: 200px;
    height: 100px;

    /* 2. Padding — inside the border */
    padding: 20px;          /* all sides */
    padding: 10px 20px;     /* top/bottom   left/right */
    padding: 5px 10px 15px 20px; /* top right bottom left */

    /* 3. Border */
    border: 2px solid #333;
    border-width: 2px;
    border-style: solid; /* solid, dashed, dotted, double, none */
    border-color: #333;
    border-radius: 8px;  /* rounded corners */

    /* 4. Margin — outside the border */
    margin: 20px;
    margin: 0 auto;   /* center horizontally */
}
```

### box-sizing (Critical!)

```css
/* Default (content-box): width = content only */
.default {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 2px solid;
    /* Total rendered width = 200 + 40 + 4 = 244px */
}

/* border-box: width INCLUDES padding + border */
.better {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 2px solid;
    /* Total rendered width = 200px exactly ✅ */
}

/* Best practice: apply globally */
*, *::before, *::after {
    box-sizing: border-box;
}
```

### Margin Collapse

Vertical margins between adjacent elements **collapse** — only the larger margin wins.

```css
.box-1 { margin-bottom: 30px; }
.box-2 { margin-top: 20px; }
/* Gap between them = 30px (NOT 50px!) */
```

```css
/* Prevent margin collapse with: */
.parent {
    overflow: hidden;  /* or */
    display: flex;     /* or */
    padding-top: 1px;
}
```

### Shorthand Reference

```css
/* padding & margin shorthand */
padding: 10px;                  /* all 4 sides */
padding: 10px 20px;             /* top-bottom | left-right */
padding: 10px 20px 15px;        /* top | left-right | bottom */
padding: 10px 20px 15px 5px;    /* top | right | bottom | left (clockwise) */

/* border shorthand */
border: 2px dashed red;         /* width | style | color */
border-top: 1px solid #ccc;     /* individual sides */

/* outline — like border but OUTSIDE the box, doesn't affect layout */
outline: 2px solid blue;
outline-offset: 4px;
```

### Complete Box Model Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        *, *::before, *::after { box-sizing: border-box; }

        .card {
            width: 300px;
            padding: 24px;
            border: 1px solid #ddd;
            border-radius: 12px;
            margin: 20px auto;
            background: white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .card h2 {
            margin: 0 0 12px 0;
            font-size: 20px;
            color: #2c3e50;
        }

        .card p {
            margin: 0;
            color: #666;
            line-height: 1.6;
        }

        .card .btn {
            display: inline-block;
            margin-top: 16px;
            padding: 10px 20px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        .card .btn:hover {
            background: #2980b9;
        }
    </style>
</head>
<body>
    <div class="card">
        <h2>Box Model Example</h2>
        <p>Width = 300px (includes padding & border because of border-box)</p>
        <button class="btn">Learn More</button>
    </div>
</body>
</html>
```


[⬆️ Back to Top](#-table-of-contents)

---

## Media Queries

### Definition
**Media queries** allow you to apply CSS rules based on device characteristics (screen width, orientation, resolution). The foundation of **responsive design**.

### Basic Syntax

```css
@media media-type and (condition) {
    /* CSS rules here */
}
```

### Breakpoints (Mobile-First Approach ✅)

```css
/* Mobile first — base styles for small screens */
.container {
    padding: 10px;
    font-size: 14px;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        font-size: 16px;
    }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
    }
}

/* Large screen: 1440px and up */
@media (min-width: 1440px) {
    .container {
        max-width: 1400px;
    }
}
```

### Common Breakpoints Reference

```css
/* Small phones */
@media (max-width: 480px) { }

/* Phones (portrait) */
@media (max-width: 600px) { }

/* Tablets */
@media (min-width: 601px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }

/* 4K / Large screens */
@media (min-width: 1920px) { }
```

### Other Media Features

```css
/* Orientation */
@media (orientation: landscape) {
    .sidebar { width: 30%; }
}

@media (orientation: portrait) {
    .sidebar { width: 100%; }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #fff;
    }
}

/* Print */
@media print {
    .navbar, .ads, .footer { display: none; }
    body { font-size: 12pt; color: black; }
}

/* High resolution / Retina */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
    .logo {
        background-image: url('logo@2x.png');
    }
}

/* Reduced motion (accessibility) */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Responsive Navigation Example

```css
/* Mobile: hamburger menu */
.nav-menu {
    display: none;
    flex-direction: column;
}

.hamburger { display: block; }

/* Desktop: horizontal menu */
@media (min-width: 768px) {
    .nav-menu {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .hamburger { display: none; }
}
```

### Responsive Grid Example

```css
.grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr; /* 1 column on mobile */
}

@media (min-width: 600px) {
    .grid { grid-template-columns: repeat(2, 1fr); } /* 2 columns */
}

@media (min-width: 900px) {
    .grid { grid-template-columns: repeat(3, 1fr); } /* 3 columns */
}

@media (min-width: 1200px) {
    .grid { grid-template-columns: repeat(4, 1fr); } /* 4 columns */
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## CSS Frameworks

### Definition
CSS frameworks are **pre-written CSS libraries** that provide ready-made classes, components, and grid systems to speed up development.

### Major CSS Frameworks Comparison

| Framework | Approach | File Size | Learning Curve | Best For |
|-----------|----------|-----------|---------------|----------|
| **Bootstrap** | Component-based | ~160KB | Low | Traditional apps, quick prototypes |
| **Tailwind CSS** | Utility-first | ~3KB (purged) | Medium | Custom designs, modern apps |
| **Bulma** | Flexbox-based | ~190KB | Low | Clean, modern UI |
| **Foundation** | Mobile-first | ~200KB | Medium | Enterprise apps |
| **Materialize** | Material Design | ~150KB | Low | Google-style UI |

### Bootstrap (Component-Based)

Pre-built components with classes.

```html
<!-- Bootstrap CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Grid System -->
<div class="container">
    <div class="row">
        <div class="col-md-6">Left column</div>
        <div class="col-md-6">Right column</div>
    </div>
</div>

<!-- Button components -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-danger btn-lg">Large Danger</button>

<!-- Alert component -->
<div class="alert alert-success" role="alert">
    Operation successful!
</div>

<!-- Card component -->
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some content here.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
```

### Tailwind CSS (Utility-First)

Apply utility classes directly in HTML — no pre-built components.

```html
<!-- Tailwind CDN (for quick testing) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Button -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
</button>

<!-- Card -->
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
    <img class="w-full rounded-t" src="image.jpg" alt="Card">
    <div class="mt-4">
        <h2 class="text-xl font-bold text-gray-800">Card Title</h2>
        <p class="text-gray-600 mt-2">Card description goes here.</p>
    </div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white p-4 rounded shadow">Item 1</div>
    <div class="bg-white p-4 rounded shadow">Item 2</div>
    <div class="bg-white p-4 rounded shadow">Item 3</div>
</div>
```

### When to Use Which

```
Bootstrap    → Rapid prototyping, teams already using it, admin dashboards
Tailwind CSS → Custom designs, performance-critical apps, React/Vue/Next.js
Bulma        → Simple projects needing clean UI without JS overhead
Vanilla CSS  → When you need full control, no extra dependencies
```


[⬆️ Back to Top](#-table-of-contents)

---

## Rem and Em

### Definition
`rem` and `em` are **relative CSS units** used for font sizes, spacing, and layout — enabling scalable, accessible design.

### em — Relative to Parent

`1em` = the font-size of the **current element's parent**.

```css
/* If body has font-size: 16px */
body { font-size: 16px; }

.parent {
    font-size: 20px;
}

.parent .child {
    font-size: 1.5em; /* 1.5 × 20px = 30px */
    padding: 1em;     /* 1 × 30px = 30px */
}

/* Problem: em values COMPOUND (nested scaling) */
.level-1 { font-size: 1.5em; } /* 24px */
.level-2 { font-size: 1.5em; } /* 36px (1.5 × 24) */
.level-3 { font-size: 1.5em; } /* 54px (compounding!) */
```

### rem — Relative to Root

`1rem` = the font-size of the **root element `<html>`**. Always consistent.

```css
/* Root font size */
html { font-size: 16px; } /* 1rem = 16px always */

h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.5rem; }  /* 24px */
p  { font-size: 1rem; }    /* 16px */

.container {
    max-width: 75rem;    /* 1200px */
    padding: 1.25rem;    /* 20px */
}

/* No compounding — always relative to root */
.level-1 { font-size: 1.5rem; } /* 24px */
.level-2 { font-size: 1.5rem; } /* 24px (same!) */
.level-3 { font-size: 1.5rem; } /* 24px (same!) */
```

### Accessibility Trick

```css
/* DO NOT set root font-size in px — it overrides user browser settings */
/* Instead, use 62.5% so 1rem = 10px (easy math) */
html {
    font-size: 62.5%; /* 62.5% of 16px = 10px */
}

body {
    font-size: 1.6rem; /* 16px — restore body */
}

h1   { font-size: 3.2rem; }  /* 32px */
h2   { font-size: 2.4rem; }  /* 24px */
p    { font-size: 1.6rem; }  /* 16px */
.sm  { font-size: 1.2rem; }  /* 12px */
```

### When to Use Each

| Unit | Use For | Why |
|------|---------|-----|
| `rem` | Font sizes, global spacing | Consistent, respects user settings |
| `em` | Component-local spacing | Scales proportionally with component's font |
| `px` | Borders, box-shadows, small fixed values | Precise, doesn't scale |
| `%` | Widths, responsive layouts | Relative to parent width |
| `vw/vh` | Full-screen sections | Relative to viewport |

```css
/* ✅ Best practice pattern */
html { font-size: 100%; } /* Respect browser settings */

h1 { font-size: 2rem; }   /* Global — use rem */
p  { font-size: 1rem; }

.button {
    font-size: 1rem;
    padding: 0.75em 1.5em; /* Scale with button's font — use em */
}

.container {
    max-width: 80rem;      /* Global sizing — rem */
    padding: 0 1.5rem;
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## CSS Variables

### Definition
**CSS Custom Properties (Variables)** let you store values in reusable named variables, making your stylesheets more maintainable and themeable.

### Syntax

```css
/* Define: -- prefix, on :root for global scope */
:root {
    --primary-color: #3498db;
    --font-size-base: 16px;
    --border-radius: 8px;
    --spacing-md: 20px;
}

/* Use: var() function */
.button {
    background: var(--primary-color);
    font-size: var(--font-size-base);
    border-radius: var(--border-radius);
    padding: var(--spacing-md);
}

/* With fallback value */
.element {
    color: var(--text-color, #333); /* Uses #333 if --text-color not defined */
}
```

### Design System with Variables

```css
:root {
    /* Colors */
    --color-primary:   #3498db;
    --color-secondary: #2ecc71;
    --color-danger:    #e74c3c;
    --color-warning:   #f39c12;
    --color-text:      #2c3e50;
    --color-bg:        #ffffff;
    --color-border:    #ddd;

    /* Typography */
    --font-family: 'Inter', sans-serif;
    --font-size-sm:   0.875rem;  /* 14px */
    --font-size-base: 1rem;      /* 16px */
    --font-size-lg:   1.125rem;  /* 18px */
    --font-size-xl:   1.5rem;    /* 24px */
    --font-size-2xl:  2rem;      /* 32px */

    /* Spacing (8px grid) */
    --space-1: 0.25rem;  /* 4px  */
    --space-2: 0.5rem;   /* 8px  */
    --space-3: 0.75rem;  /* 12px */
    --space-4: 1rem;     /* 16px */
    --space-6: 1.5rem;   /* 24px */
    --space-8: 2rem;     /* 32px */

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);

    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-full: 9999px;

    /* Transitions */
    --transition-fast:   150ms ease;
    --transition-normal: 300ms ease;
}
```

### Dark Mode with CSS Variables

```css
:root {
    --bg-color:   #ffffff;
    --text-color: #333333;
    --card-bg:    #f5f5f5;
}

/* Dark mode — just override the variables */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color:   #1a1a1a;
        --text-color: #f0f0f0;
        --card-bg:    #2a2a2a;
    }
}

/* Or with a class toggle via JavaScript */
.dark-theme {
    --bg-color:   #1a1a1a;
    --text-color: #f0f0f0;
    --card-bg:    #2a2a2a;
}

body   { background: var(--bg-color); color: var(--text-color); }
.card  { background: var(--card-bg); }
```

### Dynamic Variables with JavaScript

```javascript
// Read a CSS variable
const root = document.documentElement;
const primary = getComputedStyle(root).getPropertyValue('--primary-color');

// Update a CSS variable (changes all elements using it instantly!)
root.style.setProperty('--primary-color', '#e74c3c');

// Theme switcher
function switchTheme(theme) {
    if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#1a1a1a');
        root.style.setProperty('--text-color', '#f0f0f0');
    } else {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#333333');
    }
}
```

### Scoped Variables (Component-Level)

```css
/* Global */
:root { --btn-color: #3498db; }

/* Override for a specific component */
.danger-section {
    --btn-color: #e74c3c; /* Only affects buttons inside this section */
}

.button {
    background: var(--btn-color); /* Picks up the nearest scoped variable */
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## currentColor

### Definition
`currentColor` is a CSS keyword that represents the **current value of the `color` property** of an element. It lets other properties inherit the text color automatically.

### Basic Usage

```css
.icon {
    color: #e74c3c;          /* Set text color */
    border: 2px solid currentColor; /* Border matches text color */
    fill: currentColor;      /* SVG fill matches text color */
    box-shadow: 0 0 0 3px currentColor; /* Shadow matches too */
}
```

### Practical Examples

```css
/* Link with matching underline and arrow */
.link {
    color: #3498db;
    text-decoration: underline;
    text-decoration-color: currentColor;
}

.link::after {
    content: " →";
    color: currentColor; /* Arrow matches link color */
}

.link:hover {
    color: #2980b9; /* Both text AND arrow change together */
}

/* Button with matching border & icon */
.btn {
    color: #2ecc71;
    border: 2px solid currentColor;
    background: transparent;
    padding: 10px 20px;
}

.btn:hover {
    background: currentColor; /* Fill with same color on hover */
    color: white;
}

/* SVG icon that inherits parent color */
.icon-wrapper {
    color: #e74c3c;
}

.icon-wrapper svg {
    fill: currentColor;  /* SVG inherits the parent's color */
    width: 24px;
    height: 24px;
}

/* Rating stars */
.stars {
    color: gold;
}

.stars::before {
    content: "★★★★★";
    color: currentColor; /* Stars inherit gold */
}
```

### When to Use currentColor

```css
/* ✅ Use currentColor when you want automatic color inheritance */
.alert {
    padding: 16px;
    border-left: 4px solid currentColor; /* Border always matches text color */
    border-radius: 4px;
}

.alert-info    { color: #3498db; background: #ebf5fb; }
.alert-success { color: #27ae60; background: #eafaf1; }
.alert-error   { color: #e74c3c; background: #fdedec; }
/* The left border automatically matches without extra rules! */
```


[⬆️ Back to Top](#-table-of-contents)

---

## Reflow and Repaint

### Definition
These are browser rendering operations triggered by CSS changes:

- **Reflow (Layout):** The browser recalculates element positions and dimensions. **Expensive.**
- **Repaint:** The browser redraws pixels. Happens when visuals change but layout stays the same. **Less expensive.**
- **Composite:** GPU handles the change (transform, opacity). **Cheapest.** ✅

### What Triggers Each

| Change | Operation | Cost |
|--------|-----------|------|
| `width`, `height`, `margin`, `padding` | Reflow + Repaint | 🔴 Expensive |
| `top`, `left` (on positioned elements) | Reflow + Repaint | 🔴 Expensive |
| `color`, `background-color`, `border-color` | Repaint only | 🟡 Moderate |
| `box-shadow`, `border-radius` | Repaint only | 🟡 Moderate |
| `transform`, `opacity` | Composite only | 🟢 Cheap |
| `visibility: hidden` | Repaint only | 🟡 Moderate |
| `display: none` | Reflow + Repaint | 🔴 Expensive |

### Performance Best Practices

```css
/* ❌ Triggers reflow (slow animations) */
.bad-animation {
    transition: width 0.3s, height 0.3s, left 0.3s;
}

/* ✅ Use transform instead (GPU-accelerated, no reflow) */
.good-animation {
    transition: transform 0.3s, opacity 0.3s;
}

/* Slide in — bad */
.slide-bad {
    left: -100%;
    transition: left 0.3s; /* Causes reflow */
}
.slide-bad.active { left: 0; }

/* Slide in — good */
.slide-good {
    transform: translateX(-100%);
    transition: transform 0.3s; /* Composite only! */
}
.slide-good.active { transform: translateX(0); }
```

### will-change

Hints the browser to promote elements to their own compositor layer:

```css
/* Use sparingly — only for elements you KNOW will animate */
.animated-element {
    will-change: transform, opacity;
}

/* After animation, remove it */
/* element.style.willChange = 'auto'; */
```

### JavaScript Batching to Avoid Reflow

```javascript
// ❌ Forces multiple reflows (reading layout, then writing)
element.style.width = '100px';
const height = element.offsetHeight; // REFLOW triggered
element.style.height = '100px';
const width = element.offsetWidth;   // REFLOW triggered

// ✅ Batch reads, then writes
const height = element.offsetHeight; // Read all layout first
const width = element.offsetWidth;   // Read
element.style.width = '100px';       // Then write
element.style.height = '100px';      // No extra reflow
```


[⬆️ Back to Top](#-table-of-contents)

---

## Tailwind vs Traditional CSS

### Traditional CSS (Semantic)

Write descriptive class names and define styles separately.

```html
<!-- HTML -->
<button class="btn btn-primary">Click Me</button>

<div class="card">
    <img class="card-image" src="image.jpg" alt="">
    <div class="card-body">
        <h2 class="card-title">Title</h2>
        <p class="card-text">Description</p>
    </div>
</div>
```

```css
/* CSS */
.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-primary {
    background: #3498db;
    color: white;
}

.btn-primary:hover {
    background: #2980b9;
}

.card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    overflow: hidden;
    background: white;
}

.card-image { width: 100%; display: block; }
.card-body  { padding: 20px; }
.card-title { font-size: 1.25rem; margin: 0 0 8px; }
.card-text  { color: #666; margin: 0; }
```

### Tailwind CSS (Utility-First)

Apply small, single-purpose utility classes directly in HTML — no custom CSS file needed.

```html
<!-- Button -->
<button class="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600
               text-white rounded-md text-base cursor-pointer transition-colors duration-200">
    Click Me
</button>

<!-- Card -->
<div class="rounded-xl shadow-md overflow-hidden bg-white">
    <img class="w-full block" src="image.jpg" alt="">
    <div class="p-5">
        <h2 class="text-xl font-semibold mb-2">Title</h2>
        <p class="text-gray-500">Description</p>
    </div>
</div>
```

### Pros & Cons Comparison

| Aspect | Traditional CSS | Tailwind CSS |
|--------|-----------------|--------------|
| **Readability** | Clean HTML, descriptive classes | Long class strings in HTML |
| **CSS file size** | Grows with every component | Tiny (purges unused classes) |
| **Customization** | Full control | Config-based design tokens |
| **Speed** | Need to write CSS | Very fast — no CSS switching |
| **Reusability** | Classes are reusable | Extract components in framework |
| **Learning** | CSS knowledge required | Learn utility class names |
| **Best for** | Large teams, content sites | Rapid dev, design systems |

### When to Choose

```
Traditional CSS → When you need clear semantic classnames, working with a
                  design system or existing codebase, or in plain HTML projects.

Tailwind CSS    → When using React/Vue/Next.js, rapid prototyping, want
                  built-in design constraints, or small bundle size matters.
```


[⬆️ Back to Top](#-table-of-contents)

---

## min() and max()

### Definition
`min()`, `max()`, and `clamp()` are **CSS comparison functions** that let you set responsive values without media queries.

### min() — Use the Smallest Value

```css
/* Width is the smaller of 500px OR 100% of parent */
.box {
    width: min(500px, 100%);
    /* On phone (320px wide): width = 100% = 320px */
    /* On desktop (1000px wide): width = 500px */
}

/* Prevent font from going too large */
h1 {
    font-size: min(5vw, 48px); /* 5% of viewport OR 48px, whichever is smaller */
}

/* Padding that never overflows */
.container {
    padding: min(5%, 40px);
}
```

### max() — Use the Largest Value

```css
/* Width is at least 300px, or 50% if larger */
.sidebar {
    width: max(300px, 50%);
    /* Ensures sidebar is never smaller than 300px */
}

/* Minimum font size */
p {
    font-size: max(16px, 1.2vw); /* Never smaller than 16px */
}
```

### clamp() — Constrain Between min and max

`clamp(MIN, PREFERRED, MAX)` — keeps value between min and max.

```css
/* Font size: min 16px, preferred 4vw, max 32px */
h1 {
    font-size: clamp(1rem, 4vw, 2rem);
}

/* Fluid container width */
.container {
    width: clamp(320px, 90%, 1200px);
    /* Min: 320px, Preferred: 90% of parent, Max: 1200px */
    margin: 0 auto;
}

/* Fluid spacing */
.section {
    padding: clamp(1rem, 5vw, 4rem);
}

/* Fluid typography scale without media queries */
h1 { font-size: clamp(1.75rem, 3vw + 1rem, 3.5rem); }
h2 { font-size: clamp(1.5rem,  2.5vw + 1rem, 2.75rem); }
h3 { font-size: clamp(1.25rem, 2vw + 1rem,   2rem); }
p  { font-size: clamp(1rem,    1.5vw + 0.5rem, 1.25rem); }
```

### Replacing Media Queries

```css
/* Old way — needs media queries */
.card { width: 100%; }
@media (min-width: 600px)  { .card { width: 50%; } }
@media (min-width: 900px)  { .card { width: 33%; } }

/* New way — fluid with clamp + minmax */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(200px, 30%, 350px), 1fr));
    gap: 20px;
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## inherit, initial, and unset

### Definition
These are CSS **keyword values** that control how property values are resolved.

### inherit — Force Inheritance

Makes a property inherit from its **parent element**, even when it normally wouldn't.

```css
/* By default, border does NOT inherit */
div { border: 2px solid red; }
p { border: inherit; } /* Force p to inherit parent's border */

/* Common use: buttons and inputs reset to inherit fonts */
button, input, textarea {
    font-family: inherit; /* Inherits from body */
    font-size:   inherit;
    color:       inherit;
}
```

### initial — Reset to Browser Default

Resets a property to its **CSS specification default** (browser's original value, not user-agent stylesheet).

```css
/* Reset color to initial = black (spec default for color) */
.reset {
    color: initial;  /* black */
}

/* Reset display to initial = inline (spec default) */
.reset-display {
    display: initial; /* inline */
}

/* Reset width to initial = auto */
.reset-width {
    width: initial; /* auto */
}
```

### unset — Smart Reset (inherit or initial)

Behaves like `inherit` for **inheritable properties** (color, font, etc.) and like `initial` for **non-inheritable properties** (border, padding, display, etc.).

```css
.reset {
    color: unset;   /* Acts like inherit (color is inheritable) */
    border: unset;  /* Acts like initial (border is NOT inheritable) */
    padding: unset; /* Acts like initial → 0 */
}
```

### revert — Reset to Browser Stylesheet

Reverts to the **user-agent (browser) stylesheet** value — more useful than `initial` in practice.

```css
/* Undo your custom styles completely */
.article h2 {
    font-size: revert;   /* Goes back to browser's h2 default (usually ~1.5em) */
    font-weight: revert; /* Browser default = bold */
}
```

### Comparison Table

| Keyword | What it does | Best Use Case |
|---------|-------------|---------------|
| `inherit` | Copies from parent | Force non-inheritable props to inherit |
| `initial` | CSS spec default | Full property reset to spec value |
| `unset` | inherit or initial (smart) | Reset all properties cleanly |
| `revert` | Browser stylesheet default | Undo custom styles to browser defaults |

### All Property Reset

```css
/* Reset ALL properties on an element */
.full-reset {
    all: initial; /* Reset every property to spec default */
}

.smart-reset {
    all: unset;   /* Reset using inherit for inheritable, initial for rest */
}

/* Undo all custom styles, keep browser defaults */
.browser-default {
    all: revert;
}
```

### Practical Examples

```css
/* Form elements: inherit body styles */
input, button, textarea, select {
    font: inherit;       /* font is shorthand: font-family + font-size + etc */
    color: inherit;
}

/* Remove button default styles */
.clean-button {
    all: unset;
    cursor: pointer;
    /* Now add your own styles completely fresh */
    padding: 10px 20px;
    background: #3498db;
    color: white;
    border-radius: 6px;
}

/* Link that looks like its parent text */
.plain-link {
    color: inherit;
    text-decoration: none;
}

.plain-link:hover {
    text-decoration: underline;
}
```


[⬆️ Back to Top](#-table-of-contents)

---

## Quick Reference Summary

| Topic | Key Points |
|-------|------------|
| **Position** | `static` (default) → `relative` (own flow) → `absolute` (nearest positioned parent) → `fixed` (viewport) → `sticky` (both) |
| **Z-Index** | Only works on positioned elements; higher = in front; stacking contexts matter |
| **Box Model** | content + padding + border + margin; use `box-sizing: border-box` globally |
| **Media Queries** | `@media (min-width: 768px)` — mobile-first with `min-width` |
| **CSS Frameworks** | Bootstrap = components; Tailwind = utilities; choose based on project needs |
| **rem vs em** | `rem` = relative to root (consistent); `em` = relative to parent (compounds) |
| **CSS Variables** | `--name: value` in `:root`, use with `var(--name)`; great for theming |
| **currentColor** | Inherits the `color` property; keeps borders/SVGs/shadows in sync |
| **Reflow/Repaint** | Prefer `transform`/`opacity` for animations (GPU); avoid layout-triggering properties |
| **Tailwind vs CSS** | Tailwind = utility classes in HTML; Traditional = semantic classnames + CSS file |
| **min/max/clamp** | `clamp(min, preferred, max)` = fluid sizing without media queries |
| **inherit/initial/unset** | `inherit` = copy parent; `initial` = spec default; `unset` = smart combo |


[⬆️ Back to Top](#-table-of-contents)

---

*CSS Complete Guide — All 18 Topics Covered* ✅
