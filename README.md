
# Svelte Collapsible

A collection of high-level Svelte components designed for expanding and collapsing content. 

* CollapsibleCard - card with header and collapsible body
* Accordion - item collection where open state is mutually exclusive
* AccordionItem - item in collection

## Usage

```bash
npm install svelte-collapsible
```

```html
<script>
    import { CollapsibleCard } from 'svelte-collapsible'
</script>

<CollapsibleCard>
    <h2 slot='header'>Header</h2>
    <p slot='body'>Body</p>
</CollapsibleCard>
```

```html
<script>
    import { Accordion, AccordionItem } from 'svelte-collapsible'
</script>

<Accordion>
    <AccordionItem key='a'>
        <h2 slot='header'>Header</h2>
        <p slot='body'>Body</p> 
    </AccordionItem>
    <AccordionItem key='b'>
        <h2 slot='header'>Header</h2>
        <p slot='body'>Body</p> 
    </AccordionItem>
</Accordion>
```

For the accordion, if you need to know which item is currently in the open state, you can bind to the key prop on the Accordion component.
This value will be set to the provided key value of the opened item, and it will be `null` when all of the items are closed.
You can also use this feature to set which item should be open when mounted.

```html
<script>
    let key = 'a'
</script>

<Accordion bind:key>
</Accordion>
```

## Motivation

These elements are designed to be drop-in, ready to go, with JS functionality and some styling built-in.
They are built on top of the low-level `svelte-collapse` action. 
If you need more control and flexibility, you can use this action directly to design your own collapsible components.