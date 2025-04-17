"use client";

import { useUploadThing } from "@/utils/uploadthing";
import UploadFormInput from "./upload-form-input";
import { z } from "zod";
import { toast } from "sonner";
import { useState } from "react";
import { generatePdfSummary } from "@/actions/uploadAction";

const schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.size <= 24 * 1024 * 1024, { message: "File size must be less than 24MB" })
    .refine((file) => file.type === "application/pdf", { message: "File must be a PDF" }),
});

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      setIsUploading(false);
    },
    onUploadError: (err) => {
      setIsUploading(false);
      toast.error("Error occurred while uploading", {
        description: err.message,
      });
    },
    onUploadBegin: (file) => {
      console.log("Upload has begun for", file);
      setIsUploading(true);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File;

    const validated = schema.safeParse({ file });
    if (!validated.success) {
      toast.error("Something went wrong", {
        description:
          validated.error.flatten().fieldErrors.file?.[0] ?? "Invalid file",
      });
      return;
    }

    toast.message("📃 Uploading PDF", {
      description: "We are uploading your PDF! ✨",
    });

    const resp = await startUpload([file]);
    if (!resp) {
      toast.error("Something went wrong 😔", {
        description: "Please use a different file",
      });
      return;
    }

    toast.message("📃 Processing PDF", {
      description: "Hang on! Our AI is reading through your document ✨",
    });

    
    console.log("Your response is : ", resp);
    
    const summary = await generatePdfSummary(resp);
    console.log("Your summary:", summary);

    // if (!summary.success) {
    //   toast.error("❌ PDF Processing Failed", {
    //     description: summary.message,
    //   });
    //   return;
    // }

    toast.success("✅ PDF Processed", {
      description: "Your summary is ready!",
    });

    // You can now use summary.data.pdfText however you like (e.g., display it, send it somewhere, etc.)
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput onSubmit={handleSubmit} isUploading={isUploading} />
    </div>
  );
}
