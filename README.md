
# Svelte Collapsible

A collection of high-level Svelte components designed for expanding and collapsing content. 

* CollapsibleCard - card with header and collapsible body

## Usage

```bash
npm install svelte-collapsible
```

```html
<script>
    import { CollapsibleCard } from 'svelte-collapsible'
</script>

<CollapsibleCard>
    <h2 slot='header' class='header'>Header</h2>
    <p slot='body' class='body'>Body</p>
</CollapsibleCard>
```

## Motivation

These elements are designed to be drop-in, ready to go, with JS functionality and some styling built-in.
They are built on top of the low-level `svelte-collapse` action. 
If you need more control and flexibility, you can use this action directly to design your own collapsible components.