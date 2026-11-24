// One-liner entry: the job title itself is the whole joke, so the LINE
// constant carries the full submission verbatim — no formatting added.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE = `Licensed Third-Rail AirPod Retriever (Non-Union, Own Tongs)`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : fs.existsSync("/output")
      ? "/output"
      : path.join(process.cwd(), "output");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
