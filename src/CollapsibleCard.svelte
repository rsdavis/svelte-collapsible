
<script>

    import collapse from 'svelte-collapse'
    let open = true
    const duration = 0.5
</script> 

<div class='card' class:open>

    <div class='card-header' on:click={() => open = !open}>
        <slot name='header'/>
    </div>

    <div class='card-body' use:collapse={{open, duration}}>
        <slot name='body'/>
    </div>

</div>

<style>

    .card-header {
        cursor: pointer;
        user-select: none;
    }

</style>