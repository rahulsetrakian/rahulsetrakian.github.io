import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      order: z.number().optional(),
      image: z.string().refine((s) => s.startsWith('/') || s.startsWith('http')).or(image()).optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
})

const authors = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      pronouns: z.string().optional(),
      avatar: z.string().refine((s) => s.startsWith('/') || s.startsWith('http')).or(image()).optional(),
      bio: z.string().optional(),
      mail: z.string().optional(),
      website: z.string().optional(),
      mastodon: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      discord: z.string().optional(),
    }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: z.string().refine((s) => s.startsWith('/') || s.startsWith('http')).or(image()),
      link: z.string().optional(),
      startDate: z.coerce.date().optional(),
      endDate: z.preprocess((arg) => (typeof arg === 'string' && arg === '' ? undefined : arg), z.coerce.date().optional()),
    }),
})

export const collections = { blog, authors, projects }
