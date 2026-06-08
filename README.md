# NASS

`nass` means `Not A Style System`.

It is a small CSS package for foundation styles, semantic tokens, theme definitions, and a handful of reusable primitives extracted from JustBookmarks.

It is not a component library, not a full design system, and not a place for product-specific layout or feature styling.

The repo also ships a plain ESM runtime at `./naf.js` with colocated TypeScript declarations in `./naf.d.ts` so it can be consumed directly from a git submodule without a build step.

## Quick start

Install or vendor the repo, then import the entrypoints you need:

```html
<html lang="en" data-theme="dark">
  <head>
    <link rel="stylesheet" href="./node_modules/nass/src/entries/index.css" />
    <link rel="stylesheet" href="./app.css" />
  </head>
</html>
```

If your app uses the optional icon mask variables, also load:

```html
<link rel="stylesheet" href="./node_modules/nass/src/entries/icons.css" />
```

## What NASS includes

- foundation reset
- semantic tokens
- light and dark themes via `data-theme`
- base document styles
- reusable primitives such as buttons, cards, panels, forms, alerts, menus, modals, badges, eyebrows, spinners, and the generic icon-mask helper

## What stays app-owned

- fonts and brand typography decisions
- app-shell layout
- component styles
- feature styles
- page styles
- product-specific iconography unless you intentionally opt into the optional icon set

## Entry points

- `src/entries/foundation.css`: layers, reset, tokens, themes, and base
- `src/entries/primitives.css`: reusable primitive classes only
- `src/entries/index.css`: foundation plus primitives
- `src/entries/icons.css`: optional icon mask variables
- `naf.js`: plain JS runtime helpers
- `naf.d.ts`: TypeScript declarations for `naf.js`

## Runtime usage

Package subpath import:

```js
import { signal, template, mount } from "nass/naf";
```

Direct git submodule import:

```js
import { signal, template, mount } from "../vendor/nass/naf.js";
```

TypeScript will pick up the colocated `naf.d.ts` file for the direct file import as long as your resolver supports standard ESM module declarations.

## Theme activation

Themes are driven by `data-theme` on any ancestor, usually `html`:

```html
<html data-theme="light">
```

```html
<html data-theme="dark">
```

## Extension boundary

Import NASS first, then app-local CSS after it:

```css
@import url("nass/src/entries/index.css");
@import url("./app.css");
```

Add new product styles in your app. Add new reusable tokens, themes, or primitives in NASS only when they are generic enough to carry across projects.

## Docs

- [Architecture](./docs/architecture.md)
- [Theming](./docs/theming.md)
- [Primitives](./docs/primitives.md)
- [Migration](./docs/migration.md)

## Demo

Run:

```bash
npm run demo
```

Then open `http://127.0.0.1:4174`.
