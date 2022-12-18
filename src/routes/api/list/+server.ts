import { error } from '@sveltejs/kit';
import { opendir } from 'node:fs/promises';

/** @type {import('./$types').RequestHandler} url */
export async function GET({ url }): Promise<Response> {

    const path = String(url.searchParams.get('dir') ?? '/');
    const entries: string[] = [];

   try {
        const dir = await opendir('D:/www' + path);
        for await (const entry of dir)
            entries.push(entry.name);
    } catch (err) {
        console.error(err);
    }

    return new Response(JSON.stringify(entries));
}