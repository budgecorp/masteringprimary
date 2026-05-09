import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { generatePostOG } from '../../lib/og';

export async function getStaticPaths() {
	const posts = await getCollection('blog', ({ data }) =>
		import.meta.env.PROD ? !data.draft : true,
	);
	return posts.map((post) => ({
		params: { slug: post.id },
		props: { title: post.data.title },
	}));
}

export const GET: APIRoute = async ({ props }) => {
	const { title } = props as { title: string };
	const png = await generatePostOG(title);

	return new Response(png, {
		status: 200,
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=31536000, immutable',
		},
	});
};
