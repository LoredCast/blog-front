<script>
    import Card from "$lib/Card.svelte";
    /** @type {import('./$types').PageData} */
	import WritingCard from '$lib/WritingCard.svelte';
    import { siteState } from "$lib/state.svelte";
	import { onMount } from "svelte";
    let { data } = $props();
    siteState.heading = 'writing'


    
</script>
<div id="header">
</div>

{#each data.writings as writing}

<WritingCard
    title={writing.Title}
    content={writing.Content}
    date={writing.date_created}
    url="writing/{writing.id}"
    tags={writing.tags}
></WritingCard>
 
{/each}

<style>
    h1 {
        display: none;
        font-size: 6em;
        font-variant:small-caps;
    }
    #header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
