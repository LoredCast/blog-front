<script>
    import Card from "$lib/Card.svelte";
    import { onMount } from "svelte";
    import { siteState } from "$lib/state.svelte";
    siteState.heading = 'imprint'

</script>
<div>   
<h3>© 2025 Manuel Unterriker</h3>
<p>This Site does not collect data.</p>

</div>

<style>
    h3 {
        margin: 0;
    }
    div {
        user-select: none;
        margin-top: 0em;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 60vh;
    }

    @media only screen and (min-width: 1000px) {
        div {
            height: 90vh;
        }
    }


</style>npm