

<script>

    import { getContext } from 'svelte'
    import collapse from 'svelte-collapse'

    export let key

    const store = getContext('svelte-collapsible-accordion')

    $: open = $store === key

    function handleToggle () {

        if (open) {
            store.update(_ => null)
        }
        else {
            store.update(_ => key)
        }

    }

</script>

<li class='accordion-item'>
    <div class='accordion-item-header' on:click={handleToggle}>
        <slot name='header' />
    </div>
    <div class='accordion-item-body' use:collapse={{open}}>
        <slot name='body' />
    </div>
</li>

<style>
    .accordion-item-header {
        user-select: none;
        cursor: pointer;
    }
</style>