/** @type {import('../../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);
    let res = await fetch("https://directus.manuelunterriker.de/items/writing")
    console.log(params.slug)
	
    return {
        writings: await directus.request(readItems('writing', {
			filter: { id: { _eq:  params.slug} },
            fields: ['Title', 'Content', 'date_created', 'date_updated', 'tags', 'id','author', 'image'],
            sort: ['-date_created'],
			
        })),
    };
}