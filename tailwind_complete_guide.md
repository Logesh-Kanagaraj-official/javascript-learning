# Tailwind CSS Complete Interview Guide

**From Basics to Advanced**

> **Focus**: Complete Tailwind CSS interview preparation covering 50+ topics with examples and real-world patterns

[⬆️ Back to Top](#-table-of-contents)

---

## 📌 Table of Contents

### Part 1: Tailwind Fundamentals

1. [What is Tailwind CSS?](#1-what-is-tailwind-css)
2. [Tailwind vs Bootstrap vs Plain CSS](#2-tailwind-vs-bootstrap-vs-plain-css)
3. [How Tailwind Works](#3-how-tailwind-works)
4. [Installation & Setup](#4-installation-and-setup)
5. [Utility-First Philosophy](#5-utility-first-philosophy)
6. [Responsive Design](#6-responsive-design)
7. [Dark Mode](#7-dark-mode)
8. [Hover, Focus & State Variants](#8-hover-focus-and-state-variants)

### Part 2: Layout

9. [Container](#9-container)
10. [Flexbox Utilities](#10-flexbox-utilities)
11. [Grid Utilities](#11-grid-utilities)
12. [Spacing (Margin & Padding)](#12-spacing)
13. [Sizing (Width & Height)](#13-sizing)
14. [Position Utilities](#14-position-utilities)
15. [Z-Index](#15-z-index)
16. [Overflow](#16-overflow)
17. [Display Utilities](#17-display-utilities)

### Part 3: Typography

18. [Font Family](#18-font-family)
19. [Font Size](#19-font-size)
20. [Font Weight](#20-font-weight)
21. [Text Color](#21-text-color)
22. [Text Alignment & Decoration](#22-text-alignment-and-decoration)
23. [Line Height & Letter Spacing](#23-line-height-and-letter-spacing)

### Part 4: Colors & Backgrounds

24. [Color Palette](#24-color-palette)
25. [Background Color](#25-background-color)
26. [Background Image & Gradient](#26-background-image-and-gradient)
27. [Opacity](#27-opacity)

### Part 5: Borders & Effects

28. [Border Utilities](#28-border-utilities)
29. [Border Radius](#29-border-radius)
30. [Box Shadow](#30-box-shadow)
31. [Ring (Focus Ring)](#31-ring)
32. [Outline](#32-outline)

### Part 6: Transitions & Animations

33. [Transitions](#33-transitions)
34. [Transforms](#34-transforms)
35. [Animations](#35-animations)

### Part 7: Customization

36. [tailwind.config.js](#36-tailwind-config)
37. [Extending the Theme](#37-extending-the-theme)
38. [Custom Colors & Fonts](#38-custom-colors-and-fonts)
39. [Custom Screens (Breakpoints)](#39-custom-screens)
40. [Arbitrary Values](#40-arbitrary-values)
41. [CSS Variables with Tailwind](#41-css-variables-with-tailwind)

### Part 8: Directives & Functions

42. [@apply Directive](#42-apply-directive)
43. [@layer Directive](#43-layer-directive)
44. [@theme Directive (v4)](#44-theme-directive)
45. [theme() Function](#45-theme-function)

### Part 9: Advanced Topics

46. [JIT (Just-in-Time) Mode](#46-jit-mode)
47. [PurgeCSS / Content Paths](#47-purgecss-and-content-paths)
48. [Tailwind Plugins](#48-tailwind-plugins)
49. [Tailwind with React](#49-tailwind-with-react)
50. [Tailwind v3 vs v4](#50-tailwind-v3-vs-v4)
51. [Common Interview Questions](#51-common-interview-questions)
52. [Tailwind Best Practices](#52-tailwind-best-practices)

[⬆️ Back to Top](#-table-of-contents)

---

## Part 1: Tailwind Fundamentals

### 1. What is Tailwind CSS?

**Definition:**
**Tailwind CSS** is a **utility-first CSS framework** that provides low-level utility classes to build custom designs directly in your HTML, without writing custom CSS.

**Key Points:**
- **Utility-first** — Compose UIs with single-purpose classes
- **No opinionated design** — Build any look without fighting the framework
- **JIT compiler** — Generates only the CSS you use (tiny bundle)
- **Highly customizable** — `tailwind.config.js` controls everything
- **No pre-built components** — Total design freedom

**Example:**

```html
<!-- Without Tailwind (custom CSS needed) -->
<button class="btn-primary">Click</button>

<!-- With Tailwind (styles inline via utilities) -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition">
  Click
</button>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 2. Tailwind vs Bootstrap vs Plain CSS

| Feature             | Tailwind CSS          | Bootstrap             | Plain CSS          |
|---------------------|-----------------------|-----------------------|--------------------|
| **Approach**        | Utility-first         | Component-based       | Manual             |
| **Bundle Size**     | Tiny (JIT purge)      | Larger                | Custom             |
| **Customization**   | Extremely flexible    | Limited (Sass vars)   | Full control       |
| **Design Freedom**  | Full — no UI opinions | Opinionated look      | Full               |
| **Pre-built UI**    | ❌ No                 | ✅ Yes                | ❌ No              |
| **Learning Curve**  | Medium                | Low                   | High               |
| **HTML verbosity**  | High (many classes)   | Medium                | Low                |

[⬆️ Back to Top](#-table-of-contents)

---

### 3. How Tailwind Works

**Build Process:**

```
1. Write HTML with utility classes
   ↓
2. Tailwind scans content files for class names
   ↓
3. JIT engine generates only the used CSS
   ↓
4. PostCSS processes the output
   ↓
5. Tiny, optimized CSS file is produced
```

**No JavaScript runtime** — Pure CSS output. Works with any framework.

[⬆️ Back to Top](#-table-of-contents)

---

### 4. Installation and Setup

**Method 1: npm (Recommended)**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p   # Creates tailwind.config.js & postcss.config.js
```

**Configure content paths in `tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Add directives to your main CSS file:**

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Method 2: CDN (Quick Prototype — no purge)**

```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Method 3: Vite + React Setup**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

[⬆️ Back to Top](#-table-of-contents)

---

### 5. Utility-First Philosophy

Every class does ONE thing:

```html
<!-- Compose a card with utilities -->
<div class="bg-white rounded-xl shadow-md p-6 max-w-sm mx-auto">
  <img class="w-full rounded-lg mb-4" src="photo.jpg" alt="Photo">
  <h2 class="text-xl font-bold text-gray-800">Card Title</h2>
  <p class="text-gray-500 mt-2 text-sm">Card description goes here.</p>
  <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
    Read More
  </button>
</div>
```

**Benefits:**
- No naming things (no BEM, no class naming decisions)
- Changes are local — no cascading surprises
- Design system constraints built-in (spacing scale, color palette)

[⬆️ Back to Top](#-table-of-contents)

---

### 6. Responsive Design

**Mobile-first by default.** Breakpoint prefixes apply at the given size and UP.

| Prefix | Min Width |
|--------|-----------|
| *(none)* | 0px (all sizes) |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

**Examples:**

```html
<!-- Full width on mobile, half on md, one-third on lg -->
<div class="w-full md:w-1/2 lg:w-1/3">Responsive Box</div>

<!-- Text size changes by breakpoint -->
<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">Responsive Title</h1>

<!-- Flex direction changes -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Hidden/shown by breakpoint -->
<div class="block md:hidden">Mobile only</div>
<div class="hidden md:block">Desktop only</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 7. Dark Mode

**Configure in `tailwind.config.js`:**

```js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

- **`'media'`** — Uses `prefers-color-scheme` system preference
- **`'class'`** — Adds `dark` class to `<html>` (manual control)

**Usage:**

```html
<!-- Light: white bg, Dark: gray-900 bg -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
  <h1 class="text-2xl font-bold">Dark Mode Aware</h1>
  <p class="text-gray-600 dark:text-gray-400">Subtle text color</p>
  <button class="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded">
    Action
  </button>
</div>
```

**Toggle Dark Mode (class strategy):**

```js
// Toggle dark class on html element
document.documentElement.classList.toggle('dark');
```

[⬆️ Back to Top](#-table-of-contents)

---

### 8. Hover, Focus and State Variants

```html
<!-- Hover -->
<button class="bg-blue-600 hover:bg-blue-700 transition">Hover me</button>

<!-- Focus -->
<input class="border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2">

<!-- Active -->
<button class="bg-blue-600 active:bg-blue-800">Active</button>

<!-- Disabled -->
<button class="bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>Disabled</button>

<!-- Group hover (parent hover affects child) -->
<div class="group flex items-center gap-2 cursor-pointer">
  <span class="text-gray-600 group-hover:text-blue-600 transition">Label</span>
  <svg class="opacity-0 group-hover:opacity-100 transition">...</svg>
</div>

<!-- Peer (sibling state) -->
<input type="checkbox" class="peer hidden" id="toggle">
<label for="toggle" class="cursor-pointer">Toggle</label>
<div class="hidden peer-checked:block">Revealed content</div>

<!-- First/Last child -->
<li class="py-2 border-b last:border-0">Item</li>

<!-- Odd/Even rows -->
<tr class="bg-white even:bg-gray-50">...</tr>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 2: Layout

### 9. Container

```html
<!-- Responsive centered container -->
<div class="container mx-auto px-4">
  Content
</div>
```

**Default container max-widths:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Customize in config:**

```js
theme: {
  container: {
    center: true,
    padding: '1rem',
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 10. Flexbox Utilities

```html
<!-- Basic flex -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Justify content -->
<div class="flex justify-start">...</div>
<div class="flex justify-center">...</div>
<div class="flex justify-between">...</div>
<div class="flex justify-around">...</div>
<div class="flex justify-evenly">...</div>

<!-- Align items -->
<div class="flex items-start">...</div>
<div class="flex items-center">...</div>
<div class="flex items-end">...</div>
<div class="flex items-stretch">...</div>

<!-- Direction -->
<div class="flex flex-row">Horizontal</div>
<div class="flex flex-col">Vertical</div>
<div class="flex flex-row-reverse">Reverse Horizontal</div>

<!-- Wrap -->
<div class="flex flex-wrap gap-2">...</div>
<div class="flex flex-nowrap">...</div>

<!-- Grow / Shrink -->
<div class="flex-1">Grows to fill</div>   <!-- flex: 1 1 0% -->
<div class="flex-auto">Auto grow</div>    <!-- flex: 1 1 auto -->
<div class="flex-none">Won't flex</div>   <!-- flex: none -->

<!-- Align self -->
<div class="self-center">Centered item</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 11. Grid Utilities

```html
<!-- Grid with columns -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <div class="bg-white rounded p-4">Card</div>
</div>

<!-- Column span -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8">Main (8)</div>
  <div class="col-span-4">Sidebar (4)</div>
</div>

<!-- Row span -->
<div class="grid grid-cols-3 grid-rows-3 gap-4">
  <div class="row-span-2">Tall item</div>
  <div>Normal</div>
</div>

<!-- Auto-fit with min size -->
<div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))">
  <div>Card</div>
</div>
<!-- Or with arbitrary value -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
  <div>Card</div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 12. Spacing

**Tailwind Spacing Scale:** `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96`

`1 unit = 0.25rem = 4px`

```html
<!-- Margin -->
<div class="m-4">all sides 1rem</div>
<div class="mx-4">horizontal 1rem</div>
<div class="my-4">vertical 1rem</div>
<div class="mt-4">top 1rem</div>
<div class="mb-8">bottom 2rem</div>
<div class="ms-4">margin-inline-start (LTR: left)</div>
<div class="mx-auto">center horizontally</div>
<div class="-mt-4">negative margin top</div>

<!-- Padding -->
<div class="p-4">all sides 1rem</div>
<div class="px-6">horizontal 1.5rem</div>
<div class="py-2">vertical 0.5rem</div>
<div class="pt-2 pb-4">top 0.5rem, bottom 1rem</div>

<!-- Gap (for flex/grid) -->
<div class="flex gap-4">...</div>
<div class="grid gap-x-4 gap-y-6">...</div>
<div class="grid gap-4">...</div>

<!-- Space between children -->
<div class="flex space-x-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 13. Sizing

```html
<!-- Width -->
<div class="w-0">0</div>
<div class="w-4">1rem</div>
<div class="w-1/2">50%</div>
<div class="w-1/3">33.33%</div>
<div class="w-full">100%</div>
<div class="w-screen">100vw</div>
<div class="w-auto">auto</div>
<div class="w-fit">fit-content</div>
<div class="w-min">min-content</div>
<div class="w-max">max-content</div>

<!-- Max/Min Width -->
<div class="max-w-sm">max 24rem</div>
<div class="max-w-md">max 28rem</div>
<div class="max-w-lg">max 32rem</div>
<div class="max-w-xl">max 36rem</div>
<div class="max-w-2xl">max 42rem</div>
<div class="max-w-screen-md">max 768px</div>
<div class="min-w-0">min-width 0</div>

<!-- Height -->
<div class="h-4">1rem</div>
<div class="h-full">100%</div>
<div class="h-screen">100vh</div>
<div class="h-dvh">100dvh (dynamic viewport height)</div>
<div class="min-h-screen">min 100vh</div>
<div class="max-h-64">max 16rem</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 14. Position Utilities

```html
<div class="relative">
  Relative parent

  <div class="absolute top-0 right-0">Top right corner</div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Centered</div>
</div>

<div class="fixed bottom-4 right-4">Fixed FAB button</div>
<div class="sticky top-0">Sticky header</div>

<!-- Inset shorthand -->
<div class="absolute inset-0">Fills parent</div>
<div class="absolute inset-x-0 bottom-0">Bottom bar</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 15. Z-Index

```html
<div class="z-0">Behind</div>
<div class="z-10">Slightly above</div>
<div class="z-20">Above that</div>
<div class="z-50">High</div>
<div class="z-auto">Auto</div>

<!-- Arbitrary -->
<div class="z-[100]">Custom z-index</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 16. Overflow

```html
<div class="overflow-auto">Scroll when needed</div>
<div class="overflow-hidden">Clip content</div>
<div class="overflow-scroll">Always scroll</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-x-auto overflow-y-hidden">Horizontal scroll only</div>

<!-- Truncate text -->
<p class="truncate">This is a very long text that will be truncated...</p>
<p class="overflow-hidden text-ellipsis whitespace-nowrap">Truncated</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 17. Display Utilities

```html
<div class="block">Block element</div>
<div class="inline-block">Inline block</div>
<span class="inline">Inline</span>
<div class="hidden">Hidden (display: none)</div>
<div class="flex">Flex container</div>
<div class="inline-flex">Inline flex</div>
<div class="grid">Grid container</div>
<div class="inline-grid">Inline grid</div>
<div class="contents">Contents (remove wrapper box)</div>

<!-- Responsive display -->
<div class="block md:flex">Block on mobile, flex on md+</div>
<div class="hidden lg:block">Visible only lg+</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 3: Typography

### 18. Font Family

```html
<p class="font-sans">Sans-serif (default UI font)</p>
<p class="font-serif">Serif font</p>
<p class="font-mono">Monospace font</p>
```

**Custom font in config:**

```js
theme: {
  extend: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    }
  }
}
```

```html
<h1 class="font-heading">Custom Font</h1>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 19. Font Size

```html
<p class="text-xs">12px</p>
<p class="text-sm">14px</p>
<p class="text-base">16px (default)</p>
<p class="text-lg">18px</p>
<p class="text-xl">20px</p>
<p class="text-2xl">24px</p>
<p class="text-3xl">30px</p>
<p class="text-4xl">36px</p>
<p class="text-5xl">48px</p>
<p class="text-6xl">60px</p>
<p class="text-8xl">96px</p>
<p class="text-9xl">128px</p>

<!-- Arbitrary -->
<p class="text-[17px]">Exactly 17px</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 20. Font Weight

```html
<p class="font-thin">100</p>
<p class="font-extralight">200</p>
<p class="font-light">300</p>
<p class="font-normal">400</p>
<p class="font-medium">500</p>
<p class="font-semibold">600</p>
<p class="font-bold">700</p>
<p class="font-extrabold">800</p>
<p class="font-black">900</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 21. Text Color

```html
<p class="text-gray-900">Dark gray</p>
<p class="text-gray-500">Medium gray</p>
<p class="text-blue-600">Blue</p>
<p class="text-red-500">Red</p>
<p class="text-green-500">Green</p>
<p class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Text
</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 22. Text Alignment and Decoration

```html
<!-- Alignment -->
<p class="text-left">Left</p>
<p class="text-center">Center</p>
<p class="text-right">Right</p>
<p class="text-justify">Justified</p>

<!-- Transform -->
<p class="uppercase">UPPERCASE</p>
<p class="lowercase">lowercase</p>
<p class="capitalize">Capitalize Each Word</p>
<p class="normal-case">Normal case</p>

<!-- Decoration -->
<p class="underline">Underline</p>
<p class="line-through">Strikethrough</p>
<p class="no-underline">No underline</p>

<!-- Whitespace & Word break -->
<p class="whitespace-nowrap">No wrap</p>
<p class="whitespace-pre">Preserve whitespace</p>
<p class="break-words">Break long words</p>
<p class="break-all">Break at any character</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 23. Line Height and Letter Spacing

```html
<!-- Line height -->
<p class="leading-none">1</p>
<p class="leading-tight">1.25</p>
<p class="leading-snug">1.375</p>
<p class="leading-normal">1.5</p>
<p class="leading-relaxed">1.625</p>
<p class="leading-loose">2</p>

<!-- Letter spacing -->
<p class="tracking-tighter">Very tight</p>
<p class="tracking-tight">Tight</p>
<p class="tracking-normal">Normal</p>
<p class="tracking-wide">Wide</p>
<p class="tracking-wider">Wider</p>
<p class="tracking-widest">Widest</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 4: Colors & Backgrounds

### 24. Color Palette

Tailwind's full color palette uses `{name}-{shade}` format:

| Color    | Shades         |
|----------|----------------|
| slate    | 50–950         |
| gray     | 50–950         |
| red      | 50–950         |
| orange   | 50–950         |
| amber    | 50–950         |
| yellow   | 50–950         |
| lime     | 50–950         |
| green    | 50–950         |
| teal     | 50–950         |
| cyan     | 50–950         |
| blue     | 50–950         |
| indigo   | 50–950         |
| violet   | 50–950         |
| purple   | 50–950         |
| fuchsia  | 50–950         |
| pink     | 50–950         |
| rose     | 50–950         |

**Usage pattern:** `text-blue-600`, `bg-red-100`, `border-green-500`

[⬆️ Back to Top](#-table-of-contents)

---

### 25. Background Color

```html
<div class="bg-white">White</div>
<div class="bg-gray-100">Light gray surface</div>
<div class="bg-blue-600">Blue</div>
<div class="bg-transparent">Transparent</div>
<div class="bg-current">Current color</div>

<!-- With opacity modifier -->
<div class="bg-blue-600/50">50% transparent blue</div>
<div class="bg-black/10">Subtle dark overlay</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 26. Background Image and Gradient

```html
<!-- Gradients -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Left to Right Gradient
</div>

<div class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
  Diagonal Gradient with Via
</div>

<!-- Background image -->
<div class="bg-[url('/image.jpg')] bg-cover bg-center bg-no-repeat h-64">
  Background Image
</div>

<!-- Gradient text -->
<h1 class="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold">
  Gradient Text
</h1>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 27. Opacity

```html
<!-- Element opacity -->
<div class="opacity-0">Invisible</div>
<div class="opacity-25">25%</div>
<div class="opacity-50">50%</div>
<div class="opacity-75">75%</div>
<div class="opacity-100">Fully visible</div>

<!-- Color-specific opacity (without affecting children) -->
<div class="bg-blue-600/50">50% BG opacity only</div>
<p class="text-gray-900/70">70% text opacity</p>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 5: Borders & Effects

### 28. Border Utilities

```html
<!-- Add borders -->
<div class="border">1px all sides</div>
<div class="border-2">2px all sides</div>
<div class="border-t">Top only</div>
<div class="border-x">Left + Right</div>
<div class="border-y">Top + Bottom</div>

<!-- Border color -->
<div class="border border-gray-300">Gray border</div>
<div class="border border-blue-500">Blue border</div>
<div class="border border-transparent">Transparent</div>

<!-- Focus border -->
<input class="border border-gray-300 focus:border-blue-500 outline-none rounded px-3 py-2">

<!-- Divide (border between children) -->
<div class="divide-y divide-gray-200">
  <div class="py-2">Item 1</div>
  <div class="py-2">Item 2</div>
  <div class="py-2">Item 3</div>
</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 29. Border Radius

```html
<div class="rounded-none">0px</div>
<div class="rounded-sm">2px</div>
<div class="rounded">4px</div>
<div class="rounded-md">6px</div>
<div class="rounded-lg">8px</div>
<div class="rounded-xl">12px</div>
<div class="rounded-2xl">16px</div>
<div class="rounded-3xl">24px</div>
<div class="rounded-full">9999px (circle/pill)</div>

<!-- Per corner -->
<div class="rounded-tl-lg rounded-tr-lg">Rounded top corners only</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 30. Box Shadow

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
<div class="shadow-2xl">Biggest shadow</div>
<div class="shadow-inner">Inner shadow</div>

<!-- Colored shadow -->
<div class="shadow-lg shadow-blue-500/30">Blue tinted shadow</div>

<!-- Arbitrary -->
<div class="shadow-[0_4px_20px_rgba(0,0,0,0.15)]">Custom shadow</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 31. Ring

**Ring** = `box-shadow` based focus outline — perfect for accessibility.

```html
<!-- Focus ring on input -->
<input class="outline-none focus:ring-2 focus:ring-blue-500 border rounded px-3 py-2">

<!-- Ring with offset -->
<button class="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
  Button
</button>

<!-- Ring width -->
<div class="ring-1">1px ring</div>
<div class="ring-2">2px ring</div>
<div class="ring-4">4px ring</div>

<!-- Ring color -->
<div class="ring-2 ring-red-500">Red ring</div>
<div class="ring-2 ring-offset-2 ring-blue-500">With offset</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 32. Outline

```html
<button class="outline outline-2 outline-blue-500">Outline</button>
<button class="outline-none focus-visible:outline-2 focus-visible:outline-blue-500">
  Accessible outline
</button>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 6: Transitions & Animations

### 33. Transitions

```html
<!-- Enable transition -->
<button class="bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
  Color transition
</button>

<!-- Transition properties -->
<div class="transition-all">All properties</div>
<div class="transition-colors">Color properties</div>
<div class="transition-opacity">Opacity</div>
<div class="transition-transform">Transform</div>

<!-- Duration -->
<div class="transition duration-75">75ms</div>
<div class="transition duration-150">150ms</div>
<div class="transition duration-300">300ms</div>
<div class="transition duration-500">500ms</div>
<div class="transition duration-700">700ms</div>
<div class="transition duration-1000">1000ms</div>

<!-- Easing -->
<div class="transition ease-linear">Linear</div>
<div class="transition ease-in">Ease in</div>
<div class="transition ease-out">Ease out</div>
<div class="transition ease-in-out">Ease in-out</div>

<!-- Delay -->
<div class="transition delay-150">150ms delay</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 34. Transforms

```html
<!-- Scale -->
<div class="hover:scale-105 transition-transform">Scale up on hover</div>
<div class="hover:scale-95 transition-transform">Scale down on hover</div>

<!-- Rotate -->
<div class="rotate-45">45° rotated</div>
<div class="hover:-rotate-6 transition-transform">Rotate on hover</div>

<!-- Translate -->
<div class="translate-x-4">Right 1rem</div>
<div class="hover:-translate-y-1 transition-transform">Move up on hover</div>
<div class="translate-x-1/2 translate-y-1/2">50% offset</div>

<!-- Center trick -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Perfectly centered
</div>

<!-- Skew -->
<div class="skew-x-6">Skewed</div>

<!-- GPU acceleration -->
<div class="transform-gpu hover:scale-105 transition">GPU accelerated</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 35. Animations

**Built-in animations:**

```html
<div class="animate-spin">⟳ Spinning</div>
<div class="animate-ping">Ping effect (notification dot)</div>
<div class="animate-pulse">Pulsing (skeleton loaders)</div>
<div class="animate-bounce">Bouncing</div>

<!-- Skeleton Loader Example -->
<div class="animate-pulse space-y-3">
  <div class="h-4 bg-gray-300 rounded w-3/4"></div>
  <div class="h-4 bg-gray-300 rounded w-full"></div>
  <div class="h-4 bg-gray-300 rounded w-5/6"></div>
</div>
```

**Custom animation in config:**

```js
theme: {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    },
    animation: {
      'fade-in': 'fadeIn 0.4s ease-out',
    }
  }
}
```

```html
<div class="animate-fade-in">Fades in</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 7: Customization

### 36. tailwind.config

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 37. Extending the Theme

**`extend` vs `replace`:**

```js
// REPLACE — removes default values
theme: {
  colors: {
    brand: '#0ea5e9',  // Only brand color available now!
  }
}

// EXTEND — keeps defaults + adds yours
theme: {
  extend: {
    colors: {
      brand: '#0ea5e9',  // Added alongside all default colors
    }
  }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 38. Custom Colors and Fonts

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#6f42c1',
        light: '#9b6fe8',
        dark: '#4b0082',
      },
      surface: '#f8f9fa',
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    }
  }
}
```

```html
<div class="bg-primary text-white">Primary button</div>
<h1 class="font-display text-4xl">Display Heading</h1>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 39. Custom Screens

```js
theme: {
  screens: {
    'xs': '480px',     // Custom extra small
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
    '3xl': '1920px',   // Custom ultra-wide
  }
}
```

```html
<div class="block xs:flex">Flex from xs (480px)</div>
<div class="hidden 3xl:block">Ultra-wide only</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 40. Arbitrary Values

Use `[]` to provide any value not in the scale:

```html
<!-- Sizes -->
<div class="w-[350px] h-[200px]">Fixed size</div>
<div class="top-[117px]">Exact offset</div>
<div class="text-[14.5px]">Precise font size</div>

<!-- Colors -->
<div class="bg-[#1da1f2]">Twitter blue</div>
<div class="text-[rgb(50,150,80)]">Custom green</div>

<!-- Grid -->
<div class="grid grid-cols-[1fr,2fr,1fr]">Custom grid</div>

<!-- Calc -->
<div class="w-[calc(100%-4rem)]">Width with calc</div>

<!-- CSS properties -->
<div class="[background-attachment:fixed]">Fixed BG</div>
<div class="[&>p]:mt-4 [&>p]:text-gray-600">Target children</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 41. CSS Variables with Tailwind

```css
/* In your CSS */
:root {
  --color-brand: 99 102 241;
}
```

```js
// tailwind.config.js
colors: {
  brand: 'rgb(var(--color-brand) / <alpha-value>)',
}
```

```html
<!-- Now supports opacity modifier -->
<div class="bg-brand/50">50% brand color</div>
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 8: Directives & Functions

### 42. @apply Directive

Extract reusable component styles using `@apply`:

```css
/* components.css */
@layer components {
  .btn-primary {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold
           px-4 py-2 rounded-lg transition-colors duration-200
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2;
  }

  .card {
    @apply bg-white rounded-xl shadow-md p-6;
  }

  .input-field {
    @apply w-full border border-gray-300 rounded-lg px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-blue-500;
  }
}
```

```html
<button class="btn-primary">Submit</button>
<div class="card">Card content</div>
<input class="input-field" type="text">
```

> **Note:** Use `@apply` sparingly — it defeats the purpose of utility-first when overused.

[⬆️ Back to Top](#-table-of-contents)

---

### 43. @layer Directive

Tailwind has three layers: `base`, `components`, `utilities`.

```css
/* Base — resets, global styles */
@layer base {
  h1 { @apply text-3xl font-bold; }
  a  { @apply text-blue-600 hover:underline; }
  * { @apply box-border; }
}

/* Components — reusable patterns */
@layer components {
  .btn { @apply px-4 py-2 rounded font-medium transition; }
  .badge { @apply inline-flex items-center px-2 py-0.5 rounded text-xs font-medium; }
}

/* Utilities — custom single-purpose classes */
@layer utilities {
  .text-balance { text-wrap: balance; }
  .scrollbar-hidden { scrollbar-width: none; }
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 44. @theme Directive

**Tailwind v4 CSS-first configuration** (instead of `tailwind.config.js`):

```css
@import "tailwindcss";

@theme {
  --font-display: "Poppins", "sans-serif";
  --color-primary: oklch(60% 0.2 270);
  --spacing-18: 4.5rem;
  --breakpoint-xs: 480px;
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 45. theme() Function

Access theme values in CSS:

```css
.custom-element {
  margin: theme(spacing.4);         /* 1rem */
  color: theme(colors.blue.600);   /* #2563eb */
  font-family: theme(fontFamily.sans);
  max-width: theme(screens.lg);     /* 1024px */
}
```

[⬆️ Back to Top](#-table-of-contents)

---

## Part 9: Advanced Topics

### 46. JIT Mode

**JIT (Just-in-Time)** compiler — Tailwind v3+ default behavior.

**Benefits:**
- Generates **only used classes** — tiny bundle in production
- Enables **arbitrary values** `w-[350px]`, `bg-[#hex]`
- **Instant build** — no large pre-generated CSS file
- All **variants** available (no `purge` needed in dev)

**Before JIT (v2):** Full 3MB CSS file pre-generated
**After JIT (v3+):** Only used classes, typically < 10KB

[⬆️ Back to Top](#-table-of-contents)

---

### 47. PurgeCSS and Content Paths

Tailwind automatically removes unused CSS via its content scanning.

```js
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue,svelte}',
    './components/**/*.{js,jsx}',
  ]
}
```

**⚠️ Important:** Never construct class names dynamically!

```js
// ❌ Bad — Tailwind can't detect this at build time
const color = 'blue';
<div className={`text-${color}-600`}>

// ✅ Good — Use full class names
const classes = { blue: 'text-blue-600', red: 'text-red-600' };
<div className={classes.blue}>
```

[⬆️ Back to Top](#-table-of-contents)

---

### 48. Tailwind Plugins

**Official Plugins:**

```bash
npm install @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
```

```js
plugins: [
  require('@tailwindcss/typography'),  // Adds .prose for blog content
  require('@tailwindcss/forms'),        // Better form element styling
  require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities
]
```

**Usage:**

```html
<!-- Typography plugin -->
<article class="prose prose-lg prose-blue mx-auto">
  <h1>Blog Post Title</h1>
  <p>Automatically styled body text...</p>
</article>

<!-- Forms plugin -->
<input type="text" class="form-input rounded border-gray-300">
<select class="form-select">...</select>
```

**Custom Plugin:**

```js
const plugin = require('tailwindcss/plugin');

plugins: [
  plugin(({ addUtilities }) => {
    addUtilities({
      '.text-shadow': {
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      },
      '.text-shadow-lg': {
        textShadow: '4px 4px 8px rgba(0,0,0,0.4)',
      }
    });
  })
]
```

[⬆️ Back to Top](#-table-of-contents)

---

### 49. Tailwind with React

**Setup:**

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Update `tailwind.config.js`:**

```js
content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
```

**Add to `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**React Component Example:**

```jsx
function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md
                    hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white
                         text-xs font-medium px-2 py-1 rounded-full">
          New
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white
                             px-4 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
```

**Using `clsx` / `cn` for dynamic classes:**

```bash
npm install clsx
```

```jsx
import clsx from 'clsx';

function Button({ variant = 'primary', disabled, children }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded-lg font-medium transition',
        {
          'bg-blue-600 hover:bg-blue-700 text-white': variant === 'primary',
          'bg-gray-200 hover:bg-gray-300 text-gray-800': variant === 'secondary',
          'opacity-50 cursor-not-allowed': disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

[⬆️ Back to Top](#-table-of-contents)

---

### 50. Tailwind v3 vs v4

| Feature                   | Tailwind v3               | Tailwind v4                  |
|---------------------------|---------------------------|------------------------------|
| **Config**                | `tailwind.config.js`      | CSS-first `@theme` directive |
| **Engine**                | JIT (Rust via Lightning) | Oxide engine (fastest)        |
| **Installation**          | npm + config file         | Single CSS import             |
| **Custom properties**     | JS config                 | CSS variables natively        |
| **Cascade Layers**        | Manual                    | Automatic                     |
| **Container queries**     | Plugin needed             | Built-in                      |
| **P3 Colors**             | ❌                        | ✅ oklch support              |
| **Build speed**           | Fast                      | 5× faster                    |

[⬆️ Back to Top](#-table-of-contents)

---

### 51. Common Interview Questions

**Q1: What is utility-first CSS?**
An approach where you style elements using many small, single-purpose classes directly in HTML rather than writing custom CSS. Example: `flex items-center gap-4 p-4 bg-white rounded-lg shadow`.

**Q2: How does Tailwind handle responsive design?**
Using mobile-first breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`. Applied styles take effect at the given min-width and above.

**Q3: How does Tailwind reduce file size in production?**
JIT scans your content files for used class names and generates only those styles. Unused utilities are never included in the output.

**Q4: What is the difference between `@layer components` and `@layer utilities`?**
- `components`: Multi-purpose reusable classes (`.card`, `.btn`)
- `utilities`: Single-purpose classes matching Tailwind's convention

**Q5: Can you use arbitrary values in Tailwind?**
Yes, using square bracket notation: `w-[350px]`, `bg-[#ff6b6b]`, `grid-cols-[1fr,2fr]`.

**Q6: What is `@apply` and when should you use it?**
It extracts Tailwind utilities into custom CSS classes. Use sparingly for highly repeated patterns like `btn-primary`. Overusing it defeats the utility-first benefit.

**Q7: Why should you never use dynamic class names in Tailwind?**
Tailwind statically scans files for class names at build time. Strings like `` `text-${color}-500` `` cannot be detected, so the class won't be generated. Always use complete class names.

**Q8: What is the `content` option in `tailwind.config.js`?**
It tells Tailwind which files to scan for class names. Essential for purging unused styles in production.

**Q9: What is the `group` utility?**
Allows you to style child elements based on the parent's state. Add `group` to parent, then use `group-hover:`, `group-focus:` on children.

**Q10: How does dark mode work in Tailwind?**
Two strategies: `'media'` (follows OS preference) or `'class'` (adds/removes `dark` class on `<html>`). Use `dark:` prefix on any utility class.

[⬆️ Back to Top](#-table-of-contents)

---

### 52. Tailwind Best Practices

1. **Use `extend`** in config — never replace defaults unless intentional
2. **Never dynamically construct class names** — write full class strings
3. **Use `@apply` sparingly** — primarily for heavily repeated component styles
4. **Organize `@layer`** — put global styles in `base`, reusable in `components`, one-offs in `utilities`
5. **Use `clsx` or `tailwind-merge`** in React for conditional classes
6. **Configure `content` paths** correctly — don't use overly wide globs
7. **Use `group` and `peer`** instead of JavaScript for hover/checked states
8. **Prefer `gap`** over margin on flex/grid children for consistent spacing
9. **Use `min-h-screen`** not `h-screen` for page wrappers (avoids overflow issues)
10. **Extract components** in your framework (React/Vue) rather than heavy `@apply` usage
11. **Use `ring`** utilities for focus outlines — more flexible than `outline`
12. **Install `@tailwindcss/forms`** for consistent cross-browser form styles

[⬆️ Back to Top](#-table-of-contents)

---

*Happy Learning Tailwind CSS! 🚀*
