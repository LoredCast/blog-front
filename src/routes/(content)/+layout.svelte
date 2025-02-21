<script>
	let { children } = $props();
    import NavCover from '$lib/NavCover.svelte';
    import Navigation from '$lib/Navigation.svelte';
    import { siteState } from '$lib/state.svelte';
    import { navState } from '$lib/state/navState'
    let showNavCover = $state(false)
    navState.subscribe((val) => {
        showNavCover = val
    })

    let toggleNavCover = () => {
        navState.update((show) => !show)
    }
</script>


{#if showNavCover}
<NavCover toggle={toggleNavCover}></NavCover>

{:else }
<div class="wrapper">
    {#if siteState.showNavColumn}
    <div class="column-left">
        <div class="nav-div">
            <Navigation></Navigation>
        </div>
    </div>    
    {/if}
    

    <div class="column-content-wrapper">
        <div class="content-center">
            <div class="page-content">
                {@render children()}
            </div>
            
        </div>
        {#if siteState.showNavColumn}
        <div class="content-right" id="tags">
            {#if siteState.tags.length != 0}
                <h1>filter</h1>
                <nav class="content-nav">
                    {#each siteState.tags as tag}
                        <a href="{tag.url}">#{tag.name}</a>
                    {/each}
            </nav>
            {/if}
        </div>
        {/if}
        
    </div>

</div>
{/if}


<style>
    #tags {
        margin-top: 4em;
    }
    #tags h1 {
        display: none;
    }

    #tags a {
        font-size: small;
    }

    a:hover {
        font-weight: 600;
    }

    .wrapper {
        padding: 2em;
    }

    .column-content-wrapper {
        display: flex;
        flex-direction: column-reverse;
    }

    .content-right {
        padding-bottom: 1em;
        border-bottom: solid rgb(51, 51, 51) 0.1em;
        scroll-behavior: smooth;
        overflow: scroll;
        max-width: 100%;
    }

    .content-right h1 {
        color: rgb(85, 85, 85);
        font-size: 2em;
        margin-top: 1em;
    }

    .content-center {
        margin-top: 1em;
    }

@media only screen and (min-width: 1000px) {
    #tags {
        border: none;
    }

    #tags h1 {
        display: contents;
        color: aliceblue;
        font-size: medium;
        
    }

    :global {
        p {
            font-size: large;
        }
    }
    
    .wrapper {
        padding: 0;
    }

    .content-nav {
        display: flex;
        flex-direction: column;
    }

    .content-nav a {
        margin-bottom: 1em;
    }

    .wrapper {
        display: flex;
        width: 100vw;
    }


    .column-left {
        /* background-color: red; */
        height: 90vh;
        display: flex;
        margin-top: 2em;
        margin-left: 5em;
        position: sticky;
        top: 2em;
        padding-right:  8em;
        border-right: solid rgba(255, 255, 255, 0.219) 0.05em;

    }

    .column-content-wrapper {
        margin-left: 2em;
        width: 50%;
        display: flex;
        justify-content: center;
        margin-top: 2em;
        flex-direction: row;
        
        
    }
    .content-center {
        /* background-color: blue; */
        display: flex;
        justify-content: center;
        max-width: 600px;
        margin-right: 3vw;
        margin-top: 0;
    }

    .content-right {
        /* background-color: aquamarine; */
        margin-right: 2em;
        margin-top: 2em;

    }
    #tags a {
        line-height: 1;
        margin-top: 0;
        margin-bottom: 0.5em;
        font-size: medium;
        color: grey;
    }

    .page-content {
        min-width: 300px;
    }
    nav {
        margin-top: 1em;
    }
}

    

</style>