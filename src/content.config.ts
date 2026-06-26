import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    draft: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    category: z.string().default("site"),
    github: z.string().default(""),
    url: z.string().default(""),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const jobCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    contact: z.string().optional(),
    display: z.boolean().default(true),
  }),
});

const schoolCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/school" }),
  schema: z.object({
    title: z.string().optional(),
    name: z.string().optional(),
    degree: z.string().optional(),
    url: z.string().optional(),
    school: z.string().optional(),
    location: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    display: z.boolean().default(true),
  }).passthrough(),
});

export const collections = {
  blog: blogCollection,
  projects: projectCollection,
  jobs: jobCollection,
  school: schoolCollection,
};
