import PDFMerger from "pdf-merger-js";

export async function mergePDFs(config) {
  const merger = new PDFMerger();

  try {
    // Process each file in the configuration
    for (const file of config.files) {
      if (file.pages) {
        // If specific pages are specified
        await merger.add(file.path, file.pages);
      } else {
        // If no pages specified, merge all pages
        await merger.add(file.path);
      }
    }

    // Set metadata if provided
    if (config.metadata) {
      await merger.setMetadata(config.metadata);
    }

    // Save the merged PDF
    await merger.save(config.output);
    console.log(`PDF merged successfully! Saved as: ${config.output}`);
    return true;
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw error;
  }
}
