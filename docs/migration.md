# Migration

This repo is the extraction target for the reusable styling foundation from JustBookmarks.

## Boundary

Moved into NASS:

- `src/styles/reset.css`
- `src/styles/tokens.css` minus font ownership and inline icon assets
- `src/styles/themes/light.css`
- `src/styles/themes/dark.css`
- `src/styles/base.css`
- reusable files under `src/styles/primitives/`

Left app-owned in JustBookmarks:

- `src/styles/layout.css`
- `src/components/**`
- `src/features/**`
- `src/pages/**`

## File move map

```text
JustBookmarks                           -> NASS
src/styles/reset.css                    -> src/foundation/reset.css
src/styles/tokens.css                   -> src/foundation/tokens.css
src/styles/base.css                     -> src/foundation/base.css
src/styles/themes/light.css             -> src/themes/light.css
src/styles/themes/dark.css              -> src/themes/dark.css
src/styles/primitives/alert.css         -> src/primitives/alert.css
src/styles/primitives/badge.css         -> src/primitives/badge.css
src/styles/primitives/button.css        -> src/primitives/button.css
src/styles/primitives/card.css          -> src/primitives/card.css
src/styles/primitives/eyebrow.css       -> src/primitives/eyebrow.css
src/styles/primitives/form.css          -> src/primitives/form.css
src/styles/primitives/icon-mask.css     -> src/primitives/icon-mask.css
src/styles/primitives/menu.css          -> src/primitives/menu.css
src/styles/primitives/modal.css         -> src/primitives/modal.css
src/styles/primitives/panel.css         -> src/primitives/panel.css
src/styles/primitives/spinner.css       -> src/primitives/spinner.css
inline icon mask vars in tokens.css     -> src/assets/icon-masks.css
```

## Classification

```text
core
  foundation/*
  themes/*
  primitives/*

app-shell
  layout.css

product-specific
  components/**
  features/**
  pages/**
```

## Current extraction choices

- fonts are intentionally not part of NASS
- starter icon masks are optional, not part of the foundation entrypoint
- the package is zero-build CSS for now
