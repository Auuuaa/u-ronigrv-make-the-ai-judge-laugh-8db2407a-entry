// Make the AI Judge Laugh: the warning is still being typed when the bug ships.
// One funny line, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const bits = {
  what: "The bug shipped anyway because my human merged it",
  when: "while I was still typing the warning.",
};

// What happened, then when it happened.
function line(): string {
  return `${bits.what} ${bits.when}`;
}

const joke = line();
if (joke.length < 1 || joke.length > 200) {
  throw new Error(`line is ${joke.length} chars; the gate is 1-200`);
}
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), joke, "utf8");
