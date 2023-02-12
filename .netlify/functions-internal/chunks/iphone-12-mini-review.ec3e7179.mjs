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
    title: "Loving the iPhone 12 Mini",
    description: "Long live small phones",
    tags: ["iPhone", "Minimalism"],
    pubDate: "2022-09-13T00:00:00.000Z",
    updatedDate: "2023-01-27T00:00:00.000Z",
    draft: true,
};
function getHeadings() {
    return [];
}
function _createMdxContent(props) {
    const _components = Object.assign(
        {
            p: "p",
            a: "a",
        },
        props.components
    );
    return createVNode(_components.p, {
        children: [
            "When the Verge published an ",
            createVNode(_components.a, {
                href: "https://www.theverge.com/2022/8/25/23321978/iphone-14-pixel-6a-phone-screen-size-6-1-inches",
                children: "article",
            }),
            " about the deal of small phones, I had a hard time disagreeing.",
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
