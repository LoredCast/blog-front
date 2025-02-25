<script lang="ts">
	import { convertDate } from '$lib/date';
	import type { PageData } from './$types';
	import { siteState } from '$lib/state.svelte';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	let { data }: { data: PageData } = $props();
	import { navState } from '$lib/state/navState';
	let content = data.articles[0]
	siteState.heading = 'articles'
	siteState.showNavColumn = true

	onDestroy(() => {
		siteState.showNavColumn = true
	})

	const handleBack = () => {
		goto('/articles')
	}

	const handleDesktopNav = () => {
		siteState.showNavColumn = !siteState.showNavColumn
	}

	const handleMobileNav = () => {
		navState.set(true)
	}
</script>
<div id="wrapper">
	<div id="nav">
<button onclick={handleBack}> &lt go back</button> 
<button id="desktop" onclick={handleDesktopNav}>toggle navigation &gt</button>
<button id="mobile" onclick={handleMobileNav}>toggle navigation &gt</button>
</div>

<h1>{content.title}</h1>
<div id="article-content">{@html content.content}</div>

<div id="info">

	<div id="tags">
{#each content.tags as tag}
  <p >#{tag} &nbsp;</p>
{/each}

</div>
<p>This article was written by {content.author}, {convertDate(content.date_created)}.</p>
{#if content.date_updated}
<p>The last update was {convertDate(content.date_updated)} </p>
{/if}

</div>

</div>

<style>
	
	

	:global {
		#article-content a {
			color: rgb(171, 133, 232);

		}
		#article-content p, h1, h2, h3, h4, ol, ul {
			font-family: 'Inter', serif;
		}

		#article-content table {
			margin-top: 1em;
			margin-bottom: 1em;
			font-family: 'Inter', serif;
			width: 100%;
			border-spacing: 0;
			font-size: small;
		}

		#article-content th {
			font-weight: 600;
			text-align: left;
		}

		#article-content th {
			margin: 0;
			padding-top: 1em;
			padding-bottom: 1em;
			padding: 0.5em;
			border-bottom: 0.5px solid white;
			border-top: 0.5px solid white;
			/* background-color: rgba(255, 255, 255, 0.095); */
		}
		#article-content td {
			margin: 0;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
			padding: 0.5em;
		}

		#article-content tr:hover {
			background-color: rgba(240, 248, 255, 0.02);
		}

		#article-content a:hover {
			text-decoration: underline;
		}

		#article-content h1 {
			padding: 1em;
			color: black;
			background-color: rgb(229, 229, 229);
			margin-bottom: 2em;
			margin-top: 2em;
		}

		#article-content h2, h3 {
			margin-top: 2em;
		}

		#article-content blockquote {
			padding-left: 1em;
			margin: 0;
			font-weight: 600;
			border-left: 2px solid white;
		}

		#article-content img {
			width: 100%;
			display: block;
		}

		#article-content ul {
			line-height: 2em;
			padding: 0;
			padding-left: 1em;
			font-size: small;
		}
	}	
	
	#nav {
		color: grey;
		display: none;
		flex-direction: row;
		justify-content: center;
		width: 100%;
		margin: 0;
	}

	#mobile {
		display: block;

	}

	#desktop {
		display: none;
	}

	button {
		all: unset;
		font-size: 1em;
		cursor: pointer;
		margin: 1em;
	}
	button:hover {
		font-weight: bold;
		color: aliceblue;
	}

	h1 {
		font-size: 3em;
		max-width: 100%;
		text-wrap: wrap;
	}
	h2 {
		margin-bottom: 2em;
	}

	#info p {
		color: rgb(127, 127, 127);
		line-height: 1.5em;
		margin: 0;
		font-family: 'Courier New', Courier, monospace;
		font-size: small;
	}

	

	@media only screen and (min-width: 1000px) {
		:global #article-content ul {
			font-size: medium;
		}

		#nav {
			color: grey;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			width: 100%;
	}
		#mobile {
			display: none;
		}

		#desktop {
			display: block;
		}
		
		button {
			margin-right: 2em;
		}
		h1 {
			margin-top: 0;
			font-size: 6em;
			max-width: 100%;
		
	}
	

	#wrapper {
		margin-top: 2em;
		margin-left: 3em;
		margin-bottom: 3em;
	}

	p#tags {
		margin-bottom: 1em;
		color: aliceblue;
	}
	}

	#tags {
		display: flex;
		flex-direction: row;
		margin-bottom: 1em;
	}

	#tags p {
		color: aliceblue;
	}

</style>
