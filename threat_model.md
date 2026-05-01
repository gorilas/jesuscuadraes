# Threat Model

## Project Overview

This project is a static personal portfolio website deployed as a static site from the repository root. The production surface is limited to public HTML, CSS, images, fonts, a web manifest, and small client-side JavaScript for accordion behavior and cosmetic DOM updates. There is no backend application code, database, authentication system, admin interface, payment flow, file upload path, or server-side secret handling in the production deployment.

The local development workflow uses Python's built-in HTTP server, but that server is only a local convenience and is not part of the production attack surface. In production, the platform terminates TLS for the deployed site.

## Assets

- **Published site content** -- the integrity of the HTML, CSS, images, downloadable vCard, and metadata matters because visitors rely on the site as an authentic public profile.
- **Public contact details** -- email address, phone number in the vCard, and profile links are intentionally public, but accidental expansion beyond the intended published contact data would matter.
- **Deployment integrity** -- because the site is static, the primary security concern is preventing script injection or unauthorized content changes in shipped assets.

## Trust Boundaries

- **Browser to static asset boundary** -- every visitor receives static files directly from the deployment. The browser must treat page content as untrusted markup unless the repository guarantees it is static and not user-influenced.
- **Author-controlled content to visitor boundary** -- all displayed text, links, metadata, and downloadable files originate from repository content controlled by the site owner. There is no user content pipeline in production.
- **Production vs local development boundary** -- the Python HTTP server and any local workflow behavior are development-only and should not be treated as production-reachable unless future architecture changes add a backend.

## Scan Anchors

- **Production entry points:** `index.html`, `404.html`, `404.shtml`, `site.webmanifest`, `js/main.js`, `js/plugins.js`
- **Highest-risk code areas:** client-side DOM manipulation in `js/main.js` and `js/plugins.js`; external links and metadata in `index.html`
- **Public/authenticated/admin surfaces:** all production content is public; there are no authenticated or admin-only surfaces in the current architecture
- **Dev-only areas:** local `python3 -m http.server` workflow in `.replit`; agent and tool state under `.local/` and `.cache/`

## Threat Categories

### Tampering

The main tampering risk in this project is unauthorized modification of shipped static assets or unsafe client-side code changes that would introduce script injection. Because the current JavaScript only toggles classes, ARIA attributes, and a fixed background image, the required guarantee is that production JavaScript MUST not consume user-controlled HTML, script, URL, or style input without strict validation and safe DOM APIs.

### Information Disclosure

This site intentionally publishes professional profile content and contact details. The relevant guarantee is that production assets MUST not expose non-public secrets, credentials, tokens, hidden admin endpoints, build artifacts containing sensitive paths, or unpublished personal data beyond the explicitly intended public profile content.

### Spoofing

Visitors rely on the site as an authentic representation of the owner. In this static architecture, spoofing concerns mainly relate to content integrity and trustworthy external references rather than session impersonation. The required guarantee is that production content MUST remain repository-controlled and MUST not load attacker-controlled scripts or dynamic content from untrusted origins.

### Elevation of Privilege

Traditional privilege-escalation risks such as broken authorization, IDOR, or server-side injection do not currently apply because there is no backend privilege model in production. The relevant guarantee is that future features introducing forms, APIs, authentication, file uploads, or server-side execution MUST be treated as a threat-model change and scanned as new trust boundaries rather than assumed safe under this static-site model.
