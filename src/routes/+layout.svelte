<script>
	let { children } = $props();
    import { page, navigating } from '$app/stores';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
  import Spinner from '$lib/spinner.svelte';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
    import { navState } from '$lib/state/navState'
    import ViewTransition from '$lib/navigate.svelte';
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
<ViewTransition></ViewTransition>

                <div class="background">
                  <!-- Your background content (e.g., color or image) -->
                </div>

                    {@render children()}

                {#if !ready}
                <!-- <div id="foot">
                    <h3>loading...</h3>
                </div> -->
                <div id="loader"></div>
               
                {/if}

    

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap');
@keyframes fade {
  0% {
    background-color: rgb(166, 90, 198);
    left: 0;
    width: 0;
    margin-left: 0;
  }
  25% {
    width: 100vw;
    margin-left: 0;

  }

  50% {
    margin-left: 100vw;
    width: 100vw;
  }

  100% {
    background-color: rgb(159, 135, 198);
    width: 100vw;
    margin-left: -100vw;
  }
}
#spinning {
  background-color: rgba(0, 0, 0, 0.555);
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition-duration: 1s;
  backdrop-filter: blur(3px);
  
}

#loader {

  position: fixed;
  top: 0;
  left: 0;
  width: 10vw;
  height: 2px;
  animation: fade 1000ms infinite;
}

#foot {
    display: flex;
    align-items: center;
    justify-content: center;
}

:global {


    * {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none; 
    }

    *::-webkit-scrollbar {
        display: none;
    }

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
        background-image: url("/blurred.png");

        background-size: 1920px;
        background-position-x: center;
        /* opacity: 0.05; */
        /* filter: contrast(1.2); */
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
  }
        html {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none; 
            animation: 1s ease-out 0s 1;
            margin: 0;
            padding: 0;
            font-family: 'Inter', serif;
            color: aliceblue;
            background-color: black;    
            
        }
    

        body {
            margin: 0;
            padding: 0;
        }

        p {
            font-family: 'Noto', serif;
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
          font-family: 'Inter', serif;
          font-weight: 900;

        }
        h3 {
          margin: 0;
        }

        

    }



  

    

    a:hover {
        font-weight: 600;
    }


    

</style>