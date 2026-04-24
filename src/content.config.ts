import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const albums = defineCollection({
	loader: glob({ base: './src/content/albums', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		artist: z.string(),
		year: z.string(),
		genre: z.string().optional(),
		coverURL: z.string().optional(),
		spotifyURL: z.string().optional(),
		appleMusicURL: z.string().optional(),
		youtubeMusicURL: z.string().optional(),
		bandcampURL: z.string().optional(),
		deezerURL: z.string().optional(),
		// Non-empty string = listened; empty or absent = to-listen
		listenSessionDate: z.string().optional(),
	}),
});

export const collections = { albums };

