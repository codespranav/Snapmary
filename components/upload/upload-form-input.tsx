"use client"
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image"; // ✅ Important!
import preloader from "@/public/bouncing-circles.svg"; // ✅ SVG import

interface UploadFormInputs {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isUploading: boolean;
}

export default function UploadFormInput({ onSubmit, isUploading }: UploadFormInputs) {
    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <div className="flex justify-end items-center gap-1.5">
                <Input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    required
                />
                {isUploading ? (
                    <Button>
                        <Image
                            src={preloader}
                            alt="Uploading..."
                            width={32}
                            height={32}
                        />
                    </Button>
                ) : (
                    <Button type="submit">Upload your PDF</Button>
                )}
            </div>
        </form>
    );
}
