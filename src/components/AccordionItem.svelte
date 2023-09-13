

<script>

    import { getContext } from 'svelte'
    import collapse from 'svelte-collapse'

    export let key

    const store = getContext('svelte-collapsible-accordion')

    $: params = { 
        open: $store.key === key, 
        duration: $store.duration,
        easing: $store.easing
    }

    function handleToggle () {

        if (params.open) {
            store.update(s => Object.assign(s, { key: null }))
        }
        else {
            store.update(s => Object.assign(s, { key }))
        }

    }

</script>

<li class='accordion-item' class:open={params.open}>

    <button type="button" on:click={handleToggle} class='accordion-item-header'>
        <slot name='header' />
    </button>

    <div class='accordion-item-body' use:collapse={params}>
        <slot name='body' />
    </div>

    <slot/>

</li>

<style>
    .accordion-item-header {
        user-select: none;
        cursor: pointer;
    }
    button {
        background: transparent;
        border: none !important;
    }
</style>
