import fs from "fs";
import glob from "glob";
import { createRequire } from "node:module";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const abiFilenames = glob.sync(path.join(__dirname, "../contracts/abi/*.json"));
const indexPath = path.join(__dirname, `../index.ts`);

let indexContent = "";

abiFilenames.forEach((abiFilePath) => {
  const abiName = abiFilePath.split("/").pop().replace(".json", "");
  const abiContent = require(abiFilePath);

  indexContent += `export const ${abiName}ABI = ${JSON.stringify(abiContent.abi, null, 2)} as const\n`;
});

fs.writeFileSync(indexPath, indexContent);
