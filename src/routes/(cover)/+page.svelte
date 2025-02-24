<script>
    import Footer from "$lib/Footer.svelte";

    
</script>
<div class="wrapper">
<div id="content">
    <h1>MANU's NOTES</h1>

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
<div id="footer">
    <Footer></Footer>

</div>
</div>
</div>

<style>
    #footer {
        position: sticky;
        bottom: 0;
        margin-bottom: 4em;
    }
    #content {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: fit-content;
    }

    h1 {
        margin-bottom: 2em;
    }

    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
        z-index: 1;
        margin-bottom: 6em;

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
        padding-top: 2em;
        transition-duration: 1s;
    }

    @media only screen and (max-width: 1000px) {
        #content {
            padding-left: 2em;
        }

        
    }

</style>