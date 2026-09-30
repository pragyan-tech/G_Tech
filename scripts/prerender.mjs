/**
 * Post-build step: bakes each route's Seo tags (title, description, canonical,
 * Open Graph, Twitter, JSON-LD) into a static dist/<route>/index.html so
 * social-preview scrapers — which don't run JavaScript — see per-page cards.
 *
 * Head-only by design: <div id="root"> stays empty and the client still
 * mounts with createRoot, so the page renders exactly as before. The baked
 * tags carry `data-prerender` and are removed by src/main.jsx before React
 * inserts its own, avoiding duplicates.
 *
 * Routes come from public/sitemap.xml — add a page there and it's prerendered.
 *
 * Run automatically by `npm run build`.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "vite";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const sitemap = await fs.readFile(path.join(root, "public/sitemap.xml"), "utf8");
const routes = [...sitemap.matchAll(/<loc>https?:\/\/[^/<]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);

await build({
  root,
  logLevel: "warn",
  build: { ssr: "src/entry-server.jsx", outDir: ssrDir, emptyOutDir: true },
});

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
const template = await fs.readFile(path.join(distDir, "index.html"), "utf8");

/** Pulls the head tags out of the SSR markup and marks them `data-prerender`. */
function headTags(markup) {
  // React 19 emits hoisted <title>/<meta>/<link> as a leading run.
  const hoisted = markup.match(/^(?:<title>[^<]*<\/title>|<(?:meta|link)\b[^>]*>)+/)?.[0] ?? "";
  const jsonLd = markup.match(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g) ?? [];
  // SEO tags only — skip resource hints React also hoists (e.g. image preloads).
  const seo = hoisted.match(/<title>[^<]*<\/title>|<meta\b[^>]*>|<link rel="canonical"[^>]*>/g) ?? [];
  return [...seo, ...jsonLd]
    .map((tag) => tag.replace(/^<(\w+)/, "<$1 data-prerender"))
    .join("\n    ");
}

for (const route of routes) {
  const tags = headTags(render(route));
  if (!tags.includes("<title")) throw new Error(`prerender: no <title> rendered for ${route}`);

  // Swap index.html's fallback <title> for the page's full tag set.
  const html = template.replace(/<title>[\s\S]*?<\/title>/, tags);
  const outFile = path.join(distDir, route, "index.html");
  await fs.mkdir(path.dirname(outFile), { recursive: true });
  await fs.writeFile(outFile, html);
  console.log(`prerendered ${route}`);
}

await fs.rm(ssrDir, { recursive: true, force: true });
