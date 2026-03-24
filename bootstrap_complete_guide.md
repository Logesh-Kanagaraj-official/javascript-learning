# Bootstrap Complete Interview Guide

**From Basics to Advanced**

> **Focus**: Complete Bootstrap interview preparation covering 50+ topics with examples and real-world patterns

[⬆️ Back to Top](#-table-of-contents)

---

## 📌 Table of Contents

### Part 1: Bootstrap Fundamentals

1. [What is Bootstrap?](#1-what-is-bootstrap)
2. [Bootstrap Features](#2-bootstrap-features)
3. [Bootstrap vs Plain CSS](#3-bootstrap-vs-plain-css)
4. [How to Include Bootstrap](#4-how-to-include-bootstrap)
5. [Bootstrap Grid System](#5-bootstrap-grid-system)
6. [Breakpoints](#6-breakpoints)
7. [Container](#7-container)
8. [Rows and Columns](#8-rows-and-columns)

### Part 2: Layout

9. [Flexbox Utilities](#9-flexbox-utilities)
10. [Display Utilities](#10-display-utilities)
11. [Spacing Utilities (m, p)](#11-spacing-utilities)
12. [Sizing Utilities](#12-sizing-utilities)
13. [Position Utilities](#13-position-utilities)

### Part 3: Components

14. [Navbar](#14-navbar)
15. [Card](#15-card)
16. [Modal](#16-modal)
17. [Carousel](#17-carousel)
18. [Accordion](#18-accordion)
19. [Buttons](#19-buttons)
20. [Forms](#20-forms)
21. [Badges & Alerts](#21-badges-and-alerts)
22. [Dropdowns](#22-dropdowns)
23. [Tabs & Pills](#23-tabs-and-pills)
24. [Tooltips & Popovers](#24-tooltips-and-popovers)
25. [Progress Bar](#25-progress-bar)
26. [Spinners](#26-spinners)
27. [Toast](#27-toast)
28. [Offcanvas](#28-offcanvas)
29. [List Group](#29-list-group)
30. [Table](#30-table)

### Part 4: Utilities & Typography

31. [Typography Utilities](#31-typography-utilities)
32. [Color Utilities](#32-color-utilities)
33. [Border Utilities](#33-border-utilities)
34. [Shadow Utilities](#34-shadow-utilities)
35. [Overflow Utilities](#35-overflow-utilities)
36. [Visibility Utilities](#36-visibility-utilities)

### Part 5: Customization

37. [Bootstrap Variables (SASS/SCSS)](#37-bootstrap-variables)
38. [Custom Themes](#38-custom-themes)
39. [Overriding Bootstrap CSS](#39-overriding-bootstrap-css)

### Part 6: JavaScript & Plugins

40. [Bootstrap JS (Vanilla vs jQuery)](#40-bootstrap-js)
41. [Data Attributes (data-bs-*)](#41-data-attributes)
42. [Bootstrap 5 vs Bootstrap 4](#42-bootstrap-5-vs-4)

### Part 7: Advanced Topics

43. [Responsive Design with Bootstrap](#43-responsive-design)
44. [Bootstrap with React](#44-bootstrap-with-react)
45. [Bootstrap with CSS Variables](#45-bootstrap-with-css-variables)
46. [RTL Support](#46-rtl-support)
47. [Accessibility in Bootstrap](#47-accessibility)
48. [Performance Optimization](#48-performance-optimization)
49. [Common Interview Questions](#49-common-interview-questions)
50. [Bootstrap Best Practices](#50-best-practices)

[⬆️ Back to Top](#-table-of-contents)

---

## Part 1: Bootstrap Fundamentals

### 1. What is Bootstrap?

**Definition:**
**Bootstrap** is a free, open-source **CSS framework** developed by Twitter (originally called "Twitter Blueprint") for building responsive, mobile-first websites quickly.

**Key Points:**
- **Component-based** — Pre-built UI components
- **Responsive** — Mobile-first grid system
- **Cross-browser** — Works consistently across browsers
- **Customizable** — Sass variables and mixins
- **JavaScript plugins** — Interactive components via Vanilla JS

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-center text-primary mt-4">Hello, Bootstrap!</h1>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 2. Bootstrap Features

**Core Features:**

1. **Grid System** — 12-column responsive layout
2. **Pre-built Components** — Navbar, Card, Modal, etc.
3. **Utility Classes** — Margin, padding, color, flex, etc.
4. **Sass Support** — Customizable via variables
5. **JavaScript Plugins** — Modals, dropdowns, carousels
6. **Accessibility** — ARIA attributes built-in
7. **RTL Support** — Right-to-left languages (Bootstrap 5+)
8. **CSS Variables** — Runtime theming (Bootstrap 5.2+)

[⬆️ Back to Top](#-table-of-contents)

---

### 3. Bootstrap vs Plain CSS

| Feature              | Bootstrap             | Plain CSS           |
|----------------------|-----------------------|---------------------|
| **Speed**            | Fast (pre-built)      | Slower (manual)     |
| **File Size**        | Larger bundle         | Smaller (custom)    |
| **Customization**    | Limited (opinionated) | Full control        |
| **Learning Curve**   | Low                   | Medium-High         |
| **Consistency**      | Cross-browser ready    | Manual effort       |
| **Unique Design**    | Hard without overrides| Fully custom        |

[⬆️ Back to Top](#-table-of-contents)

---

### 4. How to Include Bootstrap

**Method 1: CDN (Quickest)**

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JS Bundle (includes Popper) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

**Method 2: npm (Recommended for Projects)**

```bash
npm install bootstrap
```

```js
// In main.js / index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

**Method 3: Sass (Full Customization)**

```scss
// custom.scss
$primary: #6f42c1; // Override variable
@import "bootstrap";
```

[⬆️ Back to Top](#-table-of-contents)

---

### 5. Bootstrap Grid System

**Definition:**
Bootstrap's grid system is a **12-column, flexbox-based, responsive layout system**.

**How It Works:**
```
Container
  └── Row
        └── Col (col-{breakpoint}-{1-12})
```

**Example:**

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Column 1</div>
    <div class="col-md-4">Column 2</div>
    <div class="col-md-4">Column 3</div>
  </div>
</div>
```

**Column sizes add up to 12:**

```html
<!-- 8 + 4 = 12 -->
<div class="col-md-8">Main Content</div>
<div class="col-md-4">Sidebar</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 6. Breakpoints

**Bootstrap 5 Breakpoints:**

| Breakpoint | Class Infix | Min Width |
|------------|-------------|-----------|
| Extra small | *(none)*   | < 576px   |
| Small       | `sm`       | ≥ 576px   |
| Medium      | `md`       | ≥ 768px   |
| Large       | `lg`       | ≥ 992px   |
| Extra large | `xl`       | ≥ 1200px  |
| XXL         | `xxl`      | ≥ 1400px  |

**Example:**

```html
<!-- Full width on mobile, 6 cols on tablet, 4 cols on desktop -->
<div class="col-12 col-md-6 col-lg-4">Responsive Column</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 7. Container

**Types of Containers:**

```html
<!-- Fixed-width responsive container -->
<div class="container">...</div>

<!-- Full-width at all sizes -->
<div class="container-fluid">...</div>

<!-- Full-width until breakpoint, then fixed -->
<div class="container-sm">...</div>
<div class="container-md">...</div>
<div class="container-lg">...</div>
<div class="container-xl">...</div>
<div class="container-xxl">...</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 8. Rows and Columns

**Row Options:**

```html
<!-- Default row -->
<div class="row">...</div>

<!-- No gutters -->
<div class="row g-0">...</div>

<!-- Control gutters (0-5) -->
<div class="row g-3">...</div>

<!-- Auto columns -->
<div class="row row-cols-3">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
```

**Column Alignment:**

```html
<!-- Vertical alignment -->
<div class="row align-items-start">...</div>
<div class="row align-items-center">...</div>
<div class="row align-items-end">...</div>

<!-- Horizontal alignment -->
<div class="row justify-content-center">...</div>
<div class="row justify-content-between">...</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 2: Layout

### 9. Flexbox Utilities

**Common Flex Classes:**

```html
<div class="d-flex justify-content-between align-items-center">
  <span>Left</span>
  <span>Right</span>
</div>

<!-- Flex direction -->
<div class="d-flex flex-column">...</div>
<div class="d-flex flex-row">...</div>

<!-- Wrap -->
<div class="d-flex flex-wrap">...</div>

<!-- Grow / Shrink -->
<div class="flex-grow-1">Grows to fill</div>
<div class="flex-shrink-0">Won't shrink</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 10. Display Utilities

```html
<div class="d-none">Hidden always</div>
<div class="d-block">Block always</div>
<div class="d-md-none">Hidden on md+</div>
<div class="d-none d-md-block">Visible on md+</div>
<div class="d-flex">Flex container</div>
<div class="d-inline-flex">Inline flex</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 11. Spacing Utilities

**Format:** `{property}{sides}-{size}`

- **Property:** `m` (margin), `p` (padding)
- **Sides:** `t` top, `b` bottom, `s` start, `e` end, `x` horizontal, `y` vertical
- **Size:** `0` to `5`, `auto`

```html
<div class="mt-3">margin-top: 1rem</div>
<div class="px-4">padding-left + padding-right: 1.5rem</div>
<div class="my-auto">margin-top + margin-bottom: auto</div>
<div class="p-5">padding: 3rem all sides</div>
```

**Responsive Spacing:**

```html
<div class="mt-2 mt-md-5">Small margin on mobile, large on desktop</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 12. Sizing Utilities

```html
<!-- Width -->
<div class="w-25">25% width</div>
<div class="w-50">50% width</div>
<div class="w-75">75% width</div>
<div class="w-100">100% width</div>
<div class="w-auto">auto width</div>

<!-- Height -->
<div class="h-100">100% height</div>

<!-- Min/Max -->
<div class="min-vw-100">100vw min-width</div>
<div class="min-vh-100">100vh min-height</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 13. Position Utilities

```html
<div class="position-relative">Relative</div>
<div class="position-absolute top-0 start-0">Top Left</div>
<div class="position-fixed bottom-0 end-0">Fixed Bottom Right</div>
<div class="position-sticky top-0">Sticky Top</div>

<!-- Translate -->
<div class="position-absolute top-50 start-50 translate-middle">Centered</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 3: Components

### 14. Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

**Key Classes:**
- `navbar-expand-{breakpoint}` — When to expand
- `navbar-dark` / `navbar-light` — Text color scheme
- `bg-dark`, `bg-primary` — Background color

[⬆️ Back to Top](#-table-of-contents)

---

### 15. Card

```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

<!-- Horizontal Card -->
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card.</p>
      </div>
    </div>
  </div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 16. Modal

```html
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal content goes here.
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

**JS Control:**
```js
const modal = new bootstrap.Modal(document.getElementById('myModal'));
modal.show();
modal.hide();
```

[⬆️ Back to Top](#-table-of-contents)

---

### 17. Carousel

```html
<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="slide1.jpg" class="d-block w-100" alt="Slide 1">
    </div>
    <div class="carousel-item">
      <img src="slide2.jpg" class="d-block w-100" alt="Slide 2">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 18. Accordion

```html
<div class="accordion" id="myAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseOne">
        Item 1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show"
      data-bs-parent="#myAccordion">
      <div class="accordion-body">Content of item 1.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button"
        data-bs-toggle="collapse" data-bs-target="#collapseTwo">
        Item 2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse"
      data-bs-parent="#myAccordion">
      <div class="accordion-body">Content of item 2.</div>
    </div>
  </div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 19. Buttons

```html
<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>

<!-- Outline variants -->
<button class="btn btn-outline-primary">Outline</button>

<!-- Sizes -->
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary btn-sm">Small</button>

<!-- Full width -->
<button class="btn btn-primary w-100">Full Width</button>

<!-- Disabled -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Loading state -->
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm me-1"></span>
  Loading...
</button>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 20. Forms

```html
<form>
  <!-- Text Input -->
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
    <div class="form-text">We'll never share your email.</div>
  </div>

  <!-- Select -->
  <div class="mb-3">
    <label for="country" class="form-label">Country</label>
    <select class="form-select" id="country">
      <option selected>Choose...</option>
      <option>India</option>
      <option>USA</option>
    </select>
  </div>

  <!-- Checkbox -->
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="agree">
    <label class="form-check-label" for="agree">I agree</label>
  </div>

  <!-- Validation States -->
  <input type="text" class="form-control is-valid">
  <div class="valid-feedback">Looks good!</div>
  <input type="text" class="form-control is-invalid">
  <div class="invalid-feedback">Please provide a valid value.</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<!-- Inline/Horizontal Form -->
<form class="row g-3 align-items-center">
  <div class="col-auto">
    <input type="text" class="form-control" placeholder="Name">
  </div>
  <div class="col-auto">
    <button class="btn btn-primary">Submit</button>
  </div>
</form>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 21. Badges and Alerts

**Badges:**
```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Pill Badge</span>

<!-- Badge on button -->
<button class="btn btn-primary">
  Notifications <span class="badge bg-light text-dark">4</span>
</button>
```

**Alerts:**
```html
<div class="alert alert-success" role="alert">✅ Operation successful!</div>
<div class="alert alert-danger" role="alert">❌ Something went wrong.</div>

<!-- Dismissible Alert -->
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  ⚠️ Warning! Check your input.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 22. Dropdowns

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Options
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 23. Tabs and Pills

```html
<!-- Tabs -->
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
</ul>
<div class="tab-content mt-3">
  <div class="tab-pane fade show active" id="home">Home content</div>
  <div class="tab-pane fade" id="profile">Profile content</div>
</div>

<!-- Pills -->
<ul class="nav nav-pills">
  <li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Link</a></li>
</ul>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 24. Tooltips and Popovers

**Tooltip:**
```html
<!-- Must be initialized via JS -->
<button class="btn btn-info" data-bs-toggle="tooltip" title="I'm a tooltip!">Hover me</button>

<script>
  // Initialize all tooltips
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipEls.forEach(el => new bootstrap.Tooltip(el));
</script>
```

**Popover:**
```html
<button class="btn btn-warning" data-bs-toggle="popover"
  data-bs-title="Popover Title" data-bs-content="Popover content here.">
  Click me
</button>

<script>
  const popoverEls = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverEls.forEach(el => new bootstrap.Popover(el));
</script>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 25. Progress Bar

```html
<!-- Basic -->
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%">75%</div>
</div>

<!-- Striped & Animated -->
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"
    style="width: 60%">
  </div>
</div>

<!-- Multiple bars -->
<div class="progress">
  <div class="progress-bar bg-success" style="width: 40%"></div>
  <div class="progress-bar bg-warning" style="width: 30%"></div>
  <div class="progress-bar bg-danger" style="width: 20%"></div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 26. Spinners

```html
<!-- Border spinner -->
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Growing spinner -->
<div class="spinner-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- Sizes -->
<div class="spinner-border spinner-border-sm"></div>

<!-- In button -->
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm me-1"></span>
  Loading...
</button>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 27. Toast

```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="myToast" class="toast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Bootstrap</strong>
      <small>Just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Hello! This is a toast notification.
    </div>
  </div>
</div>

<script>
  const toast = new bootstrap.Toast(document.getElementById('myToast'));
  toast.show();
</script>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 28. Offcanvas

```html
<!-- Trigger -->
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
  Open Sidebar
</button>

<!-- Offcanvas -->
<div class="offcanvas offcanvas-start" id="sidebar" tabindex="-1">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Sidebar</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    <p>Sidebar content goes here.</p>
  </div>
</div>
```

**Positions:** `offcanvas-start`, `offcanvas-end`, `offcanvas-top`, `offcanvas-bottom`

[⬆️ Back to Top](#-table-of-contents)

---

### 29. List Group

```html
<!-- Basic -->
<ul class="list-group">
  <li class="list-group-item active">Active Item</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item list-group-item-success">Success Item</li>
  <li class="list-group-item disabled">Disabled Item</li>
</ul>

<!-- With badges -->
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Messages
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ul>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 30. Table

```html
<table class="table table-striped table-hover table-bordered">
  <thead class="table-dark">
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John</td>
      <td>john@example.com</td>
    </tr>
    <tr class="table-warning">
      <td>2</td>
      <td>Jane</td>
      <td>jane@example.com</td>
    </tr>
  </tbody>
</table>

<!-- Responsive table -->
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 4: Utilities & Typography

### 31. Typography Utilities

```html
<!-- Text alignment -->
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>

<!-- Text transform -->
<p class="text-uppercase">uppercase text</p>
<p class="text-lowercase">LOWERCASE TEXT</p>
<p class="text-capitalize">capitalize each word</p>

<!-- Font weight -->
<p class="fw-bold">Bold</p>
<p class="fw-light">Light</p>
<p class="fw-semibold">Semibold</p>

<!-- Font style -->
<p class="fst-italic">Italic</p>
<p class="fst-normal">Normal</p>

<!-- Text decoration -->
<p class="text-decoration-underline">Underline</p>
<p class="text-decoration-line-through">Line-through</p>

<!-- Font size -->
<p class="fs-1">Heading 1 size</p>
<p class="fs-3">Heading 3 size</p>
<p class="fs-6">Smallest</p>

<!-- Display headings -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-4">Display 4</h1>

<!-- Lead text -->
<p class="lead">Larger, standout paragraph text.</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 32. Color Utilities

```html
<!-- Text colors -->
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-muted">Muted</p>
<p class="text-white bg-dark">White</p>

<!-- Background colors -->
<div class="bg-primary text-white p-3">Primary BG</div>
<div class="bg-light p-3">Light BG</div>
<div class="bg-transparent p-3">Transparent BG</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 33. Border Utilities

```html
<!-- Add borders -->
<div class="border">All borders</div>
<div class="border-top">Top border only</div>
<div class="border-end">Right border only</div>
<div class="border-bottom">Bottom border only</div>

<!-- Remove borders -->
<div class="border border-0">No border</div>

<!-- Border color -->
<div class="border border-primary">Primary border</div>
<div class="border border-danger">Danger border</div>

<!-- Border radius -->
<div class="rounded">Rounded</div>
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill shape</div>
<div class="rounded-0">No rounding</div>

<!-- Border width -->
<div class="border border-1">1px</div>
<div class="border border-3">3px</div>
<div class="border border-5">5px</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 34. Shadow Utilities

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-lg">Large shadow</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 35. Overflow Utilities

```html
<div class="overflow-auto" style="height: 100px;">Auto scroll</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-scroll">Always scroll</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 36. Visibility Utilities

```html
<!-- Invisible (keeps space) -->
<div class="invisible">Hidden but takes space</div>

<!-- Visible -->
<div class="visible">Visible</div>

<!-- Screen-reader only (accessible hide) -->
<span class="visually-hidden">For screen readers only</span>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 5: Customization

### 37. Bootstrap Variables

**Override in Sass before importing Bootstrap:**

```scss
// _custom.scss
$primary:       #6f42c1;   // Purple
$secondary:     #6c757d;
$font-family-base: 'Inter', sans-serif;
$border-radius: 0.5rem;
$grid-gutter-width: 2rem;

// Then import Bootstrap
@import "~bootstrap/scss/bootstrap";
```

**Common Variables:**

| Variable | Default | Purpose |
|----------|---------|---------|
| `$primary` | `#0d6efd` | Primary color |
| `$font-size-base` | `1rem` | Base font size |
| `$border-radius` | `0.375rem` | Border radius |
| `$grid-columns` | `12` | Column count |
| `$spacer` | `1rem` | Spacing unit |

[⬆️ Back to Top](#-table-of-contents)

---

### 38. Custom Themes

```scss
// 1. Import Bootstrap functions first
@import "~bootstrap/scss/functions";

// 2. Override variables
$primary: #e83e8c;  // Pink theme
$enable-rounded: true;
$enable-shadows: true;

// 3. Import the rest
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/grid";
// ... import only what you need
```

[⬆️ Back to Top](#-table-of-contents)

---

### 39. Overriding Bootstrap CSS

**Method 1: Higher Specificity**

```css
/* In your custom.css (loaded AFTER bootstrap.css) */
.btn-primary {
  background-color: #6f42c1 !important;
  border-color: #6f42c1 !important;
}
```

**Method 2: CSS Variables (Bootstrap 5.2+)**

```css
:root {
  --bs-primary: #6f42c1;
  --bs-primary-rgb: 111, 66, 193;
}
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 6: JavaScript & Plugins

### 40. Bootstrap JS

Bootstrap 5 uses **Vanilla JS** (no jQuery required).

**Initialize Components:**

```js
// Modal
const modal = new bootstrap.Modal('#myModal', { backdrop: 'static' });
modal.show();
modal.hide();
modal.toggle();

// Tooltip
const tooltip = new bootstrap.Tooltip('#myTooltip');

// Dropdown
const dropdown = new bootstrap.Dropdown('#myDropdown');

// Collapse
const collapse = new bootstrap.Collapse('#myCollapse', { toggle: false });
collapse.show();
collapse.hide();
```

**Events:**

```js
const myModalEl = document.getElementById('myModal');
myModalEl.addEventListener('show.bs.modal', () => {
  console.log('Modal is about to show');
});
myModalEl.addEventListener('hidden.bs.modal', () => {
  console.log('Modal hidden');
});
```

[⬆️ Back to Top](#-table-of-contents)

---

### 41. Data Attributes

Bootstrap 5 uses `data-bs-*` attributes (Bootstrap 4 used `data-*`).

```html
<!-- Toggle modal -->
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>

<!-- Toggle collapse -->
<button data-bs-toggle="collapse" data-bs-target="#section">Toggle</button>

<!-- Dismiss -->
<button data-bs-dismiss="modal">Close</button>
<button data-bs-dismiss="alert">Close Alert</button>

<!-- Carousel -->
<button data-bs-slide="prev">Prev</button>
<button data-bs-slide="next">Next</button>
<button data-bs-slide-to="0">Go to 1st</button>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 42. Bootstrap 5 vs Bootstrap 4

| Feature             | Bootstrap 4          | Bootstrap 5            |
|---------------------|----------------------|------------------------|
| **jQuery**          | Required             | ❌ Removed              |
| **Grid**            | Flexbox              | Flexbox + CSS Grid      |
| **XXL breakpoint**  | ❌ No                | ✅ Yes (≥ 1400px)       |
| **Gutter classes**  | m-/p-                | `g-`, `gx-`, `gy-`     |
| **RTL Support**     | ❌ No                | ✅ Yes                  |
| **Data attributes** | `data-*`             | `data-bs-*`             |
| **Offcanvas**        | ❌ No               | ✅ Yes                  |
| **CSS Variables**   | ❌ No                | ✅ Yes                  |
| **Start/End**       | left/right           | start/end (LTR/RTL)    |

[⬆️ Back to Top](#-table-of-contents)

---

## Part 7: Advanced Topics

### 43. Responsive Design

**Mobile-first — design for small screens first:**

```html
<!-- Stacked on mobile, side by side on md+ -->
<div class="row">
  <div class="col-12 col-md-8">Main Content</div>
  <div class="col-12 col-md-4">Sidebar</div>
</div>

<!-- Hide on mobile, show on desktop -->
<div class="d-none d-md-block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="d-md-none">Mobile only</div>

<!-- Responsive text alignment -->
<p class="text-center text-md-start">Centered mobile, left on desktop</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 44. Bootstrap with React

**Option 1: React-Bootstrap (Component Library)**

```bash
npm install react-bootstrap bootstrap
```

```jsx
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <Button variant="primary" onClick={() => setShow(true)}>
        Open Modal
      </Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal content here.</Modal.Body>
      </Modal>
    </Container>
  );
}
```

**Option 2: Bootstrap CSS Only (Utility Classes)**

```jsx
function App() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <button className="btn btn-primary">Click</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 45. Bootstrap with CSS Variables

**Bootstrap 5.2+ exposes CSS custom properties:**

```css
:root {
  --bs-primary:     #0d6efd;
  --bs-secondary:   #6c757d;
  --bs-success:     #198754;
  --bs-body-font-family: 'Inter', sans-serif;
  --bs-body-bg:     #fff;
  --bs-border-radius: 0.375rem;
}

/* Override at runtime */
document.documentElement.style.setProperty('--bs-primary', '#6f42c1');
```

[⬆️ Back to Top](#-table-of-contents)

---

### 46. RTL Support

Bootstrap 5 provides RTL (Right-to-Left) support for Arabic, Hebrew, etc.

```html
<html lang="ar" dir="rtl">
<head>
  <!-- RTL CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css" rel="stylesheet">
</head>
<body>
  <p class="text-start">This is right side in RTL</p>
  <p class="ms-3">This adds margin to the right in RTL</p>
</body>
</html>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 47. Accessibility

Bootstrap includes ARIA attributes and semantic HTML for accessibility.

```html
<!-- Modal - includes aria-labelledby, role="dialog" -->
<div class="modal" role="dialog" aria-labelledby="modalTitle" aria-modal="true">

<!-- Navbar - aria-expanded for toggle -->
<button class="navbar-toggler" aria-expanded="false" aria-controls="navMenu">

<!-- Visually hidden (for screen readers) -->
<span class="visually-hidden">Loading...</span>

<!-- Skip link (best practice) -->
<a class="visually-hidden-focusable" href="#main">Skip to main content</a>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 48. Performance Optimization

1. **Import only needed components:**
```js
// Instead of full bundle
import 'bootstrap/dist/css/bootstrap.min.css';

// Sass — import only what you need
@import "functions";
@import "variables";
@import "mixins";
@import "grid";
@import "buttons";
```

2. **Purge unused CSS with PurgeCSS:**
```js
// postcss.config.js
module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.html', './src/**/*.jsx'],
    }
  }
};
```

3. **Use `bootstrap.bundle.min.js`** (includes Popper.js)
4. **Use CDN** for caching across sites

[⬆️ Back to Top](#-table-of-contents)

---

### 49. Common Interview Questions

**Q1: What is the Bootstrap grid system?**
A 12-column responsive layout using flexbox. Columns are placed inside rows, inside containers. Uses breakpoints (sm, md, lg, xl, xxl) to control layout at different screen sizes.

**Q2: What's the difference between `container` and `container-fluid`?**
- `container`: Fixed max-width at each breakpoint
- `container-fluid`: Always 100% width

**Q3: How do you customize Bootstrap?**
- Override Sass variables before importing Bootstrap
- Use `data-bs-*` or CSS custom properties (Bootstrap 5.2+)
- Write custom CSS after Bootstrap's stylesheet

**Q4: Does Bootstrap 5 require jQuery?**
No. Bootstrap 5 removed the jQuery dependency entirely. It uses pure Vanilla JavaScript.

**Q5: What are utility classes in Bootstrap?**
Single-purpose classes that apply one CSS rule, e.g., `mt-3` (margin-top), `text-center`, `d-flex`. They follow a consistent naming pattern.

**Q6: What is `data-bs-toggle` used for?**
It instructs Bootstrap's JS which behavior to activate — `modal`, `collapse`, `dropdown`, `tooltip`, `popover`, `tab`.

**Q7: How to make Bootstrap responsive images?**
```html
<img src="photo.jpg" class="img-fluid" alt="...">
```

**Q8: What is the difference between `d-none` and `invisible`?**
- `d-none`: Removes element from layout (display: none)
- `invisible`: Hides visually but keeps space (visibility: hidden)

[⬆️ Back to Top](#-table-of-contents)

---

### 50. Bootstrap Best Practices

1. **Mobile-first** — Design for `xs` first, then override for larger screens
2. **Use utility classes** — Avoid writing custom CSS for spacing, flex, etc.
3. **Semantic HTML** — Use proper elements (`<nav>`, `<header>`, `<main>`)
4. **Avoid `!important` overrides** — Use Sass variables or higher specificity
5. **Load custom CSS after Bootstrap** — So overrides work correctly
6. **Use `visually-hidden`** for screen-reader-only content
7. **Initialize JS components** via data attributes or JS API — not both
8. **Prefer `react-bootstrap`** over mixing Bootstrap JS in React apps
9. **Tree-shake unused Bootstrap** with Sass imports or PurgeCSS
10. **Use `g-{n}` gutters** instead of manual padding for rows

[⬆️ Back to Top](#-table-of-contents)

---

*Happy Learning Bootstrap! 🚀*
