import { spawn, spawnSync } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const outputPath = resolve("public/ryan-baird-resume.pdf");
const port = Number(process.env.RESUME_PORT ?? 4397);
const providedBaseUrl = process.env.RESUME_BASE_URL;
const baseUrl = providedBaseUrl ?? `http://127.0.0.1:${port}`;
const resumeUrl = new URL("/resume/print/", baseUrl).toString();

let serverStartedByScript = false;
let serverProcess: ReturnType<typeof spawn> | undefined;

async function waitForResume() {
  const deadline = Date.now() + 30_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(resumeUrl);
      if (response.ok) {
        return;
      }
    } catch {
      // Keep polling until the dev server is ready.
    }

    await delay(500);
  }

  throw new Error(`Timed out waiting for ${resumeUrl}`);
}

async function startServerIfNeeded() {
  if (providedBaseUrl) {
    return;
  }

  serverStartedByScript = true;
  serverProcess = spawn(
    "npm",
    ["run", "dev", "--", "--host", "127.0.0.1", "--port", String(port)],
    {
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
      stdio: "inherit",
    }
  );

  await waitForResume();
}

async function stopServerIfNeeded() {
  if (!serverStartedByScript) {
    return;
  }

  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill();
  }

  spawnSync("npm", ["run", "astro", "--", "dev", "stop"], {
    stdio: "ignore",
  });
}

try {
  await startServerIfNeeded();
  await mkdir(resolve("public"), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 816, height: 1056 },
    deviceScaleFactor: 2,
  });

  await page.goto(resumeUrl, { waitUntil: "networkidle" });
  await page.pdf({
    path: outputPath,
    format: "Letter",
    printBackground: true,
    margin: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  });

  await browser.close();
  console.log(`Generated ${outputPath}`);
} finally {
  await stopServerIfNeeded();
}
