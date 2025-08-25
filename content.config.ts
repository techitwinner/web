import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**/posts/**/*.md',
        schema: z.object({
          coverImage: z.string(),
          tags: z.array(z.string()),
          dateCreated: z.string().datetime(),
          dateUpdated: z.string().datetime(),
        }),
      })
    ),
    projects: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**/projects/**/*.md',
        schema: z.object({
          logo: z.string(),
          tags: z.array(z.string()),
          dateCreated: z.string().datetime(),
          dateUpdated: z.string().datetime(),
        }),
      })
    )
  },
})