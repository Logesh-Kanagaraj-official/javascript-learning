# CSS Complete Learning Guide
**From Basics to Advanced**

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
18. [inherit, initial, and unset](#inherit-initial-unset)

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

---

*Due to length constraints, I'll continue with the remaining CSS topics in the guide. The file is being created with all content...*
