// Verified entry program for make.fun competition
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT: string = 'My smartwatch congratulated me on hitting my cardio goal while I was having a panic attack in the pasta aisle.';

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
