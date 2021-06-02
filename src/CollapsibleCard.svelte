
<script>

    import { createEventDispatcher } from 'svelte'
    import collapse from 'svelte-collapse'

    export let open = true
    export let duration = 0.5
    export let easing = 'ease'

    const dispatch = createEventDispatcher()

    function handleToggle () {

        open = !open

        if (open) {
            dispatch('open')
        }
        else {
            dispatch('close')
        }

    }

</script> 

<div class='card' class:open aria-expanded={open}>

    <div class='card-header' on:click={handleToggle}>
        <slot name='header'/>
    </div>

    <div class='card-body' use:collapse={{open, duration, easing}}>
        <slot name='body'/>
    </div>

</div>

<style>

    .card-header {
        cursor: pointer;
        user-select: none;
    }

</style>