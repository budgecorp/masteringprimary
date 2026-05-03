# Mastering Primary

Anonymous personal blog at masteringprimary.com. Astro + Vercel + Buttondown.

## Stack

- **Astro** (static site, content collection in markdown)
- **Vercel** (hosting, deploys on `git push`)
- **GoDaddy** (domain, with WHOIS privacy)
- **Buttondown** (email subscriptions — to be wired up)

## Writing flow

```bash
# new post
cp src/content/blog/_template.md src/content/blog/my-new-post.md
# edit the frontmatter and body, then:
git add . && git commit -m "post: title here" && git push
```

Vercel rebuilds on push. Frontmatter `draft: true` keeps a post out of the
build, RSS feed, and homepage. Set to `false` (or remove) when ready.

## Local dev

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # production build
npm run preview      # preview the build
```

## Deployment (one-time setup)

1. **Create a private GitHub repo** (any name, e.g. `masteringprimary`). Do
   _not_ make it public — even though there is no identifying information in
   the code, keeping the repo private removes any chance of someone
   correlating commits to a real identity.
2. **Push this code** to the repo.
3. **Vercel:** sign in with GitHub, import the repo, accept defaults. The
   `@astrojs/vercel` adapter is already configured.
4. **Custom domain on Vercel:** add `masteringprimary.com` and `www.masteringprimary.com`,
   then update the GoDaddy DNS records as Vercel instructs (usually an A
   record on root and a CNAME on `www`).
5. **GoDaddy WHOIS privacy:** confirm domain privacy is on (free with most
   GoDaddy plans).
6. **Buttondown:** create an account with a burner email, then edit
   `src/pages/subscribe.astro` and set `BUTTONDOWN_USERNAME` to your
   Buttondown handle.
7. **Old Ghost site:** once the new site is live and DNS has cut over, cancel
   the Ghost subscription.

## Anonymity checklist

- [ ] WHOIS privacy on at GoDaddy
- [ ] GitHub repo set to private
- [ ] No analytics installed (intentional — never add any)
- [ ] No social links anywhere on the site (intentional — never add any)
- [ ] Burner email used for Buttondown
- [ ] No real names, no client/employer detail, no day-to-day specifics in posts

## File layout

```
src/
├── components/        # Header, Footer, BaseHead, FormattedDate
├── content/blog/      # Markdown posts (one file per post)
├── layouts/           # BlogPost layout
├── pages/             # index, archive, about, subscribe, blog/[...slug], rss.xml
└── styles/global.css  # All site styles, single file
```

## Design rules

- One column, ~640px content width, system serif body
- Black ink on white background, no accent colour
- No images on posts unless explicitly added (and added rarely)
- No JavaScript on the client (Astro ships zero JS by default; keep it that way)
