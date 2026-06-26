import { astro } from "astro/hono";
import { Hono } from "hono";

const app = new Hono();

const shortLinks = {
  resume: "/ryan-baird-resume.pdf",
  github: "https://github.com/Rjbaird",
  linkedin: "https://www.linkedin.com/in/ryanbaird/",
  projects: "/projects/",
  blog: "/blog/",
  wedding: "https://www.zola.com/wedding/mariahandryanoctober11",
} as const;

app.use("*", async (c, next) => {
  await next();

  c.header("X-Content-Type-Options", "nosniff");
  c.header("Referrer-Policy", "strict-origin-when-cross-origin");
  c.header(
    "Permissions-Policy",
    "accelerometer=(), autoplay=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), microphone=(), payment=(), usb=()"
  );
  c.header(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "base-uri 'self'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "script-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "connect-src 'self' ws: wss:",
    ].join("; ")
  );
});

app.get("/api/health", (c) =>
  c.json({
    ok: true,
    app: "ryanbaird",
    runtime: "cloudflare-workers",
  })
);

app.get("/r/:slug", (c) => {
  const slug = c.req.param("slug") as keyof typeof shortLinks;
  const target = shortLinks[slug];

  if (!target) {
    return c.redirect("/404", 302);
  }

  return c.redirect(target, 302);
});

app.use(astro());

export default app;
