# Vishakh Abhayan — Blog

A fast, static personal blog built with Astro and an original warm editorial design inspired by Claude's light-theme palette.

## Run locally

```bash
npm install
npm run dev
```

## Add a post

Create a Markdown file in `src/content/blog/`:

```md
---
title: Your post title
description: A one-sentence summary.
publishedAt: 2026-09-12
type: essay
tags: [AI, notes]
draft: false
featured: false
---

Write the post here.
```

The post is automatically added to the home page, writing archive, RSS feed, and sitemap. Set `draft: true` to keep it out of production builds.

## Commands

- `npm run dev` — local development server
- `npm run build` — type-check and production build
- `npm test` — build and verify generated pages, RSS, and sitemap
- `npm run preview` — preview the production build

## Design

The palette uses warm parchment and near-black. The layout is a deliberately sparse, bio-first publication with a single narrow reading column. Newsreader provides the editorial typography.

## Deployment

The repository includes a GitHub Pages workflow. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
