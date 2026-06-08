# Primitives

NASS ships only generic, reusable primitives.

## Included primitives

- `alert.css`
- `badge.css`
- `button.css`
- `card.css`
- `eyebrow.css`
- `form.css`
- `icon-mask.css`
- `menu.css`
- `modal.css`
- `panel.css`
- `spinner.css`

## Guidelines

- Primitives should depend on semantic tokens, not raw colors.
- Primitives may expose private implementation variables with `--_` prefixes.
- If a primitive requires product structure or app-specific behavior, it does not belong in NASS.

## Icon masks

`.icon-mask` is a generic shell that renders a mask through `::before`.

The optional `icons.css` entrypoint exposes starter mask variables such as:

- `--mask-folder`
- `--mask-folder-open`
- `--mask-file-plus`
- `--mask-file-import`
- `--mask-bookmark`
- `--mask-edit`
- `--mask-move`
- `--mask-trash`
- `--mask-plus`

Apps can ignore that file and define their own mask variables instead.
