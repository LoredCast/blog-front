<script>
	let { children } = $props();
    import { navState } from '../../state/navState.svelte';
    import NavCover from '$lib/NavCover.svelte';
    import Navigation from '$lib/Navigation.svelte';

    let toggleNavCover = () => {
        navState.showCover = !navState.showCover
    }

</script>


{#if navState.showCover}
<NavCover toggle={toggleNavCover}></NavCover>

{:else }
<div class="wrapper">
    <div class="column-left">
        <div class="nav-div">
            <Navigation></Navigation>
        </div>
    </div>

    <div class="column-content-wrapper">
        <div class="content-center">
            <div class="page-content">
                {@render children()}
            </div>
    
            
        </div>
        <div class="content-right">
            <h1>TAGS</h1>
            <nav class="content-nav">
            <a href="">#eins</a>
            <a href="">#zwei</a>
            <a href="">#drei</a>
            <a href="">#vier</a>
            </nav>
            

        </div>
    </div>

</div>
{/if}


<style>

:global {
        html {
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            color: aliceblue;
        }

        body {
            margin: 0;
            padding: 0;
        }

        p {
            font-family: Georgia, 'Times New Roman', Times, serif;
            line-height: 2;
            word-wrap: normal;
            text-align: justify;
            font-size: large;
        }

        a {
            font-style: normal;
            font-size: large;
            color: aliceblue;
            text-decoration: none;
        }


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
        width: auto;
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
        justify-self: center;
    }


    .column-left {
        /* background-color: red; */
        height: 100vh;
        display: flex;
        margin-top: 2em;
        margin-left: 5em;
        position: sticky;
        top: 2em;
        padding-right:  3em;
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

    }

    .page-content {
        min-width: 300px;
    }
}

    

</style>