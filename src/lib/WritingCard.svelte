<script>
    let {url, title, content, date, tags} = $props()
    import { fade } from 'svelte/transition';
    
    
    let date_short = new Date(date)
    let now = new Date(Date.now())
    let diff = now.getTime() - date_short.getTime()
    
    date = date_short.toLocaleDateString("en-UK")
    if (diff < (1000*60*60*24)) date = `${Math.floor(diff/1000/60/60)} h ago`
    if (diff < (1000*60*60)) date = `${Math.floor(diff/1000/60)} min ago`
    
    </script>
    <div class="wrapper">
    <a href="{url}">

        <h1>
            {title}
        </h1>
    </a>

        <div id="writing-text">
            <img src="" alt="">
            <div id="subtext">
                <h3 id="tag">
                    
                    {#each tags as tag}
                        {tag}&nbsp;
                    {/each}
                </h3>
                <h3 id="date">{date}</h3>
            </div>
            
        </div>
    </div>
    
    <style>
        h1 {
            margin-bottom: 0em;
            margin-top: 0;
            line-height: 1em;

        }

        h1:hover {
            color: rgb(217, 237, 255);
        }
        a {
            padding: none;
            margin: none;
        }
    
        p {
            line-height: 1.2;
            margin: none;
        }
    
        h3 {
            font-weight: 100;
            margin: none;
            font-family: 'Courier New', Courier, monospace;
            
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
            margin: 0;
            transition: 200ms;
            margin-bottom: 2em;
            min-width: 100%;
            width: 50vw;

        }
        #date {
            font-size: small;
        }
    
        #tag {
            font-size: small;
        }
       
    
        div#writing-text {
            display: flex;
            flex-direction: column;
        }
    
        div#subtext {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        @media only screen and (min-width: 1000px) {
            h1 {
                margin: 0;
            }

            .wrapper {
                margin-bottom: 1em;
            }
        }
    </style>