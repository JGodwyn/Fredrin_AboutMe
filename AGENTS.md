# AGENTS.md

Conventions for AI coding agents working in **AboutMe**. This file is the
canonical entry point under the [AGENTS.md](https://agents.md) standard, and it
is the first thing a Fredrin Worker reads.

## Project

A small static personal site for Godwin John. Content, tone and look follow
https://www.godwinjohn.com/: a monochrome palette, the Gabarito typeface, one
narrow column and pill-shaped controls.

## Commands

There is no build step and there are no dependencies. To preview locally, run
the following command and open http://localhost:8000:

    python3 -m http.server 8000

## Conventions

- The site is a single page: the About page lives at the root `index.html`. If a page is ever added, give it
  its own folder with an `index.html` so URLs stay clean, and link to it with a relative path.
- Shared styles live in `assets/styles.css`. Use its tokens (`--text-subtle`, `--sp-lg`, `--rd`…) and classes
  (`.page`, `.stack`, `.pill`, `.link`) instead of inline styles. Dark mode comes from swapping tokens, so don't
  hard-code colours.
- Images go in `assets/img/` as small `.webp` files.
