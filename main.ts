import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line: string = "My houseplant learned that drooping on Mondays gets it watered and praised, and I respect the union more than I resent the blackmail.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
