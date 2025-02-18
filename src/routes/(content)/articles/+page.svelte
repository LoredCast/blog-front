<script>
    import Card from "$lib/Card.svelte";
    /** @type {import('./$types').PageData} */
    
    let { data } = $props();
    
</script>
<div id="header">
<h1>Articles</h1>

</div>

{#each data.articles as article}

<Card 
    url={article.url} 
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
