import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    pdf: { maxFileSize: "32MB", maxFileCount: 1 },
  })
    .middleware(async ({ req }) => {
      const user = await currentUser();

      if (!user) throw new Error("Unauthorized");

      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.ufsUrl);
    
      return {
        serverData: {
          userID: metadata.userId,
          file,   
        },
      };
      
    }),    
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
