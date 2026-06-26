export const siteUrl = "https://ryanbaird.com";

export const shortLinks = {
  resume: "/ryan-baird-resume.pdf",
  github: "https://github.com/Rjbaird",
  linkedin: "https://www.linkedin.com/in/bairdryan/",
  projects: "/projects/",
  blog: "/blog/",
  wedding: "https://www.zola.com/wedding/mariahandryanoctober11",
} as const;

export type ShortLinkSlug = keyof typeof shortLinks;

export function isShortLinkSlug(slug: string): slug is ShortLinkSlug {
  return Object.hasOwn(shortLinks, slug);
}

export function getShortLinkDestination(slug: string) {
  return isShortLinkSlug(slug) ? shortLinks[slug] : undefined;
}

export function getShortLinkUrl(slug: ShortLinkSlug) {
  return `${siteUrl}/r/${slug}`;
}

export const shortLinkEntries = Object.entries(shortLinks)
  .map(([slug, destination]) => ({
    slug: slug as ShortLinkSlug,
    destination,
    shortUrl: getShortLinkUrl(slug as ShortLinkSlug),
    qrSvgPath: `/qr/${slug}.svg`,
    staticQrSvgPath: `/qr-codes/${slug}.svg`,
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug));
