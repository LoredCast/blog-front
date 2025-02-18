<script>
    import Card from "$lib/Card.svelte";
    /** @type {import('./$types').PageData} */
    
    let { data } = $props();
    
    

</script>

<h1>
    New
</h1>



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

</style>