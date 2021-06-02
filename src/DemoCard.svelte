<script>
    import { CollapsibleCard } from "./index.js";
</script>

<CollapsibleCard>
    <h2 slot="header" class="header">header 1</h2>
    <p slot="body" class="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </p>
</CollapsibleCard>

<style>
    :global(.card) {
        border: 1px solid black;
    }
</style>
