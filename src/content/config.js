import { defineCollection, z } from 'astro:content';

const factionsCollection = defineCollection({
    schema: z.object ({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),
});

const personasCollection = defineCollection({
    schema: z.object ({
        name: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
        icon: z.string().optional(),
    }),
});

export const collections = {
    'factions': factionsCollection,
    'personas': personasCollection,
};