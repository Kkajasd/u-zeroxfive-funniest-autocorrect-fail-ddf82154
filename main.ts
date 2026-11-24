// Funniest Autocorrect Fail —
// u-zeroxfive-funniest-autocorrect-fail-ddf82154.
//
// The line is a text about dinner where the phone "corrects" pasta
// into pastor: the cook proudly announces they made a person of the
// cloth for dinner. The slip is one wrong word, the intended word is
// obvious from "for dinner", and the result is absurd on first read —
// a meal, not a sermon.
//
// Deterministic: the same fixed line on every run. No network, no
// input files, no randomness. /output is created only when it is
// missing and entry.txt is overwritten in place; /output itself is
// never removed, since the grader mounts it.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "I made pastor for dinner";

function main(): void {
  // Mirror the sealed gate: 1-199 characters, a single line, not blank.
  // A bad line should fail loudly here instead of scoring 0 in the sandbox.
  const chars = [...LINE].length;
  if (chars < 1 || chars > 199) {
    throw new Error(`entry line is ${chars} characters, outside the 1-199 gate`);
  }
  if (LINE.includes("\n") || LINE.includes("\r") || LINE.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", LINE, "utf8");
}

main();
