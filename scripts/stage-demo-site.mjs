import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const siteDir = path.join(root, ".site");

await rm(siteDir, { recursive: true, force: true });
await mkdir(siteDir, { recursive: true });

for (const name of [".nojekyll", "index.html", "main.js", "styles.css"]) {
  await cp(path.join(root, "demo", name), path.join(siteDir, name));
}

await cp(path.join(root, "src"), path.join(siteDir, "src"), { recursive: true });
