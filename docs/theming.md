# Theming

Themes are activated with `data-theme` selectors.

## Built-in themes

- `light`
- `dark`

Example:

```html
<html data-theme="dark">
```

## Rules

- Keep theme selectors inside `src/themes/`.
- Put semantic values in themes, not raw colors in primitives.
- Add new tokens to `src/foundation/tokens.css` first, then implement them in every theme file.

## Adding a semantic token

1. Add the token with a safe default in `src/foundation/tokens.css`.
2. Set the real value in `src/themes/light.css`.
3. Set the real value in `src/themes/dark.css`.
4. Update docs if the token is part of the public contract.

## Adding a new theme

1. Create `src/themes/<name>.css`.
2. Use `[data-theme="<name>"]` as the selector.
3. Define the full semantic token set, not just deltas.
4. Export it from `package.json` if consumers should import it directly.
