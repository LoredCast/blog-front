/** @type {import('../../$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    let res = await fetch("https://directus.manuelunterriker.de/items/writing")
    return {
        writings: await directus.request(readItems('writing', {
            fields: ['Title', 'Content', 'date_created', 'date_updated', 'tags', 'id'],
            sort: ['-date_created'],
        })),
    };
}