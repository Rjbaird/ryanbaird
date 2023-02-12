/* empty css                         */ import rss from "@astrojs/rss";
import dayjs from "dayjs";
import { optimize } from "svgo";
import {
    a as createComponent$1,
    b as renderComponent,
    c as createAstro,
    d as addAttribute,
    e as renderHead,
    F as Fragment,
    f as renderSlot,
    g as createCollectionToGlobResultMap,
    h as createGetCollection,
    m as maybeRenderHead,
    r as renderTemplate,
    s as spreadAttributes,
    u as unescapeHTML,
    _ as __astro_tag_component__,
} from "../astro.6e51631a.mjs";

const BRANCH = Symbol("branch");
let Owner = null;
function createSignal(value, options) {
    return [
        () => value,
        (v) => {
            return (value = typeof v === "function" ? v(value) : v);
        },
    ];
}
function onCleanup(fn) {
    let node;
    if (Owner && (node = lookup(Owner, BRANCH))) {
        if (!node.cleanups) node.cleanups = [fn];
        else node.cleanups.push(fn);
    }
    return fn;
}
function lookup(owner, key) {
    return owner
        ? owner.context && owner.context[key] !== undefined
            ? owner.context[key]
            : lookup(owner.owner, key)
        : undefined;
}
const sharedConfig = {};
function setHydrateContext(context) {
    sharedConfig.context = context;
}
function nextHydrateContext() {
    return sharedConfig.context
        ? {
              ...sharedConfig.context,
              id: `${sharedConfig.context.id}${sharedConfig.context.count++}-`,
              count: 0,
          }
        : undefined;
}
function createComponent(Comp, props) {
    if (sharedConfig.context && !sharedConfig.context.noHydrate) {
        const c = sharedConfig.context;
        setHydrateContext(nextHydrateContext());
        const r = Comp(props || {});
        setHydrateContext(c);
        return r;
    }
    return Comp(props || {});
}

const booleans = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
];
/*#__PURE__*/ new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...booleans,
]);

const { hasOwnProperty } = Object.prototype;
const REF_START_CHARS = "hjkmoquxzABCDEFGHIJKLNPQRTUVWXYZ$_";
const REF_START_CHARS_LEN = REF_START_CHARS.length;
const REF_CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
const REF_CHARS_LEN = REF_CHARS.length;
const STACK = [];
const BUFFER = [""];
let ASSIGNMENTS = new Map();
let INDEX_OR_REF = new WeakMap();
let REF_COUNT = 0;
BUFFER.pop();
function stringify(root) {
    if (writeProp(root, "")) {
        let result = BUFFER[0];
        for (let i = 1, len = BUFFER.length; i < len; i++) {
            result += BUFFER[i];
        }
        if (REF_COUNT) {
            if (ASSIGNMENTS.size) {
                let ref = INDEX_OR_REF.get(root);
                if (typeof ref === "number") {
                    ref = toRefParam(REF_COUNT++);
                    result = ref + "=" + result;
                }
                for (const [assignmentRef, assignments] of ASSIGNMENTS) {
                    result += ";" + assignments + assignmentRef;
                }
                result += ";return " + ref;
                ASSIGNMENTS = new Map();
            } else {
                result = "return " + result;
            }
            result = "(function(" + refParamsString() + "){" + result + "}())";
        } else if (root && root.constructor === Object) {
            result = "(" + result + ")";
        }
        BUFFER.length = 0;
        INDEX_OR_REF = new WeakMap();
        return result;
    }
    return "void 0";
}
function writeProp(cur, accessor) {
    switch (typeof cur) {
        case "string":
            BUFFER.push(quote(cur, 0));
            break;
        case "number":
            BUFFER.push(cur + "");
            break;
        case "boolean":
            BUFFER.push(cur ? "!0" : "!1");
            break;
        case "object":
            if (cur === null) {
                BUFFER.push("null");
            } else {
                const ref = getRef(cur, accessor);
                switch (ref) {
                    case true:
                        return false;
                    case false:
                        switch (cur.constructor) {
                            case Object:
                                writeObject(cur);
                                break;
                            case Array:
                                writeArray(cur);
                                break;
                            case Date:
                                BUFFER.push(
                                    'new Date("' + cur.toISOString() + '")'
                                );
                                break;
                            case RegExp:
                                BUFFER.push(cur + "");
                                break;
                            case Map:
                                BUFFER.push("new Map(");
                                writeArray(Array.from(cur));
                                BUFFER.push(")");
                                break;
                            case Set:
                                BUFFER.push("new Set(");
                                writeArray(Array.from(cur));
                                BUFFER.push(")");
                                break;
                            case undefined:
                                BUFFER.push(
                                    "Object.assign(Object.create(null),"
                                );
                                writeObject(cur);
                                BUFFER.push(")");
                                break;
                            default:
                                return false;
                        }
                        break;
                    default:
                        BUFFER.push(ref);
                        break;
                }
            }
            break;
        default:
            return false;
    }
    return true;
}
function writeObject(obj) {
    let sep = "{";
    STACK.push(obj);
    for (const key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            const val = obj[key];
            const escapedKey = toObjectKey(key);
            BUFFER.push(sep + escapedKey + ":");
            if (writeProp(val, escapedKey)) {
                sep = ",";
            } else {
                BUFFER.pop();
            }
        }
    }
    if (sep === "{") {
        BUFFER.push("{}");
    } else {
        BUFFER.push("}");
    }
    STACK.pop();
}
function writeArray(arr) {
    BUFFER.push("[");
    STACK.push(arr);
    writeProp(arr[0], 0);
    for (let i = 1, len = arr.length; i < len; i++) {
        BUFFER.push(",");
        writeProp(arr[i], i);
    }
    STACK.pop();
    BUFFER.push("]");
}
function getRef(cur, accessor) {
    let ref = INDEX_OR_REF.get(cur);
    if (ref === undefined) {
        INDEX_OR_REF.set(cur, BUFFER.length);
        return false;
    }
    if (typeof ref === "number") {
        ref = insertAndGetRef(cur, ref);
    }
    if (STACK.includes(cur)) {
        const parent = STACK[STACK.length - 1];
        let parentRef = INDEX_OR_REF.get(parent);
        if (typeof parentRef === "number") {
            parentRef = insertAndGetRef(parent, parentRef);
        }
        ASSIGNMENTS.set(
            ref,
            (ASSIGNMENTS.get(ref) || "") +
                toAssignment(parentRef, accessor) +
                "="
        );
        return true;
    }
    return ref;
}
function toObjectKey(name) {
    const invalidIdentifierPos = getInvalidIdentifierPos(name);
    return invalidIdentifierPos === -1
        ? name
        : quote(name, invalidIdentifierPos);
}
function toAssignment(parent, key) {
    return (
        parent +
        (typeof key === "number" || key[0] === '"'
            ? "[" + key + "]"
            : "." + key)
    );
}
function getInvalidIdentifierPos(name) {
    let char = name[0];
    if (
        !(
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            char === "$" ||
            char === "_"
        )
    ) {
        return 0;
    }
    for (let i = 1, len = name.length; i < len; i++) {
        char = name[i];
        if (
            !(
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9") ||
                char === "$" ||
                char === "_"
            )
        ) {
            return i;
        }
    }
    return -1;
}
function quote(str, startPos) {
    let result = "";
    let lastPos = 0;
    for (let i = startPos, len = str.length; i < len; i++) {
        let replacement;
        switch (str[i]) {
            case '"':
                replacement = '\\"';
                break;
            case "\\":
                replacement = "\\\\";
                break;
            case "<":
                replacement = "\\x3C";
                break;
            case "\n":
                replacement = "\\n";
                break;
            case "\r":
                replacement = "\\r";
                break;
            case "\u2028":
                replacement = "\\u2028";
                break;
            case "\u2029":
                replacement = "\\u2029";
                break;
            default:
                continue;
        }
        result += str.slice(lastPos, i) + replacement;
        lastPos = i + 1;
    }
    if (lastPos === startPos) {
        result = str;
    } else {
        result += str.slice(lastPos);
    }
    return '"' + result + '"';
}
function insertAndGetRef(obj, pos) {
    const ref = toRefParam(REF_COUNT++);
    INDEX_OR_REF.set(obj, ref);
    if (pos) {
        BUFFER[pos - 1] += ref + "=";
    } else {
        BUFFER[pos] = ref + "=" + BUFFER[pos];
    }
    return ref;
}
function refParamsString() {
    let result = REF_START_CHARS[0];
    for (let i = 1; i < REF_COUNT; i++) {
        result += "," + toRefParam(i);
    }
    REF_COUNT = 0;
    return result;
}
function toRefParam(index) {
    let mod = index % REF_START_CHARS_LEN;
    let ref = REF_START_CHARS[mod];
    index = (index - mod) / REF_START_CHARS_LEN;
    while (index > 0) {
        mod = index % REF_CHARS_LEN;
        ref += REF_CHARS[mod];
        index = (index - mod) / REF_CHARS_LEN;
    }
    return ref;
}
function renderToString(code, options = {}) {
    let scripts = "";
    sharedConfig.context = {
        id: options.renderId || "",
        count: 0,
        suspense: {},
        lazy: {},
        assets: [],
        nonce: options.nonce,
        writeResource(id, p, error) {
            if (sharedConfig.context.noHydrate) return;
            if (error)
                return (scripts += `_$HY.set("${id}", ${serializeError(p)});`);
            scripts += `_$HY.set("${id}", ${stringify(p)});`;
        },
    };
    let html = resolveSSRNode(escape(code()));
    sharedConfig.context.noHydrate = true;
    html = injectAssets(sharedConfig.context.assets, html);
    if (scripts.length) html = injectScripts(html, scripts, options.nonce);
    return html;
}
function ssr(t, ...nodes) {
    if (nodes.length) {
        let result = "";
        for (let i = 0; i < nodes.length; i++) {
            result += t[i];
            const node = nodes[i];
            if (node !== undefined) result += resolveSSRNode(node);
        }
        t = result + t[nodes.length];
    }
    return {
        t,
    };
}
function ssrHydrationKey() {
    const hk = getHydrationKey();
    return hk ? ` data-hk="${hk}"` : "";
}
function escape(s, attr) {
    const t = typeof s;
    if (t !== "string") {
        if (!attr && t === "function") return escape(s(), attr);
        if (!attr && Array.isArray(s)) {
            let r = "";
            for (let i = 0; i < s.length; i++)
                r += resolveSSRNode(escape(s[i], attr));
            return {
                t: r,
            };
        }
        if (attr && t === "boolean") return String(s);
        return s;
    }
    const delim = attr ? '"' : "<";
    const escDelim = attr ? "&quot;" : "&lt;";
    let iDelim = s.indexOf(delim);
    let iAmp = s.indexOf("&");
    if (iDelim < 0 && iAmp < 0) return s;
    let left = 0,
        out = "";
    while (iDelim >= 0 && iAmp >= 0) {
        if (iDelim < iAmp) {
            if (left < iDelim) out += s.substring(left, iDelim);
            out += escDelim;
            left = iDelim + 1;
            iDelim = s.indexOf(delim, left);
        } else {
            if (left < iAmp) out += s.substring(left, iAmp);
            out += "&amp;";
            left = iAmp + 1;
            iAmp = s.indexOf("&", left);
        }
    }
    if (iDelim >= 0) {
        do {
            if (left < iDelim) out += s.substring(left, iDelim);
            out += escDelim;
            left = iDelim + 1;
            iDelim = s.indexOf(delim, left);
        } while (iDelim >= 0);
    } else
        while (iAmp >= 0) {
            if (left < iAmp) out += s.substring(left, iAmp);
            out += "&amp;";
            left = iAmp + 1;
            iAmp = s.indexOf("&", left);
        }
    return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node) {
    const t = typeof node;
    if (t === "string") return node;
    if (node == null || t === "boolean") return "";
    if (Array.isArray(node)) {
        let mapped = "";
        for (let i = 0, len = node.length; i < len; i++)
            mapped += resolveSSRNode(node[i]);
        return mapped;
    }
    if (t === "object") return node.t;
    if (t === "function") return resolveSSRNode(node());
    return String(node);
}
function getHydrationKey() {
    const hydrate = sharedConfig.context;
    return hydrate && !hydrate.noHydrate && `${hydrate.id}${hydrate.count++}`;
}
function injectAssets(assets, html) {
    if (!assets || !assets.length) return html;
    let out = "";
    for (let i = 0, len = assets.length; i < len; i++) out += assets[i]();
    return html.replace(`</head>`, out + `</head>`);
}
function injectScripts(html, scripts, nonce) {
    const tag = `<script${
        nonce ? ` nonce="${nonce}"` : ""
    }>${scripts}</script>`;
    const index = html.indexOf("<!--xs-->");
    if (index > -1) {
        return html.slice(0, index) + tag + html.slice(index);
    }
    return html + tag;
}
function serializeError(error) {
    if (error.message) {
        const fields = {};
        const keys = Object.getOwnPropertyNames(error);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = error[key];
            if (!value || (key !== "message" && typeof value !== "function")) {
                fields[key] = value;
            }
        }
        return `Object.assign(new Error(${stringify(
            error.message
        )}), ${stringify(fields)})`;
    }
    return stringify(error);
}

const $$Astro$e = createAstro("https://bairrya-blog.netlify.app");
const $$Meta = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
    Astro2.self = $$Meta;
    const { title, description, keywords, icon, themeColor, colorScheme } =
        Astro2.props;
    return renderTemplate`${renderComponent(
        $$result,
        "Fragment",
        Fragment,
        {},
        {
            default: () =>
                renderTemplate`${
                    title && renderTemplate`<title>${title}</title>`
                }${
                    description &&
                    renderTemplate`<meta name="description"${addAttribute(
                        description,
                        "content"
                    )}>`
                }${
                    keywords &&
                    renderTemplate`<meta name="keywords"${addAttribute(
                        keywords.join(", "),
                        "content"
                    )}>`
                }${
                    icon &&
                    renderTemplate`<link rel="icon"${addAttribute(
                        icon,
                        "href"
                    )}>`
                }${
                    colorScheme &&
                    renderTemplate`<meta name="color-scheme"${addAttribute(
                        colorScheme,
                        "content"
                    )}>`
                }${
                    themeColor &&
                    renderTemplate`<meta name="theme-color"${addAttribute(
                        themeColor,
                        "content"
                    )}>`
                }`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-seo-meta/dist/components/Meta.astro");

const $$Astro$d = createAstro("https://bairrya-blog.netlify.app");
const $$Facebook = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
    Astro2.self = $$Facebook;
    const { url, type, title, description, image } = Astro2.props;
    return renderTemplate`${renderComponent(
        $$result,
        "Fragment",
        Fragment,
        {},
        {
            default: () =>
                renderTemplate`${
                    url &&
                    renderTemplate`<meta property="og:url"${addAttribute(
                        url,
                        "content"
                    )}>`
                }${
                    type &&
                    renderTemplate`<meta property="og:type"${addAttribute(
                        type,
                        "content"
                    )}>`
                }${
                    title &&
                    renderTemplate`<meta property="og:title"${addAttribute(
                        title,
                        "content"
                    )}>`
                }${
                    description &&
                    renderTemplate`<meta property="og:description"${addAttribute(
                        description,
                        "content"
                    )}>`
                }${
                    image &&
                    renderTemplate`<meta property="og:image"${addAttribute(
                        image,
                        "content"
                    )}>`
                }`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-seo-meta/dist/components/Facebook.astro");

const $$Astro$c = createAstro("https://bairrya-blog.netlify.app");
const $$Twitter = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
    Astro2.self = $$Twitter;
    const { card, site, title, description, image } = Astro2.props;
    return renderTemplate`${renderComponent(
        $$result,
        "Fragment",
        Fragment,
        {},
        {
            default: () =>
                renderTemplate`${
                    card &&
                    renderTemplate`<meta name="twitter:card"${addAttribute(
                        card,
                        "content"
                    )}>`
                }${
                    site &&
                    renderTemplate`<meta name="twitter:site"${addAttribute(
                        site,
                        "content"
                    )}>`
                }${
                    title &&
                    renderTemplate`<meta name="twitter:title"${addAttribute(
                        title,
                        "content"
                    )}>`
                }${
                    description &&
                    renderTemplate`<meta name="twitter:description"${addAttribute(
                        description,
                        "content"
                    )}>`
                }${
                    image &&
                    renderTemplate`<meta name="twitter:image"${addAttribute(
                        image,
                        "content"
                    )}>`
                }`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-seo-meta/dist/components/Twitter.astro");

const $$Astro$b = createAstro("https://bairrya-blog.netlify.app");
const $$Seo = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
    Astro2.self = $$Seo;
    const {
        title,
        description,
        keywords,
        icon,
        themeColor,
        colorScheme,
        facebook,
        twitter,
    } = Astro2.props;
    return renderTemplate`${renderComponent(
        $$result,
        "Fragment",
        Fragment,
        {},
        {
            default: () =>
                renderTemplate`${renderComponent($$result, "Meta", $$Meta, {
                    title: title,
                    description: description,
                    keywords: keywords,
                    icon: icon,
                    themeColor: themeColor,
                    colorScheme: colorScheme,
                })}${renderComponent($$result, "Facebook", $$Facebook, {
                    title: title,
                    description: description,
                    image: facebook?.image,
                    url: facebook?.url,
                    type: facebook?.type,
                })}${renderComponent($$result, "Twitter", $$Twitter, {
                    title: title,
                    description: description,
                    image: twitter?.image,
                    site: twitter?.site,
                    card: twitter?.card,
                })}`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-seo-meta/dist/components/Seo.astro");

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get$1(pack, name) {
    const url = new URL(`./${pack}/${name}`, baseURL).toString();
    if (requests.has(url)) {
        return await requests.get(url);
    }
    if (fetchCache.has(url)) {
        return fetchCache.get(url);
    }
    let request = async () => {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(await res.text());
        }
        const contentType = res.headers.get("Content-Type");
        if (!contentType.includes("svg")) {
            throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
        }
        const svg = await res.text();
        fetchCache.set(url, svg);
        requests.delete(url);
        return svg;
    };
    let promise = request();
    requests.set(url, promise);
    return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer =
    /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
    let res = {};
    let token;
    if (str) {
        splitAttrsTokenizer.lastIndex = 0;
        str = " " + (str || "") + " ";
        while ((token = splitAttrsTokenizer.exec(str))) {
            res[token[1]] = token[3];
        }
    }
    return res;
};
function optimizeSvg(contents, name, options) {
    return optimize(contents, {
        plugins: [
            "removeDoctype",
            "removeXMLProcInst",
            "removeComments",
            "removeMetadata",
            "removeXMLNS",
            "removeEditorsNSData",
            "cleanupAttrs",
            "minifyStyles",
            "convertStyleToAttrs",
            {
                name: "cleanupIDs",
                params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` },
            },
            "removeRasterImages",
            "removeUselessDefs",
            "cleanupNumericValues",
            "cleanupListOfValues",
            "convertColors",
            "removeUnknownsAndDefaults",
            "removeNonInheritableGroupAttrs",
            "removeUselessStrokeAndFill",
            "removeViewBox",
            "cleanupEnableBackground",
            "removeHiddenElems",
            "removeEmptyText",
            "convertShapeToPath",
            "moveElemsAttrsToGroup",
            "moveGroupAttrsToElems",
            "collapseGroups",
            "convertPathData",
            "convertTransform",
            "removeEmptyAttrs",
            "removeEmptyContainers",
            "mergePaths",
            "removeUnusedNS",
            "sortAttrs",
            "removeTitle",
            "removeDesc",
            "removeDimensions",
            "removeStyleElement",
            "removeScriptElement",
        ],
    }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
    if (preprocessCache.has(contents)) {
        return preprocessCache.get(contents);
    }
    if (optimize) {
        contents = optimizeSvg(contents, name);
    }
    domParserTokenizer.lastIndex = 0;
    let result = contents;
    let token;
    if (contents) {
        while ((token = domParserTokenizer.exec(contents))) {
            const tag = token[2];
            if (tag === "svg") {
                const attrs = splitAttrs(token[3]);
                result = contents
                    .slice(domParserTokenizer.lastIndex)
                    .replace(/<\/svg>/gim, "")
                    .trim();
                const value = { innerHTML: result, defaultProps: attrs };
                preprocessCache.set(contents, value);
                return value;
            }
        }
    }
}
function normalizeProps(inputProps) {
    const size = inputProps.size;
    delete inputProps.size;
    const w = inputProps.width ?? size;
    const h = inputProps.height ?? size;
    const width = w ? toAttributeSize(w) : void 0;
    const height = h ? toAttributeSize(h) : void 0;
    return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
    const key = name;
    if (!name) {
        throw new Error("<Icon> requires a name!");
    }
    let svg = "";
    let filepath = "";
    if (name.includes(":")) {
        const [pack, ..._name] = name.split(":");
        name = _name.join(":");
        filepath = `/src/icons/${pack}`;
        let get;
        try {
            const files = /* #__PURE__ */ Object.assign({});
            const keys = Object.fromEntries(
                Object.keys(files).map((key2) => [
                    key2.replace(/\.[cm]?[jt]s$/, ""),
                    key2,
                ])
            );
            if (!(filepath in keys)) {
                throw new Error(`Could not find the file "${filepath}"`);
            }
            const mod = files[keys[filepath]];
            if (typeof mod.default !== "function") {
                throw new Error(
                    `[astro-icon] "${filepath}" did not export a default function!`
                );
            }
            get = mod.default;
        } catch (e) {}
        if (typeof get === "undefined") {
            get = get$1.bind(null, pack);
        }
        const contents = await get(name, inputProps);
        if (!contents) {
            throw new Error(
                `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
            );
        }
        if (!/<svg/gim.test(contents)) {
            throw new Error(
                `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
            );
        }
        svg = contents;
    } else {
        filepath = `/src/icons/${name}.svg`;
        try {
            const files = /* #__PURE__ */ Object.assign({});
            if (!(filepath in files)) {
                throw new Error(`Could not find the file "${filepath}"`);
            }
            const contents = files[filepath];
            if (!/<svg/gim.test(contents)) {
                throw new Error(
                    `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
                );
            }
            svg = contents;
        } catch (e) {
            throw new Error(
                `[astro-icon] Unable to load "${filepath}". Does the file exist?`
            );
        }
    }
    const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
    if (!innerHTML.trim()) {
        throw new Error(`Unable to parse "${filepath}"!`);
    }
    return {
        innerHTML,
        props: { ...defaultProps, ...normalizeProps(inputProps) },
    };
}

const $$Astro$a = createAstro("https://bairrya-blog.netlify.app");
const $$Icon = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
    Astro2.self = $$Icon;
    let {
        name,
        pack,
        title,
        optimize = true,
        class: className,
        ...inputProps
    } = Astro2.props;
    let props = {};
    if (pack) {
        name = `${pack}:${name}`;
    }
    let innerHTML = "";
    try {
        const svg = await load(
            name,
            { ...inputProps, class: className },
            optimize
        );
        innerHTML = svg.innerHTML;
        props = svg.props;
    } catch (e) {
        {
            throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
        }
    }
    return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(
        props
    )}${addAttribute(name, "astro-icon")}>${unescapeHTML(
        (title ? `<title>${title}</title>` : "") + innerHTML
    )}</svg>`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-icon/lib/Icon.astro");

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
    let currentSet = sprites.get(request);
    if (!currentSet) {
        currentSet = /* @__PURE__ */ new Set([name]);
    } else {
        currentSet.add(name);
    }
    sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
    const currentSet = sprites.get(request);
    if (currentSet) {
        return Array.from(currentSet);
    }
    if (!warned.has(request)) {
        const { pathname } = new URL(request.url);
        console.log(
            `[astro-icon] No sprites found while rendering "${pathname}"`
        );
        warned.add(request);
    }
    return [];
}

const $$Astro$9 = createAstro("https://bairrya-blog.netlify.app");
const $$Spritesheet = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
    Astro2.self = $$Spritesheet;
    const { optimize = true, style, ...props } = Astro2.props;
    const names = await getUsedSprites(Astro2.request);
    const icons = await Promise.all(
        names.map((name) => {
            return load(name, {}, optimize)
                .then((res) => ({ ...res, name }))
                .catch((e) => {
                    {
                        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
                    }
                });
        })
    );
    return renderTemplate`${maybeRenderHead($$result)}<svg${addAttribute(
        `position: absolute; width: 0; height: 0; overflow: hidden; ${
            style ?? ""
        }`.trim(),
        "style"
    )}${spreadAttributes({
        "aria-hidden": true,
        ...props,
    })} astro-icon-spritesheet>
    ${icons.map(
        (icon) =>
            renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(
                `${SPRITESHEET_NAMESPACE}:${icon.name}`,
                "id"
            )}>${unescapeHTML(icon.innerHTML)}</symbol>`
    )}
</svg>`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-icon/lib/Spritesheet.astro");

const $$Astro$8 = createAstro("https://bairrya-blog.netlify.app");
const $$SpriteProvider = createComponent$1(
    async ($$result, $$props, $$slots) => {
        const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
        Astro2.self = $$SpriteProvider;
        const content = await Astro2.slots.render("default");
        return renderTemplate`${renderComponent(
            $$result,
            "Fragment",
            Fragment,
            {},
            { default: () => renderTemplate`${unescapeHTML(content)}` }
        )}
${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
    },
    "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-icon/lib/SpriteProvider.astro"
);

const $$Astro$7 = createAstro("https://bairrya-blog.netlify.app");
const $$Sprite = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
    Astro2.self = $$Sprite;
    let {
        name,
        pack,
        title,
        class: className,
        x,
        y,
        ...inputProps
    } = Astro2.props;
    const props = normalizeProps(inputProps);
    if (pack) {
        name = `${pack}:${name}`;
    }
    const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
    trackSprite(Astro2.request, name);
    return renderTemplate`${maybeRenderHead($$result)}<svg${spreadAttributes(
        props
    )}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>
    ${title ? renderTemplate`<title>${title}</title>` : ""}
    <use${spreadAttributes({
        "xlink:href": href,
        width: props.width,
        height: props.height,
        x,
        y,
    })}></use>
</svg>`;
}, "/Users/ryanbaird/DEV/astro-blog/node_modules/astro-icon/lib/Sprite.astro");

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$6 = createAstro("https://bairrya-blog.netlify.app");
const $$Footer = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
    Astro2.self = $$Footer;
    const today = new Date();
    const svgBaseClass = `w-6 h-6 fill-current stroke-2 text-`;
    const icons = [
        {
            name: "Github",
            handle: "simple-icons:github",
            color: `${svgBaseClass} hover:text-[#ffffff]`,
            link: "https://github.com/Rjbaird",
        },
        {
            name: "Linkedin",
            handle: "simple-icons:linkedin",
            color: `${svgBaseClass} hover:text-[#0A66C2]`,
            link: "https://www.linkedin.com/in/bairdryan/",
        },
        {
            name: "Twitter",
            handle: "simple-icons:twitter",
            color: `${svgBaseClass} hover:text-[#1DA1F2]`,
            link: "https://twitter.com/ryanjohnbaird",
        },
        {
            name: "RSS",
            handle: "simple-icons:rss",
            color: `${svgBaseClass} hover:text-[#FFA500]`,
            link: "https://ryanbaird.com/rss.xml",
        },
    ];
    return renderTemplate`${maybeRenderHead(
        $$result
    )}<footer class="text-white sticky top-[100vh] py-6 px-3 md:px-0">
    <div class="max-w-7xl mx-auto flex md:items-center justify-between">
        <div class="flex gap-2">
            &copy;${today.getFullYear()}
            <span class="hidden md:block">Ryan Baird</span>
        </div>
        <div class="flex justify-center space-x-6 md:order-2">
            ${icons.map(
                (icon) => renderTemplate`<a${addAttribute(
                    icon.link,
                    "href"
                )} target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300">
                        <span class="sr-only">${icon.name}</span>
                        ${renderComponent($$result, "Icon", $$Icon, {
                            class: icon.color,
                            name: icon.handle,
                        })}
                    </a>`
            )}
        </div>
    </div>
</footer>`;
}, "/Users/ryanbaird/DEV/astro-blog/src/components/Footer.astro");

const _tmpl$ = [
    "<p",
    ' class="text-white text-sm">currently <!--#-->',
    "<!--/--></p>",
];
const subtitleOptions = [
    {
        text: "working in software development",
        active: true,
        link: "",
    },
    {
        text: "exercising with volumn cycles",
        active: true,
        link: "",
    },
    {
        text: "trying out astro, solid.js and mdx",
        active: true,
        link: "",
    },
    {
        text: "reading one piece",
        active: true,
        link: "",
    },
    {
        text: "playing fire emblem engage",
        active: true,
        link: "",
    },
];
const getSubtitle = (subtitleOptions2) => {
    const active = subtitleOptions2.filter((option) => option.active);
    return active[Math.floor(Math.random() * subtitleOptions2.length)].text;
};
function HeaderSubtitle() {
    const [subtitle, setSubtitle] = createSignal(subtitleOptions[0].text);
    const timer = setInterval(() => {
        const newSubtitle = getSubtitle(subtitleOptions);
        setSubtitle(newSubtitle);
    }, 4500);
    onCleanup(() => clearInterval(timer));
    return ssr(_tmpl$, ssrHydrationKey(), escape(subtitle()));
}

__astro_tag_component__(HeaderSubtitle, "@astrojs/solid-js");

const $$Astro$5 = createAstro("https://bairrya-blog.netlify.app");
const $$Header = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
    Astro2.self = $$Header;
    const navlinks = [
        {
            name: "Blog",
            url: "/blog",
        },
        {
            name: "Projects",
            url: "/projects",
        },
        {
            name: "Work",
            url: "/work",
        },
    ];
    return renderTemplate`${maybeRenderHead(
        $$result
    )}<header class="flex flex-col md:flex-row md:place-content-between pb-4">
    <div class="flex flex-col">
        <a class="text-red-600 text-2xl md:text-4xl" href="/">Ryan Baird</a>
        <span class="hidden md:grid content-end">
            ${renderComponent($$result, "HeaderSubtitle", HeaderSubtitle, {
                "client:load": true,
                "client:component-hydration": "load",
                "client:component-path":
                    "/Users/ryanbaird/DEV/astro-blog/src/components/islands/HeaderSubtitle",
                "client:component-export": "HeaderSubtitle",
            })}
        </span>
    </div>
    <nav class="flex space-x-4 md:justify-end items-end text-gray-100 text-lg md:text-2xl">
        ${navlinks.map(
            (link) => renderTemplate`<a class="text-lg"${addAttribute(
                link.url,
                "href"
            )}>
                    ${link.name}
                </a>`
        )}
    </nav>
</header>`;
}, "/Users/ryanbaird/DEV/astro-blog/src/components/Header.astro");

const $$Astro$4 = createAstro("https://bairrya-blog.netlify.app");
const $$BaseLayout = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
    Astro2.self = $$BaseLayout;
    const { title, description, keywords = [""] } = Astro2.props;
    return renderTemplate`<html lang="en">
    <head>
        ${renderComponent($$result, "Seo", $$Seo, {
            title: title,
            description: description,
            keywords: keywords,
        })}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    ${renderHead($$result)}</head>
    <body class="min-h-screen bg-black px-8 pt-4 text-white text-lg my-3 selection:bg-green-300 selection:text-green-900">
        ${renderComponent($$result, "Header", $$Header, {})}
        
        ${renderSlot($$result, $$slots["default"])}
        ${renderComponent($$result, "Footer", $$Footer, {})}
    </body></html>`;
}, "/Users/ryanbaird/DEV/astro-blog/src/layouts/BaseLayout.astro");

const $$Astro$3 = createAstro("https://bairrya-blog.netlify.app");
const $$Index$1 = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
    Astro2.self = $$Index$1;
    const keywords = ["blog", "ryan baird", "bairrya"];
    return renderTemplate`${renderComponent(
        $$result,
        "Layout",
        $$BaseLayout,
        {
            title: "Ryan Baird",
            description: "Homepage for ryan baird dot com",
            keywords: keywords,
        },
        {
            default: () => renderTemplate`${maybeRenderHead($$result)}<main>
        <p class="">My attempt at a reasonably good website</p>
    </main>`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/src/pages/index.astro");

const $$file$3 = "/Users/ryanbaird/DEV/astro-blog/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$Index$1,
            file: $$file$3,
            url: $$url$3,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

// astro-head-inject

const contentDir = "/src/content/";

const entryGlob = /* #__PURE__ */ Object.assign({
    "/src/content/blog/2022/hello-world.mdx": () =>
        import("../hello-world.1fd130b8.mjs"),
    "/src/content/blog/2023/iphone-12-mini-review.mdx": () =>
        import("../iphone-12-mini-review.7e33117c.mjs"),
});
const collectionToEntryMap = createCollectionToGlobResultMap({
    globResult: entryGlob,
    contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({
    "/src/content/blog/2022/hello-world.mdx": () =>
        import("../hello-world.e9894cc1.mjs"),
    "/src/content/blog/2023/iphone-12-mini-review.mdx": () =>
        import("../iphone-12-mini-review.ec3e7179.mjs"),
});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
    globResult: renderEntryGlob,
    contentDir,
});

const getCollection = createGetCollection({
    collectionToEntryMap,
    collectionToRenderEntryMap,
});

async function get(context) {
    const blogs = await getCollection("blogs");
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
            // This example assumes all blogs are rendered as `/blogs/[slug]` routes
            link: `/blogs/${blog.slug}/`,
        })),
    });
}

const _page1 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            get,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

const $$Astro$2 = createAstro("https://bairrya-blog.netlify.app");
const $$Index = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
    Astro2.self = $$Index;
    const arrow = "-->";
    const blogEntries = await getCollection("blog");
    return renderTemplate`${renderComponent(
        $$result,
        "BaseLayout",
        $$BaseLayout,
        { title: "Ryan's Blog Posts", description: "" },
        {
            default: () => renderTemplate`${maybeRenderHead(
                $$result
            )}<h1 class="underline pb-2 text-xl">Blog Posts</h1><ul>
        ${blogEntries.map(
            (blogPostEntry) => renderTemplate`<li class="text-sm md:text-base">
                    <time${addAttribute(
                        blogPostEntry.data.pubDate.toISOString(),
                        "datetime"
                    )}>
                        ${dayjs(blogPostEntry.data.pubDate).format(
                            "YYYY-MM-DD"
                        )}${" "}
                        ${arrow}
                    </time>
                    <a${addAttribute(
                        `/blog/${blogPostEntry.slug}`,
                        "href"
                    )} class="text-green-400 hover:text-yellow-300">
                        ${blogPostEntry.data.title}${" "}
                        <span class="hidden md:inline-block text-xs text-gray-200">
                            -${blogPostEntry.data.description}
                        </span>
                    </a>
                </li>`
        )}
    </ul>`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/src/pages/blog/index.astro");

const $$file$2 = "/Users/ryanbaird/DEV/astro-blog/src/pages/blog/index.astro";
const $$url$2 = "/blog";

const _page2 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$Index,
            file: $$file$2,
            url: $$url$2,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

const $$Astro$1 = createAstro("https://bairrya-blog.netlify.app");
async function getStaticPaths() {
    const allBlogPosts = await getCollection("blog");
    return allBlogPosts.map((post) => ({
        params: { slug: post.slug },
        props: { post },
    }));
}
const $$slug = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$slug;
    const { post } = Astro2.props;
    const { Content } = await post.render();
    return renderTemplate`${renderComponent(
        $$result,
        "BaseLayout",
        $$BaseLayout,
        {
            title: post.data.title,
            description: post.data.description,
            keywords: post.data.tags,
        },
        {
            default: () =>
                renderTemplate`${maybeRenderHead($$result)}<h1>${
                    post.data.title
                }</h1><h2>${post.data.description}</h2>${renderComponent(
                    $$result,
                    "Content",
                    Content,
                    {}
                )}`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/src/pages/blog/[slug].astro");

const $$file$1 = "/Users/ryanbaird/DEV/astro-blog/src/pages/blog/[slug].astro";
const $$url$1 = "/blog/[slug]";

const _page3 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$slug,
            file: $$file$1,
            getStaticPaths,
            url: $$url$1,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

const $$Astro = createAstro("https://bairrya-blog.netlify.app");
const $$404 = createComponent$1(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$404;
    const keywords = ["missing", "error", "404"];
    return renderTemplate`${renderComponent(
        $$result,
        "BaseLayout",
        $$BaseLayout,
        {
            title: "Ryan Baird",
            description: "Homepage for ryan baird dot com",
            keywords: keywords,
        },
        {
            default: () => renderTemplate`${maybeRenderHead(
                $$result
            )}<main class="min-h-full">
        <div class="mx-auto max-w-7xl py-16 px-6 text-center sm:py-24 lg:px-8 lg:py-48">
            <p class="text-6xl font-bold text-white text-opacity-50">404</p>
            <h1 class="mt-2 text-base font-semibold tracking-tight text-whitel">
                Uh oh! I think you’re lost a little lost...
            </h1>
            <p class="mt-2 text-sm font-medium text-white text-opacity-50">
                It looks like the page you’re looking for doesn't exist.
            </p>
            <p class="mt-2 text-sm font-medium text-white text-opacity-50">
                <a href="/" class="text-white">&larr; Go back home</a>
            </p>
        </div>
    </main>`,
        }
    )}`;
}, "/Users/ryanbaird/DEV/astro-blog/src/pages/404.astro");

const $$file = "/Users/ryanbaird/DEV/astro-blog/src/pages/404.astro";
const $$url = "/404";

const _page4 = /*#__PURE__*/ Object.freeze(
    /*#__PURE__*/ Object.defineProperty(
        {
            __proto__: null,
            default: $$404,
            file: $$file,
            url: $$url,
        },
        Symbol.toStringTag,
        { value: "Module" }
    )
);

export {
    _page0 as _,
    _page1 as a,
    _page2 as b,
    createComponent as c,
    _page3 as d,
    _page4 as e,
    renderToString as r,
    ssr as s,
};
