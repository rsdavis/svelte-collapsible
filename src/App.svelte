
<script>

    import CollapsibleCard from './CollapsibleCard.svelte'

</script>

<div class='cards'>

    <CollapsibleCard>
        <h2 slot='header' class='header'>Header 1</h2>
        <div slot='body' class='body'>
            <img src='https://picsum.photos/200?random=1' alt='First card'/>
            <div class='text'>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
            </div>
        </div>
    </CollapsibleCard>

    <CollapsibleCard>
        <h2 slot='header' class='header'>Header 2</h2>
        <div slot='body' class='body'>
            <img src='https://picsum.photos/200?random=2' alt='First card'/>
            <div class='text'>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
            </div>
        </div>
    </CollapsibleCard>

    <CollapsibleCard>
        <h2 slot='header' class='header'>Header 3</h2>
        <div slot='body' class='body'>
            <img src='https://picsum.photos/200?random=3' alt='First card'/>
            <div class='text'>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro quia aperiam consequatur voluptas nihil beatae qui nisi? Commodi incidunt, architecto, est id fugit vitae placeat fugiat veritatis ea minus voluptatibus? </p>
            </div>
        </div>
    </CollapsibleCard>

</div>

<style>

    .cards {
        width: 100%;
        max-width: 550px;
        margin: 0 auto;
    }

    :global(.card) {
        margin-top: 1em;
        overflow: hidden;
        font-family: Arial, Helvetica, sans-serif;
    }


    .header {
        margin: 0;
        padding: 0.5em;
        border: 1px solid rgb(100,120,140);
        border-radius: 5px;
        background: rgb(244, 244, 244);
        transition: border-radius 0.5s step-end;
    }

    :global(.card.open) .header {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        transition: border-radius 0.5s step-start;
    }

    .body {
        padding: 1em;
        border: 1px solid rgb(100,120,140);
        margin-top: 0.25em;
        background: rgb(244, 244, 244);
        display: flex;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    img {
        display: block;
        width: 200px;
        height: 200px;
        border-radius: 5px;
    }

    .text {
        margin-left: 1em;
    }

    .body p {
        color: rgb(40,40,40);
        display: block;
        padding: 0;
        margin: 0;
    }

    .body p + p {
        margin-top: 1em;
    }

</style>