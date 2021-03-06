
# Svelte Collapsible

A collection of high-level Svelte components designed for expanding and collapsing content. 

* CollapsibleCard - card with header and collapsible body
* Accordion - item collection where open state is mutually exclusive
* AccordionItem - item in collection

Check out the demo's

[Svelte Collapsible Demo - Accordion](https://svelte.dev/repl/1b3474c81253461dba775238c0228bca?version=3.30.0)

[Svelte Collapsible Demo - Basic Card](https://svelte.dev/repl/7adc6bc2778040509ce498e6cb4322b0?version=3.30.0)

[Svelte Collapsible Demo - Styled Cards](https://svelte.dev/repl/aafe54bdba204d6f9c6431f8eca50915?version=3.30.0)


## Collapsible Card

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

## Accordion

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

You can modify the duration and easing of the collapsible section using component props.

```html
<script>
    const duration = 0.5 // seconds
    const easing = 'linear'
</script>

<Accordion { duration } { easing } />
<CollapsibleCard { duration } { easing } />
```

If you need control of the selected item, you can use the `key` prop and the `on:change` event to manage the state of the component externally.


## Motivation

These elements are designed to be drop-in, ready to go, with JS functionality and some styling built-in.
They are built on top of the low-level `svelte-collapse` action. 
If you need more control and flexibility, you can use this action directly to design your own collapsible components.