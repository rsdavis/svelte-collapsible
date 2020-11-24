

<script>

    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    export let key = null

    const store = writable(key)

    $: key = $store

    setContext('svelte-collapsible-accordion', store)

</script>

<slot/>