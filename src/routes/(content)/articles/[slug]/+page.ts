/** @type {import('../../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
    const directus = getDirectusInstance(fetch);
    let res = await fetch("https://directus.manuelunterriker.de/items/writing")
    console.log(params.slug)
	
    return {
        articles: await directus.request(readItems('articles', {
			filter: { url: { _eq:  params.slug} },
            fields: ['title', 'content', 'date_created', 'date_updated', 'tags', 'id','author', 'category'],
            sort: ['-date_created'],
			
        })),
    };
}