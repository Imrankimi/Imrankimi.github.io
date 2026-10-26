# Imran Hakimi | Portfolio

My personal portfolio website, built with plain HTML, CSS and JavaScript (no build step).

## Structure

```
portfolio/
├── index.html      # Main page
├── project.html    # Project detail page (project.html?id=<id>)
├── projects.js     # Project details, images and links
├── project.js      # Renders the detail page, gallery and lightbox
├── style.css       # Styles (dark theme, responsive)
├── script.js       # Main page: mobile menu, scroll reveal, active nav, project filters
└── assets/
    ├── me.jpg                    # Profile photo (add your own)
    ├── Resume_Imran_Hakimi.pdf   # Resume linked from the nav (add your own)
    └── projects/<id>/            # Screenshots for each project
```

## Adding project images

1. Put screenshots in the project's folder, e.g. `assets/projects/secura/dashboard.png`.
2. List them in that project's `images` in `projects.js`:

```js
images: [
  { src: "assets/projects/secura/dashboard.png", caption: "Asset monitoring dashboard" },
  { src: "assets/projects/secura/rbac.png", caption: "Role-based access settings" },
],
```

The gallery appears automatically once a project has at least one image.

## Run locally

Open `index.html` in a browser, or serve the folder:

```
npx serve .
```

## Deploy

Drag the folder onto [Netlify Drop](https://app.netlify.com/drop), or push to GitHub and enable GitHub Pages.
