# Academic homepage — résumé layout

A bilingual static website using plain HTML, CSS and JavaScript. No dependencies, backend or build process.

## Open locally
Extract the ZIP and open `index.html` in your browser. Keep the source files together. EN/VI switches the language and remembers it when browser storage is available. `?lang=vi` and `?lang=en` can be shared.

## Maintain the site
Edit `content.js` for biography, degree/affiliation, contacts, publications and achievements. English and Vietnamese content are stored together; paper titles, venues and authors are unchanged between languages. The previous site's two publications and IELTS achievement were retained; check all information before publishing.

- Photo: place your actual portrait in `assets/profile.jpg`, then set `photo: 'assets/profile.jpg'`.
- CV: place the PDF in `assets/cv.pdf`, then set its contact URL to `assets/cv.pdf`.
- Contact links: fill the URL values (use `mailto:` for email). Missing links are intentionally non-clickable. No contact credentials or awards were invented.
- Layout: `index.html`; styling: `style.css`; rendering/language: `script.js`.

## Upcoming talk and advance questions
In `content.js`, find the `talk` object and paste your public Google Forms response link into `formUrl` (for example, a `https://forms.gle/...` link). The square button is disabled until an HTTPS link is supplied. Both language versions use the same form link. Test the form as a student before publishing, and avoid collecting personal details unless needed. After the event, set `enabled: false` to hide the section without deleting it. No backend or Google Forms integration code is required.

## Deploy to GitHub Pages
Create a public repository called `YOUR-USERNAME.github.io`, upload the contents of the extracted folder into the repository root, and choose Settings → Pages → Deploy from a branch → main → / (root). No build is needed. For later updates, edit `content.js` and commit the change.
