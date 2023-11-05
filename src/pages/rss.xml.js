import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const blogs = await getCollection("blog");
    return rss({
        title: "Ryan Baird’s Blog",
        description:
            "A guy trying to figure out how this internet thing works.",
        site: context.site,
        items: blogs.map((blog) => ({
            title: blog.data.title,
            pubDate: blog.data.pubDate,
            description: blog.data.description,
            customData: blog.data.customData,
            // Compute RSS link from blog `slug`
            // This example assumes all blog are rendered as `/blog/[slug]` routes
            link: `/blog/${blog.slug}/`,
        })),
    });
}
