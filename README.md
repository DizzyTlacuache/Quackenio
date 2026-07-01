# Quackenio

Quackenio is a static website for a coffee brand with three main pages: home, menu, and contact. The project uses plain HTML, CSS, and JavaScript, so it can be opened directly in a browser without a build step.

## Project Structure

- `index.html`: landing page with brand presentation, specialties, and evaluation call to action.
- `news.html`: dedicated news page that lists all published posts.
- `menu.html`: menu page with hot coffee, pour over, and cold brew sections.
- `contact.html`: contact page with business info, hours, and a client-side contact form.
- `styles.css`: shared styles, layout, typography, responsive behavior, and visual theme.
- `script.js`: mobile navigation, active link state, navbar scroll effect, reveal animations, contact form validation, and reusable news post rendering.
- `news/news-data.js`: single source of truth for news posts rendered on homepage and news page.

## Features

- Responsive navigation with hamburger menu
- Shared visual identity across all pages
- Dedicated news section plus full news archive page
- Reusable news post-card pattern driven by `news/news-data.js`
- Menu presentation by category
- Contact form validation in the browser
- Scroll-based reveal animations
- External evaluation form links

## How to Run

Because this is a static site, you can use either of these options:

1. Open `index.html` directly in your browser.
2. Serve the folder with a local web server for a more production-like preview.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Notes

- The contact form submission is simulated in `script.js`; it does not send data to a backend.
- The evaluation buttons point to an external Microsoft Forms URL.
- Text content is primarily in Spanish, with some English branding copy.

## Future Improvements

- Connect the contact form to a real backend or email service
- Add image assets for products and branding
- Improve accessibility review and keyboard interaction coverage
- Add deployment configuration for GitHub Pages or another static host
