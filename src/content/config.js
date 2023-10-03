import { defineCollection, z } from 'astro:content';

const factionsCollection = defineCollection({
    schema: z.object ({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

export const collections = {
    'factions': factionsCollection,
};