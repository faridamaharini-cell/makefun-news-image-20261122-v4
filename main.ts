import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
copyFileSync(join(root, "entry.png"), "/output/entry.png");
const copied = statSync("/output/entry.png").size;
const source = statSync(join(root, "entry.png")).size;
if (copied !== source) throw new Error(`size mismatch: copied ${copied}, source ${source}`);
console.log(`entry.png copied to /output/entry.png (${copied} bytes, verified)`);
