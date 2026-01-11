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
    title: "Nirjan's Coding & Tech Blog",
    description:
      "I write about building fast, secure and user-friendly apps on the web and cover different web technologies like HTML & CSS, JavaScript, TypeScript, Svelte, React.js, Golang, Postgres & SQLite.",
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
