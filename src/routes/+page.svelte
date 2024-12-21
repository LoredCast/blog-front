<script>
    import Card from "$lib/Card.svelte";
</script>

<h1>
    Home
</h1>

<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>
<Card></Card>


<style>



    :global {
        html {
            margin: 0;
            padding: 0;
            background-color: black;
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
</style>