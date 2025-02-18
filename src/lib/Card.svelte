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
        <p>{@html summary}</p>
        <div id="subtext">
            <h3 id="tag">
                
                {#each tags as tag}
                    #{tag}&nbsp;
                {/each}
            </h3>
            <h2>{date}</h2>
        </div>
        
    </div>
</div>
</a>

<style>
    a {
        padding: none;
        margin: none;
    }

    p {
        line-height: 1.2;
        margin: none;
    }

    h3 {
        font-weight: 900;
        margin: none;
    }

    h2 {
        font-size: 1em;
        font-weight: 100;
        margin: none;
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
    }

    .wrapper:hover {
        background-color: rgba(255, 255, 255, 0.032);
        
    }

   

    div#text {
        display: flex;
        flex-direction: column;
    }

    div#subtext {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>