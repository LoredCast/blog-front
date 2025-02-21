type tag ={
	url: string,
	name: string,
	active: boolean
}

interface siteState {
	showNavColumn:boolean,
	heading: string,
	tags: tag[]
	
}


export const siteState : siteState = $state({
	showNavColumn: true,
	heading: "",
    tags: []
	/* ... */
});