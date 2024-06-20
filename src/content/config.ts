import { defineCollection, z } from "astro:content";
import { title } from "process";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    isDraft: z.boolean().optional(),
    publishDate: z.string().transform((val) => new Date(val)),
    updateDate: z.date().optional(),
    excerpt: z.string(),
  }),
});

//  Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
