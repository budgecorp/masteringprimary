import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
		// Never build the private Jarvis vault if it's ever re-synced onto disk
		// here (Brain/ holds the confidential equity campaign). These dirs are
		// also gitignored; this stops the Astro build/publish path too.
		ignore: [
			'_drafts/**', '**/_drafts/**',
			'Brain/**', 'knowledge/**', 'sources/**', 'prompts/**', 'build/**',
		],
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
