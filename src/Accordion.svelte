

<script>

    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    export let key = null

    const store = writable(key)

    $: key = $store

    setContext('svelte-collapsible-accordion', store)

</script>

<ul class='accordion'>
    <slot />
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>