import type { APIRoute } from 'astro';
import { generateDefaultOG } from '../lib/og';

export const prerender = true;

export const GET: APIRoute = async () => {
	const png = await generateDefaultOG();

	return new Response(png, {
		status: 200,
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
