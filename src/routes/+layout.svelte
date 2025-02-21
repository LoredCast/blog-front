<script>
	let { children } = $props();
    import { page, navigating } from '$app/stores';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
    import { navState } from '$lib/state/navState'
    let showNavCover = $state(false)
    navState.subscribe((val) => {
        showNavCover = val
    })


    let ready = $state(false);
    onMount(() => {
        ready = true
        navState.set(false)
    });


  let showBackground = $state(true);
  let isHome = $state(false)
  $effect(() => {
    isHome = $page.url.pathname === '/';
  })

  beforeNavigate(() => {
    ready = false
    if (($navigating?.from) == $navigating?.to) return;
    if (isHome) {
      showBackground = false;
    }
  });

  afterNavigate(() => {
    // For example, if the user navigates back to the homepage:
    navState.set(false)
    ready = true
    if (isHome) {
      showBackground = true;
    }
  });
</script>

                <div class="background" transition:slide={{ duration: 200 }}>
                  <!-- Your background content (e.g., color or image) -->
                </div>
                    {@render children()}

                {#if !ready}
                <div id="foot">
                    <h3>loading...</h3>
                </div>
                {/if}

    

<style>

#foot {
    display: flex;
    align-items: center;
    justify-content: center;
}

:global {

  ::-moz-selection { /* Code for Firefox */
  color: rgb(27, 27, 27);
  background: rgb(185, 65, 65);
}

::selection {
  color: rgb(20, 10, 28);
  background: rgb(201, 147, 254);
  
}

    .background {
        background-attachment: fixed;
        background-image: url("/bg.png");

        background-size: 1920px;
        background-position-x: center;
        opacity: 0.05;
        filter: contrast(100);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
  }
        html {
            animation: 1s ease-out 0s 1;
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            color: aliceblue;
            background-color: black;    
            
        }
    

        body {
            margin: 0;
            padding: 0;
        }

        p {
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            line-height: 1.75;
            word-wrap: normal;
            text-align: justify;
            font-size: small;
        }

        a {
            font-family: 'Courier New', Courier, monospace;
            font-style: normal;
            font-size: large;
            color: aliceblue;
            text-decoration: none;
        }
        h1 {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 900;

        }

    }



  

    

    a:hover {
        font-weight: 600;
    }


    

</style>