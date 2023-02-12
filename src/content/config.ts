import { defineCollection, z } from "astro:content";
const blogCollection = defineCollection({
    schema: z
        .object({
            title: z
                .string()
                .max(60, "Keep title under 60 characters for better SEO"),
            description: z
                .string()
                .max(
                    160,
                    "Keep description under 160 characters for better SEO"
                ),
            draft: z.boolean().default(false),
            tags: z.array(z.string()),
            category: z.array(z.enum(["review", "notes"])).default([]),
            pubDate: z.date(),
            updatedDate: z.date(),
        })
        .strict(),
});

const projectCollection = defineCollection({
    schema: z
        .object({
            title: z
                .string()
                .max(60, "Keep title under 60 characters for better SEO"),
            description: z
                .string()
                .max(
                    160,
                    "Keep description under 160 characters for better SEO"
                ),
            draft: z.boolean().default(true),
            tags: z.array(z.string()),
            category: z
                .array(z.enum(["app", "api", "script", "site"]))
                .default([]),
            pubDate: z.date(),
            updatedDate: z.date(),
        })
        .strict(),
});

const blurbCollection = defineCollection({
    schema: z
        .object({
            title: z
                .string()
                .max(60, "Keep title under 60 characters for better SEO"),
            description: z
                .string()
                .max(
                    160,
                    "Keep description under 160 characters for better SEO"
                ),
            tags: z.array(z.string()),
            pubDate: z.date(),
            updatedDate: z.date(),
        })
        .strict(),
});

export const collections = {
    blog: blogCollection,
    projects: projectCollection,
    blurbs: blurbCollection,
};