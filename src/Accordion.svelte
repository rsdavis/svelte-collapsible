

<script>

    import { setContext } from 'svelte'
    import { writable } from 'svelte/store'

    export let duration = 0.2
    export let easing = 'ease'
    export let key = null

    const store = writable({ key, duration, easing })

    $: key = $store.key

    setContext('svelte-collapsible-accordion', store)

</script>

<div class='accordion'>
    <slot />
</div>
