import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get(context) {
    const blogs = await getCollection("blogs");
    return rss({
        title: "Ryan Baird’s Blog",
        description: "A guy trying to figure out how this internet thing works.",
        site: context.site,
        items: blogs.map((blog) => ({
            title: blog.data.title,
            pubDate: blog.data.pubDate,
            description: blog.data.description,
            customData: blog.data.customData,
            // Compute RSS link from blog `slug`
            // This example assumes all blogs are rendered as `/blogs/[slug]` routes
            link: `/blogs/${blog.slug}/`,
        })),
    });
}
