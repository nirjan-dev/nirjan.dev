import { defineCollection, reference, z } from "astro:content";
import { title } from "process";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    tags: z.array(
      z.enum([
        "accessibility",
        "css",
        "ux",
        "javascript",
        "debugging",
        "node.js",
        "review",
        "learning",
        "management",
      ])
    ),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    isDraft: z.boolean().optional(),
    publishDate: z.string().transform((val) => new Date(val)),
    updateDate: z
      .string()
      .transform((val) => new Date(val))
      .optional(),
    excerpt: z.string(),
  }),
});

const featuredPosts = defineCollection({
  type: "content",
  schema: z.object({
    featuredPosts: z.array(reference("blog")),
  }),
});

//  Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  featured: featuredPosts,
};
