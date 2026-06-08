# Architecture

NASS is organized around CSS layers and a narrow ownership boundary.

## Layer order

`foundation.css` declares this order:

```css
@layer reset, tokens, themes, base, primitives, components, features, utilities;
```

The package fills only the first five layers:

- `reset`
- `tokens`
- `themes`
- `base`
- `primitives`

Apps remain free to define their own `components`, `features`, and `utilities` layers afterward.

## Ownership rules

NASS owns:

- structural reset
- token defaults
- semantic theme values
- base document rules
- generic presentational primitives

Apps own:

- layout
- component composition
- product workflows
- desktop-shell specifics
- fonts and brand identity

## Why components and features are excluded

Those styles encode app behavior, structure, and product semantics. Pulling them into core would make NASS harder to reuse and would turn a thin styling foundation into a partial application framework.

## Asset policy

- Fonts are app-owned by default.
- The generic `.icon-mask` primitive is core.
- The starter icon mask variables live in an optional entrypoint so the foundation token contract stays smaller.
