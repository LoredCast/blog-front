<h1> manu's page</h1>

<nav>
    <a href="/">Home</a>
    <a href="/reviews">Reviews</a>
    <a href="/writing">Writing</a>
    <a href="">Art</a>
    <a href="">Knowledge</a>
    <a href="/Articles">Articles</a>
    <a href="">Music</a>
</nav>


<style>

    nav {
        display: flex;
        flex-direction: row;
        overflow: scroll;
        border-bottom: solid rgb(29, 29, 29) 0.2em;
    }

    a {
        padding: 3em;
        padding-left: 0;
    }


    @media only screen and (min-width: 1000px) {

    nav {
        border: none;
        display: flex;
        justify-content: end;
        flex-direction: column;
    }

    a {
        padding: 0;
        margin-bottom: 1em;
        transition-duration: 300ms;
    }

    a:hover {
        text-decoration:underline dotted;
        text-decoration-thickness: 0.1em;
    }
}




</style>