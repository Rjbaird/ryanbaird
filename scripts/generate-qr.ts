import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import QRCode from "qrcode";
import { shortLinkEntries } from "../src/lib/shortlinks";

const outputDir = resolve("public/qr-codes");

await mkdir(outputDir, { recursive: true });

await Promise.all(
  shortLinkEntries.map(async (entry) => {
    const svg = await QRCode.toString(entry.shortUrl, {
      type: "svg",
      errorCorrectionLevel: "M",
      margin: 1,
      width: 512,
    });
    const outputPath = resolve(outputDir, `${entry.slug}.svg`);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, svg);
  })
);

console.log(`Generated ${shortLinkEntries.length} QR codes in ${outputDir}`);
