# HTML Complete Learning Guide

**From Basics to Advanced**

---

[Back to Top](#table-of-contents)

## 1. ðŸ“Œ Table of Contents

1. [What is HTML?](#2-what-is-html)
2. [Semantic Tags](#3-semantic-tags)
3. [Void Tags](#4-void-tags)
4. [HTML vs HTML5](#5-html-vs-html5)
5. [DOCTYPE in HTML](#6-doctype-in-html)
6. [CDN (Content Delivery Network)](#7-cdn)
7. [Links vs Anchor Tags](#8-links-vs-anchor-tags)
8. [Lists in HTML](#9-lists-in-html)
9. [Elements and Attributes](#10-elements-and-attributes)
10. [Inline vs Block Elements](#11-inline-vs-block-elements)
11. [Alt Attribute in Images](#12-alt-attribute-in-images)
12. [iframe Tag](#13-iframe-tag)
13. [HTML Entities](#14-html-entities)
14. [Meta Tags](#15-meta-tags)
15. [ID vs Class](#16-id-vs-class)
16. [DOM Tree Building](#17-dom-tree-building)
17. [Shadow DOM](#18-shadow-dom)
18. [iframe vs Embedded Content](#19-iframe-vs-embedded-content)
19. [SVG vs Canvas](#20-svg-vs-canvas)
20. [Name Attribute in Forms](#21-name-attribute-in-forms)
21. [Figure and Figcaption](#22-figure-and-figcaption)
22. [Custom Elements](#23-custom-elements)
23. [HTML Security](#24-html-security)
24. [Setting Multiple Languages in HTML](#25-setting-multiple-languages-in-html)

---

[Back to Top](#table-of-contents)

## 2. What is HTML?

### Definition

**HTML (HyperText Markup Language)** is the standard markup language used to create web pages. It describes the structure and content of a webpage using a series of elements/tags.

### Key Points

- **Not a programming language** - It's a markup language
- **Foundation of web development** - Every website uses HTML
- **Works with CSS and JavaScript** - HTML for structure, CSS for styling, JS for functionality

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph on my webpage.</p>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

## 3. Semantic Tags

### Definition

**Semantic tags** are HTML elements that clearly describe their meaning and purpose to both the browser and the developer. They convey the meaning of the content they contain.

### Why Use Semantic Tags?

- **Better SEO** - Search engines understand your content better
- **Accessibility** - Screen readers can navigate better
- **Code Readability** - Easier for developers to understand
- **Maintainability** - Cleaner, more organized code

### Common Semantic Tags

| Tag            | Purpose                | Example                 |
| -------------- | ---------------------- | ----------------------- |
| `<header>`     | Page or section header | Site logo, navigation   |
| `<nav>`        | Navigation links       | Menu, breadcrumbs       |
| `<main>`       | Main content           | Primary page content    |
| `<article>`    | Self-contained content | Blog post, news article |
| `<section>`    | Thematic grouping      | Chapters, tabs          |
| `<aside>`      | Side content           | Sidebar, related links  |
| `<footer>`     | Page or section footer | Copyright, links        |
| `<figure>`     | Self-contained content | Images with captions    |
| `<figcaption>` | Caption for figure     | Image description       |
| `<time>`       | Date/time              | Publication date        |
| `<mark>`       | Highlighted text       | Search results          |

### Example: Non-Semantic vs Semantic

```html
<!-- âŒ Non-Semantic (Bad Practice) -->
<div id="header">
  <div id="nav">
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
</div>
<div id="main-content">
  <div class="post">
    <h2>Article Title</h2>
    <p>Content here...</p>
  </div>
</div>
<div id="footer">
  <p>&copy; 2026 My Website</p>
</div>

<!-- âœ… Semantic (Best Practice) -->
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content here...</p>
  </article>
</main>
<footer>
  <p>&copy; 2026 My Website</p>
</footer>
```

### Complete Semantic Page Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Semantic HTML Example</title>
  </head>
  <body>
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <header>
          <h2>Article Title</h2>
          <p>
            Published on <time datetime="2026-01-18">January 18, 2026</time>
          </p>
        </header>
        <section>
          <h3>Introduction</h3>
          <p>This is the introduction...</p>
        </section>
        <section>
          <h3>Main Content</h3>
          <p>This is the main content...</p>
          <figure>
            <img src="chart.png" alt="Sales Chart" />
            <figcaption>Fig 1. Sales data for 2026</figcaption>
          </figure>
        </section>
      </article>

      <aside>
        <h3>Related Articles</h3>
        <ul>
          <li><a href="#">Related Article 1</a></li>
          <li><a href="#">Related Article 2</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <p>&copy; 2026 My Website. All rights reserved.</p>
      <address>
        Contact us at <a href="mailto:info@example.com">info@example.com</a>
      </address>
    </footer>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

## 4. Void Tags

### Definition

**Void tags** (also called self-closing tags or empty tags) are HTML elements that don't have any content and don't require a closing tag. They perform their function without wrapping any content.

### Characteristics

- No closing tag needed
- No content between opening and closing tags
- Can have attributes
- Sometimes written with `/` at the end (e.g., `<br />`) but it's optional in HTML5

### List of Common Void Tags

| Tag        | Purpose                 | Example                                        |
| ---------- | ----------------------- | ---------------------------------------------- |
| `<br>`     | Line break              | `Hello<br>World`                               |
| `<hr>`     | Horizontal rule/divider | `<hr>`                                         |
| `<img>`    | Image                   | `<img src="photo.jpg" alt="Photo">`            |
| `<input>`  | Form input              | `<input type="text" name="username">`          |
| `<meta>`   | Metadata                | `<meta charset="UTF-8">`                       |
| `<link>`   | External resource link  | `<link rel="stylesheet" href="style.css">`     |
| `<area>`   | Image map area          | `<area shape="rect" coords="0,0,50,50">`       |
| `<base>`   | Base URL                | `<base href="https://example.com/">`           |
| `<col>`    | Table column            | `<col span="2" style="background:yellow">`     |
| `<embed>`  | External content        | `<embed src="video.mp4">`                      |
| `<param>`  | Object parameter        | `<param name="autoplay" value="true">`         |
| `<source>` | Media source            | `<source src="video.mp4" type="video/mp4">`    |
| `<track>`  | Text track              | `<track src="subtitles.vtt" kind="subtitles">` |
| `<wbr>`    | Word break opportunity  | `Very<wbr>LongWord`                            |

### Examples

```html
<!-- Line break -->
<p>First line<br />Second line</p>

<!-- Horizontal rule -->
<h2>Section 1</h2>
<p>Content here</p>
<hr />
<h2>Section 2</h2>

<!-- Image -->
<img src="profile.jpg" alt="Profile Picture" width="200" height="200" />

<!-- Form inputs -->
<form>
  <input type="text" placeholder="Enter your name" />
  <input type="email" placeholder="Enter your email" />
  <input type="submit" value="Submit" />
</form>

<!-- Meta tags in head -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Learn HTML basics" />
  <link rel="stylesheet" href="styles.css" />
</head>

<!-- Source tag with video -->
<video controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser doesn't support video.
</video>
```

### HTML5 vs XHTML Syntax

```html
<!-- HTML5 (No closing slash needed) -->
<img src="photo.jpg" alt="Photo" />
<br />
<input type="text" />

<!-- XHTML (Self-closing with slash) -->
<img src="photo.jpg" alt="Photo" />
<br />
<input type="text" />
```

> **Note**: In HTML5, the closing slash is optional and not required. Both formats work, but the modern convention is to omit it.

---

[Back to Top](#table-of-contents)

## 5. HTML vs HTML5

### Definition

**HTML** refers to earlier versions of HyperText Markup Language (HTML 1.0 to HTML 4.01), while **HTML5** is the latest major version with modern features, APIs, and improved semantics.

### Key Differences

| Feature                | HTML (HTML4 and earlier)              | HTML5                                         |
| ---------------------- | ------------------------------------- | --------------------------------------------- |
| **Version**            | HTML 4.01 (1999)                      | HTML5 (2014, living standard)                 |
| **DOCTYPE**            | Complex, multiple types               | Simple: `<!DOCTYPE html>`                     |
| **Semantic Tags**      | Limited (`<div>`, `<span>`)           | Rich (`<header>`, `<nav>`, `<article>`, etc.) |
| **Multimedia**         | Requires plugins (Flash, Silverlight) | Native `<video>`, `<audio>`                   |
| **Graphics**           | Limited, needs plugins                | `<canvas>`, `<svg>` support                   |
| **Storage**            | Cookies only                          | LocalStorage, SessionStorage, IndexedDB       |
| **Form Controls**      | Basic inputs                          | New types: email, date, range, color, etc.    |
| **APIs**               | Limited                               | Geolocation, Drag-Drop, Web Workers, etc.     |
| **Character Encoding** | Long declaration                      | Simple: `<meta charset="UTF-8">`              |
| **Mobile Support**     | Poor                                  | Excellent, responsive design                  |
| **Error Handling**     | Strict                                | Flexible, better parsing                      |
| **Offline Support**    | None                                  | Application Cache, Service Workers            |

### DOCTYPE Comparison

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- XHTML 1.0 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- HTML5 (Simple!) -->
<!DOCTYPE html>
```

### Character Encoding

```html
<!-- HTML4 -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- HTML5 -->
<meta charset="UTF-8" />
```

### Multimedia Comparison

```html
<!-- HTML4 - Required plugins -->
<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="movie" value="movie.swf" />
</object>

<embed src="video.mov" type="video/quicktime" />

<!-- HTML5 - Native support -->
<video controls width="400">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser doesn't support video.
</video>

<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser doesn't support audio.
</audio>
```

### Semantic Structure

```html
<!-- HTML4 - Non-semantic -->
<div id="header">
  <div id="nav">
    <!-- navigation -->
  </div>
</div>
<div id="main">
  <div class="article">
    <!-- content -->
  </div>
</div>
<div id="footer">
  <!-- footer -->
</div>

<!-- HTML5 - Semantic -->
<header>
  <nav>
    <!-- navigation -->
  </nav>
</header>
<main>
  <article>
    <!-- content -->
  </article>
</main>
<footer>
  <!-- footer -->
</footer>
```

### New HTML5 Form Input Types

```html
<!-- HTML5 new input types -->
<form>
  <input type="email" placeholder="Email" required />
  <input type="url" placeholder="Website" />
  <input type="tel" placeholder="Phone" />
  <input type="number" min="1" max="100" />
  <input type="range" min="0" max="100" />
  <input type="date" />
  <input type="time" />
  <input type="color" />
  <input type="search" placeholder="Search..." />
</form>
```

### Canvas and SVG (HTML5)

```html
<!-- Canvas for dynamic graphics -->
<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
</script>

<!-- SVG for scalable vector graphics -->
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

### HTML5 APIs

```html
<!-- Geolocation API -->
<script>
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Lat:", position.coords.latitude);
      console.log("Long:", position.coords.longitude);
    });
  }
</script>

<!-- Local Storage -->
<script>
  // Store data
  localStorage.setItem("username", "John");

  // Retrieve data
  const username = localStorage.getItem("username");

  // Remove data
  localStorage.removeItem("username");
</script>

<!-- Drag and Drop -->
<div draggable="true" ondragstart="drag(event)">Drag me!</div>
```

### HTML5 Removed Elements

These elements were deprecated in HTML5:

- `<font>` - Use CSS instead
- `<center>` - Use CSS text-align
- `<strike>` - Use `<del>` or CSS
- `<big>` - Use CSS font-size
- `<frame>`, `<frameset>` - Use `<iframe>` or CSS layouts
- `<acronym>` - Use `<abbr>`

---

[Back to Top](#table-of-contents)

## 6. DOCTYPE in HTML

### Definition

**DOCTYPE** (Document Type Declaration) is an instruction to the web browser about what version of HTML the page is written in. It must be the very first thing in an HTML document, before the `<html>` tag.

### Purpose

## 1. **Tells the browser how to render the page** - Which HTML version to use

## 2. **Triggers standards mode** - Ensures consistent rendering across browsers

## 3. **Prevents quirks mode** - Avoids legacy rendering behaviors

## 4. **Validation** - Helps validators check your code correctly

### HTML5 DOCTYPE

```html
<!DOCTYPE html>
```

âœ… **Simple, case-insensitive, and recommended for all new projects**

### Why DOCTYPE is Important

#### Without DOCTYPE (Quirks Mode)

```html
<html>
  <head>
    <title>No DOCTYPE</title>
  </head>
  <body>
    <h1>This page has no DOCTYPE</h1>
    <!-- Browser uses quirks mode - renders inconsistently -->
  </body>
</html>
```

**Problems in Quirks Mode:**

- Inconsistent box model
- Different CSS rendering
- JavaScript behaves differently
- Layout issues across browsers

#### With DOCTYPE (Standards Mode)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>With DOCTYPE</title>
  </head>
  <body>
    <h1>This page has HTML5 DOCTYPE</h1>
    <!-- Browser uses standards mode - consistent rendering -->
  </body>
</html>
```

**Benefits:**

- Consistent rendering across all modern browsers
- Proper CSS box model
- Standards-compliant behavior
- Better layout control

### DOCTYPE Examples for Different HTML Versions

```html
<!-- HTML5 (Current Standard) -->
<!DOCTYPE html>

<!-- HTML 4.01 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- HTML 4.01 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- HTML 4.01 Frameset -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

<!-- XHTML 1.0 Strict -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- XHTML 1.1 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

### Correct HTML5 Document Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proper HTML5 Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a properly structured HTML5 document.</p>
  </body>
</html>
```

### How Browsers Use DOCTYPE

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   Browser receives HTML document    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
             â”‚
             â–¼
      â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
      â”‚ Check DOCTYPE â”‚
      â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
             â”‚
    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚                 â”‚
    â–¼                 â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Present â”‚    â”‚   Missing    â”‚
â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
     â”‚                â”‚
     â–¼                â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚Standards Modeâ”‚  â”‚ Quirks Mode â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Best Practices

âœ… **Always include DOCTYPE** as the first line  
âœ… **Use HTML5 DOCTYPE** for all new projects  
âœ… **Write it in uppercase** (convention, but case-insensitive)  
âœ… **No space before DOCTYPE**  
âŒ **Never omit DOCTYPE** - causes rendering issues

---

[Back to Top](#table-of-contents)

## 7. CDN

### Definition

**CDN (Content Delivery Network)** is a network of distributed servers located around the world that deliver web content (HTML, CSS, JavaScript, images, videos) to users based on their geographic location. It stores cached copies of your content on multiple servers globally.

### How CDN Works

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                    Origin Server                          â”‚
â”‚                  (Your Main Server)                       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â”‚
                        â”‚ Content Distribution
                        â”‚
        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
        â”‚                               â”‚
        â–¼                               â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚   CDN Edge   â”‚                â”‚   CDN Edge   â”‚
â”‚ Server (USA) â”‚                â”‚ Server (Asia)â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”˜                â””â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”˜
        â”‚                               â”‚
        â”‚                               â”‚
    â”Œâ”€â”€â”€â–¼â”€â”€â”€â”€â”                     â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”
    â”‚ User A â”‚                     â”‚ User B â”‚
    â”‚  (USA) â”‚                     â”‚ (India)â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”˜                     â””â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Without CDN:** User â†’ Origin Server (slow, long distance)  
**With CDN:** User â†’ Nearest Edge Server (fast, short distance)

### Benefits of CDN

| Benefit                    | Explanation                               |
| -------------------------- | ----------------------------------------- |
| **Faster Load Times**      | Content served from nearest server        |
| **Reduced Bandwidth**      | Less load on origin server                |
| **High Availability**      | If one server fails, others serve content |
| **Better Performance**     | Cached static files load instantly        |
| **Handles Traffic Spikes** | Distributes load across multiple servers  |
| **Global Reach**           | Same speed worldwide                      |
| **DDoS Protection**        | Distributed network absorbs attacks       |
| **SEO Benefits**           | Faster sites rank better                  |

### Using CDN in HTML

#### 1. Loading Libraries via CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CDN Example</title>

    <!-- Bootstrap CSS from CDN -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />

    <!-- Font Awesome from CDN -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />

    <!-- Google Fonts from CDN -->
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>Hello from CDN</h1>

    <!-- jQuery from CDN -->
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>

    <!-- Bootstrap JS from CDN -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- React from CDN -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.production.min.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
    ></script>
  </body>
</html>
```

#### 2. Loading Images from CDN

```html
<!-- Image from CDN -->
<img src="https://cdn.example.com/images/logo.png" alt="Company Logo" />

<!-- Video from CDN -->
<video controls>
  <source src="https://cdn.example.com/videos/intro.mp4" type="video/mp4" />
</video>
```

### Popular CDN Providers

| CDN Provider       | Use Case             | Example URL                     |
| ------------------ | -------------------- | ------------------------------- |
| **jsDelivr**       | JavaScript libraries | `https://cdn.jsdelivr.net/`     |
| **cdnjs**          | Web libraries        | `https://cdnjs.cloudflare.com/` |
| **unpkg**          | npm packages         | `https://unpkg.com/`            |
| **Google Fonts**   | Fonts                | `https://fonts.googleapis.com/` |
| **Cloudflare**     | Generic CDN          | `https://cloudflare.com/`       |
| **AWS CloudFront** | Amazon CDN           | AWS platform                    |
| **Akamai**         | Enterprise CDN       | Enterprise level                |

### CDN vs Local Hosting

```html
<!-- âŒ Local Hosting (Slower, your server bandwidth) -->
<link rel="stylesheet" href="css/bootstrap.min.css" />
<script src="js/jquery.min.js"></script>

<!-- âœ… CDN Hosting (Faster, cached across sites) -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
```

### CDN Best Practices

#### 1. Use Integrity Attribute (Security)

```html
<!-- Subresource Integrity (SRI) - Prevents tampering -->
<script
  src="https://code.jquery.com/jquery-3.7.0.min.js"
  integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM="
  crossorigin="anonymous"
></script>
```

#### 2. Fallback to Local Copy

```html
<!-- Try CDN first, fallback to local if CDN fails -->
<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
  window.jQuery ||
    document.write('<script src="js/jquery-3.7.0.min.js"><\/script>');
</script>
```

#### 3. Use HTTPS

```html
<!-- âœ… Always use HTTPS -->
<script src="https://cdn.example.com/library.js"></script>

<!-- âŒ Don't use HTTP -->
<script src="http://cdn.example.com/library.js"></script>
```

### When to Use CDN

âœ… **Use CDN for:**

- Popular libraries (jQuery, React, Bootstrap)
- Fonts (Google Fonts, Font Awesome)
- Static assets (images, videos, CSS)
- Global audience websites
- High-traffic websites

âŒ **Don't use CDN for:**

- Sensitive/private data
- Frequently changing files
- Custom application code
- When you need full control
- Intranet applications

### Real-World Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Complete CDN Example</title>

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
      crossorigin="anonymous"
    />

    <!-- Google Fonts -->
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />

    <style>
      body {
        font-family: "Poppins", sans-serif;
      }
    </style>
  </head>
  <body>
    <div class="container mt-5">
      <h1 class="text-primary">Using CDN Resources</h1>
      <p class="lead">All libraries loaded from CDN for optimal performance!</p>
    </div>

    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.0.min.js"
      integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM="
      crossorigin="anonymous"
    ></script>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
      crossorigin="anonymous"
    ></script>

    <script>
      // Test if jQuery loaded from CDN
      console.log("jQuery version:", $.fn.jquery);
    </script>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

## 8. Links vs Anchor Tags

### Definition

There is **no difference** between "links" and "anchor tags" in HTML - they refer to the same thing! The **`<a>` (anchor)** tag is used to create hyperlinks (links) in HTML.

### The `<a>` Tag (Anchor/Link)

The `<a>` tag creates **hyperlinks** that allow users to:

- Navigate to other pages
- Jump to sections within the same page
- Download files
- Send emails
- Call phone numbers

### Basic Syntax

```html
<a href="destination">Link Text</a>
```

### Types of Links

#### 1. External Links (to other websites)

```html
<!-- Link to another website -->
<a href="https://www.google.com">Go to Google</a>

<!-- Open in new tab -->
<a href="https://www.google.com" target="_blank">Open Google in New Tab</a>

<!-- With security attributes for new tab -->
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Secure External Link
</a>
```

> **Security Note:** Always use `rel="noopener noreferrer"` with `target="_blank"` to prevent security vulnerabilities.

#### 2. Internal Links (to pages within your site)

```html
<!-- Relative path -->
<a href="about.html">About Us</a>

<!-- Absolute path from root -->
<a href="/products/item1.html">Product 1</a>

<!-- Navigate to parent directory -->
<a href="../index.html">Home</a>
```

#### 3. Anchor Links (jump to sections on same page)

```html
<!-- Link to section -->
<a href="#contact">Jump to Contact Section</a>

<!-- The target section -->
<section id="contact">
  <h2>Contact Us</h2>
  <p>Contact information here...</p>
</section>

<!-- Back to top link -->
<a href="#top">Back to Top</a>
```

#### 4. Email Links

```html
<!-- Simple email link -->
<a href="mailto:info@example.com">Email Us</a>

<!-- Email with subject and body -->
<a
  href="mailto:info@example.com?subject=Inquiry&body=Hello, I have a question..."
>
  Contact Support
</a>

<!-- Multiple recipients -->
<a href="mailto:info@example.com?cc=support@example.com&bcc=admin@example.com">
  Email Multiple Recipients
</a>
```

#### 5. Telephone Links

```html
<!-- Phone call link -->
<a href="tel:+1234567890">Call Us: +1-234-567-890</a>

<!-- SMS link -->
<a href="sms:+1234567890">Send SMS</a>

<!-- SMS with pre-filled message -->
<a href="sms:+1234567890?body=Hello!">Send Predefined SMS</a>
```

#### 6. Download Links

```html
<!-- Download file -->
<a href="document.pdf" download>Download PDF</a>

<!-- Download with custom filename -->
<a href="document.pdf" download="My_Document.pdf">Download PDF</a>

<!-- Download image -->
<a href="photo.jpg" download>Download Photo</a>
```

### Link Attributes

| Attribute  | Purpose         | Example                       |
| ---------- | --------------- | ----------------------------- |
| `href`     | Destination URL | `href="https://example.com"`  |
| `target`   | Where to open   | `target="_blank"` (new tab)   |
| `rel`      | Relationship    | `rel="noopener noreferrer"`   |
| `title`    | Tooltip text    | `title="Click to learn more"` |
| `download` | Download file   | `download="filename.pdf"`     |

### Target Attribute Values

```html
<!-- Open in same tab (default) -->
<a href="page.html" target="_self">Same Tab</a>

<!-- Open in new tab/window -->
<a href="page.html" target="_blank">New Tab</a>

<!-- Open in parent frame -->
<a href="page.html" target="_parent">Parent Frame</a>

<!-- Open in top-level frame -->
<a href="page.html" target="_top">Top Frame</a>

<!-- Open in named frame -->
<a href="page.html" target="myframe">Named Frame</a>
```

### Styling Links with CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Default link state */
      a {
        color: #007bff;
        text-decoration: none;
        font-weight: 500;
      }

      /* Mouse hover */
      a:hover {
        color: #0056b3;
        text-decoration: underline;
      }

      /* Visited link */
      a:visited {
        color: #6c757d;
      }

      /* Active (clicking) */
      a:active {
        color: #ff0000;
      }

      /* Button-styled link */
      a.button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #28a745;
        color: white;
        border-radius: 5px;
        text-decoration: none;
      }

      a.button:hover {
        background-color: #218838;
      }
    </style>
  </head>
  <body>
    <a href="#">Normal Link</a><br />
    <a href="#" class="button">Button Link</a>
  </body>
</html>
```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Links Example</title>
    <style>
      nav a {
        margin: 0 15px;
        color: #333;
        text-decoration: none;
        font-weight: bold;
      }
      nav a:hover {
        color: #007bff;
      }
    </style>
  </head>
  <body>
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a href="https://www.google.com" target="_blank" rel="noopener"
          >External</a
        >
      </nav>
    </header>

    <main>
      <section id="home">
        <h1>Home Section</h1>
        <p>Welcome! <a href="#contact">Contact us</a> for more info.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>Learn more about our company.</p>
      </section>

      <section id="services">
        <h2>Services</h2>
        <ul>
          <li><a href="services/web-design.html">Web Design</a></li>
          <li><a href="services/seo.html">SEO</a></li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a><br />
          Phone: <a href="tel:+1234567890">+1-234-567-890</a>
        </p>
        <a href="brochure.pdf" download>Download Our Brochure</a>
      </section>
    </main>

    <footer>
      <a href="#home">Back to Top</a>
    </footer>
  </body>
</html>
```

### Best Practices

âœ… **Use descriptive link text**

```html
<!-- Good -->
<a href="guide.pdf">Download the Complete User Guide</a>

<!-- Bad -->
<a href="guide.pdf">Click here</a>
```

âœ… **Add title for accessibility**

```html
<a href="profile.html" title="View your profile">My Profile</a>
```

âœ… **Secure external links**

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Site
</a>
```

âœ… **Use `aria-label` for icon links**

```html
<a href="https://facebook.com" aria-label="Visit our Facebook page">
  <i class="fab fa-facebook"></i>
</a>
```

---

[Back to Top](#table-of-contents)

## 9. Lists in HTML

### Definition

HTML **lists** are used to group related items together in an organized manner. HTML provides three types of lists: **ordered lists**, **unordered lists**, and **description lists**.

### Types of Lists

| List Type            | Tag    | Purpose                           |
| -------------------- | ------ | --------------------------------- |
| **Unordered List**   | `<ul>` | Bullet points (no specific order) |
| **Ordered List**     | `<ol>` | Numbered list (sequential order)  |
| **Description List** | `<dl>` | Term and description pairs        |

---

### 1. Unordered List (`<ul>`)

Used when the order of items doesn't matter (shopping lists, features, etc.)

#### Basic Syntax

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### Example

```html
<h3>My Favorite Fruits</h3>
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
  <li>Mango</li>
</ul>
```

#### Output:

- Apple
- Banana
- Orange
- Mango

#### Styling Bullet Types (CSS)

```html
<ul style="list-style-type: disc;">
  <!-- Default: filled circle -->
  <li>Disc bullet</li>
</ul>

<ul style="list-style-type: circle;">
  <!-- Hollow circle -->
  <li>Circle bullet</li>
</ul>

<ul style="list-style-type: square;">
  <!-- Square -->
  <li>Square bullet</li>
</ul>

<ul style="list-style-type: none;">
  <!-- No bullet -->
  <li>No bullet</li>
</ul>
```

---

### 2. Ordered List (`<ol>`)

Used when the sequence or order matters (steps, rankings, etc.)

#### Basic Syntax

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

#### Example

```html
<h3>Recipe Steps</h3>
<ol>
  <li>Preheat oven to 350Â°F</li>
  <li>Mix flour, sugar, and eggs</li>
  <li>Pour into baking pan</li>
  <li>Bake for 30 minutes</li>
</ol>
```

#### Output:

## 1. Preheat oven to 350Â°F

## 2. Mix flour, sugar, and eggs

## 3. Pour into baking pan

## 4. Bake for 30 minutes

#### Ordered List Attributes

```html
<!-- Start from specific number -->
<ol start="5">
  <li>Fifth item</li>
  <li>Sixth item</li>
</ol>

<!-- Reverse numbering -->
<ol reversed>
  <li>Third</li>
  <li>Second</li>
  <li>First</li>
</ol>

<!-- Different numbering types -->
<ol type="1">
  <!-- Default: numbers (1, 2, 3) -->
  <li>Number</li>
</ol>

<ol type="A">
  <!-- Uppercase letters (A, B, C) -->
  <li>Letter A</li>
</ol>

<ol type="a">
  <!-- Lowercase letters (a, b, c) -->
  <li>Letter a</li>
</ol>

<ol type="I">
  <!-- Roman numerals uppercase (I, II, III) -->
  <li>Roman I</li>
</ol>

<ol type="i">
  <!-- Roman numerals lowercase (i, ii, iii) -->
  <li>Roman i</li>
</ol>

<!-- Specific item value -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li value="10">Item 10</li>
  <li>Item 11</li>
</ol>
```

---

### 3. Description List (`<dl>`)

Used for term-definition pairs (glossary, specifications, FAQs)

#### Components

- `<dl>` - Description List container
- `<dt>` - Description Term (the term/name)
- `<dd>` - Description Definition (the description/value)

#### Basic Syntax

```html
<dl>
  <dt>Term 1</dt>
  <dd>Definition of term 1</dd>

  <dt>Term 2</dt>
  <dd>Definition of term 2</dd>
</dl>
```

#### Example

```html
<h3>HTML Glossary</h3>
<dl>
  <dt>HTML</dt>
  <dd>
    HyperText Markup Language - The standard markup language for web pages
  </dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets - Used for styling HTML elements</dd>

  <dt>JavaScript</dt>
  <dd>Programming language that adds interactivity to websites</dd>

  <dt>Responsive Design</dt>
  <dd>Approach where design responds to user's device and screen size</dd>
</dl>
```

#### Multiple Definitions

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dd>The standard language for creating web pages</dd>
  <dd>Current version is HTML5</dd>
</dl>
```

---

### Nested Lists

Lists can be nested inside each other for hierarchical structure.

#### Nested Unordered List

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```

#### Nested Ordered List

```html
<ol>
  <li>
    Introduction
    <ol type="a">
      <li>Background</li>
      <li>Purpose</li>
      <li>Scope</li>
    </ol>
  </li>
  <li>
    Main Content
    <ol type="a">
      <li>Chapter 1</li>
      <li>Chapter 2</li>
    </ol>
  </li>
</ol>
```

#### Mixed Nested Lists

```html
<ul>
  <li>
    Programming Languages
    <ol>
      <li>
        JavaScript
        <ul>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
      </li>
      <li>
        Python
        <ul>
          <li>Django</li>
          <li>Flask</li>
        </ul>
      </li>
    </ol>
  </li>
</ul>
```

---

### Complete Example - All List Types

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML Lists Complete Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
      }
      h2 {
        color: #333;
        border-bottom: 2px solid #007bff;
        padding-bottom: 5px;
      }
      .styled-list {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <h1>HTML Lists Examples</h1>

    <!-- Unordered List -->
    <h2>1. Unordered List (Shopping List)</h2>
    <ul>
      <li>Milk</li>
      <li>Bread</li>
      <li>Eggs</li>
      <li>Butter</li>
    </ul>

    <!-- Ordered List -->
    <h2>2. Ordered List (Recipe)</h2>
    <ol>
      <li>Gather ingredients</li>
      <li>Preheat oven to 350Â°F</li>
      <li>Mix dry ingredients</li>
      <li>Add wet ingredients</li>
      <li>Pour into pan</li>
      <li>Bake for 25 minutes</li>
    </ol>

    <!-- Description List -->
    <h2>3. Description List (Technical Terms)</h2>
    <dl>
      <dt>Frontend</dt>
      <dd>The client-side of a website that users interact with</dd>

      <dt>Backend</dt>
      <dd>The server-side of a website that handles data and logic</dd>

      <dt>API</dt>
      <dd>
        Application Programming Interface - allows different software to
        communicate
      </dd>
    </dl>

    <!-- Nested List -->
    <h2>4. Nested List (Course Outline)</h2>
    <div class="styled-list">
      <ol>
        <li>
          Web Development Basics
          <ul>
            <li>
              HTML Fundamentals
              <ol type="a">
                <li>Tags and Elements</li>
                <li>Attributes</li>
                <li>Semantic HTML</li>
              </ol>
            </li>
            <li>
              CSS Styling
              <ol type="a">
                <li>Selectors</li>
                <li>Box Model</li>
                <li>Flexbox & Grid</li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          JavaScript Programming
          <ul>
            <li>Variables and Data Types</li>
            <li>Functions</li>
            <li>DOM Manipulation</li>
          </ul>
        </li>
        <li>
          Advanced Topics
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Databases</li>
          </ul>
        </li>
      </ol>
    </div>

    <!-- Custom Styled List -->
    <h2>5. Custom Start and Type</h2>
    <ol start="10" type="I">
      <li>Tenth item</li>
      <li>Eleventh item</li>
      <li>Twelfth item</li>
    </ol>
  </body>
</html>
```

---

### Styling Lists with CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* Remove bullet points */
      .no-bullets {
        list-style-type: none;
        padding-left: 0;
      }

      /* Custom bullet with emoji */
      .emoji-list li::before {
        content: "âœ“ ";
        color: green;
        font-weight: bold;
      }
      .emoji-list {
        list-style: none;
      }

      /* Horizontal list (navigation) */
      .horizontal-list {
        list-style: none;
        padding: 0;
      }
      .horizontal-list li {
        display: inline;
        margin-right: 20px;
      }

      /* Styled ordered list */
      .fancy-ordered {
        counter-reset: item;
        list-style-type: none;
      }
      .fancy-ordered li {
        counter-increment: item;
        margin-bottom: 10px;
      }
      .fancy-ordered li::before {
        content: counter(item) ". ";
        background: #007bff;
        color: white;
        padding: 3px 8px;
        border-radius: 3px;
        margin-right: 10px;
      }
    </style>
  </head>
  <body>
    <h3>No Bullets</h3>
    <ul class="no-bullets">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>

    <h3>Emoji Bullets</h3>
    <ul class="emoji-list">
      <li>Completed task</li>
      <li>Another completed task</li>
    </ul>

    <h3>Horizontal Navigation</h3>
    <ul class="horizontal-list">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <h3>Fancy Ordered List</h3>
    <ol class="fancy-ordered">
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>
  </body>
</html>
```

---

### Best Practices

âœ… **Use the right list type:**

- `<ul>` for items with no specific order
- `<ol>` for sequential steps or rankings
- `<dl>` for term-definition pairs

âœ… **Only use `<li>` inside list elements**

```html
<!-- Correct -->
<ul>
  <li>Item</li>
</ul>

<!-- Incorrect -->
<li>Item</li>
```

âœ… **Nest lists properly**

```html
<!-- Correct -->
<ul>
  <li>
    Parent
    <ul>
      <li>Child</li>
    </ul>
  </li>
</ul>
```

âœ… **Use semantic meaning**

- Navigation menus: `<nav><ul><li>`
- Tables of contents: `<ol>`
- Glossaries: `<dl>`

---

[Back to Top](#table-of-contents)

## 10. Elements and Attributes

### Definition

**HTML Elements** are the building blocks of HTML pages, consisting of a start tag, content, and an end tag. **Attributes** provide additional information about elements.

### Element Structure

```html
<tagname attribute="value">Content goes here</tagname> â”‚ â”‚ â”‚ â”‚ â”‚ â”‚
â”‚ â””â”€ Closing tag â”‚ â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ Content â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Attribute
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Opening tag
```

### Types of Elements

#### 1. **Container Elements** (have opening and closing tags)

```html
<p>This is a paragraph</p>
<div>This is a division</div>
<h1>This is a heading</h1>
<span>This is inline text</span>
```

#### 2. **Void Elements** (self-closing, no content)

```html
<img src="photo.jpg" alt="Photo" />
<br />
<hr />
<input type="text" />
```

### Common HTML Attributes

| Attribute         | Description       | Example                      |
| ----------------- | ----------------- | ---------------------------- |
| `id`              | Unique identifier | `<div id="header">`          |
| `class`           | CSS class name(s) | `<p class="text-bold">`      |
| `style`           | Inline CSS        | `<p style="color: red;">`    |
| `title`           | Tooltip text      | `<a title="Click here">`     |
| `href`            | Link destination  | `<a href="page.html">`       |
| `src`             | Source file       | `<img src="image.jpg">`      |
| `alt`             | Alternative text  | `<img alt="Description">`    |
| `width`, `height` | Dimensions        | `<img width="300">`          |
| `disabled`        | Disable element   | `<input disabled>`           |
| `readonly`        | Read-only input   | `<input readonly>`           |
| `placeholder`     | Input hint        | `<input placeholder="Name">` |
| `value`           | Input value       | `<input value="John">`       |
| `type`            | Input type        | `<input type="email">`       |
| `name`            | Form field name   | `<input name="username">`    |
| `required`        | Required field    | `<input required>`           |

### Global Attributes

These can be used on **any** HTML element:

```html
<!-- id - unique identifier -->
<div id="main-content"></div>

<!-- class - CSS class names (space-separated) -->
<p class="text-large text-bold highlight"></p>

<!-- style - inline CSS -->
<span style="color: blue; font-size: 16px;">Styled text</span>

<!-- title - tooltip -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- data-* - custom data attributes -->
<div data-user-id="123" data-role="admin"></div>

<!-- lang - language -->
<p lang="es">Hola Mundo</p>

<!-- dir - text direction -->
<p dir="rtl">Ù…Ø±Ø­Ø¨Ø§ Ø¨Ø§Ù„Ø¹Ø§Ù„Ù…</p>

<!-- hidden - hide element -->
<div hidden>This is hidden</div>

<!-- contenteditable - editable content -->
<div contenteditable="true">You can edit this!</div>

<!-- draggable - drag and drop -->
<div draggable="true">Drag me</div>

<!-- tabindex - tab order -->
<div tabindex="0">Focusable div</div>

<!-- accesskey - keyboard shortcut -->
<button accesskey="s">Save (Alt+S)</button>

<!-- spellcheck - enable/disable spell check -->
<textarea spellcheck="true"></textarea>

<!-- translate - should translate -->
<p translate="no">Google Chrome</p>
```

### Event Attributes

```html
<!-- Mouse events -->
<button onclick="alert('Clicked!')">Click Me</button>
<div onmouseover="highlight()" onmouseout="unhighlight()">Hover</div>
<img ondblclick="zoomIn()" src="photo.jpg" />

<!-- Form events -->
<input onchange="validate()" type="text" />
<form onsubmit="return handleSubmit()">
  <input type="text" onfocus="showHelp()" onblur="hideHelp()" />
</form>

<!-- Keyboard events -->
<input onkeydown="checkKey(event)" onkeyup="handleKey()" />

<!-- Window events -->
<body onload="init()" onresize="handleResize()"></body>
```

### Boolean Attributes

These attributes don't need values - presence means `true`:

```html
<!-- These are equivalent -->
<input disabled>
<input disabled="disabled">
<input disabled="">

<!-- Common boolean attributes -->
<input required>
<input readonly>
<input checked>
<input selected>
<button disabled>
<video autoplay muted loop>
<script async defer>
```

### Custom Data Attributes

Use `data-*` to store custom information:

```html
<div data-user-id="12345" data-user-role="admin" data-last-login="2026-02-01">
  User Dashboard
</div>

<script>
  const div = document.querySelector("div");
  console.log(div.dataset.userId); // "12345"
  console.log(div.dataset.userRole); // "admin"
  console.log(div.dataset.lastLogin); // "2026-02-01"
</script>
```

### Attribute Best Practices

```html
<!-- âœ… Use double quotes -->
<img src="photo.jpg" alt="Photo" />

<!-- âŒ Avoid single quotes (not standard) -->
<img src="photo.jpg" alt="Photo" />

<!-- âœ… Lowercase attribute names -->
<div class="container">
  <!-- âŒ Avoid uppercase -->
  <div class="container">
    <!-- âœ… Use semantic attributes -->
    <input type="email" required aria-label="Email address" />

    <!-- âŒ Don't rely only on styling -->
    <div onclick="submit()">Submit</div>
  </div>
</div>
```

---

[Back to Top](#table-of-contents)

## 11. Inline vs Block Elements

### Definition

**Block elements** start on a new line and take up the full width available. **Inline elements** do not start on a new line and only take up as much width as necessary.

### Block-Level Elements

#### Characteristics:

- Always start on a new line
- Take up the full width available (stretch left to right)
- Can contain other block and inline elements
- Can have width and height set via CSS
- Respect top/bottom margins and padding

#### Common Block Elements:

```html
<!-- Headings -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<!-- Paragraphs and text blocks -->
<p>This is a paragraph</p>
<div>This is a division</div>
<pre>Preformatted text</pre>
<blockquote>A quote</blockquote>

<!-- Lists -->
<ul>
  <li>Unordered list</li>
</ul>
<ol>
  <li>Ordered list</li>
</ol>
<dl>
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>

<!-- Structural -->
<header>Header content</header>
<nav>Navigation</nav>
<main>Main content</main>
<section>Section</section>
<article>Article</article>
<aside>Sidebar</aside>
<footer>Footer content</footer>

<!-- Forms and tables -->
<form>Form content</form>
<table>
  <tr>
    <td>Table</td>
  </tr>
</table>
<fieldset><legend>Form group</legend></fieldset>

<!-- Other -->
<hr />
<!-- Horizontal rule -->
<address>Contact info</address>
<figure><img src="x.jpg" /></figure>
```

### Inline Elements

#### Characteristics:

- Do not start on a new line
- Only take up as much width as needed
- Cannot contain block-level elements (usually)
- Width and height cannot be set (ignored)
- Only respect left/right margins and padding (not top/bottom)

#### Common Inline Elements:

```html
<!-- Text formatting -->
<span>Generic inline container</span>
<a href="#">Link</a>
<strong>Bold text</strong>
<em>Italic text</em>
<b>Bold (no emphasis)</b>
<i>Italic (no emphasis)</i>
<u>Underlined</u>
<small>Small text</small>
<mark>Highlighted</mark>
<del>Deleted text</del>
<ins>Inserted text</ins>
<sub>Subscript</sub>
<sup>Superscript</sup>
<code>Code snippet</code>
<kbd>Keyboard input</kbd>
<samp>Sample output</samp>
<var>Variable</var>
<abbr>Abbreviation</abbr>
<cite>Citation</cite>
<q>Inline quote</q>
<dfn>Definition term</dfn>
<time>Time/date</time>

<!-- Form elements -->
<input type="text" />
<textarea></textarea>
<select>
  <option>Option</option>
</select>
<button>Click</button>
<label>Label</label>

<!-- Media -->
<img src="photo.jpg" alt="Photo" />
<br />
<!-- Line break -->
```

### Visual Comparison

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .block-demo {
        background: lightblue;
        margin: 10px 0;
        padding: 10px;
      }
      .inline-demo {
        background: lightgreen;
        padding: 5px;
      }
    </style>
  </head>
  <body>
    <h2>Block Elements (Each on new line)</h2>
    <div class="block-demo">Block 1</div>
    <div class="block-demo">Block 2</div>
    <div class="block-demo">Block 3</div>

    <h2>Inline Elements (On same line)</h2>
    <span class="inline-demo">Inline 1</span>
    <span class="inline-demo">Inline 2</span>
    <span class="inline-demo">Inline 3</span>
  </body>
</html>
```

### Inline-Block Elements

CSS can create hybrid behavior:

```html
<style>
  .inline-block {
    display: inline-block;
    width: 100px;
    height: 100px;
    background: coral;
    margin: 10px;
  }
</style>

<!-- Behaves inline but respects width/height -->
<div class="inline-block">Box 1</div>
<div class="inline-block">Box 2</div>
<div class="inline-block">Box 3</div>
```

### Complete Reference Table

| Element    | Type   | Can Contain Blocks? | Respects width/height? |
| ---------- | ------ | ------------------- | ---------------------- |
| `<div>`    | Block  | âœ… Yes             | âœ… Yes                |
| `<p>`      | Block  | âŒ No               | âœ… Yes                |
| `<span>`   | Inline | âŒ No               | âŒ No                  |
| `<a>`      | Inline | âŒ No\*             | âŒ No                  |
| `<button>` | Inline | âœ… Yes             | âŒ No                  |
| `<img>`    | Inline | N/A                 | âœ… Yes\*\*            |
| `<header>` | Block  | âœ… Yes             | âœ… Yes                |
| `<strong>` | Inline | âŒ No               | âŒ No                  |

\*In HTML5, `<a>` can contain block elements
\*\*img is inline but respects width/height (replaced element)

---

[Back to Top](#table-of-contents)

## 12. Alt Attribute in Images

### Definition

The `alt` attribute provides **alternative text** for an image if it cannot be displayed. It's crucial for accessibility and SEO.

### Basic Syntax

```html
<img src="image.jpg" alt="Description of the image" />
```

### Why Alt is Important

## 1. **Accessibility** - Screen readers read alt text to visually impaired users

## 2. **SEO** - Search engines use alt text to understand images

## 3. **Fallback** - Displays if image fails to load

## 4. **Context** - Provides context when images are disabled

### Writing Good Alt Text

#### âœ… DO:

```html
<!-- Descriptive and specific -->
<img
  src="golden-retriever.jpg"
  alt="Golden retriever playing fetch in a park"
/>

<!-- Convey the purpose -->
<img src="search-icon.png" alt="Search" />

<!-- Include relevant details -->
<img
  src="chart.png"
  alt="Bar chart showing 50% increase in sales from 2024 to 2025"
/>

<!-- For linked images, describe the destination -->
<a href="home.html">
  <img src="logo.png" alt="Company homepage" />
</a>
```

#### âŒ DON'T:

```html
<!-- Too generic -->
<img src="dog.jpg" alt="image" />

<!-- Redundant "image of" or "picture of" -->
<img src="dog.jpg" alt="Picture of a dog" />

<!-- File name -->
<img src="IMG_1234.jpg" alt="IMG_1234" />

<!-- Too long (keep under 125 characters) -->
<img
  src="scene.jpg"
  alt="A very detailed description that goes on and on explaining every single detail..."
/>
```

### Special Cases

#### Decorative Images

```html
<!-- Empty alt for purely decorative images -->
<img src="decorative-border.png" alt="" />

<!-- Or use CSS background instead -->
<div style="background-image: url('decorative.png')"></div>
```

#### Complex Images (Charts, Diagrams)

```html
<!-- Short alt + detailed description -->
<img src="complex-chart.png" alt="Sales data 2024-2025" />
<p>Detailed description: The chart shows a 50% increase in Q1...</p>

<!-- Or use figure with figcaption -->
<figure>
  <img src="diagram.png" alt="System architecture diagram" />
  <figcaption>
    The system consists of three layers: presentation, business logic, and data
    access...
  </figcaption>
</figure>

<!-- Or use longdesc (deprecated but still valid) -->
<img src="chart.png" alt="Sales chart" longdesc="chart-description.html" />
```

#### Functional Images (Buttons, Icons)

```html
<!-- Describe the function, not the appearance -->
<button>
  <img src="trash-icon.png" alt="Delete" />
</button>

<a href="print.html">
  <img src="printer-icon.png" alt="Print this page" />
</a>

<!-- For icon fonts, use aria-label -->
<button aria-label="Close dialog">
  <i class="fa fa-times"></i>
</button>
```

### Complete Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Alt Attribute Examples</title>
  </head>
  <body>
    <!-- Informative image -->
    <img
      src="sunrise-beach.jpg"
      alt="Orange sunrise over calm ocean waves at the beach"
      width="600"
      height="400"
    />

    <!-- Logo (functional) -->
    <a href="index.html">
      <img src="logo.png" alt="Acme Corporation home" />
    </a>

    <!-- Icon button -->
    <button>
      <img src="download-icon.svg" alt="Download" />
      Download PDF
    </button>

    <!-- Decorative -->
    <img src="decorative-line.png" alt="" role="presentation" />

    <!-- Image with caption -->
    <figure>
      <img src="team-photo.jpg" alt="Five team members standing in office" />
      <figcaption>Our development team in 2026</figcaption>
    </figure>

    <!-- Chart with description -->
    <img src="revenue-chart.png" alt="Revenue growth chart 2024-2025" />
    <details>
      <summary>Chart description</summary>
      <p>Revenue increased from $1M in Q1 2024 to $1.5M in Q4 2025...</p>
    </details>
  </body>
</html>
```

### Accessibility Best Practices

```html
<!-- âœ… Always include alt attribute -->
<img src="photo.jpg" alt="Description" />

<!-- âœ… Use empty alt for decorative images -->
<img src="decoration.png" alt="" />

<!-- âœ… Keep it concise (under 125 characters) -->
<img src="scene.jpg" alt="Mountain lake at sunset" />

<!-- âŒ Never omit alt attribute -->
<img src="photo.jpg" />
<!-- Invalid! -->

<!-- âœ… For complex images, provide detailed description nearby -->
<img src="chart.png" alt="Sales data chart" />
<p id="chart-desc">Detailed description of the chart data...</p>
```

---

[Back to Top](#table-of-contents)

## 13. iframe Tag

## 14. iframe Tag

### Definition

The `<iframe>` (inline frame) tag embeds another HTML document within the current document. It creates a nested browsing context.

### Basic Syntax

```html
<iframe src="https://example.com" width="600" height="400"></iframe>
```

### Common Attributes

| Attribute         | Description           | Example                        |
| ----------------- | --------------------- | ------------------------------ |
| `src`             | URL of embedded page  | `src="page.html"`              |
| `width`           | Width in pixels or %  | `width="800"`                  |
| `height`          | Height in pixels or % | `height="600"`                 |
| `name`            | Name for targeting    | `name="frame1"`                |
| `frameborder`     | Border (deprecated)   | Use CSS instead                |
| `allowfullscreen` | Allow fullscreen mode | For videos                     |
| `sandbox`         | Security restrictions | `sandbox="allow-scripts"`      |
| `loading`         | Lazy loading          | `loading="lazy"`               |
| `referrerpolicy`  | Referrer policy       | `referrerpolicy="no-referrer"` |

### Examples

#### Basic iframe

```html
<!-- Embed another webpage -->
<iframe
  src="https://www.example.com"
  width="800"
  height="600"
  title="Example website"
>
</iframe>
```

#### Embed YouTube Video

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

#### Embed Google Maps

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
>
</iframe>
```

#### Embed Local HTML File

```html
<iframe src="contact-form.html" width="100%" height="500"></iframe>
```

### Security - Sandbox Attribute

```html
<!-- Heavily restricted iframe -->
<iframe src="untrusted.html" sandbox></iframe>

<!-- Allow specific features -->
<iframe src="page.html" sandbox="allow-scripts allow-forms allow-same-origin">
</iframe>
```

**Sandbox values:**

- `allow-forms` - Allow form submission
- `allow-scripts` - Allow JavaScript
- `allow-same-origin` - Allow same-origin access
- `allow-popups` - Allow popups
- `allow-modals` - Allow modal dialogs
- `allow-downloads` - Allow downloads
- `allow-top-navigation` - Allow navigating top window

### Lazy Loading

```html
<!-- Load iframe only when visible -->
<iframe src="heavy-content.html" loading="lazy" width="600" height="400">
</iframe>
```

### Responsive iframe

```html
<style>
  .iframe-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
  }
  .iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="iframe-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
</div>
```

### Communication Between iframe and Parent

```html
<!-- Parent page -->
<iframe id="myFrame" src="child.html"></iframe>

<script>
  // Send message to iframe
  const iframe = document.getElementById("myFrame");
  iframe.contentWindow.postMessage("Hello from parent", "*");

  // Receive message from iframe
  window.addEventListener("message", (event) => {
    console.log("Received from iframe:", event.data);
  });
</script>

<!-- In child.html (iframe content) -->
<script>
  // Receive message from parent
  window.addEventListener("message", (event) => {
    console.log("Received from parent:", event.data);
  });

  // Send message to parent
  window.parent.postMessage("Hello from iframe", "*");
</script>
```

### Best Practices

```html
<!-- âœ… Always include title for accessibility -->
<iframe src="page.html" title="Description of iframe content"></iframe>

<!-- âœ… Use lazy loading for performance -->
<iframe src="heavy.html" loading="lazy"></iframe>

<!-- âœ… Add sandbox for untrusted content -->
<iframe src="untrusted.html" sandbox="allow-scripts"></iframe>

<!-- âœ… Responsive design -->
<iframe src="page.html" style="width: 100%; max-width: 800px;"></iframe>

<!-- âŒ Don't use frameborder (deprecated) -->
<iframe frameborder="0"></iframe>

<!-- âœ… Use CSS instead -->
<iframe style="border: none;"></iframe>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 15. HTML Entities

### Definition

**HTML entities** are special characters that are reserved in HTML or don't exist on all keyboards. They start with `&` and end with `;`.

### Why Use Entities?

## 1. Display reserved HTML characters (`<`, `>`, `&`)

## 2. Display special characters (Â©, Â®, â‚¬)

## 3. Non-breaking spaces

## 4. Symbols and emojis

### Reserved Character Entities

```html
<!-- Essential reserved characters -->
&lt;
<!-- < (less than) -->
&gt;
<!-- > (greater than) -->
&amp;
<!-- & (ampersand) -->
&quot;
<!-- " (double quote) -->
&apos;
<!-- ' (apostrophe) -->

<!-- Example usage -->
<p>To display HTML tags, use &lt;p&gt; and &lt;/p&gt;</p>
<!-- Output: To display HTML tags, use <p> and </p> -->

<p>You &amp; Me</p>
<!-- Output: You & Me -->
```

### Space Entities

```html
&nbsp;
<!-- Non-breaking space -->
&ensp;
<!-- En space (half em) -->
&emsp;
<!-- Em space (width of 'm') -->
&thinsp;
<!-- Thin space -->

<!-- Example -->
<p>First&nbsp;Last</p>
<!-- Won't break across lines -->
<p>Price: $100&nbsp;USD</p>
```

### Common Symbol Entities

```html
<!-- Copyright and trademark -->
&copy;
<!-- Â© copyright -->
&reg;
<!-- Â® registered -->
&trade;
<!-- â„¢ trademark -->

<!-- Currency -->
&cent;
<!-- Â¢ cent -->
&pound;
<!-- Â£ pound -->
&yen;
<!-- Â¥ yen -->
&euro;
<!-- â‚¬ euro -->

<!-- Math symbols -->
&times;
<!-- Ã— multiplication -->
&divide;
<!-- Ã· division -->
&plusmn;
<!-- Â± plus-minus -->
&ne;
<!-- â‰  not equal -->
&le;
<!-- â‰¤ less than or equal -->
&ge;
<!-- â‰¥ greater than or equal -->
&infin;
<!-- âˆž infinity -->
&sum;
<!-- âˆ‘ summation -->
&pi;
<!-- Ï€ pi -->

<!-- Arrows -->
&larr;
<!-- â† left arrow -->
&uarr;
<!-- â†‘ up arrow -->
&rarr;
<!-- â†’ right arrow -->
&darr;
<!-- â†“ down arrow -->
&harr;
<!-- â†” left-right arrow -->

<!-- Punctuation -->
&ndash;
<!-- â€“ en dash -->
&mdash;
<!-- â€” em dash -->
&hellip;
<!-- â€¦ ellipsis -->
&lsquo;
<!-- ' left single quote -->
&rsquo;
<!-- ' right single quote -->
&ldquo;
<!-- " left double quote -->
&rdquo;
<!--  " right double quote -->
&bull;
<!-- â€¢ bullet -->

<!-- Misc -->
&deg;
<!-- Â° degree -->
&frac14;
<!-- Â¼ one quarter -->
&frac12;
<!-- Â½ one half -->
&frac34;
<!-- Â¾ three quarters -->
&hearts;
<!-- â™¥ heart -->
&spades;
<!-- â™  spade -->
&clubs;
<!-- â™£ club -->
&diams;
<!-- â™¦ diamond -->
```

### Accented Characters

```html
<!-- Acute accent -->
&aacute; &eacute; &iacute; &oacute; &uacute;
<!-- Ã¡ Ã© Ã­ Ã³ Ãº -->

<!-- Grave accent -->
&agrave; &egrave; &igrave; &ograve; &ugrave;
<!-- Ã  Ã¨ Ã¬ Ã² Ã¹ -->

<!-- Circumflex -->
&acirc; &ecirc; &icirc; &ocirc; &ucirc;
<!-- Ã¢ Ãª Ã® Ã´ Ã» -->

<!-- Tilde -->
&atilde; &ntilde; &otilde;
<!-- Ã£ Ã± Ãµ -->

<!-- Umlaut -->
&auml; &euml; &iuml; &ouml; &uuml;
<!-- Ã¤ Ã« Ã¯ Ã¶ Ã¼ -->

<!-- Example -->
<p>Caf&eacute;</p>
<!-- CafÃ© -->
<p>Se&ntilde;or</p>
<!-- SeÃ±or -->
```

### Numeric Entities

You can also use numeric codes:

```html
<!-- Decimal -->
&#169;
<!-- Â© -->
&#8364;
<!-- â‚¬ -->

<!-- Hexadecimal -->
&#x00A9;
<!-- Â© -->
&#x20AC;
<!-- â‚¬ -->

<!-- Example -->
<p>Copyright &#169; 2026</p>
<p>Price: &#8364;100</p>
```

### Complete Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML Entities Example</title>
  </head>
  <body>
    <h1>HTML Entities Demo</h1>

    <!-- Reserved characters -->
    <p>Use &lt;strong&gt; for <strong>bold text</strong></p>

    <!-- Copyright -->
    <p>&copy; 2026 My Company. All rights reserved.</p>

    <!-- Currency -->
    <p>Price: &euro;99.99 or &pound;79.99 or &yen;10,000</p>

    <!-- Math -->
    <p>5 &times; 3 = 15</p>
    <p>10 &divide; 2 = 5</p>
    <p>Temperature: 25&deg;C</p>

    <!-- Fractions -->
    <p>&frac14; + &frac14; = &frac12;</p>

    <!-- Quotes -->
    <p>&ldquo;Hello, World!&rdquo; he said.</p>

    <!-- Arrows -->
    <p>Navigate: &larr; Previous | Next &rarr;</p>

    <!-- Non-breaking space -->
    <p>Mr.&nbsp;Smith won&nbsp;$1,000</p>

    <!-- Accented characters -->
    <p>Jalape&ntilde;o â€¢ Caf&eacute; â€¢ R&eacute;sum&eacute;</p>

    <!-- Symbols -->
    <p>Rating: &hearts; &hearts; &hearts; &hearts;</p>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 16. Meta Tags

### Definition

**Meta tags** provide metadata about the HTML document. They're placed in the `<head>` section and are not displayed on the page but used by browsers, search engines, and other web services.

### Character Encoding

```html
<!-- Essential: Character set -->
<meta charset="UTF-8" />
```

### Viewport (Responsive Design)

```html
<!-- Essential for mobile responsive design -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- With additional controls -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
/>
```

### SEO Meta Tags

```html
<!-- Page description (appears in search results) -->
<meta
  name="description"
  content="Learn HTML from basics to advanced with comprehensive examples and best practices."
/>

<!-- Keywords (less important now) -->
<meta name="keywords" content="HTML, web development, tutorial,coding" />

<!-- Author -->
<meta name="author" content="John Doe" />

<!-- Robots (search engine crawling) -->
<meta name="robots" content="index, follow" />
<meta name="robots" content="noindex, nofollow" />
<!-- Don't index -->

<!-- Google-specific -->
<meta name="googlebot" content="index, follow" />
```

### Open Graph (Social Media)

```html
<!-- Facebook, LinkedIn, etc. -->
<meta property="og:title" content="HTML Complete Guide" />
<meta
  property="og:description"
  content="Comprehensive HTML learning resource"
/>
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com/html-guide" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="My Website" />
<meta property="og:locale" content="en_US" />
```

### Twitter Cards

```html
<!-- Twitter-specific meta tags -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@username" />
<meta name="twitter:creator" content="@username" />
<meta name="twitter:title" content="HTML Complete Guide" />
<meta name="twitter:description" content="Learn HTML comprehensively" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

### Security Meta Tags

```html
<!-- Content Security Policy -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'" />

<!-- X-Frame-Options (prevent clickjacking) -->
<meta http-equiv="X-Frame-Options" content="DENY" />
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />

<!-- X-Content-Type-Options -->
<meta http-equiv="X-Content-Type-Options" content="nosniff" />

<!-- Referrer Policy -->
<meta name="referrer" content="no-referrer" />
<meta name="referrer" content="origin" />
```

### Refresh and Redirect

```html
<!-- Refresh page every 30 seconds -->
<meta http-equiv="refresh" content="30" />

<!-- Redirect after 5 seconds -->
<meta http-equiv="refresh" content="5;url=https://example.com" />
```

### Mobile App Meta Tags

```html
<!-- iOS -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-title" content="App Name" />

<!-- Android -->
<meta name="mobile-web-app-capable" content="yes" />
<meta name="theme-color" content="#4285f4" />
```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- SEO Meta Tags -->
    <title>HTML Complete Learning Guide | Web Development Tutorial</title>
    <meta
      name="description"
      content="Master HTML from basics to advanced with comprehensive examples, best practices, and interview preparation guide."
    />
    <meta
      name="keywords"
      content="HTML, HTML5, web development, tutorial, learning, guide"
    />
    <meta name="author" content="John Doe" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://example.com/html-guide" />
    <meta property="og:title" content="HTML Complete Learning Guide" />
    <meta
      property="og:description"
      content="Master HTML with comprehensive examples"
    />
    <meta property="og:image" content="https://example.com/og-image.jpg" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://example.com/html-guide" />
    <meta name="twitter:title" content="HTML Complete Learning Guide" />
    <meta
      name="twitter:description"
      content="Master HTML with comprehensive examples"
    />
    <meta
      name="twitter:image"
      content="https://example.com/twitter-image.jpg"
    />

    <!-- Mobile -->
    <meta name="theme-color" content="#4285f4" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <!-- Security -->
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />

    <link rel="canonical" href="https://example.com/html-guide" />
  </head>
  <body>
    <h1>HTML Guide</h1>
  </body>
</html>
```

---

?? [Back to Top](#table-of-contents)

## 17. HTML Formatting Elements

### Text Formatting Tags

```html
<!-- Bold -->
<strong>Important text (semantic)</strong>
<!-- Screen readers emphasize -->
<b>Bold text (visual only)</b>

<!-- Italic -->
<em>Emphasized text (semantic)</em>
<!-- Screen readers emphasize -->
<i>Italic text (visual only)</i>

<!--Underline -->
<u>Underlined text</u>

<!-- Strike through -->
<s>Strikethrough text</s>
<del>Deleted text (semantic)</del>

<!-- Inserted text -->
<ins>Inserted/added text</ins>

<!-- Small text -->
<small>Fine print / small text</small>

<!-- Marked/highlighted -->
<mark>Highlighted text</mark>

<!-- Subscript and Superscript -->
H<sub>2</sub>O
<!-- Water formula -->
E = mc<sup>2</sup>
<!-- Einstein's equation -->
```

### Code and Technical Formatting

```html
<!-- Code snippet -->
<code>const x = 10;</code>

<!-- Keyboard input -->
Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy

<!-- Sample output -->
<samp>Error: File not found</samp>

<!-- Variable -->
<var>x</var> + <var>y</var> = <var>z</var>

<!-- Preformatted text (preserves spaces and line breaks) -->
<pre>
function hello() {
    console.log("Hello!");
}
</pre>

<!-- Code block with pre -->
<pre><code>
&lt;html&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
```

### Quotations

```html
<!-- Inline quote -->
<q>This is a short quote</q>

<!-- Block quote -->
<blockquote cite="https://source.com">
  This is a longer quotation that stands alone. Often displayed as an indented
  block.
</blockquote>

<!-- Citation -->
<cite>The Great Gatsby</cite> by F. Scott Fitzgerald

<!-- Abbreviation -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- Definition -->
<dfn>HTTP</dfn> is the protocol used for web communication.

<!-- Address -->
<address>
  Written by <a href="mailto:john@example.com">John Doe</a><br />
  123 Main Street<br />
  City, State 12345
</address>
```

### Text Direction and Language

```html
<!-- Bi-directional override -->
<bdo dir="rtl">This text goes right to left</bdo>
<bdo dir="ltr">This text goes left to right</bdo>

<!-- Bi-directional isolation -->
<p>User <bdi>Ø¥ÙŠØ§Ù†</bdi> posted a comment.</p>

<!-- Ruby annotation (East Asian typography) -->
<ruby> æ¼¢ <rt>kan</rt> å­— <rt>ji</rt> </ruby>
```

### Complete Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML Formatting Examples</title>
    <style>
      mark {
        background-color: yellow;
      }
      del {
        color: red;
      }
      ins {
        color: green;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <h1>Text Formatting Demo</h1>

    <!-- Emphasis -->
    <p>
      This is <strong>very important</strong> and this is <em>emphasized</em>.
    </p>

    <!-- Scientific notation -->
    <p>Water is H<sub>2</sub>O. Einstein's equation: E=mc<sup>2</sup></p>

    <!-- Code examples -->
    <p>Use the <code>console.log()</code> function to debug.</p>
    <p>Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save.</p>

    <!-- Edits -->
    <p>Price: <del>$100</del> <ins>$79.99</ins></p>

    <!-- Highlighted search results -->
    <p>Search results for "HTML": <mark>HTML</mark> is a markup language</p>

    <!-- Quotes -->
    <p>As the saying goes, <q>Practice makes perfect</q>.</p>

    <blockquote>
      The only way to do great work is to love what you do.
      <footer>â€” Steve Jobs</footer>
    </blockquote>

    <!-- Abbreviations -->
    <p>
      <abbr title="World Wide Web">WWW</abbr> was invented by Tim Berners-Lee.
    </p>

    <!-- Technical terms -->
    <p>
      <dfn>Responsive design</dfn> means your website adapts to screen size.
    </p>

    <!-- Contact info -->
    <address>
      Contact: <a href="mailto:info@example.com">info@example.com</a><br />
      Phone: <a href="tel:+1234567890">+1-234-567-890</a>
    </address>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 18. ID vs Class

### Definition

Both `id` and `class` are HTML attributes used to identify elements, but they have different purposes and rules.

### ID Attribute

**Unique identifier** - Must be unique on the page

```html
<!-- ID Syntax -->
<div id="header">Header content</div>

<!-- CSS Targeting with # -->
<style>
  #header {
    background-color: blue;
  }
</style>

<!-- JavaScript Selection -->
<script>
  const header = document.getElementById("header");
  // or
  const header = document.querySelector("#header");
</script>
```

### Class Attribute

**Reusable identifier** - Can be used on multiple elements

```html
<!-- Class Syntax -->
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>

<!-- Multiple classes (space-separated) -->
<div class="card featured">Featured Card</div>

<!-- CSS Targeting with . -->
<style>
  .card {
    border: 1px solid #ccc;
    padding: 20px;
  }

  .featured {
    background-color: gold;
  }
</style>

<!-- JavaScript Selection -->
<script>
  const cards = document.getElementsByClassName("card");
  // or
  const cards = document.querySelectorAll(".card");
</script>
```

### Comparison Table

| Feature            | ID                     | Class                        |
| ------------------ | ---------------------- | ---------------------------- |
| **Uniqueness**     | Must be unique on page | Can be reused                |
| **Per element**    | One ID per element     | Multiple classes per element |
| **CSS selector**   | `#idname`              | `.classname`                 |
| **Priority**       | Higher specificity     | Lower specificity            |
| **Use for anchor** | âœ… Yes (`#section`)   | âŒ No                        |
| **Use for forms**  | âœ… Yes (label `for`)  | âŒ No                        |
| **JavaScript**     | `getElementById()`     | `getElementsByClassName()`   |

### When to Use ID

```html
<!-- âœ… Page sections (navigation anchors) -->
<section id="about">About Us</section>
<a href="#about">Go to About</a>

<!-- âœ… Form labels -->
<label for="email">Email:</label>
<input type="email" id="email" />

<!-- âœ… Unique page elements -->
<header id="main-header"></header>
<nav id="primary-nav"></nav>
<main id="content"></main>
<footer id="site-footer"></footer>

<!-- âœ… JavaScript manipulation of specific element -->
<button id="submit-btn">Submit</button>
<script>
  document.getElementById("submit-btn").addEventListener("click", submit);
</script>
```

### When to Use Class

```html
<!-- âœ… Styling multiple elements -->
<div class="product-card">Product 1</div>
<div class="product-card">Product 2</div>
<div class="product-card">Product 3</div>

<!-- âœ… Utility classes -->
<p class="text-center text-bold text-large">Centered bold text</p>

<!-- âœ… Component variations -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-danger">Delete</button>

<!-- âœ… State classes -->
<div class="modal hidden">Modal content</div>
<button class="active">Active button</button>
```

### Multiple Classes

```html
<!-- Combine multiple classes -->
<div class="card featured shadow rounded">Premium Card</div>

<style>
  .card {
    border: 1px solid #ddd;
    padding: 20px;
  }
  .featured {
    background: gold;
  }
  .shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .rounded {
    border-radius: 8px;
  }
</style>
```

### CSS Specificity

```html
<style>
  /* ID has higher specificity */
  #unique {
    color: red;
  } /* Specificity: 100 */
  .class {
    color: blue;
  } /* Specificity: 10 */
  div {
    color: green;
  } /* Specificity: 1 */
</style>

<div id="unique" class="class">This text will be RED (ID wins)</div>
```

### Best Practices

```html
<!-- âœ… Good: Descriptive names -->
<div id="user-profile" class="card highlighted">
  <!-- âŒ Bad: Generic names -->
  <div id="div1" class="box1">
    <!-- âœ… Good: Use class for styling -->
    <button class="btn-primary">Click me</button>

    <!-- âŒ Bad: Use ID for styling (less reusable) -->
    <button id="blue-button" style="color: blue;">Click me</button>

    <!-- âœ… Good: Kebab-case naming -->
    <div class="user-profile-card">
      <!-- âŒ Bad: Spaces or special characters -->
      <div class="user profile card">
        <!-- Invalid! -->
        <div id="user@profile">
          <!-- Invalid! -->

          <!-- âœ… Good: Semantic naming -->
          <nav class="primary-navigation">
            <!-- âŒ Bad: Presentational naming -->
            <nav class="blue-background-menu"></nav>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>ID vs Class Example</title>
    <style>
      /* ID for unique layout elements */
      #header {
        background-color: #333;
        color: white;
        padding: 20px;
      }

      #main-content {
        max-width: 1200px;
        margin: 0 auto;
      }

      /* Classes for reusable styles */
      .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
      }

      .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .btn-primary {
        background-color: #007bff;
        color: white;
      }

      .btn-secondary {
        background-color: #6c757d;
        color: white;
      }

      .text-center {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <!-- Unique IDs for page structure -->
    <header id="header">
      <h1>My Website</h1>
    </header>

    <main id="main-content">
      <!-- Reusable classes for components -->
      <div class="card">
        <h2>Card 1</h2>
        <p>Content here</p>
        <button class="btn btn-primary">Read More</button>
      </div>

      <div class="card">
        <h2>Card 2</h2>
        <p>Content here</p>
        <button class="btn btn-secondary">Learn More</button>
      </div>

      <div class="card text-center">
        <h2>Centered Card</h2>
        <button class="btn btn-primary">Click Me</button>
      </div>
    </main>

    <footer id="footer" class="text-center">&copy; 2026 My Website</footer>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 19. DOM Tree Building

### Definition

The **DOM (Document Object Model)** is a tree-like structure that represents the HTML document as a hierarchy of nodes. Browsers build this tree when parsing HTML.

### DOM Tree Structure

```
Document
â”‚
â””â”€â”€ html
    â”œâ”€â”€ head
    â”‚   â”œâ”€â”€ meta
    â”‚   â”œâ”€â”€ title
    â”‚   â”‚   â””â”€â”€ "Page Title" (text node)
    â”‚   â””â”€â”€ link
    â””â”€â”€ body
        â”œâ”€â”€ header
        â”‚   â””â”€â”€ h1
        â”‚       â””â”€â”€ "Welcome" (text node)
        â”œâ”€â”€ main
        â”‚   â”œâ”€â”€ p
        â”‚   â”‚   â””â”€â”€ "Paragraph text" (text node)
        â”‚   â””â”€â”€ div
        â”‚       â”œâ”€â”€ span
        â”‚       â””â”€â”€ a
        â””â”€â”€ footer
```

### HTML to DOM Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello</h1>
    <p>Welcome to <strong>HTML</strong>!</p>
  </body>
</html>
```

**Resulting DOM Tree:**

```
Document
â””â”€â”€ html
    â”œâ”€â”€ head
    â”‚   â””â”€â”€ title
    â”‚       â””â”€â”€ #text: "My Page"
    â””â”€â”€ body
        â”œâ”€â”€ h1
        â”‚   â””â”€â”€ #text: "Hello"
        â””â”€â”€ p
            â”œâ”€â”€ #text: "Welcome to "
            â”œâ”€â”€ strong
            â”‚   â””â”€â”€ #text: "HTML"
            â””â”€â”€ #text: "!"
```

### Types of DOM Nodes

```javascript
// 1. ELEMENT_NODE (value: 1)
<div>Element</div>

// 2. ATTRIBUTE_NODE (value: 2) - deprecated
<div id="test">

// 3. TEXT_NODE (value: 3)
"Text content"

// 4. COMMENT_NODE (value: 8)
<!-- Comment -->

// 5. DOCUMENT_NODE (value: 9)
document

// 6. DOCUMENT_TYPE_NODE (value: 10)
<!DOCTYPE html>
```

### Parent-Child Relationships

```html
<div id="parent">
  <p id="child1">First child</p>
  <p id="child2">Second child</p>
  <p id="child3">Third child</p>
</div>

<script>
  const parent = document.getElementById("parent");
  const child1 = document.getElementById("child1");

  // Parent
  console.log(child1.parentElement); // div#parent

  // Children
  console.log(parent.children); // [p#child1, p#child2, p#child3]
  console.log(parent.firstElementChild); // p#child1
  console.log(parent.lastElementChild); // p#child3

  // Siblings
  console.log(child1.nextElementSibling); // p#child2
  console.log(child2.previousElementSibling); // p#child1
</script>
```

### DOM Traversal Methods

```javascript
// Get elements
document.getElementById("id");
document.getElementsByClassName("class");
document.getElementsByTagName("div");
document.querySelector(".class");
document.querySelectorAll(".class");

// Navigate tree
element.parentElement;
element.children;
element.firstElementChild;
element.lastElementChild;
element.nextElementSibling;
element.previousElementSibling;

// Get all descendants
element.querySelectorAll("*");
```

### DOM Building Process

```
## 1. HTML Parsing
   â†“
## 2. Tokenization (breaking HTML into tokens)
   â†“
## 3. Tree Construction (building DOM tree)
   â†“
## 4. DOM Tree Complete
   â†“
## 5. CSSOM Tree Built (CSS)
   â†“
## 6. Render Tree (DOM + CSSOM)
   â†“
## 7. Layout (calculate positions)
   â†“
## 8. Paint (render to screen)
```

### How Br owsers Build the DOM

```html
<!-- Browser reads HTML -->
<!DOCTYPE html>
<html>
  <head>
    <title>Page</title>
  </head>
  <body>
    <div class="container">
      <h1>Title</h1>
      <p>Paragraph</p>
    </div>
  </body>
</html>

<!-- Step 1: Create Document node -->
<!-- Step 2: Create html element, add to Document -->
<!-- Step 3: Create head element, add to html -->
<!-- Step 4: Create title element with text node, add to head -->
<!-- Step 5: Create body element, add to html -->
<!-- Step 6: Create div element, add to body -->
<!-- Step 7: Create h1 with text, add to div -->
<!-- Step 8: Create p with text, add to div -->
<!-- Result: Complete DOM tree -->
```

### DOM Manipulation

```html
<div id="container"></div>

<script>
  const container = document.getElementById("container");

  // Create element
  const paragraph = document.createElement("p");

  // Create text node
  const text = document.createTextNode("Hello World");

  // Append text to paragraph
  paragraph.appendChild(text);

  // Append paragraph to container
  container.appendChild(paragraph);

  // Shorthand
  container.innerHTML = "<p>Hello World</p>";
</script>
```

### Critical Rendering Path

```javascript
// 1. DOM Construction
// Browser parses HTML â†’ builds DOM tree

// 2. CSSOM Construction
// Browser parses CSS â†’ builds CSSOM tree

// 3. Render Tree
// DOM + CSSOM = Render Tree (what to show)

// 4. Layout
// Calculate exact position and size

// 5. Paint
// Fill pixels on screen
```

### Best Practices for DOM Performance

```html
<!-- âœ… Good: Minimize DOM depth -->
<div>
  <p>Content</p>
</div>

<!-- âŒ Bad: Excessive nesting -->
<div>
  <div>
    <div>
      <div>
        <div>
          <p>Content</p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- âœ… Good: Batch DOM updates -->
<script>
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
  }
  ul.appendChild(fragment); // Single update
</script>

<!-- âŒ Bad: Multiple updates -->
<script>
  for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    ul.appendChild(li); // 100 updates!
  }
</script>
```

---

This covers HTML Formatting Elements, ID vs Class, and DOM Tree Building comprehensively.

## 20. Semantic Tags Deep Dive

### Complete List of Semantic HTML5 Elements

#### Document Structure

```html
<!-- Header (page or section header) -->
<header>
  <h1>Site Title</h1>
  <nav><!-- navigation --></nav>
</header>

<!-- Navigation -->
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>

<!-- Main content (only ONE per page) -->
<main>
  <!-- Primary page content -->
</main>

<!-- Article (self-contained content) -->
<article>
  <h2>Article Title</h2>
  <p>Article content...</p>
</article>

<!-- Section (thematic grouping) -->
<section>
  <h2>Section Title</h2>
  <p>Section content...</p>
</section>

<!-- Aside (tangentially related content) -->
<aside>
  <h3>Related Links</h3>
  <ul>
    ...
  </ul>
</aside>

<!-- Footer (page or section footer) -->
<footer>
  <p>&copy; 2026 Company</p>
</footer>

<!-- Details/Summary (disclosure widget) -->
<details>
  <summary>Click to expand</summary>
  <p>Hidden content revealed</p>
</details>

<!-- Dialog (modal or dialog box) -->
<dialog open>
  <p>Dialog content</p>
  <button>Close</button>
</dialog>
```

#### Text Content

```html
<!-- Figure with caption -->
<figure>
  <img src="photo.jpg" alt="Photo" />
  <figcaption>Photo description</figcaption>
</figure>

<!-- Time/Date -->
<p>Published on <time datetime="2026-02-01">February 1, 2026</time></p>

<!-- Abbreviation -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- Address contact info -->
<address>
  Contact: <a href="mailto:info@example.com">info@example.com</a>
</address>

<!-- Mark (highlighted) -->
<p>Search for <mark>keyword</mark> in text</p>

<!-- Progress indicator -->
<progress value="70" max="100">70%</progress>

<!-- Meter (gauge) -->
<meter value="0.7" min="0" max="1">70%</meter>
```

### Semantic vs Non-Semantic Comparison

```html
<!--  âŒ Non-Semantic (meaningless) -->
<div id="header">
  <div id="nav">
    <div class="link">Home</div>
  </div>
</div>
<div id="content">
  <div class="post">
    <div class="title">Title</div>
    <div class="body">Content</div>
  </div>
</div>
<div id="sidebar">Related</div>
<div id="footer">Footer</div>

<!-- âœ…  Semantic (meaningful) -->
<header>
  <nav>
    <a href="#home">Home</a>
  </nav>
</header>
<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>
<aside>Related</aside>
<footer>Footer</footer>
```

### Complete Semantic Page Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML5 Page</title>
</head>
<body>
  <!-- Page header -->
  <header>
    <h1>My Website</h1>
    <nav aria-label="Primary navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main content -->
  <main>
    <!-- Article section -->
    <article>
      <header>
        <h2>The Rise of Semantic HTML</h2>
        <p>
          Published on
          <time datetime="2026-02-01">February 1, 2026</time>
          by <address><a href="mailto:author@example.com">John Doe</a></address>
        </p>
      </header>

      <section>
        <h3>Introduction</h3>
        <p>Article introduction...</p>
      </section>

      <section>
        <h3>Main Points</h3>
        <p>Main content...</p>

        <figure>
          <img src="diagram.png" alt="HTML5 structure">
          <figcaption>Fig 1. HTML5 semantic structure</figcaption>
        </figure>
      </section>

      <footer>
        <p>Article tags: <a href="#html">HTML</a>, <a href="#web">Web</a></p>
      </footer>
    </article>

    <!-- Another article -->
    <article>
      <h2>Understanding Web Accessibility</h2>
      <p>Content about accessibility...</p>

      <details>
        <summary>More information</summary>
        <p>Additional details here...</p>
      </details>
    </article>
  </main>

  <!-- Sidebar -->
  <aside>
    <section>
      <h3>Related Articles</h3>
      <ul>
        <li><a href="#article1">Article 1</a></li>
        <li><a href="#article2">Article 2</a></li>
      </ul>
    </section>

    <section>
      <h3>Newsletter</h3>
      <form>
        <label for="email">Subscribe:</label>
        <input type="email" id="email" required>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  </aside>

  <!-- Page footer -->
  <footer>
    <nav aria-label="Footer navigation">
      <ul>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#terms">Terms</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <p>&copy; 2026 My Website. All rights reserved.</p>
  </footer>
</body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 21. Shadow DOM

### Definition

**Shadow DOM** allows you to attach a hidden, encapsulated DOM tree to an element. Styles and scripts inside the shadow DOM do n't affect the outside, and vice versa.

### Basic Concept

```
Regular DOM (Light DOM)
â””â”€â”€ <div id="host">
    â””â”€â”€ Shadow DOM (isolated)
        â””â”€â”€ <style> (scoped styles)
        â””â”€â”€ <p>Shadow content</p>
```

### Creating Shadow DOM

```html
<div id="host"></div>

<script>
  // 1. Get the host element
  const host = document.getElementById("host");

  // 2. Attach shadow root
  const shadowRoot = host.attachShadow({ mode: "open" });

  // 3. Add content to shadow DOM
  shadowRoot.innerHTML = `
    <style>
      p { color: red; }
    </style>
    <p>This is in the shadow DOM</p>
  `;
</script>
```

### Shadow DOM Modes

```javascript
// Open: Can access shadow DOM from outside
const shadowOpen = element.attachShadow({ mode: "open" });
console.log(element.shadowRoot); // Accessible

// Closed: Cannot access from outside
const shadowClosed = element.attachShadow({ mode: "closed" });
console.log(element.shadowRoot); // null
```

### Style Encapsulation

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* This style does NOT affect shadow DOM */
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Regular DOM paragraph (blue)</p>

    <div id="shadow-host"></div>

    <script>
      const host = document.getElementById("shadow-host");
      const shadow = host.attachShadow({ mode: "open" });

      shadow.innerHTML = `
      <style>
        /* Scoped to shadow DOM only */
        p { color: red; }
      </style>
      <p>Shadow DOM paragraph (red)</p>
    `;
    </script>
  </body>
</html>
```

### Slots (Content Projection)

```html
<div id="card-host">
  <span slot="title">Card Title</span>
  <p slot="content">Card content goes here</p>
</div>

<script>
  const host = document.getElementById("card-host");
  const shadow = host.attachShadow({ mode: "open" });

  shadow.innerHTML = `
    <style>
      .card {
        border: 1px solid #ccc;
        padding: 20px;
      }
      .title {
        font-weight: bold;
        font-size: 24px;
      }
    </style>
    <div class="card">
      <div class="title">
        <slot name="title">Default Title</slot>
      </div>
      <div class="body">
        <slot name="content">Default content</slot>
      </div>
    </div>
  `;
</script>
```

### Web Components with Shadow DOM

```html
<custom-card>
  <span slot="title">My Custom Card</span>
  <p slot="content">This is the card content</p>
</custom-card>

<script>
  class CustomCard extends HTMLElement {
    constructor() {
      super();

      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: "open" });

      // Create template
      shadow.innerHTML = `
        <style>
          :host {
            display: block;
          }
          .card {
            border: 2px solid #007bff;
            border-radius: 8px;
            padding: 20px;
            margin: 10px 0;
          }
          .title {
            color: #007bff;
            font-size: 24px;
            margin-bottom: 10px;
          }
        </style>
        <div class="card">
          <div class="title">
            <slot name="title">Title</slot>
          </div>
          <div class="content">
            <slot name="content">Content</slot>
          </div>
        </div>
      `;
    }
  }

  // Define custom element
  customElements.define("custom-card", CustomCard);
</script>
```

### Shadow DOM Styling

```html
<script>
  const shadow = host.attachShadow({ mode: "open" });

  shadow.innerHTML = `
    <style>
      /* :host - style the host element */
      :host {
        display: block;
        border: 1px solid black;
      }
      
      /* :host() - conditional styling */
      :host(.featured) {
        border-color: gold;
      }
      
      /* :host-context() - based on ancestor */
      :host-context(.dark-theme) {
        background: #333;
        color: white;
      }
      
      /* ::slotted() - style slotted content */
      ::slotted(p) {
        color: blue;
      }
    </style>
    <slot></slot>
  `;
</script>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 22. iframe vs Embedded Content

### iframe

```html
<!-- Embeds entire external document -->
<iframe src="https://example.com" width="800" height="600"></iframe>
```

**Pros:**

- Can embed any external website
- Complete document isolation
- Separate browsing context

**Cons:**

- Heavy (loads entire page)
- Can be blocked by X-Frame-Options
- Security concerns
- Not SEO-friendly

### Embedded Content Elements

#### `<object>` - Generic embedded content

```html
<!-- PDF -->
<object data="document.pdf" type="application/pdf" width="800" height="600">
  <p>PDF cannot be displayed. <a href="document.pdf">Download</a></p>
</object>

<!-- Image -->
<object data="image.svg" type="image/svg+xml"></object>

<!-- Flash (deprecated) -->
<object data="movie.swf" type="application/x-shockwave-flash"></object>
```

#### `<embed>` - Simple embedded content

```html
<!-- PDF -->
<embed src="document.pdf" type="application/pdf" width="800" height="600" />

<!-- Video -->
<embed src="video.mp4" type="video/mp4" />

<!-- Plugin content -->
<embed src="animation.swf" type="application/x-shockwave-flash" />
```

#### `<video>` - Native video

```html
<video controls width="800">
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.webm" type="video/webm" />
  Your browser doesn't support video.
</video>
```

#### `<audio>` - Native audio

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  Your browser doesn't support audio.
</audio>
```

### Comparison Table

| Feature        | `<iframe>`        | `<object>`    | `<embed>`      | `<video>`/`<audio>` |
| -------------- | ----------------- | ------------- | -------------- | ------------------- |
| **Purpose**    | Full webpage      | Generic files | Plugin content | Media only          |
| **Fallback**   | Limited           | âœ… Yes       | âŒ No          | âœ… Yes             |
| **SEO**        | âŒ Poor           | âŒ Poor       | âŒ Poor        | âœ… Good            |
| **JS API**     | Limited           | Limited       | Limited        | âœ… Rich            |
| **Security**   | Sandbox available | Less secure   | Less secure    | Secure              |
| **Modern use** | Still common      | Rare          | Deprecated     | âœ… Preferred       |

### When to Use Each

```html
<!-- âœ… Use iframe for: External webpages, maps, embeds -->
<iframe src="https://www.google.com/maps/embed..."></iframe>

<!-- âœ… Use video/audio for: Media files -->
<video src="movie.mp4" controls></video>

<!-- âœ… Use object for: PDFs with fallback -->
<object data="doc.pdf">
  <embed src="doc.pdf" />
</object>

<!-- âŒ Avoid embed: Deprecated, use video/audio instead -->
<embed src="movie.mp4" />
<!-- Use <video> instead -->
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 23. SVG vs Canvas

### SVG (Scalable Vector Graphics)

**XML-based, DOM elements**

```html
<!-- Inline SVG -->
<svg width="200" height="200">
  <circle cx="100" cy="100" r="80" fill="blue" />
  <rect x="50" y="50" width="100" height="100" fill="red" />
  <line x1="0" y1="0" x2="200" y2="200" stroke="green" stroke-width="2" />
  <text x="100" y="100" text-anchor="middle" fill="white">SVG</text>
</svg>

<!-- External SVG -->
<img src="image.svg" alt="SVG image" />
<object data="image.svg" type="image/svg+xml"></object>
```

### Canvas (Bitmap Graphics)

**JavaScript-based, pixel manipulation**

```html
<canvas id="myCanvas" width="200" height="200"></canvas>

<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Draw circle
  ctx.beginPath();
  ctx.arc(100, 100, 80, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

  // Draw rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 100, 100);

  // Draw line
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 200);
  ctx.stroke();

  // Draw text
  ctx.fillStyle = "white";
  ctx.font = "24px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Canvas", 100, 105);
</script>
```

### Comparison Table

| Feature           | SVG                           | Canvas                    |
| ----------------- | ----------------------------- | ------------------------- |
| **Format**        | Vector (XML)                  | Bitmap (pixels)           |
| **Scalability**   | âœ… Infinite, no quality loss | âŒ Pixelated when scaled  |
| **DOM**           | âœ… Part of DOM               | âŒ Single element         |
| **Events**        | âœ… Per element               | âŒ On canvas only         |
| **Accessibility** | âœ… Good (text, alt)          | âŒ Limited                |
| **Best for**      | Icons, logos, simple graphics | Games, complex animations |
| **Performance**   | Slow with many objects        | Fast with many objects    |
| **File size**     | Smaller for simple graphics   | Larger                    |
| **SEO**           | âœ… Searchable                | âŒ Not searchable         |
| **Editing**       | âœ… Easy (CSS, JS, XML)       | âŒ Must redraw            |

### When to Use SVG

```html
âœ… **Use SVG for:** - Icons and logos - Charts and graphs - Infographics - UI
elements - Responsive graphics - Interactive elements - Animations (simple) -
Need scalability

<svg viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" fill="gold" />
  <text x="50" y="55" text-anchor="middle" font-size="20">â˜…</text>
</svg>
```

### When to Use Canvas

```javascript
âœ… **Use Canvas for:**
- Games
- Complex animations
- Image manipulation
 - Video processing
- Drawing applications
- Data visualization (many points)
- Real-time graphics

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Game loop
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw game objects
  // ... complex rendering

  requestAnimationFrame(animate);
}
animate();
```

### SVG Animation Example

```html
<svg width="200" height="200">
  <circle cx="100" cy="100" r="50" fill="red">
    <animate
      attributeName="r"
      from="50"
      to="80"
      dur="1s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

### Canvas Animation Example

```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let radius = 50;
let growing = true;

function animate() {
  ctx.clearRect(0, 0, 200, 200);

  ctx.beginPath();
  ctx.arc(100, 100, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();

  if (growing) {
    radius += 1;
    if (radius >= 80) growing = false;
  } else {
    radius -= 1;
    if (radius <= 50) growing = true;
  }

  requestAnimationFrame(animate);
}
animate();
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 24. Name Attribute in Forms

### Definition

The `name` attribute identifies form fields when data is submitted. It's the **key** in key-value pairs sent to the server.

### Basic Usage

```html
<form action="/submit" method="POST">
  <input type="text" name="username" />
  <input type="email" name="email" />
  <button type="submit">Submit</button>
</form>

<!-- Submitted data: -->
<!-- username=john&email=john@example.com -->
```

### Name vs ID

```html
<!-- name: for form submission -->
<!-- id: for JavaScript, labels,CSS -->

<label for="user-email">Email:</label>
<input
  type="email"
  id="user-email"   <!-- for label and CSS -->
  name="email"      <!-- for form submission -->
>
```

### Radio Buttons (Same name = group)

```html
<form>
  <p>Select your gender:</p>

  <!-- All radio buttons in a group must have same name -->
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Male</label>

  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Female</label>

  <input type="radio" name="gender" value="other" id="other" />
  <label for="other">Other</label>
</form>

<!-- Only ONE value submitted: gender=male -->
```

### Checkboxes (Different names or arrays)

```html
<!-- Individual checkboxes -->
<input type="checkbox" name="subscribe" value="yes" />
<input type="checkbox" name="terms" value="accepted" />

<!-- OR array notation for multiple values -->
<h3>Select interests:</h3>
<input type="checkbox" name="interests[]" value="coding" /> Coding<br />
<input type="checkbox" name="interests[]" value="design" /> Design<br />
<input type="checkbox" name="interests[]" value="writing" /> Writing

<!-- Submitted: interests[]=coding&interests[]=design -->
```

### Select Dropdowns

```html
<!-- Single select -->
<select name "country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</select>

<!-- Multiple select -->
<select name="skills[]" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>
```

### Complete Form Example

```html
<form action="/register" method="POST">
  <!-- Text input -->
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <!-- Email -->
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <!-- Password -->
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />

  <!-- Radio buttons -->
  <fieldset>
    <legend>Gender:</legend>
    <input type="radio" name="gender" value="male" id="male" />
    <label for="male">Male</label>

    <input type="radio" name="gender" value="female" id="female" />
    <label for="female">Female</label>
  </fieldset>

  <!-- Checkboxes -->
  <fieldset>
    <legend>Interests:</legend>
    <input type="checkbox" name="interests[]" value="sports" id="sports" />
    <label for="sports">Sports</label>

    <input type="checkbox" name="interests[]" value="music" id="music" />
    <label for="music">Music</label>
  </fieldset>

  <!-- Select -->
  <label for="country">Country:</label>
  <select name="country" id="country">
    <option value="">Select...</option>
    <option value="us">USA</option>
    <option value="uk">UK</option>
  </select>

  <!-- Textarea -->
  <label for="message">Message:</label>
  <textarea name="message" id="message" rows="4"></textarea>

  <!-- Submit -->
  <button type="submit">Register</button>
</form>

<!-- Submitted data:
username=john
&email=john@example.com
&password=secret123
&gender=male
&interests[]=sports
&interests[]=music
&country=us
&message=Hello
-->
```

---

?? [Back to Top](#table-of-contents)

## 25. Required vs Readonly vs Disabled

### Required

Makes a form field **mandatory** - form cannot be submitted without a value.

```html
<!-- Text input -->
<input type="text" name="username" required />

<!-- Email -->
<input type="email" name="email" required />

<!-- Checkbox must be checked -->
<input type="checkbox" name="terms" required /> I agree to terms

<!-- Select -->
<select name="country" required>
  <option value="">Choose...</option>
  <option value="us">USA</option>
</select>

<!-- Textarea -->
<textarea name="message" required></textarea>
```

**Characteristics:**

- âœ… Can be edited
- âœ… Value is submitted
- âœ… Browser shows validation message
- âœ… Can use `:required` CSS selector

### Readonly

Field **cannot be edited** but value IS submitted.

```html
<input type="text" name="username" value="john_doe" readonly />

<!-- Common use cases -->
<input type="text" value="john@example.com" readonly />
<textarea readonly>This text cannot be edited</textarea>

<!-- Often used with JavaScript -->
<input type="text" id="total" readonly />
<script>
  // Calculated field
  document.getElementById("total").value = calculateTotal();
</script>
```

**Characteristics:**

- âŒ Cannot be edited
- âœ… Value IS submitted
- âœ… Can be focused
- âœ… Can select/copy text
- âœ… Can use `:read-only` CSS selector

### Disabled

Field is **completely disabled** - cannot edit, and value is NOT submitted.

```html
<input type="text" name="field" disabled />

<button disabled>Cannot click</button>

<select disabled>
  <option>Option 1</option>
</select>

<!-- Disable entire fieldset -->
<fieldset disabled>
  <legend>Disabled Section</legend>
  <input type="text" name="field1" />
  <input type="text" name="field2" />
</fieldset>
```

**Characteristics:**

- âŒ Cannot be edited
- âŒ Value is NOT submitted
- âŒ Cannot be focused
- âŒ Grayed out appearance
- âœ… Can use `:disabled` CSS selector

### Comparison Table

| Feature         | `required`      | `readonly`               | `disabled`             |
| --------------- | --------------- | ------------------------ | ---------------------- |
| **Can edit?**   | âœ… Yes         | âŒ No                    | âŒ No                  |
| **Submitted?**  | âœ… Yes         | âœ… Yes                  | âŒ **No**              |
| **Can focus?**  | âœ… Yes         | âœ… Yes                  | âŒ No                  |
| **Validation?** | âœ… Yes         | âŒ No                    | âŒ No                  |
| **Appearance**  | Normal          | Normal                   | Grayed out             |
| **Use case**    | Mandatory field | Display calculated value | Conditionally inactive |

### Combined Usage

```html
<form>
  <!-- Required field -->
  <label>Name (required):</label>
  <input type="text" name="name" required />

  <!-- Readonly field -->
  <label>Account ID (readonly):</label>
  <input type="text" name="account_id" value="12345" readonly />

  <!-- Disabled field -->
  <label>Premium feature (disabled):</label>
  <input type="checkbox" name="premium" disabled />

  <!-- All three -->
  <label>Confirmation Code:</label>
  <input type="text" name="code" value="ABC123" required readonly />

  <button type="submit">Submit</button>
</form>
```

### Dynamic Enabling/Disabling with JavaScript

```html
<form>
  <label> <input type="checkbox" id="toggle" /> Enable editing </label>

  <input type="text" id="field" disabled />

  <script>
    const toggle = document.getElementById("toggle");
    const field = document.getElementById("field");

    toggle.addEventListener("change", (e) => {
      field.disabled = !e.target.checked;
    });
  </script>
</form>
```

### CSS Styling

```html
<style>
  /* Style required fields */
  input:required {
    border-left: 3px solid red;
  }

  input:required:valid {
    border-left-color: green;
  }

  /* Style readonly fields */
  input:read-only {
    background-color: #f0f0f0;
  }

  /* Style disabled fields */
  input:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Optional fields */
  input:optional {
    border-left: 3px solid #ccc;
  }
</style>

<input type="text" required placeholder="Required field" />
<input type="text" value="Readonly" readonly />
<input type="text" disabled placeholder="Disabled" />
<input type="text" placeholder="Optional" />
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 26. Figure and Figcaption

### Definition

The `<figure>` element represents self-contained content (like images, diagrams, code snippets) with an optional caption using `<figcaption>`.

### Basic Syntax

```html
<figure>
  <img src="photo.jpg" alt="Beach sunset" />
  <figcaption>Beautiful sunset at the beach</figcaption>
</figure>
```

### Why Use Figure?

- **Semantic meaning** - clearly identifies illustrative content
- **Accessibility** - screen readers announce caption
- **SEO** - search engines understand content relationship
- **Styling** - easier to style as a unit

### Images with Captions

```html
<figure>
  <img src="chart.png" alt="Sales chart" />
  <figcaption>Fig 1. Sales growth from 2024 to 2026</figcaption>
</figure>

<!-- Multiple images -->
<figure>
  <img src="photo1.jpg" alt="Photo 1" />
  <img src="photo2.jpg" alt="Photo 2" />
  <img src="photo3.jpg" alt="Photo 3" />
  <figcaption>Photo gallery from vacation</figcaption>
</figure>
```

### Code Snippets

```html
<figure>
  <pre><code>
function greet(name) {
  return `Hello, ${name}!`;
}
  </code></pre>
  <figcaption>Example 1: JavaScript greeting function</figcaption>
</figure>
```

### Quotes

```html
<figure>
  <blockquote>
    <p>The only way to do great work is to love what you do.</p>
  </blockquote>
  <figcaption>â€” Steve Jobs</figcaption>
</figure>
```

### Videos

```html
<figure>
  <video controls width="640">
    <source src="tutorial.mp4" type="video/mp4" />
  </video>
  <figcaption>Tutorial: Getting Started with HTML</figcaption>
</figure>
```

### SVG Diagrams

```html
<figure>
  <svg width="200" height="200">
    <circle cx="100" cy="100" r="80" fill="blue" />
  </svg>
  <figcaption>Figure 2: Circle diagram</figcaption>
</figure>
```

### Tables

```html
<figure>
  <table>
    <tr>
      <th>Year</th>
      <th>Sales</th>
    </tr>
    <tr>
      <td>2024</td>
      <td>$100K</td>
    </tr>
    <tr>
      <td>2025</td>
      <td>$150K</td>
    </tr>
  </table>
  <figcaption>Table 1: Annual sales data</figcaption>
</figure>
```

### Styling Examples

```html
<style>
  figure {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }

  figure img {
    width: 100%;
    height: auto;
    display: block;
  }

  figcaption {
    margin-top: 10px;
    text-align: center;
    font-style: italic;
    color: #666;
    font-size: 14px;
  }
</style>

<figure>
  <img src="landscape.jpg" alt="Mountain landscape" />
  <figcaption>Majestic mountain range at sunrise</figcaption>
</figure>
```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Figure Examples</title>
    <style>
      body {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
      }

      figure {
        margin: 30px 0;
        border: 2px solid #007bff;
        border-radius: 12px;
        padding: 15px;
        background: white;
      }

      figcaption {
        margin-top: 10px;
        padding: 10px;
        background: #007bff;
        color: white;
        text-align: center;
        border-radius: 4px;
        font-weight: bold;
      }

      figure img {
        width: 100%;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <h1>Figure and Figcaption Examples</h1>

    <!-- Image with caption -->
    <figure>
      <img src="architecture.jpg" alt="Modern architecture" />
      <figcaption>Fig 1. Modern architectural design</figcaption>
    </figure>

    <!-- Code snippet -->
    <figure>
      <pre><code>const multiply = (a, b) => a * b;</code></pre>
      <figcaption>Example 2: Arrow function in JavaScript</figcaption>
    </figure>

    <!-- Quote -->
    <figure>
      <blockquote>
        <p>
          Design is not just what it looks like and feels like. Design is how it
          works.
        </p>
      </blockquote>
      <figcaption>â€” Steve Jobs, Apple Inc.</figcaption>
    </figure>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 27. Custom Elements

### Definition

**Custom Elements** (Web Components) allow you to create your own HTML tags with custom behavior and styling.

### Basic Custom Element

```html
<!-- Use the custom element -->
<hello-world></hello-world>

<script>
  // Define custom element class
  class HelloWorld extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = "<h1>Hello, World!</h1>";
    }
  }

  // Register custom element
  customElements.define("hello-world", HelloWorld);
</script>
```

### Custom Element with Attributes

```html
<user-card name="John Doe" email="john@example.com"></user-card>

<script>
  class UserCard extends HTMLElement {
    constructor() {
      super();

      const name = this.getAttribute("name");
      const email = this.getAttribute("email");

      this.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 20px;">
          <h3>${name}</h3>
          <p>Email: ${email}</p>
        </div>
      `;
    }
  }

  customElements.define("user-card", UserCard);
</script>
```

### Custom Element with Shadow DOM

```html
<fancy-button>Click Me</fancy-button>

<script>
  class FancyButton extends HTMLElement {
    constructor() {
      super();

      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: "open" });

      // Create button
      shadow.innerHTML = `
        <style>
          button {
            background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.2s;
          }
          
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.15);
          }
          
          button:active {
            transform: translateY(0);
          }
        </style>
        <button><slot></slot></button>
      `;
    }
  }

  customElements.define("fancy-button", FancyButton);
</script>
```

### Lifecycle Callbacks

```javascript
class MyElement extends HTMLElement {
  // Called when element is created/upgraded
  constructor() {
    super();
    console.log("Element created");
  }

  // Called when element is added to DOM
  connectedCallback() {
    console.log("Element added to page");
    this.render();
  }

  // Called when element is removed from DOM
  disconnectedCallback() {
    console.log("Element removed from page");
    this.cleanup();
  }

  // Called when attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    this.render();
  }

  // Specify which attributes to observe
  static get observedAttributes() {
    return ["name", "age"];
  }

  render() {
    const name = this.getAttribute("name") || "Guest";
    this.innerHTML = `<p>Hello, ${name}!</p>`;
  }

  cleanup() {
    // Remove event listeners, etc.
  }
}

customElements.define("my-element", MyElement);
```

### Complete Custom Component Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Custom Elements Demo</title>
  </head>
  <body>
    <h1>Custom Web Components</h1>

    <!-- Use custom elements -->
    <product-card name="Laptop" price="999" image="laptop.jpg"> </product-card>

    <product-card name="Phone" price="699" image="phone.jpg"> </product-card>

    <script>
      class ProductCard extends HTMLElement {
        constructor() {
          super();

          // Attach Shadow DOM for encapsulation
          const shadow = this.attachShadow({ mode: "open" });

          // Create template
          shadow.innerHTML = `
          <style>
            :host {
              display: block;
              margin: 20px 0;
            }
            
            .card {
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              max-width: 300px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              transition: transform 0.2s;
            }
            
            .card:hover {
              transform: translateY(-4px);
              box-shadow: 0 4px 8px rgba(0,0,0,0.15);
            }
            
            .card img {
              width: 100%;
              border-radius: 4px;
            }
            
            .card h3 {
              margin: 10px 0;
              color: #333;
            }
            
            .price {
              font-size: 24px;
              color: #007bff;
              font-weight: bold;
            }
            
            button {
              width: 100%;
              padding: 10px;
              background: #007bff;
              color: white;
              border: none;
              border-radius: 4px;
              cursor: pointer;
              margin-top: 10px;
            }
            
            button:hover {
              background: #0056b3;
            }
          </style>
          
          <div class="card">
            <img id="image" src="" alt="">
            <h3 id="name"></h3>
            <div class="price">$<span id="price"></span></div>
            <button id="buy-btn">Add to Cart</button>
          </div>
        `;

          // Get elements
          this.imageEl = shadow.getElementById("image");
          this.nameEl = shadow.getElementById("name");
          this.priceEl = shadow.getElementById("price");
          this.buyBtn = shadow.getElementById("buy-btn");

          // Add event listener
          this.buyBtn.addEventListener("click", () => {
            alert(`Added ${this.name} to cart!`);
          });
        }

        // Observe attribute changes
        static get observedAttributes() {
          return ["name", "price", "image"];
        }

        connectedCallback() {
          this.updateCard();
        }

        attributeChangedCallback(name, oldValue, newValue) {
          this.updateCard();
        }

        updateCard() {
          this.nameEl.textContent = this.getAttribute("name") || "Product";
          this.priceEl.textContent = this.getAttribute("price") || "0";
          this.imageEl.src = this.getAttribute("image") || "placeholder.jpg";
          this.imageEl.alt = this.getAttribute("name") || "Product";
        }
      }

      // Register custom element
      customElements.define("product-card", ProductCard);
    </script>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 28. HTML Security

### Common Security Threats

#### 1. Cross-Site Scripting (XSS)

**Injecting malicious scripts into web pages**

```html
<!-- âŒ Vulnerable to XSS -->
<div id="output"></div>
<script>
  const userInput = new URLSearchParams(window.location.search).get('name');
  document.getElementById('output').innerHTML = userInput;
  // URL: page.html?name=<script>alert('XSS')</script>
</script>

<!-- âœ… Safe: Escape user input -->
<script>
  const userInput = new URLSearchParams(window.location.search).get('name');
  document.getElementById('output').textContent = userInput;  // textContent is safe
</script>
```

#### 2. Clickjacking

**Tricking users into clicking hidden elements**

```html
<!-- âœ… Prevent iframe embedding -->
<meta http-equiv="X-Frame-Options" content="DENY" />

<!-- Or allow only same origin -->
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />

<!-- Modern CSP approach -->
<meta http-equiv="Content-Security-Policy" content="frame-ancestors 'none'" />
```

#### 3. SQL Injection (via forms)

```html
<!-- âŒ Never trust user input directly -->
<form action="/login" method="POST">
  <input type="text" name="username" />
  <input type="password" name="password" />
</form>

<!-- Server MUST sanitize/validate input -->
<!-- Use prepared statements, NOT string concatenation -->
```

### Security Best Practices

#### Input Validation

```html
<!-- Client-side validation (not sufficient alone!) -->
<form>
  <!-- Pattern validation -->
  <input
    type="text"
    pattern="[A-Za-z0-9]{3,20}"
    title="3-20 alphanumeric characters"
    required
  />

  <!-- Email validation -->
  <input type="email" required />

  <!-- Number range -->
  <input type="number" min="1" max="100" />

  <!-- URL validation -->
  <input type="url" required />
</form>

<!-- âœ… ALWAYS validate on server side too! -->
```

#### Content Security Policy (CSP)

```html
<!-- Prevent XSS by controlling resource sources -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; 
               script-src 'self' https://trusted.cdn.com; 
               style-src 'self' 'unsafe-inline';"
/>

<!-- More restrictive -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'none'; 
               script-src 'self'; 
               connect-src 'self'; 
               img-src 'self'; 
               style-src 'self';"
/>
```

#### Safe External Links

```html
<!-- âœ… Always use rel="noopener noreferrer" with target="_blank" -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External Link
</a>

<!-- Prevents:
- window.opener access (noopener)
- Referrer header leaking (noreferrer)
-->
```

#### Sanitize User Content

```html
<!-- âŒ NEVER do this with user input -->
<script>
  element.innerHTML = userInput; // XSS risk!
</script>

<!-- âœ… Use textContent instead -->
<script>
  element.textContent = userInput; // Safe
</script>

<!-- âœ… Or use DOMPurify library -->
<script src="https://cdn.jsdelivr.net/npm/dompurify@2/dist/purify.min.js"></script>
<script>
  const clean = DOMPurify.sanitize(userInput);
  element.innerHTML = clean;
</script>
```

#### HTTPS Only

```html
<!-- âœ… Force HTTPS -->
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests"
/>

<!-- âœ… HTTP Strict Transport Security (HSTS) -->
<!-- (Set via server headers, not HTML) -->
```

#### Secure Forms

```html
<form action="/submit" method="POST">
  <!-- CSRF Token -->
  <input type="hidden" name="csrf_token" value="random_token_here" />

  <!-- Autocomplete off for sensitive data -->
  <input type="password" autocomplete="new-password" />

  <!-- Use HTTPS for submission -->
  <button type="submit">Submit Securely</button>
</form>
```

#### Subresource Integrity (SRI)

```html
<!-- âœ… Verify CDN resources haven't been tampered with -->
<script
  src="https://cdn.example.com/library.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"
></script>

<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="sha384-..."
  crossorigin="anonymous"
/>
```

### Security Checklist

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- âœ… CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />

    <!-- âœ… Prevent clickjacking -->
    <meta http-equiv="X-Frame-Options" content="DENY" />

    <!-- âœ… Prevent MIME sniffing -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />

    <!-- âœ… XSS Protection (older browsers) -->
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />

    <!-- âœ… Referrer policy -->
    <meta name="referrer" content="strict-origin-when-cross-origin" />

    <title>Secure Page</title>
  </head>
  <body>
    <!-- âœ… Safe external links -->
    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
      External Link
    </a>

    <!-- âœ… Secure form -->
    <form action="/submit" method="POST">
      <input type="hidden" name="csrf" value="token" />
      <input type="email" required />
      <button type="submit">Submit</button>
    </form>

    <!-- âœ… CDN with SRI -->
    <script
      src="https://cdn.example.com/lib.js"
      integrity="sha384-..."
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

---

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

## 29. Setting Multiple Languages in HTML

### Lang Attribute

Specifies the language of content for accessibility and SEO.

```html
<!-- Document language -->
<html lang="en">
  <!-- Other languages -->
  <html lang="es">
    <!-- Spanish -->
    <html lang="fr">
      <!-- French -->
      <html lang="de">
        <!-- German -->
        <html lang="zh">
          <!-- Chinese -->
          <html lang="ja">
            <!-- Japanese -->
            <html lang="ar">
              <!-- Arabic -->
            </html>
          </html>
        </html>
      </html>
    </html>
  </html>
</html>
```

### Multiple Languages on Same Page

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Multilingual Page</title>
  </head>
  <body>
    <h1>Welcome / Bienvenue / Bienvenido</h1>

    <!-- English section -->
    <section lang="en">
      <h2>About Us</h2>
      <p>We are a global company.</p>
    </section>

    <!-- French section -->
    <section lang="fr">
      <h2>Ã€ propos de nous</h2>
      <p>Nous sommes une entreprise mondiale.</p>
    </section>

    <!-- Spanish section -->
    <section lang="es">
      <h2>Sobre nosotros</h2>
      <p>Somos una empresa global.</p>
    </section>

    <!-- Mixed language in same paragraph -->
    <p lang="en">
      The word <span lang="fr">rendez-vous</span> comes from French.
    </p>

    <!-- Quote in different language -->
    <blockquote lang="ja">
      <p>ã“ã‚“ã«ã¡ã¯ä¸–ç•Œ</p>
      <footer>Translation: <span lang="en">Hello World</span></footer>
    </blockquote>
  </body>
</html>
```

### Language Codes

```html
<!-- Primary language codes (ISO 639-1) -->
<html lang="en">
  <!-- English -->
  <html lang="es">
    <!-- Spanish -->
    <html lang="fr">
      <!-- French -->
      <html lang="de">
        <!-- German -->
        <html lang="it">
          <!-- Italian -->
          <html lang="pt">
            <!-- Portuguese -->
            <html lang="ru">
              <!-- Russian -->
              <html lang="zh">
                <!-- Chinese -->
                <html lang="ja">
                  <!-- Japanese -->
                  <html lang="ko">
                    <!-- Korean -->
                    <html lang="ar">
                      <!-- Arabic -->
                      <html lang="hi">
                        <!-- Hindi -->

                        <!-- With regional variants (ISO 639-1 + ISO 3166) -->
                        <html lang="en-US">
                          <!-- US English -->
                          <html lang="en-GB">
                            <!-- British English -->
                            <html lang="es-ES">
                              <!-- Spain Spanish -->
                              <html lang="es-MX">
                                <!-- Mexican Spanish -->
                                <html lang="pt-BR">
                                  <!-- Brazilian Portuguese -->
                                  <html lang="pt-PT">
                                    <!-- European Portuguese -->
                                    <html lang="zh-CN">
                                      <!-- Simplified Chinese -->
                                      <html lang="zh-TW">
                                        <!-- Traditional Chinese -->
                                        <html lang="fr-CA">
                                          <!-- Canadian French -->
                                        </html>
                                      </html>
                                    </html>
                                  </html>
                                </html>
                              </html>
                            </html>
                          </html>
                        </html>
                      </html>
                    </html>
                  </html>
                </html>
              </html>
            </html>
          </html>
        </html>
      </html>
    </html>
  </html>
</html>
```

### Text Direction for RTL Languages

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>Arabic Page</title>
  </head>
  <body>
    <h1>Ù…Ø±Ø­Ø¨Ø§ Ø¨Ø§Ù„Ø¹Ø§Ù„Ù…</h1>
    <p>Ù‡Ø°Ø§ Ù†Øµ Ø¹Ø±Ø¨ÙŠ Ù…Ù† Ø§Ù„ÙŠÙ…ÙŠÙ† Ø¥Ù„Ù‰ Ø§Ù„ÙŠØ³Ø§Ø±</p>

    <!-- Embedded LTR content -->
    <p>
      Arabic text
      <span lang="en" dir="ltr">English text</span>
      more Arabic
    </p>
  </body>
</html>
```

### Complete Multilingual Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Multilingual Website</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }

      section {
        margin: 30px 0;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      .lang-label {
        display: inline-block;
        background: #007bff;
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
      }

      [lang="ar"] {
        direction: rtl;
        text-align: right;
      }
    </style>
  </head>
  <body>
    <h1>Our Global Message</h1>

    <!-- English -->
    <section lang="en">
      <span class="lang-label">EN</span>
      <h2>Welcome</h2>
      <p>Hello! We speak your language.</p>
    </section>

    <!-- Spanish -->
    <section lang="es">
      <span class="lang-label">ES</span>
      <h2>Bienvenido</h2>
      <p>Â¡Hola! Hablamos tu idioma.</p>
    </section>

    <!-- French -->
    <section lang="fr">
      <span class="lang-label">FR</span>
      <h2>Bienvenue</h2>
      <p>Bonjour ! Nous parlons votre langue.</p>
    </section>

    <!-- German -->
    <section lang="de">
      <span class="lang-label">DE</span>
      <h2>Willkommen</h2>
      <p>Hallo! Wir sprechen Ihre Sprache.</p>
    </section>

    <!-- Japanese -->
    <section lang="ja">
      <span class="lang-label">JA</span>
      <h2>ã‚ˆã†ã“ã</h2>
      <p>ã“ã‚“ã«ã¡ã¯ï¼ç§ãŸã¡ã¯ã‚ãªãŸã®è¨€èªžã‚’è©±ã—ã¾ã™ã€‚</p>
    </section>

    <!-- Arabic (RTL) -->
    <section lang="ar" dir="rtl">
      <span class="lang-label">AR</span>
      <h2>Ù…Ø±Ø­Ø¨Ø§</h2>
      <p>Ù…Ø±Ø­Ø¨Ù‹Ø§! Ù†Ø­Ù† Ù†ØªØ­Ø¯Ø« Ù„ØºØªÙƒ.</p>
    </section>

    <!-- Mixed content -->
    <section lang="en">
      <h2>Famous Phrases</h2>
      <ul>
        <li lang="la">Carpe diem</li>
        <li lang="fr">C'est la vie</li>
        <li lang="de">Zeitgeist</li>
        <li lang="it">Dolce vita</li>
      </ul>
    </section>
  </body>
</html>
```

### Benefits of Using Lang Attribute

## 1. **Accessibility** - Screen readers pronounce text correctly

## 2. **SEO** - Search engines identify language

## 3. **Spellcheck** - Browsers use correct dictionary

## 4. **Translation** - Browser translation tools work better

## 5. **CSS Styling** - Can style by language

## 6. **Font Selection** - Browsers choose appropriate fonts

```css
/* CSS based on language */
:lang(ar) {
  font-family: "Arabic Font", sans-serif;
}

:lang(ja) {
  font-family: "Japanese Font", sans-serif;
}

:lang(en) {
  font-family: Arial, sans-serif;
}
```

[Back to Top](#table-of-contents)

---

[Back to Top](#table-of-contents)

📝 [Back to Top](#table-of-contents)

---

**End of HTML Complete Learning Guide**

This comprehensive guide covers all HTML topics from basics to advanced, including all ARIA attributes, security, forms, semantic elements, and internationalization.
