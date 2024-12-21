<script>

</script>

<a href="">
<div class="wrapper">
    <h1>
        Title
    </h1>
    <div id="text">
        <img src="" alt="">
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minima quas nemo numquam exercitationem, non commodi facilis, quidem vitae voluptate voluptates laboriosam</p>
        <div id="subtext">
            <h3 id="tag">#tag</h3>
            <h2>01.02.2004</h2>
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
        line-height: 1.4;
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
        background-image: linear-gradient(rgb(99, 99, 47) rgb(54, 125, 94))
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