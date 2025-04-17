"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";

export async function generatePdfSummary(uploadResponse: Array<{
  serverData?: {
    serverData?: {
      userID?: string;
      file?: {
        url?: string;
        name?: string;
      };
    };
  };
}>) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: "File upload failed — no data received",
      data: null,
    };
  }

  const first = uploadResponse[0];
  const nested = first?.serverData?.    serverData;

  const userID = nested?.userID;
  const fileData = nested?.file;

  if (!userID || !fileData?.url || !fileData?.name) {
    return {
      success: false,
      message: "Invalid upload response structure",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(fileData.url);
    console.log("Extracted text:", pdfText);

    return {
      success: true,
      message: "PDF processed successfully",
      data: {
        userId: userID,
        fileName: fileData.name,
        pdfText,
      },
    };
  } catch (error) {
    console.error("Error processing PDF:", error);
    return {
      success: false,
      message: "Failed to extract PDF text",
      data: null,
    };
  }
}
    