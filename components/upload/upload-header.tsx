import { Sparkle, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge"

export default function UploadHeader(){
    return(
        <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800  animate-gradien-x group">
                        <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200" variant={"secondary"}>
                                <Sparkle className="h-6 w-6 mr-2 text-rose-500 animate-pulse" />
                                <p className="text-base text-rose-600">AI Powered Content Creations</p>
                            </Badge>
                    </div>
                    <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <h1 className="">Start uploading your PDF's</h1>
                    </div>
                        <p className="mt-2 text-lg leading-8 text-gray-600 max-w-2xl text-center">Upload your PDF and let our AI do the magic!✨</p>
                </div>
    )
} 