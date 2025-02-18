<script>
	import NavCover from "./NavCover.svelte";
    import { navState } from "../state/navState.svelte";
    let showNavCover = false

    let toggleNavCover = () => {
        navState.showCover = !navState.showCover
    }

</script>


{#if navState.showCover }
<NavCover toggle={toggleNavCover}></NavCover>
{:else}
<div id="top-row">
    <h1>MANU's NOTES</h1>
    
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
{/if}



<style>
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

    .burger {
        display: none;
    }
    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
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