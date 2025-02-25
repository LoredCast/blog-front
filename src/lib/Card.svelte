<script>
let {url, title, summary, date, tags} = $props()
import { fade } from 'svelte/transition';


let date_short = new Date(date)
let now = new Date(Date.now())
let diff = now.getTime() - date_short.getTime()

date = date_short.toLocaleDateString("en-UK")
if (diff < (1000*60*60*24)) date = `${Math.floor(diff/1000/60/60)} h ago`
if (diff < (1000*60*60)) date = `${Math.floor(diff/1000/60)} min ago`

</script>

<a href="{url}">
<div class="wrapper">
    <h1>
        {title}
    </h1>
    <div id="text">
        <img src="" alt="">
        <!-- <p>{@html summary}</p> -->
        <div id="subtext">
            <h3 id="tag">
                
                {#each tags as tag}
                    #{tag}&nbsp;
                {/each}
            </h3>
            <h3 id="date">{date}</h3>
        </div>
        
    </div>
</div>
</a>

<style>
    h1 {
        margin-bottom: 0;
        margin-top: 0;
        line-height: 1em;
    }
    a {
        padding: none;
        margin: none;
    }

    :global #text p {
        line-height: 1.75em;
        margin: none;
        margin-bottom: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: medium;
    }

    h3 {
        font-weight: 900;
        margin: none;
        font-family: 'Courier New', Courier, monospace;
        font-size: small;
        color: rgb(155, 155, 155);
    }

    h3#date {
        font-weight: 100;
        margin-bottom: none;
        font-size: small;
        font-family: 'Courier New', Courier, monospace;
        padding: 0;
    }

    img {
        display: none;
        
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        border: solid rgb(49, 49, 49) 1px;
        padding: 1.75em;
        margin-bottom: 2em;
        border-radius: 15px;
        transition: 200ms;
        margin-top: 1em;
    }

    .wrapper:hover {
        background-color: rgba(255, 255, 255, 0.032);
        
    }

   

    div#text {
        display: flex;
        flex-direction: column;
        margin: 0;
    }

    div#subtext {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        margin-top: 1em;
    }
</style>