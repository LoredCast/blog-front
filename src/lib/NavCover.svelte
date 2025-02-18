<script>
    let { toggle } = $props()
</script>
<div class="wrapper">

    <div id="top-row">
    <h1>MANU's NOTES</h1>

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
    <a href="/reviews">reviews</a>
    <a href="/writing">writing</a>
    <a href="/art">art</a>
    <a href="/knowledge">knowledge</a>
    <a href="/articles">articles</a>
    <a href="/music">music</a>
</nav>
</div>
</div>


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
    .wrapper {

        padding: 2em;

    }


    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
        z-index: 1;
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