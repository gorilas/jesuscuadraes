# jesuscuadra.es Portfolio

## Overview
A static personal portfolio website for Jesús Cuadra, a Spanish UX designer and frontend developer specializing in agile teams.

## Tech Stack
- **HTML5** — semantic structure
- **CSS3** — compiled from Sass (via CodeKit/Bower in the original workflow)
- **Vanilla JavaScript** — accordion widget and Modernizr feature detection
- **Fonts** — Untitled Sans by Klim Type Foundry
- **Normalize.css** — cross-browser CSS reset

## Project Structure
```
/           — static site root (index.html, 404.html, robots.txt, etc.)
/css        — compiled stylesheets (main.css, normalize.css)
/js         — main.js, plugins.js
/img        — images and background assets
/fonts      — web font files (UntitledSansWeb-*)
```

## Running Locally
The site is served via Python's built-in HTTP server:
```
python3 -m http.server 5000 --bind 0.0.0.0
```
Workflow: **Start application** → port 5000 (webview)

## Deployment
Configured as a **static** deployment with `publicDir: "."`.
