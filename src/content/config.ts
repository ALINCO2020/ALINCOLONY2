// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a schema for each collection you'd like to validate.
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string().optional(),
      thumbnail: z.string().optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
    })
});
const productCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      thumbnail: z.string(),
      downloadLink: z.string(),
      categories: z.array(z.string()),
      tags: z.array(z.string()).optional(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: blogCollection,
    product: productCollection
};