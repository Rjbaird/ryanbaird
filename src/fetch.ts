import { astro } from "astro/hono";
import { Hono } from "hono";
import QRCode from "qrcode";
import { getShortLinkDestination, getShortLinkUrl, isShortLinkSlug } from "./lib/shortlinks";

const app = new Hono();

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
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
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
  const target = getShortLinkDestination(c.req.param("slug"));

  if (!target) {
    return c.redirect("/404", 302);
  }

  return c.redirect(target, 302);
});

app.get("/qr/:file", async (c) => {
  const file = c.req.param("file");
  const slug = file.endsWith(".svg") ? file.slice(0, -4) : "";

  if (!isShortLinkSlug(slug)) {
    return c.text("QR code not found", 404);
  }

  const svg = await QRCode.toString(getShortLinkUrl(slug), {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 1,
    width: 512,
  });

  return c.body(svg, 200, {
    "Content-Type": "image/svg+xml; charset=utf-8",
    "Cache-Control": "public, max-age=3600",
  });
});

app.use(astro());

export default app;
