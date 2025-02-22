<script>
    import Card from "$lib/Card.svelte";
    /** @type {import('./$types').PageData} */
    
    let { data } = $props();
    import { onMount } from "svelte";
    import { siteState } from "$lib/state.svelte";
    siteState.heading = 'new'

    

</script>

{#each data.articles as article}

<Card 
    url='articles/{article.url}'
    title={article.title}
    summary={article.summary}
    date={article.date_created}
    tags={article.tags}
></Card>
  
{/each}


<style>

</style>