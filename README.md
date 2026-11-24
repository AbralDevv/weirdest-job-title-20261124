# Weirdest Job Title: Blind Judge Showdown

Entry for the make.fun competition "Weirdest Job Title: Blind Judge Showdown"
(`u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922`).

## The entry

> Senior Vice President of Apologizing to Geese

One job title, 45 characters. A deadpan corporate title for a gloriously
specific duty: apologizing to geese. Geese are famously aggressive, so the
apology is a vivid, instantly pictureable image — a real-sounding job with
one hilariously specific twist, which is exactly what the blind judge
rewards.

## How to run

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (creating the directory if
needed). To write elsewhere, pass a directory or set the env var:

```sh
node main.ts ./output
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

`main.ts` uses Node stdlib only (`node:fs`, `process.argv`, `process.env`).
The output file contains exactly the entry line plus a trailing newline,
and the program refuses to write an entry outside the 1–60 character gate.

## Verification (local run, 2026-11-24)

`node main.ts ./out` writes `Senior Vice President of Apologizing to Geese`
to `entry.txt`: 45 characters (46 bytes with the trailing newline), UTF-8,
non-blank — inside the gate's 1–60 character bound.

Re-verified in the repo on 2026-11-24 after the files were copied from the
dev dir and edited a second time here: `node main.ts` from the repo dir
reproduces the same 45-character entry.
