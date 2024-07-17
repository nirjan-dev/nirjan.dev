import { getCollection } from "astro:content";

export async function GET() {
  const postSitemaps = [];

  let blogPosts = await getCollection("blog", ({ data }) => {
    return data.isDraft !== true;
  });

  blogPosts = blogPosts.sort((a, b) => {
    return (
      new Date(b.data.publishDate).valueOf() -
      new Date(a.data.publishDate).valueOf()
    );
  });

  postSitemaps.push({
    loc: "https://nirjan.dev/blog/",
    lastmod: new Date(
      blogPosts[0].data.updateDate ?? blogPosts[0].data.publishDate
    ).toISOString(),
  });

  blogPosts.forEach((post) => {
    postSitemaps.push({
      loc: `https://nirjan.dev/blog/${post.slug}/`,
      lastmod: new Date(
        post.data.updateDate ?? post.data.publishDate
      ).toISOString(),
    });
  });

  const xmlString = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${postSitemaps
        .map(
          (post) =>
            `<url>
              <loc>${post.loc}</loc>
              <lastmod>${post.lastmod}</lastmod>
            </url>`
        )
        .join("")}
    </urlset>
  `;

  return new Response(xmlString, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
