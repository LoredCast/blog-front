<script>
    import Card from "$lib/Card.svelte";
    /** @type {import('./$types').PageData} */
    import { onMount } from "svelte";
    import { siteState } from "$lib/state.svelte";
    siteState.heading = 'articles'

    let { data } = $props();
    
</script>
<div id="header">

</div>

{#each data.articles as article}

<Card 
    url="articles/{article.url}" 
    title={article.title}
    summary={article.summary}
    date={article.date_created}
    tags={article.tags}
></Card>
  
{/each}

<style>

    #header {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
