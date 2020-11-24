
<script>

    import Accordion from './Accordion.svelte'
    import AccordionItem from './AccordionItem.svelte'

    let key = 'b'

    $: console.log(key)

</script>


<Accordion bind:key>
    <AccordionItem key='a'>
        <div slot='header'>a</div>
        <div slot='body'>body</div>
    </AccordionItem>
    <AccordionItem key='b'>
        <div slot='header'>b</div>
        <div slot='body'>body</div>
    </AccordionItem>
    <AccordionItem key='c'>
        <div slot='header'>c</div>
        <div slot='body'>body</div>
    </AccordionItem>
</Accordion>


<Accordion>
    <AccordionItem key='a'>
        <div slot='header'>a</div>
        <div slot='body'>body</div>
    </AccordionItem>
    <AccordionItem key='b'>
        <div slot='header'>b</div>
        <div slot='body'>body</div>
    </AccordionItem>
    <AccordionItem key='c'>
        <div slot='header'>c</div>
        <div slot='body'>body</div>
    </AccordionItem>
</Accordion>
