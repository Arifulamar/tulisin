# Tulisin — GitHub Pages MVP

Static SEO-friendly marketplace catalog for jasa tulis manual, jasa ketik, and transcription.

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload all files in this folder to the repository root.
3. Open Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: main / root.
6. Save.

## IMPORTANT before going live
Replace every occurrence of:

`https://arifulamar.github.io/tulisin/`

with your real GitHub Pages URL or custom domain.

Also replace the demo WhatsApp number:
`6281234567890`

### Main places to edit
- `assets/data.js` → creator/service data + WhatsApp number
- `penyedia.html` → admin WhatsApp
- `robots.txt`
- `sitemap.xml`
- canonical URLs in each HTML page

## Add a new creator/service
1. Add an object in `assets/data.js`.
2. Copy one file inside `/jasa/` as a template.
3. Update title, description, canonical URL, WhatsApp link, provider info.
4. Add the new URL to `sitemap.xml`.

## SEO already included
- Unique title & meta description
- Canonical tags
- Open Graph basics
- Schema.org WebSite / CollectionPage / Service
- Sitemap XML
- robots.txt
- Semantic HTML
- Static crawlable category/detail pages
- Mobile responsive layout
- Internal links

## UGC limitation on GitHub Pages
GitHub Pages is static, so users cannot publish listings directly by themselves without a backend. For MVP, collect provider submissions via WhatsApp/Google Form and manually add approved listings. Later, migrate data/auth to Supabase or another backend while keeping the same frontend.
