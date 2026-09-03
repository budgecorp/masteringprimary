---
title: (drafts folder — not a post)
description: Placeholder frontmatter so Obsidian preview looks tidy. Astro ignores this folder.
pubDate: 2026-01-01
draft: true
---

# _drafts

reMarkable Bridge round-trip staging area.

- Astro's content glob ignores `_drafts/**` (see `src/content.config.ts`), so nothing here ships to the site — even without `draft: true` frontmatter.
- Send Obsidian notes from here to the reMarkable, type on the Type Folio, pull them back here.
- When ready to publish: add proper `title` / `description` / `pubDate`, remove `draft: true` if present, then move the file up one level into `src/content/blog/`.
