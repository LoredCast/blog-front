<script lang="ts">
	import { convertDate } from '$lib/date';
	import type { PageData } from './$types';
	import { siteState } from '$lib/state.svelte';
	import { onDestroy } from 'svelte';
	import { goto } from '$app/navigation';
	let { data }: { data: PageData } = $props();
	import { navState } from '$lib/state/navState';
	let content = data.writings[0]
	siteState.heading = 'writing'
	siteState.showNavColumn = false

	onDestroy(() => {
		siteState.showNavColumn = true
	})

	const handleBack = () => {
		goto('/writing')
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
<button id="desktop" onclick={handleDesktopNav}>show navigation &gt</button>
<button id="mobile" onclick={handleMobileNav}>show navigation &gt</button>
</div>

<h1>{content.Title}</h1>
<div>{@html content.Content}</div>

<div id="info">
<p>First Published: {convertDate(content.date_created)}</p>
{#if content.date_updated}
<p>Last Updated: {convertDate(content.date_updated)} </p>
{/if}
</div>

</div>

<style>
	#nav {
		color: grey;
		display: flex;
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
		font-size: 2.4em;
		max-width: 100%;
		text-wrap: wrap;
	}
	#info {
	}
	#info p {
		color: rgb(49, 49, 49);
		line-height: 1.5em;
		margin: 0;
		font-family: 'Courier New', Courier, monospace;
		font-size: small;
	}

	@media only screen and (min-width: 1000px) {
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
	}

</style>
