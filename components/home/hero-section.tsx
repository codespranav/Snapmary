"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkle } from "lucide-react";
import { Badge } from "@/components/ui/badge"
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative justify-center mx-auto flex items-center flex-col z-0 py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl duration-300">
            <div className="flex ">
                <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800
                        animate-gradient-x group">
                    <Badge className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200" variant={"secondary"}>
                        <Sparkle className="h-6 w-6 text-rose-500 animate-pulse" />
                        <p className="text-base text-rose-600">Powered by AI</p>
                    </Badge>
                </div>
            </div>
            <h1 className="font-bold py-6 text-center">Transform your PDFs into summaries with AI</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg-max-w-4xl text-gray-600">Get a better understanding of your PDFs with AI-powered summaries</h2>
            <div>
                <Button variant={"link"} className="text-center text-white mt-6 text-base sm-text-lg lg:text-xl rounded-full px-8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8 lg:mt-16 bg-linear-to-r from-slate-900 to-rose-500 animate-gradient hover:from-rose-500 hover:to-slate-900 hover:no-underline">
                    <Link href={"/#pricing"} className="flex items-center justify-center gap-2"> 
                    <span>Try Sommarry</span>
                    <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
