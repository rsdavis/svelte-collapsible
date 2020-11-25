
<script>

    import { Accordion, AccordionItem } from './index.js'

    let key = 'b'

    $:console.log({ key })

</script>

<Accordion bind:key duration={0.1}>
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

<style>

    :global(.accordion) {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }

</style>