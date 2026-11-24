// Weirdest Job Title: Blind Judge Showdown — make.fun entry program.
// Writes a single job title (60 characters at most) to /output/entry.txt.
// Node stdlib only. The grader runs it as `node main.ts` and reads the file.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a deadpan corporate title for a gloriously specific duty.
// A Senior Vice President is a real-sounding job; apologizing to geese is
// the twist — geese are famously aggressive, so the apology is a vivid,
// instantly pictureable image that lands on the first read.
// Counted at 45 characters, comfortably inside the 1-60 gate; the exact
// string below is the whole submission — no punctuation added, no second line.
const ENTRY = "Senior Vice President of Apologizing to Geese";

function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  // Gate check, same bound as the scorer: 1 to 60 characters, not blank.
  if (ENTRY.length < 1 || ENTRY.length > 60 || ENTRY.trim().length === 0) {
    throw new Error(`entry must be 1-60 chars, got ${ENTRY.length}`);
  }
  let outDir = resolveOutputDir();
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output may not be writable outside the harness; fall back locally.
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
  }
  // Exactly the entry line plus a trailing newline, nothing else.
  writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf-8");
}

main();
