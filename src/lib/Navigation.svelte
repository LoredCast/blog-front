<script>
	import NavCover from "./NavCover.svelte";
    import { navState } from '$lib/state/navState'
	import { siteState } from "./state.svelte";
    let showNavCover = $state(false)
    navState.subscribe((val) => {
        showNavCover = val
    })

    let toggleNavCover = () => {
        navState.update((show) => !show)
    }

</script>


{#if showNavCover }
<NavCover toggle={toggleNavCover}></NavCover>
{:else}
<div id="wrapper">
<div id="top-row">
    <div>
        <h1>MANU's NOTES
        </h1>
        <h2>|{siteState.heading}</h2>
    </div>
    
    
    <div class="burger">
        <button onclick={toggleNavCover}>
        <img src="/burger.png" alt="" >
        </button>
    </div>
    
    
    </div>
    
    <nav>
        <a href="/">home</a>
        <a href="/new">new</a>
        <a href="/reviews">reviews</a>
        <a href="/writing">writing</a>
        <a href="/art">art</a>
        <a href="/knowledge">knowledge</a>
        <a href="/articles">articles</a>
        <a href="/music">music</a>
    </nav>

</div>
{/if}



<style>
    h2 {
        font-size: 2em;
        font-variant: small-caps;
        font-weight: 200;
        margin-top: -0.1em;
        line-height: 1;
    }
    h1 {
        margin-bottom: 0;
    }
    button {
        all: unset;
    }
    #top-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .burger img{
        width: 30px;
    }
    .burger {
        display: flex;
        align-items: center;
    }


    nav {
        display: none;
        flex-direction: row;
        overflow: scroll;
        border-bottom: solid rgb(29, 29, 29) 0.2em;
        z-index: 1;
    }

    a {
        padding: 3em;
        padding-left: 0;
    }


    @media only screen and (min-width: 1000px) {
    #wrapper {
        display: flex;
        height: 50%;
        flex-direction: column;
        justify-content: space-between;
        justify-items: right;

    }
    .burger {
        display: none;
    }
    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
    }
    #top-row {
        margin-bottom: 4em;
    }

    a {
        padding: 0;
        margin-bottom: 0em;
        transition-duration: 300ms;
    }

    a:hover {
        text-decoration:underline dotted;
        text-decoration-thickness: 0.1em;
    }
}




</style>