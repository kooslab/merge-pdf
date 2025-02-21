import { mergePDFs } from "./pdfMerger.js";
import { readFile } from "fs/promises";

async function main() {
  try {
    // Read the configuration file
    const configFile = await readFile("./data.json", "utf8");
    const config = JSON.parse(configFile);

    // Run the PDF merger
    await mergePDFs(config);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
