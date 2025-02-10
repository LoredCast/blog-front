/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    return {
        articles: await directus.request(readItems('articles', {
            fields: ['url', 'title', 'date_created', { author: ['name'] }, 'summary'],
            sort: ['-date_created'],
        })),
    };
}


