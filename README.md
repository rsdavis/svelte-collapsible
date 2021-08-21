
# Svelte Collapsible

A collection of high-level Svelte components designed for expanding and collapsing content. 
Check out the demos ...

[Demo - Accordion](https://svelte.dev/repl/1b3474c81253461dba775238c0228bca?version=3.30.0)

[Demo - Basic Card](https://svelte.dev/repl/7adc6bc2778040509ce498e6cb4322b0?version=3.30.0)

[Demo - Styled Cards](https://svelte.dev/repl/aafe54bdba204d6f9c6431f8eca50915?version=3.30.0)

## Install

```bash
npm install svelte-collapsible
```

## Collapsible Card

A collapsible card is a single, simple component that takes two slots.
When a user clicks on the `header` slot, the `body` slot expands to open or shut.

```html
<script>
    import { CollapsibleCard } from 'svelte-collapsible'
</script>

<CollapsibleCard>
    <h2 slot='header'>Header</h2>
    <p slot='body'>Body</p>
</CollapsibleCard>
```

## Accordion

The accordion is a collection of collapsible items where at most a single item is expanded at any time.
When a new item opens, it simultaneously closes any other open item.
The component uses keys on the items to keep track of which one is currently open.

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

If you need to know which item is currently in the open state, you can bind to the key prop on the Accordion component.
It will be `null` when all items are closed, or the value of associated key when an item is opened.
You can also use this feature to set which item should be open when mounted.

```html
<script>
    let key = 'a'
</script>

<Accordion bind:key>
</Accordion>
```

If you need control of the selected item, you can use the `key` prop and the `on:change` event to manage the state of the component externally.

You can modify the duration and easing of the collapsible section using component props.

```html
<script>
    const duration = 0.5 // seconds
    const easing = 'linear'
</script>

<Accordion { duration } { easing } />
<CollapsibleCard { duration } { easing } />
```


## Motivation

These elements are designed to be drop-in, ready to go, with JS functionality and some styling built-in.
They are built on top of the low-level `svelte-collapse` action. 
If you need more control and flexibility, you can use this action directly to design your own collapsible components.