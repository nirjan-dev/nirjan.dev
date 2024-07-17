import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context: any) {
  let blog = await getCollection("blog", ({ data }) => {
    return data.isDraft !== true;
  });

  blog.sort((a, b) => {
    return (
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
    );
  });

  return rss({
    title: "Nirjan's Blog about coding and tech",
    description:
      "I write about different web technologies like HTML, CSS, JavaScript, Svelte, Vue, Storybook, Node.js, SVG, WebGL, web animation and best coding practices.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      link: `https://nirjan.dev/blog/${post.slug}/`,
      pubDate: post.data.publishDate,
      categories: post.data.tags,
      author: "Nirjan Khadka",
      trailingSlash: false,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
    customData: `<language>en-us</language>`,
  });
}
