<script>
    let { toggle } = $props()
    import Footer from "$lib/Footer.svelte"
	import { siteState } from "./state.svelte";
</script>
<div class="wrapper">
<div>
    <div id="top-row">
        <div>
            <h1>MANU's NOTES
            </h1>
            <h2>| {siteState.heading}</h2>
        </div>

    <div class="burger">
        <button onclick={toggle}>
        <img src="/burger.png" alt="" >
        </button>
    </div>
    </div>

<div class="nav-div">
    <nav>
        <a href="/">home</a>
        <a href="/new">new</a>
        <a href="/articles">articles</a>
        <!-- <a href="/reviews">reviews</a> -->
        <a href="/writing">writing</a>
        <a href="/art">art</a>
        <a href="/resources">resources</a>
        <a href="/reflections">reflections</a>
        <!-- <a href="/music">music</a> -->
</nav>
</div>
</div>

<div id="footer">
    <Footer></Footer>
 </div>
</div>


<style>
    #footer {
        position: sticky;
        bottom: 0;
        margin-bottom: 4em;
    }

    h1 {
        user-select: none;
        margin-bottom: 0;


    }

    h2 {
        font-size: 2em;
        font-variant: small-caps;
        font-weight: 200;
        line-height: 1;
        margin-top: 0;
        user-select: none;
        position: absolute;

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
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 90vh;
        padding: 2em;

    }


    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
        z-index: 1;
        margin-top: 3em;
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

    #content {
        padding-left: 5em;
        transition-duration: 1s;
    }

    @media only screen and (max-width: 1000px) {
        #content {
            padding-left: 2em;
        }
    }

    

</style>