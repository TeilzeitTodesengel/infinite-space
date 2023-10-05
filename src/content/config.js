import { defineCollection, z } from 'astro:content';

const companiesCollection = defineCollection({
    schema: z.object ({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
    }),
});
const factionsCollection = defineCollection({
    schema: z.object ({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        icon: z.string().optional(),
    }),
});
const personasCollection = defineCollection({
    schema: z.object ({
        name: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        icon: z.string().optional(),
    }),
});

export const collections = {
    'companies': companiesCollection,
    'factions': factionsCollection,
    'personas': personasCollection,
};