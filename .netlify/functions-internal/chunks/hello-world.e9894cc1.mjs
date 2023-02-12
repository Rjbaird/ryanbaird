import "cookie";
import "html-escaper";
import "kleur/colors";
import "mime";
import "path-to-regexp";
import "slash";
import "string-width";
import {
    F as Fragment,
    k as createVNode,
    _ as __astro_tag_component__,
} from "./astro.6e51631a.mjs";

const frontmatter = {
    title: "Building the Blog",
    description: "Rambling about why and how I started this blog",
    tags: ["MDX", "Astro"],
    pubDate: "2022-08-25T00:00:00.000Z",
    updatedDate: "2022-09-01T00:00:00.000Z",
};
function getHeadings() {
    return [
        {
            depth: 3,
            slug: "so-why-now",
            text: "So why now?",
        },
        {
            depth: 3,
            slug: "so-what-now",
            text: "So what now?",
        },
    ];
}
function _createMdxContent(props) {
    const _components = Object.assign(
        {
            p: "p",
            h3: "h3",
            a: "a",
        },
        props.components
    );
    return createVNode(Fragment, {
        children: [
            createVNode(_components.p, {
                children:
                    "Starting a blog is a goal I\u2019ve put off for way longer than I\u2019m proud of.",
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "I rarely even share my thoughts on any social media platform. A random retweet here or there and a few reddit post spread over a few years. There\u2019s a sense of fear around putting my thoughts into the world for others.\nSo I avoided it. The habit never sticks.",
            }),
            "\n",
            createVNode(_components.h3, {
                id: "so-why-now",
                children: "So why now?",
            }),
            "\n",
            createVNode(_components.p, {
                children: [
                    "When I created my first website/portfolio, I used what I thought was right outside my comfort zone: ",
                    createVNode(_components.a, {
                        href: "https://reactjs.org/",
                        children: "React",
                    }),
                    ".",
                ],
            }),
            "\n",
            createVNode(_components.p, {
                children: [
                    "It was the last topic in my bootcamp, right when my exhaustion was at it\u2019s peak. Eventually, I completed it, using ",
                    createVNode(_components.a, {
                        href: "https://tailwindcss.com/",
                        children: "TailwindCSS",
                    }),
                    " for styling and Firebase for basic hosting. I planned to eventually convert everything over to Next.js, with the option to simply use Markdown files as post. No need for an additional CMS solution. Completely outside what I could do at the time but still a dream.",
                ],
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "Since then, I moved on to different projects. I got developer job where I started to learn about site speed, image optimization, accessibility\u2026 The list goes on.",
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "As I fell deeper into learning about all the different web development frameworks and optimization decisions, two projects caught my attention the most:",
            }),
            "\n",
            createVNode(_components.p, {
                children: [
                    createVNode(_components.a, {
                        href: "https://www.solidjs.com/",
                        children: "SolidJS",
                    }),
                    " & ",
                    createVNode(_components.a, {
                        href: "https://astro.build/",
                        children: "Astro",
                    }),
                    ".",
                ],
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "Both frameworks have a focus on minimalism and performance while also being relatively beginner-friendly. I have a bias towards anything built around essentialism, productivity and was, all things considered, a relatively beginner-developer. It was perfect.",
            }),
            "\n",
            createVNode(_components.h3, {
                id: "so-what-now",
                children: "So what now?",
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "Depending on when you see this post, the content may change. Hell even the content of this post may completely change. I want this to be a living document. For now, the plan is to simply push new post up to GitHub with the rest of the code.",
            }),
            "\n",
            createVNode(_components.p, {
                children: [
                    "This lets me add version control to the whole blog while also giving me automatic deployments with ",
                    createVNode(_components.a, {
                        href: "https://www.netlify.com/",
                        children: "Netlify",
                    }),
                    ". For any post, you can look back at all the edit, mistakes, corrections and clarifications. Hopefully that makes this all a little more human.",
                ],
            }),
            "\n",
            createVNode(_components.p, {
                children:
                    "It\u2019s overall a crazy simple yet effective system.",
            }),
            "\n",
            createVNode(_components.p, {
                children: "Right now, I\u2019m pretty happy with the results.",
            }),
        ],
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout
        ? createVNode(MDXLayout, {
              ...props,
              children: createVNode(_createMdxContent, {
                  ...props,
              }),
          })
        : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const Content = (props = {}) =>
    MDXContent({
        ...props,
        components: { Fragment, ...props.components },
    });
Content[Symbol.for("astro.needsHeadRendering")] = !Boolean(frontmatter.layout);

const collectedLinks = "@@ASTRO-LINKS@@";
const collectedStyles = "@@ASTRO-STYLES@@";

export { Content, collectedLinks, collectedStyles, getHeadings };
