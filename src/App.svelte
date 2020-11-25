
<script>

    import { Accordion, AccordionItem } from './index.js'

    let key = 'b'

</script>

<button on:click={() => key = key==='a' ? null : 'a'}>a</button>
<button on:click={() => key = key==='b' ? null : 'b'}>b</button>
<button on:click={() => key = key==='c' ? null : 'c'}>c</button>

<Accordion { key } on:change={e => key = e.detail.key}>
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