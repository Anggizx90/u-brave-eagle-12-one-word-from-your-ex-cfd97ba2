// One Word From Your Ex — u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// Writes exactly one word — the word an ex would use to describe you —
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Node 22, standard library only, no network, fully deterministic.
//
// The word: "fine".
// The sharpest turn in the shortlist: the judge is braced for drama and
// gets the smallest verdict possible — and that smallness is exactly what
// makes it land harder than any insult. To be summed up by someone who
// once loved you as merely "fine" is the most painfully honest verdict
// there is. No synonym carries it: "okay" is neutral, "decent" is kind,
// "alright" is nothing. Only "fine", in an ex's mouth, is damning.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "fine";

function main(): void {
  // Gate self-check: exactly one word, 1-24 characters, non-whitespace.
  const chars = [...WORD];
  if (chars.length < 1 || chars.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${chars.length}: ${JSON.stringify(WORD)}`);
  }
  if (/\s/.test(WORD)) {
    throw new Error(`entry must be a single word with no whitespace: ${JSON.stringify(WORD)}`);
  }
  if (WORD.trim() !== WORD) {
    throw new Error(`entry must not have leading or trailing whitespace: ${JSON.stringify(WORD)}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Exactly the word, no trailing newline, nothing else.
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();
